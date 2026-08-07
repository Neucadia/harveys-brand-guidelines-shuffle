# @harveys/tokens

Semantic design tokens generated from `DESIGN.md`'s YAML frontmatter — the
single source of truth. `dist/` is **committed**; consumers vendor files from
it with `packages/sync/brand-sync.mjs` (ADR 0003). Never hand-edit `dist/`:
`tokens.test.mjs` fails on any divergence from a regeneration.

| Artifact | For | Contents |
|---|---|---|
| `dist/tokens.css` | any stack | `:root` custom properties: `--hb-<color>`, `--hb-cat/seq/div-N`, `--hb-radius*`, `--hb-space-*`, `--hb-shadow-float`, font stacks |
| `dist/tokens.json` | tooling, parity tests | the full structured token set |
| `dist/tokens.mjs` / `tokens.ts` | logic-land paint (SVG attrs, canvas, map paint, color math) | literal-hex constants: `HB`, `PRIMARY_INTERACTIVE`, `CATEGORICAL`, … |
| `dist/tailwind-preset.cjs` | Tailwind 3 consumers | extend-only preset: `hb-*` color utilities as `var(--hb-x, #hex)` with baked fallbacks, brand keyframes, `tracking-smallcaps`, `duration-250` |

Regenerate after any DESIGN.md frontmatter change:

```
npm run tokens          # from the repo root
node --test packages/tokens/tokens.test.mjs
```

Notes: `hb-*` colors are `var()` strings, so Tailwind alpha modifiers
(`/50`) do not apply to them — the one sanctioned alpha use, the
`bg-black/80` scrim, stays a literal utility (`--hb-scrim` exists for
hand-rolled CSS). `hb-ink` aliases `--hb-black` for text/fill use.
