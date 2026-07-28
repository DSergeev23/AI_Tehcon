import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalogProducts } from '../src/lib/catalog/index.js';
import { catalogCategoryNav } from '../src/lib/catalog/categorySeo.js';

const SITE_URL = 'https://ai-tehcon.ru';

const staticPages = [
  { path: '/', priority: '1.0' },
  { path: '/catalog', priority: '0.9' },
  ...catalogCategoryNav.map(({ slug }) => ({ path: `/catalog/${slug}`, priority: '0.85' })),
  { path: '/about', priority: '0.7' },
  { path: '/contacts', priority: '0.7' },
  { path: '/privacy-policy', priority: '0.3' },
  { path: '/terms-of-use', priority: '0.3' },
];

const productPages = catalogProducts.map(({ id }) => ({
  path: `/catalog/${id}`,
  priority: '0.8',
}));

const urls = [...staticPages, ...productPages]
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ path, priority }) => `  <url><loc>${SITE_URL}${path}</loc><priority>${priority}</priority></url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile(resolve('public/sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap with ${staticPages.length + productPages.length} URLs.`);
