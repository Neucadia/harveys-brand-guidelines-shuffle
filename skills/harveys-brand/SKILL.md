---
name: harveys-brand
description: Apply the Harvey's brand when building or styling UI. Use when asked to Harvey's-theme a project, apply Harvey's brand colors, typography, or voice, restyle screens to match Harvey's, or keep new UI brand-consistent.
---

# Harvey's brand

Read `${CLAUDE_PLUGIN_ROOT}/DESIGN.md` in full before styling anything — it is
the canonical Design Spec: palette (with print equivalents), typography,
component stylings, layout principles, and voice. Everything below is only the
digest of its non-negotiables.

## Non-negotiables

- **Square everywhere.** Zero border radius on buttons, cards, chips, inputs.
  The single exception: 16px checkboxes at 2px radius. If something looks
  rounded, remove the radius — don't shrink it.
- **Palette.** Field Green `#296533` for interactive (buttons, links); Deep
  Forest Green `#1A4121` as the brand anchor (hero bands, logos); Ember Orange
  `#E56625` as a rationed accent — small bold doses, never a routine fill;
  wheat neutrals `#F5F1E7` / `#E7DDC6` / `#D8C7A2` for section backgrounds and
  signature chips; Ink Black `#10181F` (not pure black) for all text.
- **No red.** Errors and warnings are ember orange. Brick red `#C02617`
  appears only as the ⊘ glyph in do/don't lists.
- **Type.** Chakra Petch Bold, always UPPERCASE with ~0.1em tracking, for
  display/headlines. TT Commons Pro for body and UI copy. Fallbacks when
  licensed fonts can't load: Catamaran ExtraBold (display) and Open Sans
  (body) — never substitute other fonts.
- **Layout.** Generous 80px section bands alternating white and wheat, with
  occasional full-bleed deep green. Flat cards defined by background contrast,
  not shadows. Every section opens with a small rectangular eyebrow chip above
  a centered uppercase headline.
- **Voice.** Plain, warm, direct — honest, humble, down-to-earth; never
  aggressive, pretentious, or rigidly corporate. In prose the name is
  "Harvey's"; all-caps belongs to logos and headlines only.

## Fonts

Chakra Petch, Open Sans, and Catamaran load from Google Fonts; TT Commons Pro
from Adobe Typekit (`https://use.typekit.net/ooa7szh.css`). Prefer loading
these over bundling `@font-face` yourself.
