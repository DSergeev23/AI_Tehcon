import { mkdir, readFile, readdir, stat, unlink, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import sharp from 'sharp';

const PROJECT_ROOT = resolve('.');
const IMAGE_ROOT = resolve('public/images');
const OUTPUT_ROOT = resolve(IMAGE_ROOT, 'optimized');
const MANIFEST_PATH = resolve('src/lib/imageVariants.generated.js');
const STATE_PATH = resolve(OUTPUT_ROOT, '.pipeline-state.json');
const PIPELINE_VERSION = 2;
const TARGET_WIDTHS = [480, 768, 1200, 1600];
const SOURCE_PATTERN = /\/images\/[A-Za-z0-9_./@-]+\.(?:png|jpe?g)/gi;

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectTextFiles(path));
    } else if (/\.(?:js|jsx|html|json)$/.test(entry.name) && entry.name !== 'imageVariants.generated.js') {
      files.push(path);
    }
  }

  return files;
}

async function collectGeneratedOutputs(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectGeneratedOutputs(path));
    } else if (/\.(?:avif|webp)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

async function collectReferencedImages() {
  const files = [
    ...await collectTextFiles(resolve('src')),
    resolve('index.html'),
    resolve('public/manifest.json'),
  ];
  const references = new Set();

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    for (const match of content.matchAll(SOURCE_PATTERN)) {
      const source = match[0];
      if (!source.includes('/optimized/') && !/\/icon(?:-|\.)/i.test(source)) {
        references.add(source);
      }
    }
  }

  return [...references].sort();
}

function sourceFileFor(publicPath) {
  return resolve('public', publicPath.replace(/^\//, ''));
}

function outputPathFor(publicPath, width, format) {
  const relativePath = relative('/images', publicPath).split(sep).join('/');
  const extension = extname(relativePath);
  const base = relativePath.slice(0, -extension.length);
  return `/images/optimized/${base}-w${width}.${format}`;
}

async function loadState() {
  try {
    return JSON.parse(await readFile(STATE_PATH, 'utf8'));
  } catch {
    return { version: PIPELINE_VERSION, sources: {} };
  }
}

const references = await collectReferencedImages();
const previousState = await loadState();
const nextState = { version: PIPELINE_VERSION, sources: {} };
const manifest = {};
const expectedOutputs = new Set();
let generatedFiles = 0;
let skippedSources = 0;

await mkdir(OUTPUT_ROOT, { recursive: true });

for (const publicPath of references) {
  const sourceFile = sourceFileFor(publicPath);
  if (!existsSync(sourceFile)) continue;

  const sourceStat = await stat(sourceFile);
  const metadata = await sharp(sourceFile).metadata();
  if (!metadata.width || !metadata.height) continue;

  const widths = [...new Set([
    ...TARGET_WIDTHS.filter((width) => width < metadata.width),
    Math.min(metadata.width, TARGET_WIDTHS.at(-1)),
  ])].sort((a, b) => a - b);

  const signature = `${sourceStat.size}:${Math.round(sourceStat.mtimeMs)}`;
  const outputs = widths.flatMap((width) => [
    outputPathFor(publicPath, width, 'avif'),
    outputPathFor(publicPath, width, 'webp'),
  ]);
  const canSkip = previousState.version === PIPELINE_VERSION
    && previousState.sources?.[publicPath] === signature
    && outputs.every((path) => existsSync(resolve('public', path.replace(/^\//, ''))));

  if (canSkip) skippedSources += 1;

  const variants = { avif: [], webp: [] };
  for (const width of widths) {
    const height = Math.round(metadata.height * (width / metadata.width));

    for (const format of ['avif', 'webp']) {
      const publicOutput = outputPathFor(publicPath, width, format);
      const fileOutput = resolve('public', publicOutput.replace(/^\//, ''));
      expectedOutputs.add(fileOutput);
      await mkdir(dirname(fileOutput), { recursive: true });

      if (!canSkip) {
        const pipeline = sharp(sourceFile).resize({ width, withoutEnlargement: true });
        if (format === 'avif') {
          await pipeline.avif({ quality: 55, effort: 3 }).toFile(fileOutput);
        } else {
          await pipeline.webp({ quality: 80, effort: 5 }).toFile(fileOutput);
        }
        generatedFiles += 1;
      }

      variants[format].push({ src: publicOutput, width });
    }
  }

  manifest[publicPath] = {
    width: metadata.width,
    height: metadata.height,
    ...variants,
  };
  nextState.sources[publicPath] = signature;
}

const existingOutputs = await collectGeneratedOutputs(OUTPUT_ROOT);
let removedFiles = 0;
for (const output of existingOutputs) {
  if (/\.(?:avif|webp)$/.test(output) && !expectedOutputs.has(output)) {
    await unlink(output);
    removedFiles += 1;
  }
}

const manifestSource = `// Generated by scripts/optimize-images.mjs. Do not edit manually.\nexport const imageVariants = ${JSON.stringify(manifest, null, 2)};\n`;
await writeFile(MANIFEST_PATH, manifestSource, 'utf8');
await writeFile(STATE_PATH, `${JSON.stringify(nextState, null, 2)}\n`, 'utf8');

console.log(`Optimized ${references.length} referenced images: ${generatedFiles} files generated, ${skippedSources} sources reused, ${removedFiles} stale files removed.`);
