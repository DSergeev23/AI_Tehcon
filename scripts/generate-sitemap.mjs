import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalogProducts } from '../src/lib/catalog/index.js';
import { catalogCategoryNav } from '../src/lib/catalog/categorySeo.js';
import { directions } from '../src/lib/directions.js';
import { caseStudies } from '../src/lib/caseStudies.js';

const SITE_URL = 'https://ai-tehcon.ru';
const toCanonicalPath = (path) => (path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`);

const staticPages = [
  ...directions.map(({ slug }) => ({ path: `/${slug}`, priority: '0.9' })),
  { path: '/', priority: '1.0' },
  { path: '/catalog', priority: '0.9' },
  ...catalogCategoryNav.map(({ slug }) => ({ path: `/catalog/${slug}`, priority: '0.85' })),
  { path: '/about', priority: '0.7' },
  { path: '/cases', priority: '0.8' },
  { path: '/news', priority: '0.8' },
  { path: '/partners', priority: '0.7' },
  { path: '/contacts', priority: '0.7' },
  { path: '/privacy-policy', priority: '0.3' },
  { path: '/terms-of-use', priority: '0.3' },
];

const productPages = catalogProducts.map(({ id }) => ({
  path: `/catalog/${id}`,
  priority: '0.8',
}));

const casePages = caseStudies.map(({ slug }) => ({
  path: `/cases/${slug}`,
  priority: '0.7',
}));

const urls = [...staticPages, ...casePages, ...productPages]
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ path, priority }) => `  <url><loc>${SITE_URL}${toCanonicalPath(path)}</loc><priority>${priority}</priority></url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile(resolve('public/sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap with ${staticPages.length + casePages.length + productPages.length} URLs.`);
