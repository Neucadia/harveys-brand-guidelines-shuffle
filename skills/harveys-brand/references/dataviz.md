# Dataviz palettes — the validated brand-hue mapping

The brand consolidates to six muted colors and says only "hero data in brand
green, competitors in pale desaturated green" about charts. Real dashboards
need more: categorical identity for entities/series, a sequential magnitude
ramp, and a diverging signed scale. This file records the resolved mapping.
It was settled during the commodities-dashboard retheme (2026-08-05) with
validator evidence — six checks: OKLCH lightness band, chroma floor, CVD
adjacent-pair separation under protan/deutan simulation, normal-vision floor,
and surface contrast. The machine-readable values live in `DESIGN.md`'s
`dataviz:` frontmatter block; never eyeball chart colors.

Consumer implementation example (stats dashboard): `--cat/--seq/--div` custom
properties in its global stylesheet mirrored by literal-hex constants in a
theme module for paint contexts where `var()` cannot resolve (SVG attributes,
canvas, map paint), with a unit test asserting the two stay identical.

## Categorical — 8 slots, fixed order, never re-ranked

| Slot | Hex | Family | Origin |
|---|---|---|---|
| 1 | `#296533` | field green | brand — hero/product series |
| 2 | `#e8763c` | ember light | brand (`ember-hover`) |
| 3 | `#0d9488` | deep teal | derived utility hue |
| 4 | `#ef9f27` | harvest gold | brand-adjacent (entered via the stats app; canon name unsettled) |
| 5 | `#30783d` | mid green | brand kit |
| 6 | `#3d76a9` | slate | derived from Ink's blue cast at the chroma floor (= the `info` hue) |
| 7 | `#c05017` | harvest orange | brand (print orange) |
| 8 | `#52ba64` | sage green | brand kit |

Teal, slate, and gold are **derived utility hues**, not brand colors: six
muted colors cannot yield 8 CVD-distinct categorical slots. They were derived
OKLCH-consistent and muted (slate sits at exactly the C 0.10 chroma floor —
as quiet as a passable blue can be) so they read brand-adjacent, never
tech-saturated. They are dataviz-and-chips-only — never UI accents.
Validator results: all checks pass on `#ffffff` and `#f5f1e7` (worst adjacent
CVD ΔE 9.9; worst normal-vision ΔE 17.1). Slots 2/4/8 sit below 3:1
contrast — legal only with direct labels beside every mark.

Rules: assignment is by rank but the slot order itself never changes; lists
longer than 8 cycle (`i % 8`) — legal only where every use is direct-labeled.
All-pairs chart forms (map, scatter) carry at most slots 1–3. Data Red and
the status hexes are never categorical slots.

## Sequential (magnitude) — single green hue, light → dark

`#76b97d → #5aa363 → #408d4c → #2f763b → #235f2e → #1e4725`
(H 147, monotone L 0.725→0.36; ordinal-ramp checks pass on white and wheat.)

## Diverging (signed) — Data Red ↔ concrete ↔ field green

`#c02617 · #d36e5f · #e0a79c · #e2e1dd · #90bd94 · #51935a · #296533`

DR-1 applies: the red end carries negative *numeric* meaning only. Threshold
(text) form from the shipped implementation: clearly-negative → Data Red
`#c02617`; thin-but-positive → `ember-text #a84413` (a *warning*, so ember
per DR-1); healthy → `#30783d`. Diverging/sequential-filled panels sit on
paper, never directly on wheat.

## Status chips (DR-3, two tiers)

Tint chips for table-scale text (solid brand chips fail small-text contrast):
success = `success-tint #ecf7ee` bg / `primary-interactive #296533` text /
`#abcfae` border; warning-pending-canceled-past-due = `warning-tint #fbede4` /
`ember-text #a84413` / `#eec4a9`; info = `info-tint #e7eef5` /
`info-strong #2a5b88` / `#aec7e0`. The brand's solid poster chips
(`#60bf71` + deep green, `#e8773e` + white) are reserved for ≥18px badge
text. In the kit: `Badge` is the solid tier, `StatusChip` is the tint tier.

## Domain ramps

A domain-specific ordinal ramp may be sanctioned where the diverging scale
would violate DR-1 on non-numeric data (example: the storefront's 5-tier
rating fill `#c05017 · #b56f1c · #8a7b24 · #58712c · #296533`). Name it as a
token in the owning repo; never reuse Data Red in it.
