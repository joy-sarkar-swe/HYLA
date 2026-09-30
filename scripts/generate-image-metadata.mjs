import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public');
const entries = {};

async function visit(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, item.name);
    if (item.isDirectory()) {
      await visit(filename);
    } else if (/\.(avif|gif|jpe?g|png|webp)$/i.test(item.name)) {
      const { width, height } = await sharp(filename).metadata();
      if (width && height) {
        entries[`/${path.relative(root, filename).replaceAll('\\', '/')}`] = [width, height];
      }
    }
  }
}

await visit(path.join(root, 'assets'));
const sorted = Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(
  'src/components/image-dimensions.json',
  `${JSON.stringify(sorted, null, 2)}\n`,
);
console.log(`Recorded dimensions for ${Object.keys(sorted).length} images.`);
