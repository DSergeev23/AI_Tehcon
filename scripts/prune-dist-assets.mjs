import { access, readdir, rm, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { imageVariants } from '../src/lib/imageVariants.generated.js';

const DIST_ROOT = resolve('dist');
const DEPLOY_ONLY_EXCLUSIONS = [
  'images/direct-review-replies',
  'images/.DS_Store',
  'images/optimized/.pipeline-state.json',
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  if (!await exists(directory)) return [];

  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(path));
    else files.push(path);
  }
  return files;
}

async function totalBytes(directory) {
  const files = await collectFiles(directory);
  const sizes = await Promise.all(files.map(async (file) => (await stat(file)).size));
  return sizes.reduce((total, size) => total + size, 0);
}

function distPath(publicPath) {
  return resolve(DIST_ROOT, publicPath.replace(/^\//, ''));
}

if (!await exists(DIST_ROOT)) {
  throw new Error('dist does not exist. Run the production build before pruning.');
}

const beforeBytes = await totalBytes(DIST_ROOT);
let removedOriginals = 0;
let removedOriginalBytes = 0;

for (const [source, variants] of Object.entries(imageVariants)) {
  if (!variants.avif?.length || !variants.webp?.length) {
    throw new Error(`Both AVIF and WebP fallbacks are required before removing ${source}`);
  }

  for (const variant of [...variants.avif, ...variants.webp]) {
    if (!await exists(distPath(variant.src))) {
      throw new Error(`Cannot remove ${source}: missing generated variant ${variant.src}`);
    }
  }

  const original = distPath(source);
  if (await exists(original)) {
    removedOriginalBytes += (await stat(original)).size;
    await rm(original);
    removedOriginals += 1;
  }
}

for (const relativePath of DEPLOY_ONLY_EXCLUSIONS) {
  await rm(resolve(DIST_ROOT, relativePath), { recursive: true, force: true });
}

const afterBytes = await totalBytes(DIST_ROOT);
const toMegabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);

console.log(
  `Pruned ${removedOriginals} source images (${toMegabytes(removedOriginalBytes)} MB). `
  + `Deployment artifact: ${toMegabytes(beforeBytes)} MB -> ${toMegabytes(afterBytes)} MB.`,
);
