import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalogProducts } from '../src/lib/catalog/index.js';
import { imageVariants } from '../src/lib/imageVariants.generated.js';

const SITE_URL = 'https://ai-tehcon.ru';
const FEED_PATH = resolve('public/yandex-direct-feed.csv');

function csvValue(value) {
  return `"${String(value ?? '').replace(/"/g, '""').replace(/\s+/g, ' ').trim()}"`;
}

function getMinimumPrice(pricing) {
  const price = Number(String(pricing).replace(/[^\d]/g, ''));
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error(`Не удалось извлечь минимальную цену из: ${pricing}`);
  }
  return price;
}

function getImage(product) {
  const source = product.image || product.content?.find((block) => block.type === 'image')?.value;
  const variants = imageVariants[source]?.webp || [];
  const image = variants.find((variant) => variant.width >= 768) || variants.at(-1);

  if (!image) throw new Error(`Не найдена оптимизированная версия изображения для карточки: ${product.id}`);
  return image.src;
}

const header = ['ID', 'URL', 'Image', 'Title', 'Description', 'Price', 'Currency', 'custom_label_0'];
const rows = catalogProducts.map((product) => {
  const image = getImage(product);

  return [
    product.id,
    `${SITE_URL}/catalog/${product.id}/`,
    `${SITE_URL}${image}`,
    product.title,
    `${product.shortDescription} Стоимость ${product.pricing}.`,
    getMinimumPrice(product.pricing),
    'RUB',
    product.category,
  ].map(csvValue).join(',');
});

await writeFile(FEED_PATH, `\uFEFF${header.map(csvValue).join(',')}\n${rows.join('\n')}\n`, 'utf8');
console.log(`Generated Yandex Direct feed with ${rows.length} offers: /yandex-direct-feed.csv`);
