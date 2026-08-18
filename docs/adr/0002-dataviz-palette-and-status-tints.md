# The validated dataviz palettes and status tints are canon

The stats-dashboard retheme (2026-08-05) resolved what the brand book left
open — categorical, sequential, and diverging chart palettes, plus a
tint-chip tier for table-scale statuses — with validator evidence (OKLCH
lightness band, chroma floor, CVD adjacent-pair separation, normal-vision
floor, surface contrast). That work lived only in the consumer repo and an
untracked snapshot here. The 2026-08-06 cross-product decision pass
(`docs/consistency/DECISIONS.md`) accepted it into canon.

We promoted the palettes into `DESIGN.md`'s frontmatter (`dataviz:` block and
the status-tint/info/Data-Red-family color tokens) and rewrote the method
notes repo-neutrally as `skills/harveys-brand/references/dataviz.md`, so both
travel through the plugin and clone-snapshot channels. The untracked
`docs/design-system/` folder — a stale copy of this repo's own
`.design-sync/docs` assembled for the stats app, whose only novel content was
the palette file — was deleted after the promotion; this ADR is the pointer
left behind.

## Consequences

- Teal `#0D9488`, gold `#EF9F27`, and slate `#3D76A9` are sanctioned as
  **derived dataviz utility hues** (slate doubles as the `info` chip hue);
  they never appear as UI accents. Gold's provenance predates the brand book
  and its canon name is deliberately unsettled.
- Status is two-tier per DR-3: solid poster chips ≥18px, tint triads at table
  scale. The kit expresses this as `Badge` (solid) vs `StatusChip` (tint).
- Data Red's support family (`-strong/-deep/-tint/-border`) enters canon
  carrying the same DR-1 restriction as the base hex.
- Consumers must take chart colors from the `dataviz:` frontmatter, not from
  screenshots; per-repo parity tests are the enforcement hook.
