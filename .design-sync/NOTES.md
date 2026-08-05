# design-sync notes — Harvey's brand guidelines (CRA/Shuffle repo)

Repo-specific gotchas for future syncs. Config: `.design-sync/config.json`; project: https://claude.ai/design/p/e50eaf05-9bee-4791-9212-d74848835279

## Build pipeline
- **Lockfile is pnpm v6 format (pnpm 8).** System pnpm 10 refuses it — install with `npx -y pnpm@8 install --frozen-lockfile`.
- **No library build exists** (Create React App; `react-scripts` only bundles the app). `.design-sync/build-lib.mjs` is the added library build: it compiles the 30 section components (JSX in `.js` files — esbuild's default `.js` loader can't parse that) and converts CRA/SVGR `import { ReactComponent }` svg imports into inline-SVG React modules (same transform CRA applies, via @svgr/core). Output: `.design-sync/.cache/lib/` (entry `ds-entry.mjs`, stylesheet `harveys.css`).
- `buildCmd` = `npm run css && node .design-sync/build-lib.mjs` — the first half regenerates `public/css/tailwind/tailwind.css` (the Tailwind CLI is v3; the compiled file only rewrites when content changes, so stale mtimes are normal).
- `build-lib.mjs` needs the deps symlink — **on a fresh clone recreate it**: `ln -sfn ../.ds-sync/node_modules .design-sync/node_modules`, and `.ds-sync` needs `esbuild @svgr/core @svgr/plugin-jsx` plus `playwright@1.58.0 playwright-core@1.58.0` (pinned to the cached chromium-1208; verify against `~/Library/Caches/ms-playwright/`).
- `cfg.cssEntry` must stay pointed at the **generated** `.design-sync/.cache/lib/harveys.css` — the converter copies cssEntry verbatim into `_ds_bundle.css`, so a file with local relative `@import`s ships dangling imports. harveys.css inlines `public/css/main.css` + compiled Tailwind and hoists the remote font imports.
- Components are **default exports in camelCase files** — a synth `export *` entry misses all of them; that's why build-lib writes an explicit named-re-export barrel from `componentSrcMap`.
- `@types/react` is not in the repo's node_modules → `[DTS_REACT]` warn. Harmless here: components are propless plain JS, so there are no props to extract either way.

## Fonts / CSS
- All brand fonts load **remotely at runtime**, exactly like the live site: Google Fonts (Chakra Petch 400/600/700, Open Sans 400, Catamaran 400/800) + Adobe Typekit `https://use.typekit.net/ooa7szh.css` (TT Commons Pro, the true body font, layered over Open Sans by `public/css/main.css`). Validate reports `[FONT_REMOTE]` — expected, not a gap.
- Poppins / DM Sans appear in `public/index.html` but are leftovers of the Shuffle preset — the compiled Tailwind references only Chakra Petch / Open Sans / Catamaran. Not shipped, deliberately.

## Known render warns / accepted limitations
- **Icons** is `display:none` by design (`hidden` class on its `<section>`, matching the live site) — left unauthored on the floor card deliberately; authoring a preview would capture nothing.
- Decorative images referenced with **relative `cronos-assets/...` URLs** (line patterns behind Hero/Colors/DataVisualization, small element images in Origins/Photography) 404 from inside preview cards AND from rendered designs — page-relative paths baked into the JSX can't resolve at `components/<group>/<Name>/` depth. Sections fall back to their solid brand background; accepted.
- **NegativePrimaryOnWheat ships no background of its own** (unlike its OnBlack/OnOrange siblings) and uses near-white text — it's the wheat logo variant *for green backgrounds*. Its authored preview composes it on `bg-green-500`; any design using it must place it on brand green.
- Sub-brand pickers (HorizontalSubBrand etc.) and the Header mobile menu are `useState`-driven; static capture shows the default selection — correct. The Header cell captures at a width where the desktop nav collapses to the hamburger toggle; capture-width artifact, not a defect.
- **NegativeStackedEgg** defaults its `bg` state to `""` (transparent) with white copy and a wheat logo — illegible standalone; its authored preview composes it on `bg-green-700` (the Logos section's real background). NegativeMonogram is fine bare (`bg` defaults to `bg-black`).
- **NegativePrimaryOnOrange and NegativePrimaryOnWheat** ship both download buttons with the `hidden` class — no buttons on those cards is faithful to source.

## Known render warns
- `Icons` on the floor card (see above — deliberately unauthored; `display:none` in source).

## Component catalogue / UI kit (feature/componentCatalogue)
- **`.design-sync/ui-exports.json`** (`srcDir` + `exports`) drives a build-lib extension: every `src/components/ui/*.js` is transformed into `.cache/lib/components/ui/` (preserving the subdir so the six `Catalogue*` sections' verbatim `./ui/x` imports resolve from the flat components/ output), and `exports` (module → export names) emits NAMED barrel re-exports. build-lib throws on any name collision with `componentSrcMap` keys. `use-mobile` is internal-only (not exported). This lives in its own file because the converter's config validator is a strict allowlist — do NOT add custom keys to config.json.
- **Catalogue sections must stay top-level** in `src/components/` — the `./ui/*` relative-import trick only works one level up from `components/ui/`.
- Tailwind content globs are now `./src/components/**/*.js` + `./.design-sync/previews/*.tsx` — preview-only utility classes survive the purge.
- **Version pins that bite if bumped:** react-day-picker **8** + date-fns **3** (rdp9 changed the classNames API), tailwind-merge **2** (v3 targets Tailwind 4), zod **3** + @hookform/resolvers **3**, recharts **2** (chart.js wrapper is the TW3-era shape), sonner **1**.
- **Sonner only** — the legacy shadcn Toast/Toaster pair was deliberately dropped (user decision); `ui/sonner.js` exports `Toaster`, and inline `toastOptions.style` kills sonner's default radius/shadow (its runtime-injected stylesheet beats utility classes).
- The legacy preset config **rejects arbitrary transition durations** (`duration-[250ms]` won't compile); use the `duration-250` token added to the override.
- UI-kit theming is literal brand utilities in cva maps (no HSL var layer, no dark mode); never `rounded-*`/`shadow-*`.

## Re-sync risks
- `.design-sync/.cache/lib/` is generated state — **always re-run `buildCmd` before the converter** on a re-sync; a stale lib silently ships old component code.
- The remote fonts (Google/Typekit) are network dependencies at render time — if Typekit's kit `ooa7szh` is ever retired, body copy silently falls back to Open Sans and only a visual check will catch it.
- Remote imagery (static.shuffle.dev, images.unsplash.com) is baked into component JSX — if those uploads move, sections show broken images; nothing in the build pipeline will flag it.
- build-lib.mjs's SVGR import regex expects the exact `import { ReactComponent as X } from "….svg";` shape Shuffle generates — a hand-edited variant spelling would silently skip rewriting (esbuild would then fail loudly at bundle time, so it won't ship wrong, but the error will point here).
- Shuffle re-exports may rename component function names or add new sections — `componentSrcMap` (and thus the barrel) is the single source of truth; add new components there + a doc stub in `.design-sync/docs/`.
