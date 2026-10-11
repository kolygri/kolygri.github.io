import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', '.nojekyll', 'assets', 'presentations', 'Konstantin_Grigorov_CV_Tech_Lead.pdf']) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(file, output), { recursive: true });
}
console.log('Static site built in dist/');
