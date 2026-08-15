import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalogProducts } from '../src/lib/catalog/index.js';

const requiredMarkup = [
  ['title', /<title>[^<]+<\/title>/],
  ['description', /<meta[^>]+name="description"/],
  ['canonical', /<link[^>]+rel="canonical"/],
  ['h1', /<h1[\s>]/],
  ['structured data', /application\/ld\+json/],
];

const failures = [];

for (const product of catalogProducts) {
  const outputPath = resolve('dist', 'catalog', product.id, 'index.html');
  const html = await readFile(outputPath, 'utf8');
  const missing = requiredMarkup
    .filter(([, pattern]) => !pattern.test(html))
    .map(([label]) => label);

  if (missing.length > 0) {
    failures.push(`${product.id}: ${missing.join(', ')}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Product prerender SEO check failed:\n${failures.join('\n')}`);
}

console.log(`Verified prerender SEO markup for ${catalogProducts.length} product pages.`);
