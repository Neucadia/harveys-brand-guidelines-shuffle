// Library build for design-sync. react-scripts has no library output, so this
// compiles the brand-section components (CRA-style JSX in .js files, plus
// CRA/SVGR `import { ReactComponent }` svg imports) into plain JS under
// .design-sync/.cache/lib/, with a ds-entry.mjs barrel the converter bundles.
// Deps (esbuild, @svgr/core) resolve through the .design-sync/node_modules
// symlink -> ../.ds-sync/node_modules (recreate on a fresh clone:
//   ln -sfn ../.ds-sync/node_modules .design-sync/node_modules).
// Run from the repo root: node .design-sync/build-lib.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { dirname, resolve, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformSync } from 'esbuild';
import { transform as svgr } from '@svgr/core';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, '.design-sync', '.cache', 'lib');
const cfg = JSON.parse(readFileSync(join(ROOT, '.design-sync', 'config.json'), 'utf8'));
const srcMap = cfg.componentSrcMap;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'components'), { recursive: true });
mkdirSync(join(OUT, 'svg'), { recursive: true });

const SVGR_IMPORT_RX = /import\s*\{\s*ReactComponent\s+as\s+(\w+)\s*\}\s*from\s*["']([^"']+\.svg)["'];?/g;
const svgModules = new Map(); // abs svg path -> module basename
let svgCount = 0;

async function svgModuleFor(absSvgPath) {
  if (svgModules.has(absSvgPath)) return svgModules.get(absSvgPath);
  const base = basename(absSvgPath, '.svg').replace(/[^A-Za-z0-9-]/g, '') + '.js';
  // SVGR classic-runtime output — the same transform CRA applies to these
  // imports, so the inline-svg render is identical to the app's.
  const jsx = await svgr(
    readFileSync(absSvgPath, 'utf8'),
    { plugins: ['@svgr/plugin-jsx'], jsxRuntime: 'classic', exportType: 'default' },
    { componentName: 'Svg' + basename(absSvgPath, '.svg').replace(/(^|[^a-zA-Z0-9])([a-z0-9])/g, (_, __, c) => c.toUpperCase()) },
  );
  const { code } = transformSync(jsx, { loader: 'jsx', jsx: 'transform' });
  writeFileSync(join(OUT, 'svg', base), code);
  svgModules.set(absSvgPath, base);
  svgCount++;
  return base;
}

const barrel = [];
for (const [name, relPath] of Object.entries(srcMap)) {
  const srcPath = join(ROOT, relPath);
  let src = readFileSync(srcPath, 'utf8');
  const rewrites = [];
  for (const m of src.matchAll(SVGR_IMPORT_RX)) {
    const [full, alias, spec] = m;
    const abs = resolve(dirname(srcPath), spec);
    rewrites.push([full, alias, abs]);
  }
  for (const [full, alias, abs] of rewrites) {
    const mod = await svgModuleFor(abs);
    src = src.replace(full, `import ${alias} from "../svg/${mod}";`);
  }
  // Classic JSX transform: every component already does `import React from "react"`.
  const { code } = transformSync(src, { loader: 'jsx', jsx: 'transform' });
  const outFile = basename(relPath);
  writeFileSync(join(OUT, 'components', outFile), code);
  barrel.push(`export { default as ${name} } from ${JSON.stringify('./components/' + outFile)};`);
}

// UI kit: mirror cfg.uiSrcDir into components/ui/ so the catalogue sections'
// verbatim `./ui/x` relative imports resolve from the flat components/ output,
// and add NAMED re-exports (cfg.uiExports: module -> export names) so the
// primitives themselves are usable from claude.ai/design builds.
if (cfg.uiSrcDir) {
  const uiRoot = join(ROOT, cfg.uiSrcDir);
  mkdirSync(join(OUT, 'components', 'ui'), { recursive: true });
  for (const f of readdirSync(uiRoot).filter((f) => f.endsWith('.js'))) {
    const { code } = transformSync(readFileSync(join(uiRoot, f), 'utf8'), {
      loader: 'jsx',
      jsx: 'transform',
    });
    writeFileSync(join(OUT, 'components', 'ui', f), code);
  }
  const seen = new Set(Object.keys(srcMap));
  for (const [mod, names] of Object.entries(cfg.uiExports ?? {})) {
    for (const n of names) {
      if (seen.has(n)) throw new Error(`design-sync barrel collision: ${n} (ui/${mod})`);
      seen.add(n);
    }
    barrel.push(`export { ${names.join(', ')} } from ${JSON.stringify('./components/ui/' + mod + '.js')};`);
  }
}

writeFileSync(join(OUT, 'ds-entry.mjs'), barrel.join('\n') + '\n');

// Single self-contained stylesheet for cfg.cssEntry (the converter copies it
// verbatim, so no local @imports may remain). Remote font @imports hoisted
// first — the same fonts public/index.html loads — then main.css (its Typekit
// @import lifted out), then the compiled Tailwind build.
const mainCss = readFileSync(join(ROOT, 'public/css/main.css'), 'utf8');
const twCss = readFileSync(join(ROOT, 'public/css/tailwind/tailwind.css'), 'utf8');
const remoteImports = [
  '@import url("https://fonts.googleapis.com/css?family=Chakra+Petch:400,600,700|Open+Sans:400|Catamaran:400,800&subset=latin");',
  ...mainCss.match(/@import[^;]+;/g) ?? [],
];
const mainRules = mainCss.replace(/@import[^;]+;/g, '');
writeFileSync(
  join(OUT, 'harveys.css'),
  `/* Harvey's brand styles — fonts exactly as the site loads them (public/index.html), then main.css and the compiled Tailwind build. Generated by build-lib.mjs. */\n` +
    remoteImports.join('\n') + '\n' + mainRules + '\n' + twCss,
);
console.error(`built ${barrel.length} components, ${svgCount} svg modules, harveys.css -> ${OUT}`);
