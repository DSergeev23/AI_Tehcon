import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import worker from './news-router.js';

const originalFetch = globalThis.fetch;
after(() => { globalThis.fetch = originalFetch; });

test('news URLs map to generated Supabase objects without changing their public URL', async () => {
  const fetched = [];
  globalThis.fetch = async (input) => {
    fetched.push(String(input));
    return new Response('<html>News</html>', { status: 200 });
  };
  const response = await worker.fetch(
    new Request('https://ai-tehcon.ru/news/example-story/'),
    { SUPABASE_URL: 'https://project-ref.supabase.co' },
  );
  assert.deepEqual(fetched, [
    'https://project-ref.supabase.co/storage/v1/object/public/news-pages/news/example-story/index.html',
  ]);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'text/html; charset=utf-8');
  assert.equal(await response.text(), '<html>News</html>');
});

test('news JSON is read from Storage and missing articles stay 404', async () => {
  const fetched = [];
  globalThis.fetch = async (input) => {
    fetched.push(String(input));
    return new Response('missing', { status: 404 });
  };
  const env = { SUPABASE_URL: 'https://project-ref.supabase.co' };
  const json = await worker.fetch(new Request('https://ai-tehcon.ru/data/news/news.json'), env);
  const article = await worker.fetch(new Request('https://ai-tehcon.ru/news/missing/'), env);
  assert.equal(json.status, 404);
  assert.equal(article.status, 404);
  assert.equal(fetched.length, 2);
});

test('article URL without slash redirects to canonical URL', async () => {
  const response = await worker.fetch(
    new Request('https://ai-tehcon.ru/news/example-story'),
    { SUPABASE_URL: 'https://project-ref.supabase.co' },
  );
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://ai-tehcon.ru/news/example-story/');
});
