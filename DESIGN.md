---
name: Harvey's
colors:
  background: '#ffffff'
  surface: '#ffffff'
  surface-wheat-pale: '#f5f1e7'
  surface-wheat: '#e7ddc6'
  surface-panel: '#fafaf9'
  surface-cream: '#f6eceb'
  primary: '#1a4121'
  primary-interactive: '#296533'
  primary-hover: '#2b3c1d'
  on-primary: '#ffffff'
  on-primary-muted: '#a6dbaf'
  secondary: '#c05017'
  secondary-interactive: '#e56625'
  on-secondary: '#ffffff'
  accent-wheat: '#d8c7a2'
  neutral-gray: '#e2e1dd'
  text: '#10181f'
  text-secondary: '#57534e'
  text-tertiary: '#474440'
  success-bg: '#60bf71'
  success-text: '#1a4121'
  warning-bg: '#e8773e'
  danger: '#c02617'
  black: '#10181f'
  white: '#ffffff'
typography:
  display:
    fontFamily: Chakra Petch
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2727'
    letterSpacing: 0.1em
    textTransform: uppercase
  headline:
    fontFamily: Chakra Petch
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2727'
    letterSpacing: 0.1em
    textTransform: uppercase
  title:
    fontFamily: Chakra Petch
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2727'
    letterSpacing: 0.1em
    textTransform: uppercase
  subhead:
    fontFamily: TT Commons Pro
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.75'
    letterSpacing: '0'
  body:
    fontFamily: TT Commons Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label:
    fontFamily: TT Commons Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: '0'
  display-fallback:
    fontFamily: Catamaran
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2727'
    letterSpacing: 0.16em
    textTransform: uppercase
  body-fallback:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.4545'
    letterSpacing: '0'
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

| Name | Hex | Print | Role |
|:---|:---|:---|:---|
| **Paper White** | `#FFFFFF` | White | Page background, cards, panels |
| **Pale Wheat** | `#F5F1E7` | tint of PMS 453 | Alternating section background |
| **Warm Wheat** | `#E7DDC6` | tint of PMS 453 | Saturated section bands (Colors, Writing, Architecture) |
| **Harvest Wheat** | `#D8C7A2` | PMS 453 · CMYK 0,6,22,14 | Signature accent — eyebrow label chips, wheat swatch |
| **Soft Cream** | `#F6ECEB` | *use white for print* | Gentle blush-cream surface |
| **Cool Concrete Gray** | `#E2E1DD` | PMS Cool Grey 4 · CMYK 10,8,10,0 | Neutral surface, logo backgrounds |

### Accent & Interactive

| Name | Hex | Print | Role |
|:---|:---|:---|:---|
| **Deep Forest Green** | `#1A4121` | Pantone 2411 C · CMYK 60,0,49,75 | Brand anchor — hero/logo section backgrounds, primary logo color. (`#2B3C1D` appears in specs as a near-duplicate moss variant; consolidate to `#1A4121`.) |
| **Field Green** | `#296533` | — | Interactive green — buttons, links, tab underlines; hover darkens toward `#2B3C1D` |
| **Harvest Orange (print)** | `#C05017` | PMS 167 · CMYK 0,58,88,25 | Official brand orange for print and swatches |
| **Ember Orange (screen)** | `#E56625` | — | Screen-brightened orange — secondary buttons, callout labels, "Rebrand" badges; hover `#E8763C` |
| **Ink Black** | `#10181F` | PMS Black 6 · CMYK 48,23,0,88 | Not pure black — a deep blue-cast ink used for all body text and negative logos |

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

- **Success / Completed** — leaf-green chip: `#60BF71`-range background with Deep Forest Green text, uppercase Chakra Petch bold
- **Warning / Canceled / Pending** — soft orange chip `#E8773E`-range with white text
- **Prohibition / "Don't"** — brick red `#C02617`, used only for ⊘ icons in do/don't lists
- Focus states — 3px soft ring in the button's own hue (light green `#52BA64`-range or light orange)

## 3. Typography Rules

### Hierarchy & Weights

Two brand typefaces, each with a licensed-font-unavailable fallback:

- **Chakra Petch Bold (700)** — *"funky, unique… both modern and classic."*
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
text, lighter/darker orange hover. All buttons: 3px soft focus ring in their
own hue, 200ms ease transitions on color. Full-width in forms and mobile
drawers, auto-width inline.

### Cards & Spec Panels

Flat, sharp-cornered rectangles. White cards (`padding: 48px`) float on wheat
section backgrounds with at most a whisper of shadow (`shadow-sm`) — most are
completely flat, defined by background contrast alone. Warm off-white
(`#FAFAF9`) panels hold type specimens and do/don't lists on white sections.
The signature card pattern is the **color spec card**: a 64px solid swatch
square, then an uppercase Chakra Petch title, then PMS / CMYK / RGB / HEX rows
in gray with bold values.

### Navigation

Header sits on a white-to-pale-wheat vertical gradient. Green "H" monogram at
left; centered horizontal link list (0.875rem, sentence case, hover shifts to
warm gray `#44403C`); hamburger only below `lg`. Mobile nav is a white
left-drawer over an 80% dark scrim, links stacked at 1.5rem intervals.
Below the bar, the masthead headline sets "Brand" in near-black green
(`#13391A`) and "Guidelines" in Field Green — a two-tone display treatment
worth reusing.

### Inputs & Forms

Square fields with 1px light gray (`#E7E5E4`) borders, roomy `24px × 12px`
padding, small text, muted gray placeholders. Focus swaps the border ring for
a soft 3px gray glow — understated, not colorful. Labels sit above fields in
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
corners — green chip for Completed, orange chip for Canceled/Pending. Table
rows alternate white and pale tint with hairline borders; headers are small
uppercase semi-bold at 40% opacity.

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
- Ember Orange `#E56625` — secondary CTA, emphasis labels (print: `#C05017`, PMS 167)
- Harvest Wheat `#D8C7A2` — signature accent chips (PMS 453)
- Warm Wheat `#E7DDC6` / Pale Wheat `#F5F1E7` — section backgrounds
- Cool Concrete Gray `#E2E1DD` — neutral surfaces (PMS Cool Grey 4)
- Ink Black `#10181F` — all text (PMS Black 6)
- Soft Cream `#F6ECEB` — gentle blush surface

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
