# Brand decision records & shared glossary

Pre-resolved conflicts between Harvey's brand rules and common domain
conventions. Check here **before** resolving any brand-vs-domain collision
yourself; cite these records instead of re-arguing them.

## DR-1 — Data Red: brick red is sanctioned for numeric losses only

**Status: accepted.**

Harvey's brand forbids red in UI ("errors/warnings are ember, never red"); the
only red in the palette is brick `#C02617`, specced for prohibition icons. But
financial and trading domains read red-down / green-up as native language.

**Decision:** `#C02617` ("Data Red") is permitted exclusively for negative
*numeric* semantics — losses, negative deltas, down-moves, and the low end of
diverging signed scales. All UI errors, warnings, and destructive intents use
the ember orange family. The no-red rule stays in force for chrome: a form
error, a failed state, a destructive button is ember, never red.

**Considered and rejected:**

- *Ember for negatives* (brand-pure) — a loss dressed as "warning orange"
  costs the reader legibility.
- *Neutral ink for negatives* — loses the signed-value signal entirely.

## Shared glossary

Use these names in ADRs, commit messages, and reviews.

- **Data Red** — brick `#C02617` carrying negative numeric meaning in data.
  *Avoid:* "error red", "danger" (for UI states).
- **Ember** — the brand orange family (`#E56625`, dark `#C05017`); carries all
  UI warnings, errors, and destructive intents, plus rationed secondary
  emphasis. There is no red in UI chrome. *Avoid:* "amber", "warning-yellow".
- **Wheat** — the cream/neutral surface family (`#F5F1E7` / `#E7DDC6` /
  `#D8C7A2`) for tinted panels and header bands. *Avoid:* "beige", "tan".
- **Seed-tag header** — the signature table-header treatment: a wheat band
  with small, bold, uppercase, widely-tracked column labels.
- **Display face** — Chakra Petch bold, always uppercase and widely tracked.
  Appears only as page titles, card titles, table headers, status chips, and
  KPI numerals. *Avoid:* body copy or dense table figures.
- **Body face** — TT Commons Pro (sanctioned fallback: Open Sans). Everything
  the display face doesn't own, including in-table figures.
- **KPI numeral** — a large headline metric set in the display face.
- **Harvey's** — in prose, always capital H + apostrophe-s. ALL-CAPS belongs
  to logos and headlines only. *Avoid:* HARVEY'S in prose, "Harvey Milling"
  (retired name).

## Framework for conflicts this file doesn't cover (MUST)

When a domain convention collides with a brand rule and no record above
resolves it:

1. **Decide before recoloring.** The decision is Phase 0 work; code waits.
2. **Write an ADR in the target repo** (status / context / decision /
   considered options). One considered option must be the brand-pure reading,
   so the exception is argued against the rule it bends.
3. **Constrain any exception:** UI chrome stays brand-pure; exceptions attach
   to *data semantics* (what a value means), never to UI states; reuse
   existing brand hexes — never invent new hues.
4. **Name it.** Add the term to the target repo's glossary and cite it
   thereafter, the way DR-1 coined "Data Red".
