# Harvey's brand guidelines

The canonical home of Harvey's design language: the brand-guidelines site,
the machine-readable Design Spec, the branded component kit, and the
channels that deliver all of it to product repos and their AI agents.

## What lives here

| Thing | Where | Notes |
|---|---|---|
| **Design Spec** | `DESIGN.md` | YAML frontmatter = the semantic token source of truth; prose = the full spec. Read first, always. |
| **Brand plugin** | `.claude-plugin/` + `skills/harveys-brand/` | `harveys-brand@harveys` for Claude Code — [install, use, update, publish](docs/plugin.md) |
| **Component kit** | `packages/ui/src` | 45 primitives on semantic `hb-*` utilities. Source of truth — `src/components/ui/` is a generated copy (`scripts/sync-ui.mjs`). |
| **Tokens** | `packages/tokens` | Generated from `DESIGN.md` frontmatter: `tokens.css`, JSON, hex constants, Tailwind preset. |
| **Consumer delivery** | `packages/sync/brand-sync.mjs` | Vendoring with recorded provenance + drift checks (ADR 0003). |
| **Component previews** | design-sync → Claude Design | `.design-sync/` config; usage contract in `.design-sync/conventions.md`. |
| **Decisions** | `docs/consistency/DECISIONS.md`, `docs/adr/`, `skills/harveys-brand/references/decisions.md` | The 2026-08-06 cross-product decision record, ADRs, and the agent-facing DR summaries. |
| **The site** | `src/` (CRA) | The guidelines site itself — brand sections + the component catalogue, including Agent Help with copy-paste setup commands. |

## Working on this repo

```bash
npm install
npm start           # sync-ui + tailwind + CRA dev server
npm run build       # production build (same pipeline)
npm run tokens      # regenerate packages/tokens/dist from DESIGN.md
node --test packages/tokens/tokens.test.mjs
```

Edit kit components in `packages/ui/src` (never `src/components/ui/` — it
gets overwritten by `sync-ui`). Token changes start in `DESIGN.md`'s
frontmatter, then `npm run tokens`. Branch flow: feature branches →
`develop` → **`master` is the publish gate** — plugin installs, snapshot
fetches, and brand-sync all read `master` only.
