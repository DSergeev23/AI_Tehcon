# Публикация новостей через Supabase и Timeweb

Эта инструкция описывает одноразовую настройку. После неё обычная публикация новости не запускает GitHub Actions и не пересобирает сайт: cron на Timeweb обновляет только:

- `public_html/news/`;
- `public_html/data/news/news.json`;
- `public_html/news-sitemap.xml`.

Остальные страницы и файлы сайта cron не изменяет.

## Как работает публикация

1. Вы создаёте или редактируете новость в Supabase.
2. Пока `status = draft`, посетители и Timeweb её не видят.
3. После `status = published` и наступления `published_at` cron получает запись через Supabase REST API.
4. Скрипт проверяет обязательные поля, slug, даты, изображения и массивы.
5. Скрипт создаёт JSON для React, обычные HTML-страницы новостей и отдельную XML-карту.
6. JSON записывается после HTML-страниц. Поэтому новая ссылка не появляется в интерфейсе раньше, чем готова её страница.

При первом запуске скрипт также удаляет три старые демонстрационные HTML-страницы, если в Supabase нет опубликованных записей с такими же slug.

`body_markdown` — формат хранения текста в Supabase. Он нужен, чтобы задавать абзацы, подзаголовки, списки, ссылки и выделения без ручной HTML-разметки. Посетитель Markdown не видит: на странице это обычный оформленный текст.

## 1. Проверить Supabase

### 1.1. Структура таблицы

В `Table Editor → news` должны существовать поля:

| Поле | Требование |
|---|---|
| `slug` | обязательный уникальный адрес вида `ai-agent-dlya-1c` |
| `title` | обязательный заголовок |
| `excerpt` | обязательный анонс |
| `body_markdown` | обязательный текст |
| `category` | обязательная категория |
| `tags` | массив строк, по умолчанию `{}` |
| `cover_image_path` | путь внутри `news-covers`, например `ai-agent-dlya-1c/cover.webp` |
| `cover_image_alt` | обязательное описание изображения |
| `author_name` | имя автора; если пусто, скрипт использует `AI TehCon` |
| `reading_time_minutes` | целое число от 1 до 180 |
| `seo_title` | необязательно |
| `seo_description` | необязательно |
| `related_solution_ids` | массив ID решений, по умолчанию `{}` |
| `source_urls` | массив строк, по умолчанию `{}` |
| `status` | `draft`, `published` или `archived` |
| `published_at` | дата и время публикации |
| `updated_at` | дата и время последнего изменения |

### 1.2. Data API и RLS

В актуальных проектах Supabase новая таблица может не включаться в Data API автоматически. Откройте настройки Data API проекта и убедитесь, что схема `public` доступна API, а роль `anon` имеет только `SELECT` для `public.news`.

В `SQL Editor` выполните проверочный запрос:

```sql
select
  relrowsecurity as rls_enabled,
  relforcerowsecurity as rls_forced
from pg_class
where oid = 'public.news'::regclass;
```

`rls_enabled` должен быть `true`. Политика чтения должна разрешать только записи, для которых одновременно выполняется:

```sql
status = 'published'
and published_at is not null
and published_at <= now()
```

У `anon` не должно быть прав `INSERT`, `UPDATE`, `DELETE` или `TRUNCATE`. Для Timeweb используйте только ключ вида `sb_publishable_...`. Не используйте `service_role`, secret key или пароль базы.

### 1.3. Storage

В `Storage → news-covers` проверьте:

- bucket публичный;
- максимальный размер файла — 5 MB;
- разрешены `image/jpeg`, `image/png`, `image/webp`;
- SVG не разрешён.

Рекомендуемый файл: WebP, 1600 × 900 px, до 500 KB. В таблице сохраняйте только путь внутри bucket:

```text
ai-agent-dlya-1c/cover.webp
```

Полный URL скрипт сформирует сам. Это единый контракт для карточек, Open Graph и Schema.org.

## 2. Один раз развернуть код сайта

После появления изменений в Git запустите только workflow:

```text
Actions → Build and deploy to Timeweb from artifact → Run workflow
```

Workflow `.github/workflows/build-and-deploy-timeweb-artifact.yml` исключает из архива `news/`, `data/news/news.json` и `news-sitemap.xml`. Поэтому последующие деплои сайта не перезаписывают новости, созданные cron.

Не запускайте два старых deploy-workflow, если они всё ещё находятся в репозитории.

## 3. Подготовить закрытую папку Timeweb

В файловом менеджере Timeweb создайте:

```text
/home/c/ct71002/ai-tehcon.ru/private/ai-tehcon-news/
├── config.php
├── sync-news.php
├── lock/
└── state/
```

Папка находится вне `public_html`, поэтому конфигурация и ключ не доступны через сайт.

Загрузите в неё файл:

```text
scripts/timeweb/sync-news.php
```

Файл `news-sync.config.example.php` используйте как образец, но не загружайте его вместо рабочей конфигурации.

Рекомендуемые права:

```text
ai-tehcon-news/  700
sync-news.php    700
config.php       600
lock/            700
state/           700
```

## 4. Создать `config.php` вручную

Скопируйте содержимое `news-sync.config.example.php` в закрытый `config.php` и замените только:

```php
'supabase_url' => 'https://PROJECT_REF.supabase.co',
'publishable_key' => 'sb_publishable_REPLACE_ME',
```

Остальные production-значения уже заданы:

```php
'site_url' => 'https://ai-tehcon.ru',
'public_root' => '/home/c/ct71002/ai-tehcon.ru/public_html',
'storage_bucket' => 'news-covers',
'state_file' => __DIR__ . '/state/managed-slugs.json',
```

Не присылайте содержимое `config.php` или ключ в Codex, GitHub Issue, commit, лог или скриншот.

## 5. Проверить PHP и выполнить первый запуск

В SSH-терминале Timeweb сначала найдите доступную версию PHP. Рекомендуется PHP 8.2 или новее:

```bash
/opt/php82/bin/php -v
/opt/php82/bin/php -m | grep -i curl
```

Затем выполните:

```bash
/opt/php82/bin/php -l /home/c/ct71002/ai-tehcon.ru/private/ai-tehcon-news/sync-news.php
/opt/php82/bin/php /home/c/ct71002/ai-tehcon.ru/private/ai-tehcon-news/sync-news.php --self-test
/opt/php82/bin/php /home/c/ct71002/ai-tehcon.ru/private/ai-tehcon-news/sync-news.php
```

Успешный последний запуск возвращает JSON с `"ok": true` и числом опубликованных материалов.

Проверьте в браузере:

```text
https://ai-tehcon.ru/news/
https://ai-tehcon.ru/data/news/news.json
https://ai-tehcon.ru/news-sitemap.xml
https://ai-tehcon.ru/news/<slug>/
```

В исходном HTML страницы `<slug>` должны присутствовать уникальные `title`, `description`, canonical, H1 и `NewsArticle`. HTML — это стандартный документ страницы для браузера и поисковика; после загрузки JavaScript отображается тот же React-интерфейс AI TehCon.

## 6. Настроить cron в панели Timeweb

Откройте раздел заданий cron и создайте задачу:

- интерпретатор: PHP 8.2 или новее;
- файл: `/ai-tehcon.ru/private/ai-tehcon-news/sync-news.php` относительно домашней папки аккаунта;
- расписание: каждый час на 10-й минуте;
- часовой пояс: `Europe/Moscow`;
- уведомления: отправлять при ошибке.

Если панель требует команду целиком, используйте абсолютный вариант:

```bash
/opt/php82/bin/php /home/c/ct71002/ai-tehcon.ru/private/ai-tehcon-news/sync-news.php
```

Не добавляйте publishable key в команду cron: скрипт читает соседний закрытый `config.php` автоматически.

## 7. Приёмочные проверки

Проведите четыре проверки по очереди:

1. `draft` отсутствует в JSON, ленте, HTML и sitemap.
2. `published` с текущей или прошлой датой появляется после ручного запуска скрипта.
3. `published` с будущей датой не появляется.
4. После повторного запуска GitHub artifact-deploy опубликованные новости остаются на месте.

Дополнительно измените опубликованный материал и убедитесь, что после cron обновились только новостные файлы. Переведите тестовую новость в `archived`: её slug должен исчезнуть из JSON, sitemap и управляемой папки после следующего запуска.

## Обычная публикация после настройки

1. Загрузить обложку в `news-covers/<slug>/cover.webp`.
2. Создать строку со статусом `draft`.
3. Проверить текст, alt, SEO-поля и связанные решения.
4. Поставить `status = published` и `published_at`.
5. Дождаться cron или один раз запустить скрипт вручную.

Git, сборка и деплой сайта для новой новости не нужны.
