---
name: harveys-brand
description: Apply the Harvey's brand when building or styling UI. Use when asked to Harvey's-theme or retheme a project or an existing app, apply Harvey's brand colors, typography, or voice, restyle screens to match Harvey's, or keep new UI brand-consistent.
---

# Harvey's brand

Read the canonical Design Spec in full before styling anything: use
`references/DESIGN.md` in a repo-scoped Codex install, or
`${CLAUDE_PLUGIN_ROOT}/DESIGN.md` when this skill is loaded as a plugin. It
covers the palette (with print equivalents), typography, component stylings,
layout principles, and voice. Resolve all relative paths below from this
`SKILL.md`.

## Pick your path

**Quick styling touch** — one component or screen, in an app already on the
brand: DESIGN.md + the non-negotiables below, exact hexes from
`references/tokens.md`, and the recipes in `references/conventions.md` for a
repo-scoped Codex install or `${CLAUDE_PLUGIN_ROOT}/.design-sync/conventions.md`
when loaded as a plugin.

**Full retheme** — or *any* change touching colors across multiple files: you
MUST follow `references/retheming.md` end to end. Do not write styling code
before its Phase 0 (semantics) is settled and committed. A spec-only retheme
produces re-skinned slop; the procedure is what makes the result look designed.

## Retheme non-negotiables (the digest, if you read nothing else)

1. **Semantics before code.** Check `references/decisions.md` for pre-resolved
   brand-vs-domain conflicts; new conflicts get an ADR + glossary in the
   target repo before any recoloring.
2. **Census before replacement.** Inventory every color/radius/font literal
   and what consumes it (style objects vs SVG attributes vs canvas/chart
   paint vs color math) before changing one.
3. **Token layer first**, as its own commit, named by job using DESIGN.md's
   semantic tokens — never this repo's Tailwind scale names.
4. **The mechanical pass must be provably total and idempotent** — dry run
   reports 0 unknowns; a second run reports 0 replacements.
5. **Map meaning to meaning, never color to color.** The same old hex can be
   a loss, an error, and a focus ring — those map to different tokens.
6. **Done means verified:** build/lint green, legacy-hex grep returns
   nothing, and a screenshot pass of every route confirms the semantic
   invariants (losses in Data Red only, warnings ember, no unpainted SVG).

## Brand non-negotiables

- **Square everywhere.** Zero border radius on buttons, cards, chips, inputs.
  The single exception: 16px checkboxes at 2px radius. If something looks
  rounded, remove the radius — don't shrink it.
- **Palette.** Field Green `#296533` for interactive (buttons, links); Deep
  Forest Green `#1A4121` as the brand anchor (hero bands, logos); Ember Orange
  `#E56625` as a rationed accent — small bold doses, never a routine fill;
  wheat neutrals `#F5F1E7` / `#E7DDC6` / `#D8C7A2` for section backgrounds and
  signature chips; Ink Black `#10181F` (not pure black) for all text.
- **No red in UI.** Errors and warnings are ember orange. Brick red `#C02617`
  has exactly two sanctioned uses: the ⊘ glyph in do/don't lists, and Data
  Red — negative *numeric* data (losses, down-moves) in red-down/green-up
  domains (see `references/decisions.md`, DR-1). Never for UI states.
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

## What ships where

- `references/DESIGN.md` in a repo-scoped Codex install, or
  `${CLAUDE_PLUGIN_ROOT}/DESIGN.md` in the plugin — the canonical spec; read
  first, always.
- `references/retheming.md` — the retheme procedure
  (phases, provable-codemod rules, gates, review).
- `references/tokens.md` — the only sanctioned
  name → hex → Tailwind-class crosswalk, including this repo's naming traps.
- `references/decisions.md` — pre-resolved
  brand-vs-domain conflicts (Data Red, wheat naming, chip tiers, focus ring),
  shared glossary, and the framework for new conflicts.
- `references/dataviz.md` — the validated chart
  palettes (categorical/sequential/diverging), status-tint triads, and their
  usage rules; values mirrored in `DESIGN.md`'s `dataviz:` frontmatter.
- `references/conventions.md` in a repo-scoped Codex install, or
  `${CLAUDE_PLUGIN_ROOT}/.design-sync/conventions.md` in the plugin — usage
  rules and recipes: button intents, flat-and-square,
  focus/selected/disabled/error states, seed-tag header.
- Plugin installs also include `.design-sync/docs/*.md` and
  `src/components/ui/` as component notes and reference implementations.

## Fonts

Chakra Petch, Open Sans, and Catamaran load from Google Fonts; TT Commons Pro
from Adobe Typekit (`https://use.typekit.net/ooa7szh.css`). Prefer loading
these over bundling `@font-face` yourself. The Typekit kit is domain-scoped —
on a new app's domain TT Commons Pro won't load, so ship Open Sans as the body
face behind a font token and upgrade later by adding the domain to the kit.
