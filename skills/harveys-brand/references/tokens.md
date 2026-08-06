# Token crosswalk — the one sanctioned name → hex mapping

**Canon:** the YAML frontmatter of `DESIGN.md` is the machine-readable source
of truth for semantic token names and hexes. This file adds the two things it
lacks: the mapping to *this repo's* Tailwind classes, and the naming traps in
that scale. When theming another app, work from the semantic names and hexes —
the Tailwind column exists so you can decode this repo's source, not so you
can copy its class names.

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
| `on-secondary` | `#FFFFFF` | white on orange | `white` |
| `accent-wheat` | `#D8C7A2` | Harvest Wheat | `yellow-100`; also `yellow-700` = `800` = `900` |
| `surface-wheat` | `#E7DDC6` | Warm Wheat | `yellow-500` |
| `surface-wheat-pale` | `#F5F1E7` | Pale Wheat | `yellow-50` |
| `surface-cream` | `#F6ECEB` | Soft Cream | `red-50` ⚠ (the only `red-*` class — it is a cream) |
| `surface-panel` | `#FAFAF9` | panel off-white | no brand utility — use the hex |
| `neutral-gray` | `#E2E1DD` | Cool Concrete Gray | `gray-400` ⚠ (`gray-200`/`300` are `#E2E2DD`, near-dupes) |
| `text` / `black` | `#10181F` | Ink Black | `black`, `text-body` |
| `text-secondary` | `#57534E` | Warm Stone Gray | `gray-500` |
| `text-tertiary` | `#474440` | dark warm gray | `gray-600` |
| `success-bg` | `#60BF71` | leaf-green chip | `green-200` |
| `success-text` | `#1A4121` | Deep Forest Green | `green-700`/`green-800` |
| `warning-bg` | `#E8773E` | soft orange chip | `orange-200` |
| `data-negative` | `#C02617` | Data Red / brick | **no utility class exists** |
| `background` / `surface` | `#FFFFFF` | white | `white`, `bg-body` |

Extras defined only in this repo's config (no frontmatter name):

| Hex | Role | Class |
| --- | --- | --- |
| `#ECE5D3` | sand surface | `sand` |
| `rgba(16,24,31,0.12)` | hairline border on tints | `hairline` |
| `#52BA64` | light-green focus ring | `green-300` |
| `#A84413` | ember hover (destructive) | `orange-950` |
| `#13391A` | deepest green | `green-900` |

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

## Rules for target repos (MUST)

- Define your token layer **by job**, using the frontmatter's semantic names
  (`--primary-interactive`, `--surface-wheat`, `--data-negative`, …).
- **Never copy this repo's Tailwind scale names** into another codebase; the
  scale is this repo's private, historically-grown vocabulary. The semantic
  names are the export surface.
- Take literal hexes from this table only — not from screenshots, not from
  re-derived tints. If a needed shade doesn't exist here, that's a Phase-0
  decision, not a color-picker moment.

## Scope note

Renaming this repo's own Tailwind scale (e.g. `yellow-*` → `wheat-*`) is
deliberately out of scope: hundreds of internal call sites depend on it, and
no consumer should be reading these class names anyway.
