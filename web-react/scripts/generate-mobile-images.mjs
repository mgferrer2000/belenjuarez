import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceRoot = path.resolve('public/images/cuadros');
const outputRoot = path.resolve('public/images/mobile/cuadros');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : fullPath;
  }));
  return nested.flat();
};

const files = (await walk(sourceRoot)).filter(file =>
  supportedExtensions.has(path.extname(file).toLowerCase())
);

let sourceBytes = 0;
let outputBytes = 0;

for (const sourceFile of files) {
  const relativePath = path.relative(sourceRoot, sourceFile);
  const outputFile = path.join(outputRoot, relativePath.replace(/\.[^.]+$/, '.webp'));

  await mkdir(path.dirname(outputFile), { recursive: true });
  await sharp(sourceFile)
    .rotate()
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(outputFile);

  sourceBytes += (await stat(sourceFile)).size;
  outputBytes += (await stat(outputFile)).size;
}

const savedPercent = sourceBytes === 0 ? 0 : Math.round((1 - outputBytes / sourceBytes) * 100);
console.log(`Generated ${files.length} mobile images.`);
console.log(`Source: ${(sourceBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Mobile: ${(outputBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Estimated transfer saving: ${savedPercent}%`);
