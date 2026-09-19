import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const dist = resolve('dist');
const base = '/DENYS_HV-PORTFOLIO/';
assert(existsSync(dist), 'Run npm run build first.');
const pages = readdirSync(dist).filter(name => name.endsWith('.html'));
assert.equal(pages.length, 7, 'All seven portfolio pages must be built.');

for (const name of pages) {
  const html = readFileSync(join(dist, name), 'utf8');
  assert(!html.includes('%BASE_URL%'), `${name}: unresolved base URL`);
  assert(html.includes('Denys_Harkusha_Frontend_Developer_CV.pdf'), `${name}: CV link missing`);
  for (const [, raw] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(raw)) continue;
    const pathname = decodeURIComponent(raw.split(/[?#]/)[0]);
    const relative = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\.\//, '');
    assert(existsSync(join(dist, relative)), `${name}: missing local resource ${raw}`);
  }
}

const home = readFileSync(join(dist, 'index.html'), 'utf8');
assert(!/<link[^>]+modulepreload[^>]+last-projects-slider/.test(home), 'Slider must not be preloaded on initial page load.');
assert(home.includes('media="(min-width: 768px)"'), 'Hero image preload must respect the mobile breakpoint.');
assert(readFileSync(join(dist, 'cv/Denys_Harkusha_Frontend_Developer_CV.pdf')).subarray(0, 5).toString() === '%PDF-', 'CV must be a valid PDF file.');
assert(readFileSync('src/fonts/impact.woff2').subarray(0, 4).toString() === 'wOF2', 'Impact must use real WOFF2 encoding.');
console.log(`Build checks passed: ${pages.length} pages, local resources, CV, conditional preload and WOFF2 font.`);
