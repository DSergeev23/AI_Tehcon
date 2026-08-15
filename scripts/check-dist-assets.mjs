import { access, readFile, readdir } from 'node:fs/promises';
import { extname, relative, resolve } from 'node:path';
import { imageVariants } from '../src/lib/imageVariants.generated.js';

const DIST_ROOT = resolve('dist');
const TEXT_EXTENSIONS = new Set(['.html', '.css', '.json', '.xml', '.webmanifest']);
const ASSET_PATTERN = /\/(?:images|assets)\/[A-Za-z0-9_./@-]+\.(?:avif|webp|png|jpe?g|svg|css|js)/gi;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(path));
    else files.push(path);
  }
  return files;
}

function distPath(publicPath) {
  return resolve(DIST_ROOT, publicPath.replace(/^\//, ''));
}

if (!await exists(DIST_ROOT)) {
  throw new Error('dist does not exist. Run the production build first.');
}

const files = await collectFiles(DIST_ROOT);
const referencedAssets = new Map();

for (const file of files.filter((path) => TEXT_EXTENSIONS.has(extname(path)))) {
  const content = await readFile(file, 'utf8');
  for (const match of content.matchAll(ASSET_PATTERN)) {
    const asset = match[0];
    if (!referencedAssets.has(asset)) referencedAssets.set(asset, relative(DIST_ROOT, file));
  }
}

const missing = [];
for (const [asset, referencedBy] of referencedAssets) {
  if (!await exists(distPath(asset))) missing.push(`${asset} (referenced by ${referencedBy})`);
}

let optimizedVariants = 0;
for (const [source, variants] of Object.entries(imageVariants)) {
  if (await exists(distPath(source))) {
    missing.push(`${source} (source image was not pruned)`);
  }

  for (const variant of [...variants.avif, ...variants.webp]) {
    optimizedVariants += 1;
    if (!await exists(distPath(variant.src))) missing.push(`${variant.src} (generated image variant)`);
  }
}

if (missing.length > 0) {
  throw new Error(`Deployment asset validation failed:\n${missing.join('\n')}`);
}

console.log(
  `Verified ${referencedAssets.size} rendered asset references and ${optimizedVariants} optimized image variants.`,
);
