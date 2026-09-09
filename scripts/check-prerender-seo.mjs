import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalogProducts } from '../src/lib/catalog/index.js';
import { directions } from '../src/lib/directions.js';
import { directionAssignments } from '../src/lib/catalog/directionAssignments.js';
import { getDirectionGroups, getProductDirection } from '../src/lib/catalog/directionCatalog.js';
import { categoryRedirects } from '../src/lib/catalog/categoryRedirects.js';

const requiredMarkup = [
  ['title', /<title>[^<]+<\/title>/],
  ['description', /<meta[^>]+name="description"/],
  ['canonical', /<link[^>]+rel="canonical"/],
  ['h1', /<h1[\s>]/],
  ['structured data', /application\/ld\+json/],
];

const failures = [];
const redirectRules = [...(await readFile('dist/.htaccess', 'utf8')).matchAll(/^RewriteRule (\^catalog\/\S+) (\S+) \[R=301,L,NE\]$/gm)]
  .map((match) => ({ pattern: new RegExp(match[1]), destination: match[2] }));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const [slug, destination] of Object.entries(categoryRedirects)) {
  for (const suffix of ['', '/', '/index.html']) {
    const matches = redirectRules.filter((rule) => rule.pattern.test(`catalog/${slug}${suffix}`));
    if (matches.length !== 1 || matches[0].destination !== `https://ai-tehcon.ru${destination}`) failures.push(`Missing server redirect: ${slug}${suffix}`);
  }
  if (sitemap.includes(`<loc>https://ai-tehcon.ru/catalog/${slug}/</loc>`)) failures.push(`Retired category in sitemap: ${slug}`);
}
for (const product of catalogProducts) {
  if (redirectRules.some((rule) => rule.pattern.test(`catalog/${product.id}/`))) failures.push(`Redirect intercepts product: ${product.id}`);
}
async function checkRetiredLinks(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await checkRetiredLinks(path);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      for (const match of html.matchAll(/href="(?:https:\/\/ai-tehcon\.ru)?\/catalog\/([^/"?#]+)(?:\/|\/index\.html)?(?:[?#][^"]*)?"/g)) {
        if (categoryRedirects[match[1]]) failures.push(`Retired internal link in ${path}: ${match[1]}`);
      }
    }
  }
}
await checkRetiredLinks(resolve('dist'));
const assignedIds = directionAssignments.map((entry) => entry.id);
const knownIds = new Set(catalogProducts.map((product) => product.id));
const knownDirections = new Set(directions.map((direction) => direction.slug));
if (assignedIds.length !== knownIds.size || new Set(assignedIds).size !== assignedIds.length
  || directionAssignments.some((entry) => !knownIds.has(entry.id) || !knownDirections.has(entry.direction)
    || !entry.group || new Set(entry.secondary).size !== entry.secondary.length
    || entry.secondary.some((slug) => !knownDirections.has(slug) || slug === entry.direction))) {
  throw new Error('Direction assignments must cover every product once with valid primary and secondary directions.');
}
for (const direction of directions) {
  const html = await readFile(resolve('dist', direction.slug, 'index.html'), 'utf8');
  const missing = requiredMarkup.filter(([, pattern]) => !pattern.test(html)).map(([label]) => label);
  if (!html.includes(`href="https://ai-tehcon.ru/${direction.slug}/"`)) missing.push('direction canonical');
  if (!html.includes(direction.intro)) missing.push('prerendered content');
  const expected = getDirectionGroups(direction.slug).flatMap((group) => group.products.map((product) => product.id));
  const rendered = [...html.matchAll(/href="\/catalog\/([^/"?#]+)\/"/g)].map((match) => match[1]);
  if (rendered.length !== expected.length || new Set(rendered).size !== rendered.length
    || expected.some((id) => !rendered.includes(id))) missing.push('complete, unique service links');
  if (missing.length) failures.push(`${direction.slug}: ${missing.join(', ')}`);
}

const notFoundPath = resolve('dist', '404.html');
const notFoundHtml = await readFile(notFoundPath, 'utf8');
const missingNotFoundMarkup = [
  ['404 title', /<title>Страница не найдена — AI TehCon<\/title>/],
  ['noindex', /<meta[^>]+name="robots"[^>]+content="noindex, follow"/],
  ['404 heading', /<h1[\s>][\s\S]*?Такой страницы нет[\s\S]*?<\/h1>/],
].filter(([, pattern]) => !pattern.test(notFoundHtml)).map(([label]) => label);

if (missingNotFoundMarkup.length > 0) {
  failures.push(`404.html: ${missingNotFoundMarkup.join(', ')}`);
}

for (const product of catalogProducts) {
  const outputPath = resolve('dist', 'catalog', product.id, 'index.html');
  const html = await readFile(outputPath, 'utf8');
  const missing = requiredMarkup
    .filter(([, pattern]) => !pattern.test(html))
    .map(([label]) => label);
  const direction = getProductDirection(product.id);
  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => JSON.parse(match[1]));
  const breadcrumb = scripts.find((schema) => schema['@type'] === 'BreadcrumbList');
  if (breadcrumb?.itemListElement?.[1]?.item !== `https://ai-tehcon.ru/${direction.slug}/`
    || breadcrumb?.itemListElement?.[1]?.name !== direction.label) missing.push('primary direction breadcrumb schema');
  if (!html.includes(`href="/catalog/${product.id}/"`) && !html.includes(`href="https://ai-tehcon.ru/catalog/${product.id}/"`)) missing.push('preserved canonical');
  const visibleBreadcrumb = html.match(/<nav[^>]*aria-label="Хлебные крошки"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  if (!visibleBreadcrumb?.includes(`href="/${direction.slug}/"`)) missing.push('visible primary direction breadcrumb');

  if (missing.length > 0) {
    failures.push(`${product.id}: ${missing.join(', ')}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Product prerender SEO check failed:\n${failures.join('\n')}`);
}

console.log(`Verified ${directions.length} direction pages, complete service links, ${catalogProducts.length} product breadcrumbs and 404.html.`);
