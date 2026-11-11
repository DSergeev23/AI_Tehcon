// Route existing news URLs to generated files in the public Supabase bucket.
// Set SUPABASE_URL to the project's HTTPS URL in Worker settings.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return fetch(request);
    }

    if (path === '/news') {
      return Response.redirect(`${url.origin}/news/`, 301);
    }

    const bareArticle = path.match(/^\/news\/([a-z0-9]+(?:-[a-z0-9]+)*)$/);
    if (bareArticle) {
      return Response.redirect(`${url.origin}${path}/`, 301);
    }

    let objectPath;
    let contentType;
    if (path === '/news/') {
      objectPath = 'news/index.html';
      contentType = 'text/html; charset=utf-8';
    } else if (/^\/news\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(path)) {
      objectPath = `${path.slice(1)}index.html`;
      contentType = 'text/html; charset=utf-8';
    } else if (path === '/data/news/news.json') {
      objectPath = 'data/news/news.json';
      contentType = 'application/json; charset=utf-8';
    } else if (path === '/news-sitemap.xml') {
      objectPath = 'news-sitemap.xml';
      contentType = 'application/xml; charset=utf-8';
    } else {
      return fetch(request);
    }

    const base = env.SUPABASE_URL?.replace(/\/$/, '');
    if (!base || !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(base)) {
      return new Response('News origin is not configured', { status: 503 });
    }

    const origin = `${base}/storage/v1/object/public/news-pages/${objectPath}`;
    const upstream = await fetch(origin, { method: request.method, redirect: 'manual' });
    if (!upstream.ok) {
      return new Response('News page not found', {
        status: upstream.status === 404 ? 404 : 502,
        headers: { 'cache-control': 'public, max-age=30' },
      });
    }

    const headers = new Headers({
      'content-type': contentType,
      'cache-control': 'public, max-age=60',
      'x-content-type-options': 'nosniff',
    });
    return new Response(request.method === 'HEAD' ? null : upstream.body, {
      status: 200,
      headers,
    });
  },
};
