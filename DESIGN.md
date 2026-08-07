---
name: Harvey's
colors:
  background: "#ffffff"
  surface: "#ffffff"
  # Wheat family (DR-2): bare "wheat" is #d8c7a2; lighter shades take modifiers.
  wheat: "#d8c7a2"
  wheat-light: "#e7ddc6"
  wheat-pale: "#f5f1e7"
  sand: "#ece5d3"
  surface-panel: "#fafaf9"
  cream: "#f6eceb" # blush surface, primarily print — never a name for #f5f1e7
  primary: "#1a4121"
  primary-interactive: "#296533"
  primary-hover: "#2b3c1d"
  on-primary: "#ffffff"
  on-primary-muted: "#a6dbaf"
  secondary: "#c05017"
  secondary-interactive: "#e56625"
  ember-hover: "#e8763c"
  ember-text: "#a84413" # AA ember text on tints; also the pressed/hover of secondary #c05017
  on-secondary: "#ffffff"
  neutral-gray: "#e2e1dd"
  text: "#10181f"
  text-secondary: "#57534e"
  text-tertiary: "#474440"
  success-bg: "#60bf71"
  success-text: "#1a4121"
  success-tint: "#ecf7ee"
  success-tint-border: "#abcfae"
  warning-bg: "#e8773e"
  warning-tint: "#fbede4"
  warning-tint-border: "#eec4a9"
  info: "#3d76a9" # chips + dataviz slot 6 only — never a UI accent
  info-strong: "#2a5b88"
  info-tint: "#e7eef5"
  info-tint-border: "#aec7e0"
  data-negative: "#c02617" # DR-1: negative numeric semantics only
  data-negative-strong: "#a21c10"
  data-negative-deep: "#791b11"
  data-negative-tint: "#fcece9"
  data-negative-border: "#e9b6ad"
  focus-ring: "#52ba64" # 2px solid + 2px offset, all interactive controls
  focus-ring-ember: "rgba(232,118,60,0.35)" # ember-family controls only, rationed
  border-soft: "rgba(16,24,31,0.10)"
  border: "rgba(16,24,31,0.12)"
  border-strong: "rgba(16,24,31,0.20)"
  scrim: "rgba(16,24,31,0.4)"
  black: "#10181f"
  white: "#ffffff"
dataviz:
  # Validated palettes (see skills/harveys-brand/references/dataviz.md).
  # Categorical slots are fixed-order, never re-ranked; >8 series cycle i % 8.
  categorical:
    - "#296533"
    - "#e8763c"
    - "#0d9488"
    - "#ef9f27"
    - "#30783d"
    - "#3d76a9"
    - "#c05017"
    - "#52ba64"
  sequential:
    - "#76b97d"
    - "#5aa363"
    - "#408d4c"
    - "#2f763b"
    - "#235f2e"
    - "#1e4725"
  diverging:
    - "#c02617"
    - "#d36e5f"
    - "#e0a79c"
    - "#e2e1dd"
    - "#90bd94"
    - "#51935a"
    - "#296533"
effects:
  shadow-float: "0 12px 32px rgba(16,24,31,0.14)" # ONLY floating layers that overlap their own trigger; everything else is flat
typography:
  display:
    fontFamily: Chakra Petch
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2727"
    letterSpacing: 0.1em
    textTransform: uppercase
  headline:
    fontFamily: Chakra Petch
    fontSize: 36px
    fontWeight: "700"
    lineHeight: "1.2727"
    letterSpacing: 0.1em
    textTransform: uppercase
  title:
    fontFamily: Chakra Petch
    fontSize: 24px
    fontWeight: "700"
    lineHeight: "1.2727"
    letterSpacing: 0.1em
    textTransform: uppercase
  subhead:
    fontFamily: TT Commons Pro
    fontSize: 20px
    fontWeight: "500"
    lineHeight: "1.75"
    letterSpacing: "0"
  body:
    fontFamily: TT Commons Pro
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
    letterSpacing: "0"
  label:
    fontFamily: TT Commons Pro
    fontSize: 14px
    fontWeight: "700"
    lineHeight: "1.25"
    letterSpacing: "0"
  body-fallback:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.4545"
    letterSpacing: "0"
rounded:
  DEFAULT: 0px
  buttons: 0px
  cards: 0px
  chips: 0px
  checkbox: 0.125rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 80px
  card-padding: 48px
  gutter: 16px
  page-margin: 16px
  touch-target-min: 44px # accessibility floor, not a spacing step
---

# Design System: Harvey's

## 1. Visual Theme & Atmosphere

Harvey's is a mid-Michigan agricultural brand founded in 1945 (with mill roots
back to 1866), spanning five sub-brands: Seed, Feed, Commodities, Retail, and
the Garden Center. The visual language is **warm, grounded, and hardworking** —
a modern refresh of a heritage farm brand. The palette reads like the landscape
it serves: deep forest green, harvest orange, and sun-bleached wheat neutrals.
The brand's own words: honest, humble, down-to-earth, dependable — never
aggressive, pretentious, or rigidly corporate.

The design personality comes from a deliberate tension: **squared-off,
industrial geometry** (zero border radius anywhere, uppercase letterspaced
display type in the techy Chakra Petch) softened by **warm cream-wheat
backgrounds and generous whitespace**. Pages breathe in tall 80px section
bands that alternate between white, pale wheat, saturated wheat, and full-bleed
deep green — like fields in rotation. Subtle topographic contour-line SVG
patterns and corner ornaments decorate hero and feature sections. Density is
low; content is centered, editorial, and unhurried.

## 2. Color Palette & Roles

The brand deliberately consolidates to **six muted, modern colors** chosen to
work in both print and digital. Print (Pantone/CMYK) equivalents are part of
the system and should travel with it.

### Primary Foundation

| Name                   | Hex       | Print                            | Role                                                    |
| :--------------------- | :-------- | :------------------------------- | :------------------------------------------------------ |
| **Paper White**        | `#FFFFFF` | White                            | Page background, cards, panels                          |
| **Pale Wheat**         | `#F5F1E7` | tint of PMS 453                  | Alternating section background                          |
| **Warm Wheat**         | `#E7DDC6` | tint of PMS 453                  | Saturated section bands (Colors, Writing, Architecture) |
| **Harvest Wheat**      | `#D8C7A2` | PMS 453 · CMYK 0,6,22,14         | Signature accent — eyebrow label chips, wheat swatch    |
| **Soft Cream**         | `#F6ECEB` | _use white for print_            | Gentle blush surface — primarily a print-design surface; never a name for `#F5F1E7` |
| **Cool Concrete Gray** | `#E2E1DD` | PMS Cool Grey 4 · CMYK 10,8,10,0 | Neutral surface, logo backgrounds                       |

### Accent & Interactive

| Name                       | Hex       | Print                            | Role                                                                                                                                                       |
| :------------------------- | :-------- | :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deep Forest Green**      | `#1A4121` | Pantone 2411 C · CMYK 60,0,49,75 | Brand anchor — hero/logo section backgrounds, primary logo color. (`#2B3C1D` appears in specs as a near-duplicate moss variant; consolidate to `#1A4121`.) |
| **Field Green**            | `#296533` | —                                | Interactive green — buttons, links, tab underlines; hover darkens toward `#2B3C1D`                                                                         |
| **Harvest Orange (print)** | `#C05017` | PMS 167 · CMYK 0,58,88,25        | Official brand orange for print and swatches                                                                                                               |
| **Ember Orange (screen)**  | `#E56625` | —                                | Screen-brightened orange — secondary buttons, callout labels, "Rebrand" badges; hover `#E8763C`                                                            |
| **Ink Black**              | `#10181F` | PMS Black 6 · CMYK 48,23,0,88    | Not pure black — a deep blue-cast ink used for all body text and negative logos                                                                            |

Rule of thumb: green is the brand's voice, orange is its exclamation point.
Orange appears in small, bold doses (labels, secondary buttons); it never
floods a layout except in the full-bleed Values band.

### Typography & Text Hierarchy

- **Primary text** — Ink Black `#10181F` on light surfaces
- **Secondary text** — Warm Stone Gray `#57534E` (ledes, descriptions, form labels)
- **Tertiary/dark gray** — `#474440`
- **On deep green** — white headlines, Soft Sage `#A6DBAF` for supporting copy
- **On orange** — white only

### Functional States

Status runs on a **two-tier chip system** (DR-3): solid poster chips for badge
text ≥18px, tint chips for table-scale text — solid brand chips fail
small-text contrast below that.

- **Success / Completed** — solid: `#60BF71` fill with Deep Forest Green text,
  uppercase Chakra Petch bold; tint: `success-tint #ECF7EE` fill /
  `primary-interactive #296533` text / `#ABCFAE` border
- **Warning / Canceled / Pending / Past-due** — solid: `#E8773E` fill with
  white text; tint: `warning-tint #FBEDE4` / `ember-text #A84413` /
  `#EEC4A9` border
- **Info / In-progress** — tint only: `info-tint #E7EEF5` /
  `info-strong #2A5B88` / `#AEC7E0` border. The `info` slate `#3D76A9` is a
  derived hue scoped to chips and dataviz slot 6 — never a UI accent
- **Prohibition / "Don't"** — brick red `#C02617`, used only for ⊘ icons in do/don't lists
- **Data Red (data-only exception)** — brick `#C02617` may encode negative
  _numeric_ meaning — losses, negative deltas, down-moves, the low end of
  diverging signed scales — in domains where users read red-down/green-up.
  Never in UI chrome: errors, warnings, and destructive intents stay ember
  orange (see `decisions.md`, DR-1). Its support family (`data-negative-strong
  #A21C10`, `-deep #791B11`, `-tint #FCECE9`, `-border #E9B6AD`) carries the
  same DR-1-only restriction
- **Focus** — 2px solid ring in Sage `focus-ring #52BA64` with a 2px offset,
  on every interactive control; ember-family controls may instead use the
  rationed `focus-ring-ember rgba(232,118,60,.35)` soft ring

## 3. Typography Rules

### Hierarchy & Weights

Two brand typefaces, each with a licensed-font-unavailable fallback:

- **Chakra Petch Bold (700)** — _"funky, unique… both modern and classic."_
  Display, headlines, titles, wordmark, accents. Always **UPPERCASE** with wide
  tracking (140/1000 em ≈ `0.1em` on the web) and tight 1.2727 line-height.
  Its squared, semi-technical letterforms are the single most recognizable
  brand gesture.
- **TT Commons Pro** (Adobe Typekit) — the workhorse. **DemiBold (500)** at
  1.75 line-height for subheads, long headlines, and lead copy 18pt and up;
  **Regular (400)** at 1.5 line-height for body, long text, and UI below 18pt.
  "A versatile sans serif that bestows a dusting of elegance and authority."
- **Fallbacks** (email, Google products, anywhere fonts can't embed):
  **Catamaran Bold (800)**, tracking 160/1000 em, for headlines;
  **Open Sans Regular (400)**, 1.4545 line-height, for body.

Observed scale: masthead display 3–4rem (`text-5xl`/`text-6xl`); section
headlines 2.25rem rising to 3rem on desktop; card titles 2.25rem; sub-titles
1.25–1.5rem; body 1rem; nav links and buttons 0.875rem.

Display headlines use the **responsive ladder 30 → 36 → 48px**
(`text-3xl sm:text-4xl lg:text-5xl`) rather than a fixed size — a long
uppercase word at 0.1em tracking overflows a 390px viewport at 36px.
Tracking: **0.1em for display/headline/title; 0.08em for small caps at 12px
and below** (0.1em over-opens dense table headers).

### Spacing Principles

Headlines sit on tight leading (1.2727) and are always letterspaced when in
Chakra Petch — never track out body copy. Body copy is constrained to
comfortable measures (`max-w-md`/`max-w-xl`, roughly 28–36rem). Section ledes
get 1.5–3rem of margin below before content begins. In regular prose the name
is written "Harvey's" — capital H, apostrophe-s; all-caps belongs to the logo
and headlines only. "Harvey Milling" is retired from public branding.

## 4. Component Stylings

### Buttons

Perfectly square — **no border radius**. Padding `24px × 12px`, small bold
label (0.875rem, TT Commons Pro Bold). Primary: Field Green `#296533` fill,
white text, darker green hover. Secondary: Ember Orange `#E56625` fill, white
text, `#E8763C` hover. All buttons: the 2px Sage `#52BA64` focus ring with 2px
offset (ember controls may use the soft ember ring), 200ms ease transitions on
color. Full-width in forms and mobile drawers, auto-width inline.

### Cards & Spec Panels

Flat, sharp-cornered rectangles. White cards (`padding: 48px`) float on wheat
section backgrounds with at most a whisper of shadow (`shadow-sm`) — most are
completely flat, defined by background contrast alone. Warm off-white
(`#FAFAF9`) panels hold type specimens and do/don't lists on white sections.
The signature card pattern is the **color spec card**: a 64px solid swatch
square, then an uppercase Chakra Petch title, then PMS / CMYK / RGB / HEX rows
in gray with bold values.

### Navigation

Green "H" monogram at left; centered horizontal link list (0.875rem,
sentence case, hover shifts to
warm gray `#44403C`); hamburger only below `lg`. Mobile nav is a white
left-drawer over an 80% dark scrim, links stacked at 1.5rem intervals.
Below the bar, the masthead headline sets "Brand" in near-black green
(`#13391A`) and "Guidelines" in Field Green — a two-tone display treatment
worth reusing.

### Inputs & Forms

Square fields with 1px hairline (`border rgba(16,24,31,.12)`; `border-soft`
.10 and `border-strong` .20 are the lighter/heavier steps) borders, roomy
`24px × 12px` padding, small text, muted gray placeholders. Focus adds the
2px Sage `#52BA64` ring with 2px offset. Labels sit above fields in
Warm Stone Gray. Checkboxes are 16px squares (2px radius — the only rounding
in the system); radios are circles filled with a green dot. Links are Field
Green with underline or darker green on hover.

### Eyebrow Label Chips (signature)

Every section opens with a small rectangular chip: bold 0.875–1rem label,
`8px × 4px` padding, no radius, centered above the headline. Fill rotates by
context — Harvest Wheat `#D8C7A2` on light sections, Ember Orange with white
text for emphasis, lighter green `#30783D` with white text on deep green, and
inverted (white chip, orange text) on the orange Values band.

### Status Chips & Tables

Table status chips: `12px × 4px` padding, uppercase Chakra Petch bold, square
corners. At badge scale (≥18px text): solid green chip for Completed, solid
orange chip for Canceled/Pending. At table scale: the tint triads
(success/warning/info — see Functional States); the seed-tag label size is
**12px** (`text-xs`), with 10.5–11px permitted only in dense table headers.
Table rows alternate white and pale tint with hairline borders.

### Data Visualization

Bar charts on white panels floated over wheat sections. **Brand green for the
hero/product series; a pale "putrid" light green for competitor series.** All
chart UI copy other than the title is TT Commons Pro Regular. Padding and
margin are left to discretion — applications vary.

### Decorative Elements

Thin contour-line SVG patterns (like field topography) overlay the deep green
hero and wheat feature bands. L-shaped corner ornaments frame the UI Elements
section. These add texture without competing with content.

## 5. Layout Principles

### Grid & Structure

Centered `.container` with `16px` side padding; 12-column flex grid via
half/third width columns with `16px` gutters (`-m-4` / `p-4` pattern).
Breakpoints: `xs 480 · sm 640 · md 768 · lg 1024 · xl 1216`. Feature rows are
50/50 two-column at `lg`, stacking to full width below. Voice cards run
three-up at `lg`.

### Whitespace Strategy

4px base unit. Sections are generous **80px vertical bands** (occasionally
128px for showpieces like Values); cards use 48px internal padding. One
notable device: the Writing section's white cards intentionally overhang the
wheat band (~200px negative offset) into the section below.

### Alignment & Visual Balance

Section headers are centered: chip → uppercase headline (constrained to
`max-w-2xl`–`5xl`) → gray lede (`max-w-xl`). Content below breaks into
left-aligned two-column rows, often with the headline in the left column and
prose in the right. Full-bleed color bands (deep green story hero, orange
values wall, wheat specimen sections) punctuate the white rhythm and carry
the brand's boldest moments.

### Responsive Behavior & Touch

Desktop-first content in a mobile-safe flex system: columns stack below `lg`,
nav collapses to the drawer, display type steps down one size (`text-4xl` →
`text-5xl` at `lg`). Buttons go full-width on small screens. Touch targets
(buttons ~45px tall, 80px table rows) are comfortable.

## 6. Design System Notes for AI Generation

Retheming an existing app? Do not restyle from this spec alone — follow the
retheming procedure shipped alongside it (`retheming.md`) end to end. Use the
token crosswalk (`tokens.md`) for every name → hex mapping, and check
`decisions.md` before resolving any brand-vs-domain conflict yourself.

### Language to Use

"Warm heritage agricultural brand." "Squared-off and flat — zero border
radius on everything." "Uppercase, widely letterspaced technical display type
(Chakra Petch) over a humble humanist sans (TT Commons Pro / Open Sans)."
"Alternating white and wheat-cream section bands with occasional full-bleed
deep forest green." "Flat white cards on wheat backgrounds, defined by
contrast not shadows." "Small rectangular eyebrow chips above every section
title." "Honest, down-to-earth, never corporate."

### Color References

- Deep Forest Green `#1A4121` — brand anchor, hero backgrounds, logos
- Field Green `#296533` — buttons, links, interactive
- Ember Orange `#E56625` — secondary CTA, emphasis labels (hover `#E8763C`; print: `#C05017`, PMS 167; AA text on tints `#A84413`)
- Wheat `#D8C7A2` — the signature accent, and the family's bare name (PMS 453)
- Wheat Light `#E7DDC6` / Wheat Pale `#F5F1E7` / Sand `#ECE5D3` — section backgrounds and surfaces
- Cool Concrete Gray `#E2E1DD` — neutral surfaces (PMS Cool Grey 4)
- Ink Black `#10181F` — all text (PMS Black 6)
- Soft Cream `#F6ECEB` — blush surface, primarily print; never a name for `#F5F1E7`

### Component Prompts

1. "A section on a warm wheat (`#E7DDC6`) background with a faint contour-line
   pattern: centered `#D8C7A2` rectangular label chip reading 'COLORS', an
   uppercase widely-letterspaced bold headline in Chakra Petch, a centered
   gray lede, then a two-column grid of flat white square-cornered cards with
   48px padding, each holding a 64px color swatch square, an uppercase title,
   and PMS/CMYK/RGB/HEX spec rows."
2. "A full-bleed deep forest green (`#1A4121`) hero with thin contour-line
   texture: small light-green chip, white uppercase Chakra Petch headline at
   3rem with 0.1em tracking, soft sage (`#A6DBAF`) supporting sentence."
3. "A form card: square inputs with 1px light-gray borders and 24×12px
   padding, gray labels above fields, a full-width square `#296533` green
   button with bold white 14px text, and a square `#E56625` orange secondary
   button below it."

### Incremental Iteration

- Keep corners square everywhere; if something looks rounded, remove the
  radius rather than shrinking it.
- If a licensed-font context fails, swap Chakra Petch → Catamaran ExtraBold
  (tracking up to 0.16em) and TT Commons Pro → Open Sans; never substitute
  other fonts.
- When adding color, reach for wheat tints before grays, and green before
  orange; orange is an accent dose, not a field — except the all-orange
  values/mission band, which is the sanctioned exception.
- Charts: hero data in brand green, competitors in pale desaturated green;
  chart copy in TT Commons Pro Regular.
- Voice in UI copy: plain, warm, direct — "We care. We'll go out of our way
  to make it right." Avoid drama, superlatives, and corporate stiffness.
