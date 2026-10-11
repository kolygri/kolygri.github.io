import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ttf': 'font/ttf', '.pdf': 'application/pdf', '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' };
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const requested = pathname.endsWith('/') ? `${pathname}index.html` : pathname;
    const path = resolve(root, `.${requested}`);
    const relative = path.slice(root.length + 1);
    if (!path.startsWith(root + sep) || relative.split(sep).some(part => part.startsWith('.')) || !['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(403); response.end('Forbidden'); return;
    }
    const metadata = await stat(path);
    if (!metadata.isFile()) throw new Error('Not a file');
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Content-Length': metadata.size, 'Cache-Control': 'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : await readFile(path));
  } catch { response.writeHead(404); response.end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
