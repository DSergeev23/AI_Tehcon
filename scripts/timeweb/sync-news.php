<?php

declare(strict_types=1);

const SITE_NAME = 'AI TehCon';
const LEGACY_NEWS_SLUGS = [
    'gde-ai-pomogaet-v-rabote-s-dannymi-1c',
    'kak-ocenit-rezultat-pilota-s-ai',
    'kak-podgotovit-biznes-process-k-vnedreniyu-ai-agenta',
];

function fail(string $message, int $exitCode = 1): never
{
    fwrite(STDERR, json_encode(['ok' => false, 'timestamp' => gmdate(DATE_ATOM), 'error' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL);
    exit($exitCode);
}

function requiredString(array $row, string $field): string
{
    $value = $row[$field] ?? null;
    if (!is_string($value) || trim($value) === '') {
        throw new RuntimeException("Invalid or missing field: {$field}");
    }
    return trim($value);
}

function optionalString(array $row, string $field, string $fallback): string
{
    $value = $row[$field] ?? null;
    return is_string($value) && trim($value) !== '' ? trim($value) : $fallback;
}

function stringList(array $row, string $field): array
{
    $value = $row[$field] ?? [];
    if (!is_array($value)) {
        throw new RuntimeException("Invalid field: {$field}");
    }
    foreach ($value as $item) {
        if (!is_string($item) || trim($item) === '') {
            throw new RuntimeException("Invalid item in field: {$field}");
        }
    }
    return array_values(array_unique(array_map('trim', $value)));
}

function parseDate(string $value, string $field): DateTimeImmutable
{
    try {
        return new DateTimeImmutable($value);
    } catch (Throwable) {
        throw new RuntimeException("Invalid date field: {$field}");
    }
}

function normalizeBaseUrl(string $value, string $field): string
{
    $url = rtrim(trim($value), '/');
    $parts = parse_url($url);
    if (!is_array($parts) || ($parts['scheme'] ?? '') !== 'https' || !isset($parts['host']) || isset($parts['user']) || isset($parts['pass']) || isset($parts['query']) || isset($parts['fragment'])) {
        throw new RuntimeException("{$field} must be a plain HTTPS origin");
    }
    return $url;
}

function normalizeCoverImage(string $value, string $supabaseUrl, string $bucket): string
{
    $value = trim($value);
    $prefix = $supabaseUrl . '/storage/v1/object/public/' . rawurlencode($bucket) . '/';
    if (preg_match('~^https://~i', $value)) {
        if (!str_starts_with($value, $prefix)) {
            throw new RuntimeException('cover_image_path must point to the configured public Storage bucket');
        }
        return $value;
    }

    $path = ltrim($value, '/');
    if ($path === '' || str_contains($path, '..') || !preg_match('~^[a-zA-Z0-9/_\-.]+$~', $path)) {
        throw new RuntimeException('Invalid cover_image_path');
    }
    return $prefix . implode('/', array_map('rawurlencode', explode('/', $path)));
}

function normalizeArticle(array $row, array $context): array
{
    $slug = requiredString($row, 'slug');
    if (!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $slug)) {
        throw new RuntimeException("Invalid slug: {$slug}");
    }

    $title = requiredString($row, 'title');
    $excerpt = requiredString($row, 'excerpt');
    $publishedAt = parseDate(requiredString($row, 'published_at'), 'published_at');
    $updatedAt = parseDate(requiredString($row, 'updated_at'), 'updated_at');
    $readingMinutes = (int) ($row['reading_time_minutes'] ?? 0);
    if ($readingMinutes < 1 || $readingMinutes > 180) {
        throw new RuntimeException('reading_time_minutes must be between 1 and 180');
    }

    return [
        'slug' => $slug,
        'title' => $title,
        'excerpt' => $excerpt,
        'category' => requiredString($row, 'category'),
        'coverImage' => normalizeCoverImage(requiredString($row, 'cover_image_path'), $context['supabase_url'], $context['storage_bucket']),
        'coverAlt' => requiredString($row, 'cover_image_alt'),
        'publishedAt' => $publishedAt->format('Y-m-d'),
        'updatedAt' => $updatedAt->format('Y-m-d'),
        'publishedAtIso' => $publishedAt->format(DATE_ATOM),
        'updatedAtIso' => $updatedAt->format(DATE_ATOM),
        'readingTimeMinutes' => $readingMinutes,
        'author' => optionalString($row, 'author_name', SITE_NAME),
        'tags' => stringList($row, 'tags'),
        'relatedSolutionIds' => stringList($row, 'related_solution_ids'),
        'sourceUrls' => stringList($row, 'source_urls'),
        'seo' => [
            'title' => optionalString($row, 'seo_title', $title . ' | ' . SITE_NAME),
            'description' => optionalString($row, 'seo_description', $excerpt),
        ],
        'body' => requiredString($row, 'body_markdown'),
    ];
}

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5, 'UTF-8');
}

function inlineMarkdown(string $value): string
{
    $escaped = escape($value);
    $escaped = preg_replace_callback('~\[([^\]]+)\]\((https?://[^\s)]+)\)~u', static fn(array $match): string => '<a href="' . $match[2] . '" rel="noopener noreferrer">' . $match[1] . '</a>', $escaped) ?? $escaped;
    $escaped = preg_replace('~`([^`]+)`~u', '<code>$1</code>', $escaped) ?? $escaped;
    $escaped = preg_replace('~\*\*([^*]+)\*\*~u', '<strong>$1</strong>', $escaped) ?? $escaped;
    return preg_replace('~(?<!\*)\*([^*]+)\*(?!\*)~u', '<em>$1</em>', $escaped) ?? $escaped;
}

function markdownToHtml(string $markdown): string
{
    $lines = preg_split('/\R/u', trim($markdown)) ?: [];
    $html = [];
    $paragraph = [];
    $listType = null;
    $flushParagraph = static function () use (&$paragraph, &$html): void {
        if ($paragraph !== []) {
            $html[] = '<p>' . inlineMarkdown(implode(' ', $paragraph)) . '</p>';
            $paragraph = [];
        }
    };
    $closeList = static function () use (&$listType, &$html): void {
        if ($listType !== null) {
            $html[] = "</{$listType}>";
            $listType = null;
        }
    };

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '') {
            $flushParagraph();
            $closeList();
        } elseif (preg_match('/^(#{2,3})\s+(.+)$/u', $trimmed, $match)) {
            $flushParagraph();
            $closeList();
            $level = strlen($match[1]);
            $html[] = "<h{$level}>" . inlineMarkdown($match[2]) . "</h{$level}>";
        } elseif (preg_match('/^[-*]\s+(.+)$/u', $trimmed, $match)) {
            $flushParagraph();
            if ($listType !== 'ul') {
                $closeList();
                $listType = 'ul';
                $html[] = '<ul>';
            }
            $html[] = '<li>' . inlineMarkdown($match[1]) . '</li>';
        } elseif (preg_match('/^\d+[.)]\s+(.+)$/u', $trimmed, $match)) {
            $flushParagraph();
            if ($listType !== 'ol') {
                $closeList();
                $listType = 'ol';
                $html[] = '<ol>';
            }
            $html[] = '<li>' . inlineMarkdown($match[1]) . '</li>';
        } else {
            $closeList();
            $paragraph[] = $trimmed;
        }
    }
    $flushParagraph();
    $closeList();
    return implode("\n", $html);
}

function formatRussianDate(string $value): string
{
    $date = parseDate($value, 'date');
    $months = [1 => 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return (int) $date->format('j') . ' ' . $months[(int) $date->format('n')] . ' ' . $date->format('Y');
}

function jsonForHtml(mixed $value): string
{
    return json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_THROW_ON_ERROR);
}

function documentHead(array $seo, string $canonical, string $image, string $schema, string $ogType = 'article'): string
{
    $title = escape($seo['title']);
    $description = escape($seo['description']);
    $canonical = escape($canonical);
    $image = escape($image);
    return <<<HTML
    <title>{$title}</title>
    <meta name="description" content="{$description}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="{$canonical}" />
    <meta property="og:type" content="{$ogType}" />
    <meta property="og:site_name" content="AI TehCon" />
    <meta property="og:title" content="{$title}" />
    <meta property="og:description" content="{$description}" />
    <meta property="og:url" content="{$canonical}" />
    <meta property="og:image" content="{$image}" />
    <meta property="og:locale" content="ru_RU" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{$title}" />
    <meta name="twitter:description" content="{$description}" />
    <meta name="twitter:image" content="{$image}" />
    <script type="application/ld+json">{$schema}</script>
HTML;
}

function renderDocument(string $shell, string $head, string $rootMarkup): string
{
    $html = preg_replace('~<title>.*?</title>~is', '', $shell) ?? $shell;
    $html = preg_replace('~<meta\b(?=[^>]*(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)")[^>]*>~is', '', $html) ?? $html;
    $html = preg_replace('~<link\b(?=[^>]*rel="canonical")[^>]*>~is', '', $html) ?? $html;
    $html = preg_replace('~<script\b(?=[^>]*type="application/ld\+json")[^>]*>.*?</script>~is', '', $html) ?? $html;
    $html = str_replace('</head>', $head . "\n  </head>", $html);
    $html = preg_replace('/<html\b(?![^>]*data-news-generated)/i', '<html data-news-generated="true"', $html, 1) ?? $html;

    $rootStart = strpos($html, '<div id="root"');
    $bodyEnd = strrpos($html, '</body>');
    if ($rootStart === false || $bodyEnd === false) {
        throw new RuntimeException('Cannot find root or body in public index.html');
    }
    $rootEnd = strrpos(substr($html, 0, $bodyEnd), '</div>');
    if ($rootEnd === false || $rootEnd < $rootStart) {
        throw new RuntimeException('Cannot find closing root element in public index.html');
    }
    return substr($html, 0, $rootStart) . '<div id="root">' . $rootMarkup . '</div>' . substr($html, $rootEnd + 6);
}

function staticNavigation(): string
{
    return '<nav class="h-16 border-b border-white/[0.06] bg-black"><div class="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-10"><a href="/" class="flex items-center gap-2.5"><img src="/images/icon-32.png" alt="AI TehCon" width="32" height="32" class="h-8 w-8 rounded-sm" /><span class="text-sm font-semibold text-white">AI TehCon</span></a><a href="/news/" class="text-sm text-white/75">Новости</a><a href="/contacts/" class="signal-button rounded-md px-5 py-3 text-sm font-semibold">Связаться</a></div></nav>';
}

function renderNewsIndex(array $articles): string
{
    $cards = [];
    foreach ($articles as $article) {
        $url = '/news/' . $article['slug'] . '/';
        $cards[] = '<article class="border border-white/[0.12] bg-white/[0.015] p-6"><p class="text-xs uppercase tracking-[0.16em] text-signal">' . escape($article['category']) . '</p><h2 class="mt-4 font-serif text-3xl text-white"><a href="' . $url . '">' . escape($article['title']) . '</a></h2><p class="mt-4 text-sm leading-relaxed text-white/70">' . escape($article['excerpt']) . '</p><a href="' . $url . '" class="mt-6 inline-block text-sm font-semibold text-white">Читать материал</a></article>';
    }
    $content = $cards === []
        ? '<div class="border border-white/[0.12] p-8 text-white/70"><h2 class="font-serif text-3xl text-white">Публикаций пока нет</h2><p class="mt-3">Новые материалы появятся здесь после публикации.</p></div>'
        : '<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">' . implode("\n", $cards) . '</div>';
    return '<div class="min-h-screen bg-black">' . staticNavigation() . '<main><header class="border-b border-white/[0.08]"><div class="mx-auto max-w-[1920px] px-5 py-16 md:px-8 md:py-24"><p class="text-xs uppercase tracking-[0.18em] text-signal">Редакция AI TehCon</p><h1 class="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl">Новости и практика применения AI</h1></div></header><section class="mx-auto max-w-[1920px] px-5 py-12 md:px-8 md:py-16">' . $content . '</section></main></div>';
}

function renderArticle(array $article): string
{
    $updated = $article['updatedAt'] !== $article['publishedAt'] ? '<span>Обновлено ' . escape(formatRussianDate($article['updatedAt'])) . '</span>' : '';
    return '<div class="min-h-screen bg-black">' . staticNavigation() . '<main><article><header class="border-b border-white/[0.08]"><div class="mx-auto max-w-[1440px] px-5 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20"><p class="text-xs uppercase tracking-[0.15em] text-signal">' . escape($article['category']) . ' · ' . escape(formatRussianDate($article['publishedAt'])) . '</p><h1 class="mt-7 font-serif text-5xl leading-tight text-white md:text-7xl">' . escape($article['title']) . '</h1><p class="mt-7 max-w-3xl text-lg leading-relaxed text-white/75">' . escape($article['excerpt']) . '</p><div class="mt-9 flex flex-wrap gap-6 border-t border-white/[0.12] pt-5 text-xs text-white/55"><span>' . escape($article['author']) . '</span><span>' . $article['readingTimeMinutes'] . ' минут</span>' . $updated . '</div></div></header><div class="mx-auto max-w-[1440px] px-5 pt-8 md:px-8 md:pt-12"><img src="' . escape($article['coverImage']) . '" alt="' . escape($article['coverAlt']) . '" width="1600" height="900" class="aspect-[16/9] h-auto w-full object-cover" /></div><div class="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 py-14 md:px-8 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-20 lg:py-20"><div class="news-prose min-w-0">' . markdownToHtml($article['body']) . '</div><aside><div class="border border-white/[0.12] bg-white/[0.02] p-6"><p class="text-xs uppercase tracking-[0.16em] text-signal">Применить на практике</p><h2 class="mt-4 font-serif text-3xl text-white">Найдём задачу с измеримым эффектом</h2><a href="/contacts/" class="signal-button mt-7 inline-flex px-5 py-3 text-sm font-semibold">Обсудить задачу</a></div></aside></div></article></main></div>';
}

function atomicWrite(string $path, string $contents): void
{
    $directory = dirname($path);
    if (!is_dir($directory) && !mkdir($directory, 0755, true) && !is_dir($directory)) {
        throw new RuntimeException("Cannot create directory: {$directory}");
    }
    $temporary = tempnam($directory, '.news-');
    if ($temporary === false || file_put_contents($temporary, $contents, LOCK_EX) === false) {
        throw new RuntimeException("Cannot write temporary file for: {$path}");
    }
    if (!rename($temporary, $path)) {
        @unlink($temporary);
        throw new RuntimeException("Cannot atomically replace: {$path}");
    }
}

function removeManagedDirectory(string $publicRoot, string $slug): void
{
    if (!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $slug)) {
        return;
    }
    $directory = $publicRoot . '/news/' . $slug;
    if (is_file($directory . '/index.html')) {
        unlink($directory . '/index.html');
    }
    if (is_dir($directory)) {
        rmdir($directory);
    }
}

function createNewsSitemap(array $articles, string $siteUrl): string
{
    $urls = array_map(static fn(array $article): string => '  <url><loc>' . escape($siteUrl . '/news/' . $article['slug'] . '/') . '</loc><lastmod>' . escape($article['updatedAt']) . '</lastmod></url>', $articles);
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" . implode("\n", $urls) . "\n</urlset>\n";
}

function runSelfTest(): void
{
    $article = normalizeArticle([
        'slug' => 'test-news', 'title' => 'Тестовая новость', 'excerpt' => 'Короткое описание.',
        'body_markdown' => "Вводный абзац.\n\n## Раздел\n\n- Первый пункт", 'category' => 'AI',
        'tags' => ['AI'], 'cover_image_path' => 'test-news/cover.webp', 'cover_image_alt' => 'Тестовое изображение',
        'author_name' => 'AI TehCon', 'reading_time_minutes' => 3, 'related_solution_ids' => ['test-solution'],
        'source_urls' => [], 'published_at' => '2026-08-25T09:00:00+03:00', 'updated_at' => '2026-08-25T10:00:00+03:00',
    ], ['supabase_url' => 'https://project-ref.supabase.co', 'storage_bucket' => 'news-covers']);
    $shell = '<!doctype html><html lang="ru"><head><title>Старый title</title><meta data-rh="true" name="description" content="Старое описание"><script type="module" src="/assets/app.js"></script></head><body><div id="root"><main><div>Старый контент</div></main></div></body></html>';
    $document = renderDocument($shell, '<title>Новый title</title>', '<main><h1>Новый контент</h1></main>');
    if ($article['publishedAt'] !== '2026-08-25' || !str_contains($article['coverImage'], '/news-covers/test-news/cover.webp') || !str_contains(markdownToHtml($article['body']), '<h2>Раздел</h2>') || str_contains(markdownToHtml('<script>alert(1)</script>'), '<script>') || str_contains($document, 'Старый контент') || !str_contains($document, 'data-news-generated="true"')) {
        fail('Self-test failed');
    }
    fwrite(STDOUT, "Self-test passed\n");
}

if (($argv[1] ?? null) === '--self-test') {
    runSelfTest();
    exit(0);
}
if (!extension_loaded('curl')) {
    fail('PHP cURL extension is required');
}

$configPath = $argv[1] ?? getenv('NEWS_SYNC_CONFIG_FILE') ?: __DIR__ . '/config.php';
if (!is_string($configPath) || !is_file($configPath)) {
    fail('Config not found. Create config.php next to sync-news.php or pass its path');
}

try {
    $config = require $configPath;
    if (!is_array($config)) {
        throw new RuntimeException('Config file must return an array');
    }
    $supabaseUrl = normalizeBaseUrl((string) ($config['supabase_url'] ?? ''), 'supabase_url');
    $siteUrl = normalizeBaseUrl((string) ($config['site_url'] ?? 'https://ai-tehcon.ru'), 'site_url');
    $publishableKey = trim((string) ($config['publishable_key'] ?? ''));
    $publicRoot = rtrim((string) ($config['public_root'] ?? ''), '/');
    $stateFile = (string) ($config['state_file'] ?? (__DIR__ . '/state/managed-slugs.json'));
    $storageBucket = trim((string) ($config['storage_bucket'] ?? 'news-covers'));
    $timeoutSeconds = max(5, min(60, (int) ($config['timeout_seconds'] ?? 20)));
    if ($publishableKey === '' || $publicRoot === '' || $publicRoot === '/' || !is_dir($publicRoot)) {
        throw new RuntimeException('Config must contain publishable_key and an existing public_root');
    }
    if (!preg_match('/^[a-z0-9][a-z0-9_-]{1,62}$/', $storageBucket)) {
        throw new RuntimeException('Invalid storage_bucket');
    }
    $stateDirectory = dirname($stateFile);
    if (!is_dir($stateDirectory) && !mkdir($stateDirectory, 0700, true) && !is_dir($stateDirectory)) {
        throw new RuntimeException('Cannot create state directory');
    }
    $shell = file_get_contents($publicRoot . '/index.html');
    if (!is_string($shell) || $shell === '') {
        throw new RuntimeException('Cannot read public index.html');
    }
    $lockDirectory = __DIR__ . '/lock';
    if (!is_dir($lockDirectory) && !mkdir($lockDirectory, 0700, true) && !is_dir($lockDirectory)) {
        throw new RuntimeException('Cannot create lock directory');
    }
    $lockHandle = fopen($lockDirectory . '/sync.lock', 'c');
    if ($lockHandle === false || !flock($lockHandle, LOCK_EX | LOCK_NB)) {
        fail('Another news synchronization is already running', 2);
    }

    $fields = implode(',', ['slug', 'title', 'excerpt', 'body_markdown', 'category', 'tags', 'cover_image_path', 'cover_image_alt', 'author_name', 'reading_time_minutes', 'seo_title', 'seo_description', 'related_solution_ids', 'source_urls', 'published_at', 'updated_at']);
    $requestUrl = $supabaseUrl . '/rest/v1/news?select=' . rawurlencode($fields) . '&status=eq.published&published_at=lte.' . rawurlencode(gmdate(DATE_ATOM)) . '&order=published_at.desc';
    $curl = curl_init($requestUrl);
    curl_setopt_array($curl, [CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => ['Accept: application/json', 'apikey: ' . $publishableKey], CURLOPT_CONNECTTIMEOUT => min(10, $timeoutSeconds), CURLOPT_TIMEOUT => $timeoutSeconds, CURLOPT_FOLLOWLOCATION => false, CURLOPT_PROTOCOLS => CURLPROTO_HTTPS]);
    $responseBody = curl_exec($curl);
    $httpStatus = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    $curlError = curl_error($curl);
    curl_close($curl);
    if (!is_string($responseBody) || $httpStatus < 200 || $httpStatus >= 300) {
        throw new RuntimeException("Supabase request failed with HTTP {$httpStatus}" . ($curlError !== '' ? ": {$curlError}" : ''));
    }
    $rows = json_decode($responseBody, true, 512, JSON_THROW_ON_ERROR);
    if (!is_array($rows) || !array_is_list($rows)) {
        throw new RuntimeException('Supabase response is not a list');
    }
    $context = ['supabase_url' => $supabaseUrl, 'storage_bucket' => $storageBucket];
    $articles = array_map(static fn(array $row): array => normalizeArticle($row, $context), $rows);
    $slugs = array_column($articles, 'slug');
    if (count($slugs) !== count(array_unique($slugs))) {
        throw new RuntimeException('Supabase returned duplicate slugs');
    }

    foreach ($articles as $article) {
        $canonical = $siteUrl . '/news/' . $article['slug'] . '/';
        $schema = ['@context' => 'https://schema.org', '@type' => 'NewsArticle', 'headline' => $article['title'], 'description' => $article['seo']['description'], 'image' => [$article['coverImage']], 'datePublished' => $article['publishedAtIso'], 'dateModified' => $article['updatedAtIso'], 'author' => ['@type' => 'Organization', 'name' => $article['author'], 'url' => $siteUrl], 'publisher' => ['@type' => 'Organization', 'name' => SITE_NAME, 'url' => $siteUrl, 'logo' => $siteUrl . '/images/icon-512.png'], 'mainEntityOfPage' => $canonical];
        atomicWrite($publicRoot . '/news/' . $article['slug'] . '/index.html', renderDocument($shell, documentHead($article['seo'], $canonical, $article['coverImage'], jsonForHtml($schema)), renderArticle($article)));
    }

    $collectionSchema = ['@context' => 'https://schema.org', '@type' => 'CollectionPage', 'name' => 'Новости и практика применения AI', 'url' => $siteUrl . '/news/', 'mainEntity' => ['@type' => 'ItemList', 'numberOfItems' => count($articles), 'itemListElement' => array_map(static fn(array $article, int $index): array => ['@type' => 'ListItem', 'position' => $index + 1, 'url' => $siteUrl . '/news/' . $article['slug'] . '/', 'name' => $article['title']], $articles, array_keys($articles))]];
    $indexSeo = ['title' => 'Новости искусственного интеллекта и автоматизации | AI TehCon', 'description' => 'Новости, практические разборы и опыт применения искусственного интеллекта в бизнес-процессах, 1С, аналитике и корпоративной автоматизации.'];
    atomicWrite($publicRoot . '/news/index.html', renderDocument($shell, documentHead($indexSeo, $siteUrl . '/news/', $siteUrl . '/og-image.jpg', jsonForHtml($collectionSchema), 'website'), renderNewsIndex($articles)));
    atomicWrite($publicRoot . '/news-sitemap.xml', createNewsSitemap($articles, $siteUrl));
    $payload = ['version' => 1, 'generatedAt' => gmdate(DATE_ATOM), 'articles' => $articles];
    atomicWrite($publicRoot . '/data/news/news.json', json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . PHP_EOL);

    $previousSlugs = [];
    if (is_file($stateFile)) {
        $state = json_decode((string) file_get_contents($stateFile), true);
        $previousSlugs = is_array($state) && is_array($state['slugs'] ?? null) ? $state['slugs'] : [];
    }
    foreach (array_diff(array_unique([...$previousSlugs, ...LEGACY_NEWS_SLUGS]), $slugs) as $staleSlug) {
        if (is_string($staleSlug)) {
            removeManagedDirectory($publicRoot, $staleSlug);
        }
    }
    atomicWrite($stateFile, json_encode(['slugs' => $slugs], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . PHP_EOL);
    fwrite(STDOUT, json_encode(['ok' => true, 'timestamp' => gmdate(DATE_ATOM), 'articles' => count($articles), 'updated' => ['news index', 'article pages', 'news JSON', 'news sitemap']], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL);
} catch (Throwable $error) {
    fail($error->getMessage());
}
