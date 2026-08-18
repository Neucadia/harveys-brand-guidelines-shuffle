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

## DR-2 — Wheat naming: bare "wheat" is #D8C7A2

**Status: accepted (2026-08-06).**

Consumers had four names for the wheat family, including one repo calling
`#F5F1E7` "cream". **Decision:** bare **`wheat` = `#D8C7A2`**; lighter shades
take modifiers — `wheat-light` = `#E7DDC6`, `wheat-pale` = `#F5F1E7`.
`#F5F1E7` always carries a wheat name, never "cream". **`cream` = `#F6ECEB`**
only, a primarily-print surface. `sand` = `#ECE5D3` completes the surface
family.

## DR-3 — Status runs on two chip tiers

**Status: accepted (2026-08-06).**

Solid brand chips (`#60BF71` + deep green, `#E8773E` + white) fail small-text
contrast. **Decision:** solids are reserved for ≥18px badge text; table-scale
statuses use the validated tint triads (success `#ECF7EE`/`#296533`/`#ABCFAE`,
warning `#FBEDE4`/`#A84413`/`#EEC4A9`, info `#E7EEF5`/`#2A5B88`/`#AEC7E0`).
In the kit these are two components: `Badge` (solid) and `StatusChip` (tint) —
tints never become Badge variants. The `info` slate `#3D76A9` is sanctioned
for chips and dataviz slot 6 only, never as a UI accent.

## DR-4 — Focus ring: solid Sage #52BA64

**Status: accepted (2026-08-06).**

Canon's docs said `#52BA64` while the kit and two consumers shipped
`#296533`. **Decision:** the documented value wins — every interactive
control focuses with a **2px solid `#52BA64` ring at 2px offset**; shipped
`#296533` rings migrate. Ember-family controls may instead use the rationed
soft ember ring `rgba(232,118,60,.35)`.

*(The full 120-decision record behind DR-2..4 lives in
`docs/consistency/DECISIONS.md` in the brand-guidelines repo.)*

## Shared glossary

Use these names in ADRs, commit messages, and reviews.

- **Data Red** — brick `#C02617` carrying negative numeric meaning in data.
  *Avoid:* "error red", "danger" (for UI states).
- **Ember** — the brand orange family (`#E56625`, dark `#C05017`); carries all
  UI warnings, errors, and destructive intents, plus rationed secondary
  emphasis. There is no red in UI chrome. *Avoid:* "amber", "warning-yellow".
- **Wheat** — bare "wheat" is `#D8C7A2` (DR-2); the surface family is
  `wheat-pale #F5F1E7` / `wheat-light #E7DDC6` / `wheat #D8C7A2` (+ `sand
  #ECE5D3`) for tinted panels and header bands. *Avoid:* "beige", "tan", and
  "cream" for anything but `#F6ECEB`.
- **Seed-tag header** — the signature table-header treatment: a wheat band
  with small, bold, uppercase, widely-tracked column labels.
- **Display face** — Chakra Petch bold, always uppercase and widely tracked.
  Appears only as page titles, card titles, table headers, status chips, and
  KPI numerals. *Avoid:* body copy or dense table figures.
- **Body face** — TT Commons Pro (sanctioned fallback: Open Sans). Everything
  the display face doesn't own, including in-table figures. **The family tops
  out at DemiBold (600)** — body-face bold is always 600 (`font-semibold`),
  never 700; 700 is Chakra-only.
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
