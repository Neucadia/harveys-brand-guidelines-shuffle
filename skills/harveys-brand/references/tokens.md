# Token crosswalk — the one sanctioned name → hex mapping

**Canon:** the YAML frontmatter of `DESIGN.md` is the machine-readable source
of truth for semantic token names and hexes. This file adds the two things it
lacks: the mapping to *this repo's* Tailwind classes, and the naming traps in
that scale. When theming another app, work from the semantic names and hexes —
the Tailwind column exists so you can decode this repo's source, not so you
can copy its class names.

Naming law for the wheat family (DR-2, decided 2026-08-06): bare **`wheat` is
`#D8C7A2`**; lighter shades take modifiers (`wheat-light`, `wheat-pale`);
`#F5F1E7` is never named "cream" — **`cream` is `#F6ECEB`**, a primarily-print
surface.

## Crosswalk

| Semantic token | Hex | Prose name | Tailwind class in this repo |
| --- | --- | --- | --- |
| `primary` | `#1A4121` | Deep Forest Green | `green-700` *and* `green-800` (duplicates) |
| `primary-interactive` | `#296533` | Field Green | `green-500` |
| `primary-hover` | `#2B3C1D` | dark green hover | `green-600` |
| `on-primary` | `#FFFFFF` | white on green | `white` |
| `on-primary-muted` | `#A6DBAF` | Soft Sage | `green-100` |
| `secondary` | `#C05017` | Ember (dark / print) | `orange-700` = `800` = `900` (duplicates) |
| `secondary-interactive` | `#E56625` | Ember Orange | `orange-500` |
| `ember-hover` | `#E8763C` | ember hover (of `#E56625`) | `orange-400` (`orange-600 #D7591A` is retired/unused) |
| `ember-text` | `#A84413` | AA ember text on tints; pressed state of `#C05017` | `orange-950` |
| `on-secondary` | `#FFFFFF` | white on orange | `white` |
| `wheat` | `#D8C7A2` | Wheat (Harvest Wheat) — the family's bare name | `yellow-100`; also `yellow-700` = `800` = `900` |
| `wheat-light` | `#E7DDC6` | Wheat Light (Warm Wheat) | `yellow-500` |
| `wheat-pale` | `#F5F1E7` | Wheat Pale — never "cream" | `yellow-50` |
| `sand` | `#ECE5D3` | Sand | `sand` |
| `cream` | `#F6ECEB` | Soft Cream — primarily print | `red-50` ⚠ (the only `red-*` class — it is a cream) |
| `surface-panel` | `#FAFAF9` | panel off-white | no brand utility — use the hex |
| `neutral-gray` | `#E2E1DD` | Cool Concrete Gray | `gray-400` ⚠ (`gray-200`/`300` are `#E2E2DD`, near-dupes) |
| `text` / `black` | `#10181F` | Ink Black | `black`, `text-body` |
| `text-secondary` | `#57534E` | Warm Stone Gray — also the seed-tag muted ink | `gray-500` |
| `text-tertiary` | `#474440` | dark warm gray | `gray-600` |
| `success-bg` | `#60BF71` | leaf-green solid chip (≥18px text only) | `green-200` |
| `success-text` | `#1A4121` | Deep Forest Green | `green-700`/`green-800` |
| `success-tint` | `#ECF7EE` | success tint-chip fill | `green-50` |
| `success-tint-border` | `#ABCFAE` | success tint-chip border | no utility — use the hex |
| `warning-bg` | `#E8773E` | soft orange solid chip (≥18px text only) | `orange-200` |
| `warning-tint` | `#FBEDE4` | warning tint-chip fill (text = `ember-text`) | no utility — use the hex |
| `warning-tint-border` | `#EEC4A9` | warning tint-chip border | no utility — use the hex |
| `info` | `#3D76A9` | info slate — chips + dataviz slot 6 ONLY | no utility — use the hex |
| `info-strong` | `#2A5B88` | info tint-chip text | no utility — use the hex |
| `info-tint` | `#E7EEF5` | info tint-chip fill | no utility — use the hex |
| `info-tint-border` | `#AEC7E0` | info tint-chip border | no utility — use the hex |
| `data-negative` | `#C02617` | Data Red / brick (DR-1 only) | **no utility class exists, on purpose** |
| `data-negative-strong` / `-deep` / `-tint` / `-border` | `#A21C10` / `#791B11` / `#FCECE9` / `#E9B6AD` | Data Red support family (DR-1 only) | no utilities — use the hexes |
| `focus-ring` | `#52BA64` | Sage focus ring — 2px solid + 2px offset (DR-4) | `green-300` |
| `focus-ring-ember` | `rgba(232,118,60,0.35)` | soft ember ring, ember controls only | no utility — use the value |
| `border-soft` / `border` / `border-strong` | `rgba(16,24,31,.10)` / `.12` / `.20` | ink-alpha hairline trio | `hairline` = the `.12` mid step; others no utility |
| `scrim` | `rgba(16,24,31,0.4)` | modal overlay | `black/40` if present, else the value |
| `background` / `surface` | `#FFFFFF` | white | `white`, `bg-body` |

Dataviz palettes (categorical 8 / sequential 6 / diverging 7) live in the
`dataviz:` frontmatter block and `references/dataviz.md` — they are tokens
too; never eyeball chart colors.

Extras defined only in this repo's config (no frontmatter name):

| Hex | Role | Class |
| --- | --- | --- |
| `#13391A` | deepest green (two-tone masthead) | `green-900` |

## Traps in this repo's Tailwind scale (do not import these names)

- **`yellow-*` is the wheat family, not yellow** — and it is non-monotonic:
  `yellow-400` (`#EFE7D8`) is *lighter* than `yellow-300` (`#B5954F`, a
  gold-brown); `yellow-700`–`900` all equal `yellow-100`.
- **`red-50` is a cream** (`#F6ECEB`, Soft Cream) and is the only `red-*`
  class in the build. There is no red utility — Data Red `#C02617` has no
  class on purpose.
- **Duplicate scale positions:** `green-700` = `green-800`;
  `orange-700` = `800` = `900`; `yellow-700` = `800` = `900`;
  `gray-200` = `gray-300` (and ≠ `gray-400` by one digit).
- **Non-monotonic grays/greens:** `gray-400` is lighter than `gray-300`;
  `green-600` is darker than `green-500` (it's Field Green's hover, an
  olive-dark, not a scale step).
- **`orange-600` (`#D7591A`) is retired/unused** — the ember hover step is
  `ember-hover #E8763C` = `orange-400`, not the scale's own dark step.

## Rules for target repos (MUST)

- Define your token layer **by job**, using the frontmatter's semantic names
  (`--primary-interactive`, `--wheat-light`, `--data-negative`, …).
- **Never copy this repo's Tailwind scale names** into another codebase; the
  scale is this repo's private, historically-grown vocabulary. The semantic
  names are the export surface.
- Take literal hexes from this table only — not from screenshots, not from
  re-derived tints. If a needed shade doesn't exist here, that's a Phase-0
  decision, not a color-picker moment.
- `#E7E5E4` is **not a brand color** — it is stock shadcn stone-200 that has
  leaked into two consumers as a "hairline". The border system is the
  ink-alpha trio above.

## Scope note

Renaming this repo's own Tailwind scale (e.g. `yellow-*` → `wheat-*`) is
deliberately out of scope: hundreds of internal call sites depend on it, and
no consumer should be reading these class names anyway.
