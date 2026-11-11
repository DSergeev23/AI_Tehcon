<?php

declare(strict_types=1);

return [
    'supabase_url' => getenv('SUPABASE_URL') ?: '',
    'publishable_key' => getenv('SUPABASE_PUBLISHABLE_KEY') ?: '',
    'site_url' => 'https://ai-tehcon.ru',
    'public_root' => getenv('NEWS_PUBLIC_ROOT') ?: '',
    'storage_bucket' => 'news-covers',
    'state_file' => getenv('NEWS_STATE_FILE') ?: '',
    'timeout_seconds' => 30,
];
