import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const html = await readFile('index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const match of html.matchAll(/\b(?:href|src|aria-controls|aria-labelledby)="([^"]+)"/g)) {
  const value = match[1];
  if (value.startsWith('#')) assert(ids.includes(value.slice(1)), `Missing anchor: ${value}`);
  else if (value.startsWith('/')) await access(resolve(`.${new URL(value, 'https://kolygri.github.io').pathname}`));
  else if (match[0].startsWith('aria-')) for (const id of value.split(' ')) assert(ids.includes(id), `Missing ARIA target: ${id}`);
}
assert(html.includes('Principal Data &amp; AI Engineer'), 'Page needs the correct positioning');
assert(!/My social media links|data\.shell|Geneva|TNS/.test(html), 'Internal product language must not reach the site');
for (const path of ['presentations/Beyond_the_Demo_Trusted_AI_Agents_MCP_AI_Expo_2026.pdf', 'presentations/Beyond_the_Demo_Trusted_AI_Agents_MCP_AI_Expo_2026.pptx', 'Konstantin_Grigorov_CV_Tech_Lead.pdf']) {
  const bytes = await readFile(path);
  assert(bytes.length > 1000, `Missing download: ${path}`);
  assert.equal(bytes.subarray(0, path.endsWith('.pdf') ? 4 : 2).toString(), path.endsWith('.pdf') ? '%PDF' : 'PK', `Invalid file: ${path}`);
}
execFileSync(process.execPath, ['--check', 'script.js']);
console.log(`Checked ${ids.length} unique IDs, local links, ARIA targets, preserved downloads and JavaScript syntax.`);
