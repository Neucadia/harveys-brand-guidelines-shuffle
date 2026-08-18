# Harvey's design-language decisions

One consistent component catalogue and design language across Harvey's products. This document lays every design token and every duplicated component treatment side by side across the five sources, flags what violates brand law, and asks you to **choose the canonical implementation** wherever sources genuinely diverge. Consolidation work proceeds from your choices.

Generated 2026-08-06 from the working trees (provenance cited per value). Not yet committed anywhere else; treat this file as the single decision record.

## How to use this document

- Every genuine divergence is a **CHOOSE block**: lettered options with exact values and repo provenance, a recommendation with a one-line rationale, and a `Decision:` line — fill it in (a letter, a value, or your own ruling).
- **Agreements** lists what already matches — nothing to decide there.
- **Flags** are not choices: brand-law violations (fix direction is settled), labeler items (inventory-only — your own pass), and unresolved questions.
- Recommendation defaults, in order: `DESIGN.md` canon → shopify shipped values (board-approved reference) → stats' validated dataviz evidence → labeler. Where canon itself is silent, that's called out.
- **All decisions are recorded** (see "Decisions recorded" below) — every block's `Decision:` line is filled.

## Decisions recorded — 2026-08-06

All 120 blocks are decided: **five user rulings** below, everything else **accepted per recommendation**.

1. **tokens-6 / tokens-7 — the wheat family renames.** `cream` = `#F6ECEB` only (primarily print). Bare `wheat` = `#D8C7A2`; `wheat-light` = `#E7DDC6`; `wheat-pale` = `#F5F1E7` (never named cream, never named anything but wheat); `sand #ECE5D3` joins canon. DESIGN.md frontmatter, tokens.md crosswalk, and every consumer mapping table adopt these names during consolidation.
2. **tokens-11 = B.** No muted-ink promotion — `#7F7973`/`#A9A49C` stay Stats-local; canon seed-tag muted ink = `#57534E`.
3. **tokens-13 = B.** Focus ring = solid `#52BA64` (canon's documented value); the three shipped `#296533` rings migrate.
4. **BADGE-1 = A.** Badge stays solid-poster-only; the tint tier ships as the separate StatusChip component.

## Settled brand law (not open choices)

These are treated as fixed by prior decisions and ADRs; the document flags violations but never offers them as options:

1. **Flat and square** — radius 0 everywhere; sole exceptions: 2px on ~16px checkboxes, `rounded-full` on genuinely circular primitives (switch knobs, spinner rings). No shadows (depth = cream fills + hairline borders). No gradients.
2. **No red in UI chrome** — errors, warnings, destructive intents are the **ember** family. **Data Red `#C02617`** exclusively for negative *numeric* semantics (DR-1), plus the ⊘ glyph in do/don't lists.
3. **Ember is rationed** — small bold doses, never a routine fill or accent.
4. **Sonner-only** toasts — the legacy shadcn Toast/Toaster pair is rejected.
5. **Button synthesis mapping** — green default (system action) / wheat secondary with ink text (commerce action) / ember destructive / 2px green outline with compensated padding.
6. **Type** — display: Chakra Petch bold uppercase ~0.1em tracking (never body copy); body/UI: TT Commons Pro, Open Sans as the sanctioned fallback (and what actually ships today); fallbacks Catamaran ExtraBold / Open Sans; no other faces.
7. **Seed-tag signature** — table headers/group labels/badges: heading face, text-xs, bold, uppercase, widest tracking, muted ink, on cream.
8. **Stats ADRs 0002/0003 stand** — no Tailwind/kit-wholesale, no recharts there; its consistency lever is tokens + recipes.
9. **The printed label in labeler is frozen** (ADR 0006) — no file importing `@react-pdf/renderer` changes, ever.

## The five sources

| Source | Path | Stack | Brand state |
|---|---|---|---|
| **Canon / kit** | `~/Repos/harveys-brand-guidelines-shuffle` (`develop`) | CRA + Tailwind 3.4.17; 38-primitive shadcn-style kit (`src/components/ui/*.js`) + 37 brand sections; DESIGN.md YAML frontmatter is the token spec | Canonical; kit classes use the repo's private Tailwind scale (export forbidden — semantic names are the interface) |
| **Stats** | `~/Repos/stats-harveyscommodites-com` (`develop`) | Next 16 + Convex; **no Tailwind** — CSS-var tokens + ~3,100 inline styles | Themed (8-commit retheme; 2,775 var() refs vs 148 residual hexes). **Production `main` still unthemed.** |
| **Labeler** | `~/Repos/harveys-seed-labeler` (`feature/brandTheming`, local-only) | Next 15 + Tailwind 3.4.17 + shadcn (19 primitives) | Themed (v2 after v1 rejection; 6 ADRs; mechanized brand-sweep). **Inventory-only — user's own pass.** |
| **Shopify** | `~/Repos/harveys-seed-shopify` (`develop` = `main`) | Next 15; hand-rolled vanilla CSS (3,692-line globals), zero UI libs by recorded refusal | **Board-approved shipped reference.** Tokens-only participation. |
| **BC / harveymilling** | github.com/Neucadia/bc-harveymilling-com (`develop`; research clone in session scratchpad) | Next 16 + Convex + Tailwind 3.4.1 + shadcn New York (stone), sonner v2, dark mode wired | **Unthemed** — stock shadcn + ~4,700 hand-placed off-brand hue utilities. |

## Design-token matrix

Path abbreviations (full path at first use): **kit-design** = `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/DESIGN.md` · **kit-tw** = `.../harveys-brand-guidelines-shuffle/src/tailwind/tailwind.config.js` · **kit-tokens** = `.../harveys-brand-guidelines-shuffle/skills/harveys-brand/references/tokens.md` · **kit-dataviz** = `.../harveys-brand-guidelines-shuffle/docs/design-system/dataviz-palette.md` · **kit-conv** = `.../harveys-brand-guidelines-shuffle/.design-sync/conventions.md` · **stats-css** = `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/app/globals.css` · **stats-theme** = `.../stats-harveyscommodites-com/lib/theme.ts` · **stats-shared** = `.../stats-harveyscommodites-com/components/directory/shared.tsx` · **lab-css** = `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/styles/globals.css` · **lab-tw** = `.../harveys-seed-labeler/tailwind.config.ts` · **lab-layout** = `.../harveys-seed-labeler/src/app/layout.tsx` · **shop-css** = `/Users/Sheppardjm/Repos/harveys-seed-shopify/app/globals.css` · **shop-layout** = `.../harveys-seed-shopify/app/layout.tsx` · **shop-plan** = `.../harveys-seed-shopify/.planning/config.json` · **bc-css** = `/private/tmp/claude-501/.../scratchpad/bc-harveymilling-com/app/globals.css` · **bc-tw** = `.../bc-harveymilling-com/tailwind.config.ts`

**Stats uncommitted-diff check:** `git diff app/globals.css` touches ONLY lines 96–129 (shadow softening, `.sbar` transition removal, `prefers-reduced-motion` block). **Every `:root` token at stats-css:6–56 is committed.** `lib/theme.ts` has no diff.

### Greens

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| deep/anchor | `#1a4121` `primary` kit-design:9; `green-700`=`green-800` kit-tw:1008–1009 | `--green-deep: #1a4121` stats-css:20 | `brand.forest #1A4121` lab-tw:82; `green-700/800` lab-tw:126–127 | `--color-pine: #1a4121` shop-css:3 | — |
| interactive | `#296533` `primary-interactive` kit-design:10; `green-500` kit-tw:1011 | `--green: #296533` stats-css:20 | `--primary: 130 42.3% 27.8%` = **#296533** lab-css:28; `brand.field` lab-tw:83 | `--color-forest: #296533` shop-css:2 | — |
| hover on green fill | `#2b3c1d` `primary-hover` kit-design:11; `green-600` kit-tw:1010 | `--green-hover: #2b3c1d` stats-css:20 | `brand.field-hover #2B3C1D` lab-tw:84 **BUT** remapped `green-600: #21532a` lab-tw:128 | (none — hover uses `--color-pine`) shop-css:105 | — |
| mid / positive | `#30783d` `green-400` kit-tw:1012 | `--green-mid`/`--green-pos: #30783d` stats-css:21,24 | `brand.field-light #30783D` lab-tw:91 | — | — |
| sage / focus | `#52ba64` `green-300` kit-tw:1013, kit-tokens:43 | `--green-sage: #52ba64` stats-css:21 | `green-300: #52ba64` lab-tw:130 | — | — |
| success chip fill | `#60bf71` `success-bg` kit-design:24; `green-200` kit-tw:1014 | `--green-chip: #60bf71` stats-css:21 | `brand.success #60BF71` lab-tw:93 | — | — |
| on-primary muted | `#a6dbaf` kit-design:14; `green-100` kit-tw:1015 | `--on-primary-muted: #a6dbaf` stats-css:15 | `brand.sage #A6DBAF` lab-tw:99 | — | — |
| faintest tint | `#ecf7ee` `green-50` kit-tw:1016 | `--green-tint: #e8f4e9` stats-css:22 | `brand.field-pale #ECF7EE` lab-tw:92 | — | — |
| deepest | `#13391A` `green-900` kit-tw:1007 | — | `green-900: #13391A` lab-tw:125 | — | — |
| extra tints | — | `--green-tint-strong #cbe7cd`, `--green-border #abcfae` stats-css:22 | — | — | — |

**Agreements:** #1A4121 / #296533 / #30783D / #52BA64 / #60BF71 / #A6DBAF / #ECF7EE / #13391A are byte-identical in all four themed repos that define them. BC has no green at all.

**CHOOSE tokens-1: green-fill hover value**
- Canon + Stats + Labeler `brand.field-hover`: `#2B3C1D` (olive-dark, not a scale step)
- Labeler remapped `green-600`: `#21532a` (a true darker step of #296533) — lab-tw:128
- Shopify: no hover token; hovers go to `--color-pine #1a4121` (shop-css:105, 174, 180)
- Recommendation: **#2B3C1D** — it is the canon `primary-hover` (kit-design:11) and 3 of 4 repos already carry it; labeler's `green-600` is an undocumented third value inside a repo that also has the right one.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-2: green tint (faint success surface)**
- Canon/Labeler: `#ECF7EE` (kit-tw:1016 / lab-tw:92)
- Stats: `#e8f4e9` + a second step `#cbe7cd` + border `#abcfae` (stats-css:22)
- Recommendation: **#ECF7EE as the canon single tint; adopt stats' `--green-border #abcfae`** as the named tint-border since canon has no tint-border token and chips need one (kit-dataviz:60–67).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Ember / orange family

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| ember fill (screen) | `#e56625` `secondary-interactive` kit-design:14; `orange-500` kit-tw:996 | `--ember: #e56625` stats-css:28 | `--cta: 20.3 78.7% 52.2%` = **#E56625** lab-css:37; `brand.ember` lab-tw:85 | — (no #e56625 anywhere) | — |
| ember hover | `orange-600: #d7591a` kit-tw:995 | `--ember-hover: #e8763c` stats-css:28 | `brand.ember-hover #E8763C` lab-tw:86 | — | — |
| harvest orange (print/text) | `#c05017` `secondary` kit-design:13; `orange-700/800/900` kit-tw:994,1002–1003 | `--ember-strong: #c05017` stats-css:28 | `--destructive: 20.2 78.6% 42.2%` = **#C05017** lab-css:54; `brand.ember-deep` lab-tw:90 | `--color-ember: #c05017` shop-css:7 | — |
| `#a84413` | `orange-950`, named **"ember hover (destructive)"** kit-tokens:44 | `--ember-text: #a84413` stats-css:29; `EMBER_TEXT` stats-theme:38 | absent | 3 hardcoded literals `background: #a84413` shop-css:931, 951, 2337 | — |
| warning chip fill | `#e8773e` `warning-bg` kit-design:25; `orange-200` kit-tw:999 | (=`--cat-2`/`--ember-hover` #e8763c) | `orange-200: #e8773e` lab-tw:118 | — | — |
| ember tint/border | — | `--ember-tint #fbede4`, `--ember-border #eec4a9` stats-css:29 | — | — | — |
| destructive | (ember family, brand law) | `--ember*` | `#C05017` outline button lab-css:45–55 | `--color-ember` | **`--destructive: 0 84.2% 60.2%` = #EF4444** bc-css:23 ← stock red |

**Agreements:** #E56625 and #C05017 are identical wherever present; ember-hover `#E8763C` agrees between Stats and Labeler.

**CHOOSE tokens-3: what is `#A84413`?**
- **ember-hover** (canon naming, kit-tokens:44) — `orange-950`, "ember hover (destructive)"
- **ember-text** (Stats, stats-css:29 + stats-theme:38) — the AA-safe text/threshold hue for thin-but-positive margins (kit-dataviz:56–57 also calls it "ember text")
- Shopify uses it as a **fill** (3 sites, shop-css:931/951/2337) with no token name
- Recommendation: **`--ember-text` for the semantic name, with `ember-hover` as an alias** — Stats' name is what the value actually does per kit-dataviz:56, and Shopify's untokenized fill use is the outlier to fold in.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-4: ember hover step**
- `#d7591a` (Canon `orange-600`, kit-tw:995) vs `#E8763C` (Stats + Labeler)
- Recommendation: **#E8763C** — two shipped repos plus it doubles as `--cat-2` in the validated dataviz palette (kit-dataviz:22); `#d7591a` appears nowhere outside the kit's own scale.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-5: does Shopify need the screen ember `#E56625`?**
- Shopify currently has ONE orange (`#c05017`) doing both fill and text duty (shop-css:7)
- Canon/Stats/Labeler carry the two-step pair `#E56625` fill + `#C05017` text
- Recommendation: **add `#E56625` to Shopify as the fill token, keeping `#C05017` for text** — matches canon's on-screen/AA split (lab-css:49–53 documents 4.8:1 vs 3.4:1); flag as low priority since Shopify is board-approved as-shipped.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Wheat / cream / sand surfaces

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| paper | `#ffffff` kit-design:4–5 | `--paper: #ffffff` stats-css:9 | `--background: 0 0% 100%` lab-css:20 | `background: #fff` shop-css:24 | `#FFFFFF` bc-css:9 |
| pale wheat | `#f5f1e7` `surface-wheat-pale`; `yellow-50` kit-tw:1028 | `--wheat-pale: #f5f1e7` stats-css:9 | `--muted`/`--accent: 42.9 41.2% 93.3%` = #F5F1E7 lab-css:40,42 | **`--color-cream: #f5f1e7`** shop-css:4 | — |
| warm wheat | `#e7ddc6` `surface-wheat`; `yellow-500` kit-tw:1023 | `--wheat: #e7ddc6` stats-css:10 | `--secondary: 41.8 40.7% 84.1%` = #E7DDC6 lab-css:33 | `--color-tan: #e7ddc6` shop-css:5 | — |
| harvest wheat | `#d8c7a2` `accent-wheat`; `yellow-100/700/800/900` kit-tw:1019–1021,1027 | `--wheat-strong: #d8c7a2` stats-css:10 | `brand.wheat-harvest #D8C7A2` lab-tw:94 | — | — |
| soft cream (blush) | `#f6eceb` `surface-cream`; **`red-50`** kit-tw:1039 | **`--cream: #f6eceb`** stats-css:11 | `brand.cream #F6ECEB` lab-tw:97; `red-50` lab-tw:157 | — | — |
| panel off-white | `#fafaf9` `surface-panel` kit-design:8 (no utility, kit-tokens:26) | `--panel: #fafaf9` stats-css:11 | — | — | (`#FAFAF9` = `--primary-foreground` bc-css:16) |
| sand | `#ece5d3` `sand` kit-tw:1041 | — | — | `--color-sand: #ece5d3` shop-css:6 | — |
| concrete gray | `#e2e1dd` `neutral-gray`; `gray-400` kit-tw:1033 | `--concrete: #e2e1dd` stats-css:10 | `brand.concrete #E2E1DD`; `gray-400` lab-tw:98,151 | — | — |
| wheat veil (hover row) | — | `--wheat-veil: #f9f7f1` stats-css:9 | — | — | — |
| secondary surface | — | — | — | — | `#F5F5F4` stone-100 bc-css:17,19,21 |

**Agreements:** #F5F1E7, #E7DDC6, #D8C7A2, #F6ECEB, #E2E1DD, #ECE5D3, #FAFAF9 all agree on VALUE everywhere they exist. The disagreement is purely nominal.

**CHOOSE tokens-6: the word "cream"**
- Canon + Stats + Labeler: **cream = `#F6ECEB`** (the blush surface); pale wheat = `#F5F1E7`
- Shopify: **`--color-cream` = `#F5F1E7`** (shop-css:4) — the name points at pale wheat, and `#F6ECEB` does not exist in the repo
- Brand-law note: the seed-tag signature is defined as "on cream **#F5F1E7**", i.e. the law's prose uses Shopify's sense
- Recommendation: **rename to remove the word entirely — `--surface-wheat-pale` (#F5F1E7) and `--surface-cream` (#F6ECEB)**, the canon frontmatter names (kit-design:6,9). "Cream" is unrecoverably overloaded; keep Shopify's hex, change only its token name.
- Decision: **User ruling:** cream = `#F6ECEB` only — primarily a print surface. `#F5F1E7` is wheat-family and must carry a wheat name (`wheat-pale`, see tokens-7). The word "cream" never points at `#F5F1E7` again; shopify's `--color-cream` is renamed in its crosswalk (hex unchanged).

**CHOOSE tokens-7: does `sand #ECE5D3` join the canonical set?**
- Present: Canon (config-only, no frontmatter name, kit-tw:1041) + Shopify (`--color-sand`, used as the rating-bar empty track shop-css:1327)
- Absent: Stats, Labeler
- Recommendation: **promote to a named token `--surface-sand`** — two repos ship it and it fills a real gap between `#E7DDC6` and `#E2E1DD`; it just never got a frontmatter name.
- Decision: **User ruling (accept + family rename):** sand `#ECE5D3` joins canon. Bare **`wheat` = `#D8C7A2`**; lighter shades take modifiers — `wheat-light` = `#E7DDC6`, `wheat-pale` = `#F5F1E7`. Canon frontmatter names (`accent-wheat`/`surface-wheat`/`surface-wheat-pale`) rename accordingly during consolidation.

### Ink & text grays

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| ink / body text | `#10181f` `text`/`black` kit-design:22,27; `black`, `textColor.body` kit-tw:990,1030 | `--ink: #10181f` stats-css:13 | `--foreground: 208 31.9% 9.2%` = #10181F lab-css:21; `brand.ink` lab-tw:100 | `--color-ink: #10181f` shop-css:8 | `#0C0A09` stone-950 bc-css:10 |
| secondary text | `#57534e` `text-secondary`; `gray-500` kit-tw:1032 | `--text-2: #57534e` stats-css:13 | `--muted-foreground: 33.3 5.5% 32.4%` = #57534E lab-css:41; `brand.stone` lab-tw:101 | **`--color-gray: #5a5f66`** shop-css:10 | `#78716C` stone-500 bc-css:20 |
| tertiary / warm dark | `#474440` `text-tertiary`; `gray-600` kit-tw:1036 | `--text-strong: #474440` stats-css:13 | **`brand.stone-warm: #44403C`** lab-tw:102 (nav-link hover only) | `--color-slate: #3d4148` shop-css:9 | — |
| muted-ink (seed-tag) | (`gray-500` per law) | `--text-3: #7f7973` stats-css:14 | — | — | — |
| faintest | — | `--text-faint: #a9a49c` stats-css:14 | — | — | — |
| on-primary | `#ffffff` kit-design:12 | `--on-primary: #ffffff` stats-css:15 | `--primary-foreground: 0 0% 100%` lab-css:29 | `--color-cream`/`--color-tan` on green shop-css:112,181 | `#FAFAF9` bc-css:16 |

**Agreements:** `#10181F` ink is universal across all four themed repos. `#57534E` agrees Canon/Stats/Labeler.

**CHOOSE tokens-8: the tertiary warm gray**
- Canon + Stats: `#474440` (kit-design:23 / stats-css:13)
- Labeler: `#44403C` (lab-tw:102) — this is stock Tailwind `stone-700`, not a brand hex, scoped to nav-link hover
- Recommendation: **#474440** — it is the frontmatter `text-tertiary`; `#44403C` is a stock-scale leak (ΔE ~2, invisible) that should be retired **on the user's own labeler pass**.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-9: Shopify's `--color-gray #5a5f66`**
- Canon/Stats/Labeler secondary text: `#57534E` (warm stone)
- Shopify: `#5a5f66` (shop-css:10) — a COOL gray, hue ~213° vs canon's ~33°; used on 4 body-copy sites (shop-css:360)
- Recommendation: **#57534E** — Shopify's is the only cool gray in the system and reads bluish against the wheat surfaces; this is a straightforward retheme with no layout risk.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-10: Shopify's `--color-slate #3d4148`**
- No canon equivalent. Sits between `#474440` (tertiary) and `#10181f` (ink), also cool. Used ~6× for secondary body copy (shop-css:223, 260, 278, 365, 1293).
- Options: (a) fold into `#474440`, (b) fold into `#57534E`, (c) keep as a Shopify-only third ink step
- Recommendation: **#474440** — matches the canon three-step ink ladder (ink → #57534E → #474440) and removes the last cool gray.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-11: the muted-ink / faint tier (Stats-only)**
- Stats has two extra tiers: `--text-3: #7f7973`, `--text-faint: #a9a49c` (stats-css:14), used for every seed-tag/table-header (stats-shared:37,39)
- No other repo has anything below `#57534E`
- Recommendation: **adopt `#7f7973` as `--text-muted`** into canon — the seed-tag signature ("muted-ink on cream") has no canon hex today, and Stats is the only repo that actually resolved it.
- Decision: **B (user override):** keep canon's existing text tiers only. `#7F7973`/`#A9A49C` stay Stats-local; the seed-tag "muted ink" resolves to `text-secondary #57534E` in canon.

### Borders / hairlines

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| default border | `border-gray-200` = `#e2e2dd` kit-tw:1035 (kit-conv:12) | `--line: #e1ddd8` stats-css:17 | `--border`/`--input: 20 5.9% 90%` = **#E7E5E4** lab-css:58–59; `brand.hairline` lab-tw:103 | `--border-mid: rgba(16,24,31,.15)` shop-css:12 | `--border`/`--input: 20 5.9% 90%` = **#E7E5E4** bc-css:25–26 |
| hairline on tints | `hairline: rgba(16,24,31,0.12)` kit-tw:1042 | `--hairline-alpha: rgba(16,24,31,.12)` stats-css:18 | — | `--border-soft: rgba(16,24,31,.1)` shop-css:11 | — |
| soft line | — | `--line-soft: #edeae4` stats-css:17 | — | `--border-soft` (.1) | — |
| strong line | — | `--line-strong: #cecac3` stats-css:17 | — | `--border-strong: rgba(16,24,31,.2)` shop-css:13 | — |

**Agreements:** Canon and Stats agree exactly on `rgba(16,24,31,.12)`. Labeler and BC share `#E7E5E4` — **note the coincidence: labeler's `--border` is byte-identical to BC's UNTHEMED stock stone-200, and labeler's comment labels it "Hairline"**; it is stock shadcn that was never repointed, and the near-match to canon `#E2E2DD` masked it.

**CHOOSE tokens-12: the border system**
- **A. Canon/Stats — alpha hairline `rgba(16,24,31,.12)`** (single value, composites correctly over white, wheat, cream, and green alike)
- **B. Stats' opaque 3-step ramp** `#edeae4` soft / `#e1ddd8` default / `#cecac3` strong (stats-css:17) — coexists with A in the same file
- **C. Shopify's ink-alpha trio** `.10` / `.15` / `.20` (shop-css:11–13) — same idea as A, three weights, board-approved and shipped
- **D. Labeler/BC opaque `#E7E5E4`** — stock stone-200
- Recommendation: **C, re-anchored on canon's .12 as the mid step: `--border-soft rgba(16,24,31,.10)` / `--border rgba(16,24,31,.12)` / `--border-strong rgba(16,24,31,.20)`** — Shopify's three-weight alpha model is the board-approved shipped reference, alpha composites over the many warm surfaces where a fixed gray goes muddy, and swapping `.15`→`.12` makes the mid step canon-exact. Keep Stats' opaque ramp only where an alpha border would stack (nested table cells).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Focus rings

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| ring color | **conflict:** `ring-green-500` = `#296533` (kit-conv:13,32; button.js:7, input.js:9) vs `focus:ring-green-300` = `#52BA64` (kit-conv:29; kit-tokens:43 "light-green focus ring") | `--focus-ring: rgba(82,186,100,.35)` = #52BA64 @35% stats-css:47 | `--ring: 130 42.3% 27.8%` = **#296533** lab-css:60 | `outline: 2px solid var(--color-forest)` = #296533 shop-css:895, 1018, 1474 | `--ring: 20 14.3% 4.1%` = #0C0A09 bc-css:27 |
| ring form | `ring-2` + `ring-offset-2` (solid 2px, 2px gap) | `box-shadow: 0 0 0 3px` soft ring, no offset stats-css:78–79 | `ring-2` + `ring-offset-2` lab-css (checkbox.tsx:18) | `outline: 2px` + `outline-offset: 2px` (or `-2px` inset for tight cells shop-css:1019) | `ring-2 ring-ring` stock |
| ember focus | — | `--focus-ring-ember: rgba(232,118,60,.35)` stats-css:47 | — | — | — |

**Agreements:** Green-hued focus everywhere themed. 2px + 2px offset agrees between Canon/Labeler/Shopify.

**CHOOSE tokens-13: focus-ring color and form**
- **A. Solid `#296533` @ 2px + 2px offset** — Canon kit as-implemented, Labeler, Shopify (3 shipped sites)
- **B. Solid `#52BA64`** — Canon's own docs (kit-tokens:43) and the raw CTA recipe (kit-conv:29)
- **C. Soft `rgba(82,186,100,.35)` @ 3px, no offset** — Stats (stats-css:78–79, applied globally to `button`/`input`/`select`/`textarea`)
- Recommendation: **A (`#296533`, 2px solid, 2px offset)** — three of four repos ship it including the board-approved Shopify, it holds contrast against wheat and cream where the 35%-alpha sage disappears, and the canon *implementation* (button.js:7) outranks the canon *prose*. Then correct kit-tokens:43 and kit-conv:29, which currently document B.
- Decision: **B (user override):** focus ring = solid `#52BA64` — canon's documented value wins over the shipped `#296533`. Kit button.js, labeler and shopify focus recipes migrate to `#52BA64` during consolidation; kit-tokens:43 / kit-conv:29 stay as written.

**CHOOSE tokens-14: keep an ember focus ring?** Stats alone has `--focus-ring-ember` (stats-css:47) for focus on ember controls. Recommendation: **keep, ration-scoped** — a green ring on a destructive control misreads. Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Status triads

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| success (solid, ≥18px) | bg `#60BF71` / text `#1A4121` kit-design:24–25 | bg `--green-chip #60bf71` | `brand.success #60BF71` lab-tw:93 | — | — |
| success (tint, small text) | — | `#e8f4e9` bg / `#296533` text / `#abcfae` border, `.chip-success` stats-css:68 | — | — | — |
| warning | bg `#e8773e` / white `warning-bg` kit-design:25 | `#fbede4` / `#a84413` / `#eec4a9`, `.chip-warn` stats-css:69 | — | — | — |
| info | — | `#e7eef5` / `#2a5b88` / `#aec7e0`, `.chip-info` stats-css:70 | — | — | — |
| error/destructive | ember `#C05017` (brand law) | `--ember*` | `#C05017` outline button lab-css:45–55 | `--color-ember #c05017` | **`#EF4444`** bc-css:23 |

**Agreements:** Only Canon↔Stats↔Labeler overlap; Shopify and BC have no chip system.

**CHOOSE tokens-15: solid chips vs tint chips**
- Canon spec'd only SOLID chips (`#60BF71`+deep green, `#e8773e`+white — kit-design:24–25)
- Stats added a parallel TINT family because solid brand chips fail small-text contrast, and reserved solids for ≥18px badges (kit-dataviz:60–67)
- Recommendation: **adopt Stats' two-tier rule verbatim into canon** — it is the only contrast-validated status system in the five repos and it doesn't displace the brand's solid poster chips.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-16: is there an `info` status?** Stats' `--slate` family (`#3d76a9` / `#2a5b88` / `#e7eef5` / `#aec7e0`, stats-css:34–35,70) is a derived utility hue with no canon standing. Options: adopt as `--info-*`, or forbid a blue status entirely. Recommendation: **adopt, scoped to chips and dataviz slot 6** — kit-dataviz:26 already sanctions it as "derived from Ink's blue cast at the chroma floor". Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Data Red

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| data-negative | `#c02617` kit-design:26; **no utility class exists, on purpose** kit-tokens:34,52–54 | `--data-red: #c02617` stats-css:25; `DATA_RED` stats-theme:33 | — | — | — |
| strong / deep | — | `--data-red-strong #a21c10`, `--data-red-deep #791b11` stats-css:25 | — | — | — |
| tint / border | — | `--data-red-tint #fcece9`, `--data-red-border #e9b6ad` stats-css:26 | — | — | — |
| positive counterpart | `#30783d` | `--green-pos: #30783d` stats-css:24 | — | — | — |

**Agreements:** `#C02617` matches exactly where present. Labeler/Shopify correctly have no red at all (lab-css:46–47 "There is no red in this brand — see ADR 0003").

**CHOOSE tokens-17: does Data Red's family (strong/deep/tint/border) enter canon?** Canon defines only the single hex. Stats needed 5. Recommendation: **adopt the full family, marked DR-1-only** — negative-value tables need a tint fill and border, and leaving them undefined is how ad-hoc reds get invented. Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Dataviz palettes

| Palette | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| categorical | 8 slots, kit-dataviz:21–28: `#296533 · #e8763c · #0d9488 · #ef9f27 · #30783d · #3d76a9 · #c05017 · #52ba64` | identical, `--cat-1..8` stats-css:39–40 + `CATEGORICAL` stats-theme:13–22 (unit-test-locked, kit-dataviz:13–15) | 5 shadcn chart tokens, **unused today** (lab-css:62–68): #296533 · #A6DBAF · #1A4121 · #D8C7A2 · #E56625 | — | 5 stock tokens bc-css:28–32: #E76E50 · #2A9D90 · #274754 · #E8C468 · #F4A462 |
| sequential | `#76b97d→#5aa363→#408d4c→#2f763b→#235f2e→#1e4725` kit-dataviz:48 | `--seq-1..6` stats-css:41–42; `SEQ` stats-theme:25 | — | — | — |
| diverging | `#c02617 · #d36e5f · #e0a79c · #e2e1dd · #90bd94 · #51935a · #296533` kit-dataviz:53 | `--div-neg-3..div-pos-3` stats-css:43–45; `DIVERGING` stats-theme:28–30 | — | — | — |
| domain ramp | — | — | — | `--rating-fill` 5 tiers: `#c05017 · #b56f1c · #8a7b24 · #58712c · #296533` shop-css:1297–1319 | — |
| gold / teal / slate utility | (sanctioned as derived, kit-dataviz:30–37) | `--gold #ef9f27`/`#9a6a00`/`#f8efde`/`#e3cb99` stats-css:31–32; `--teal #0d9488`/`#006b61`/`#e1f3f0`/`#9bd5cc` stats-css:36–37 | — | `#b56f1c`, `#8a7b24`, `#58712c` (rating tiers only) | — |

**Agreements:** Canon and Stats are byte-identical across all three palettes (enforced by `scripts/codemods/retheme.test.ts`, kit-dataviz:15).

**CHOOSE tokens-18: labeler's 5 chart tokens**
- Current (lab-css:64–68): green / sage / forest / harvest-wheat / ember — the DESIGN.md-literal "hero green, competitor pale green" reading, zero uses in `src/`
- Canon 8-slot validated palette (kit-dataviz:17–44)
- Recommendation: **repoint `--chart-1..5` to canon slots 1–5 and add 6–8** — the current set has three near-identical greens that fail CVD adjacent-pair separation. *Labeler-only: for the user's own pass; zero call sites so it is a free change.*
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-19: Shopify's `--rating-fill` ramp** (`#b56f1c`/`#8a7b24`/`#58712c` are untokenized literals, shop-css:1307–1315). Options: (a) keep as a shipped domain-specific ember→green diverging ramp, (b) replace with canon diverging. Recommendation: **keep but name it `--rating-1..5`** — it is a board-approved 5-step ordinal, and canon's diverging scale is anchored on Data Red, which would violate DR-1 on a non-numeric rating. Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Radius

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| default | `0px` kit-design:79–83 (`DEFAULT`/`buttons`/`cards`/`chips`) | `--radius: 0px` stats-css:51 | `--radius: 0rem` lab-css:72 | 0 (no radius declared on any base class) | **`--radius: 0.5rem`** bc-css:33 |
| checkbox | frontmatter `0.125rem` kit-design:84 — but **kit checkbox.js:10 ships square** (`h-4 w-4 border-2`, no rounded) | `--radius-checkbox: 2px` stats-css:51 | `rounded-[2px]` checkbox.tsx:18 | n/a | stock `rounded-sm` |
| circles | `full: 9999px` kit-design:85; no `rounded-full` in `src/components/ui/*.js` | `--radius-full: 9999px` stats-css:51 | `rounded-full` on loader ring only (monogram-loader.tsx:44) | `border-radius: 50%` ×2 (spinner shop-css:3079, 3111) | stock |
| exceptions | — | scrollbar thumbs explicitly `border-radius:0` stats-css:85,91 | — | **13 sites at `2px`** — plot-mapper family shop-css:2778, 2843, 2874, 2912, 2925, 3124, 3203, 3221, 3309, 3327, 3374, 3444, 3651 | all `lg/md/sm` derive from 0.5rem, bc-tw:62–66 |

**Agreements:** 0 default and 9999px-for-circles in all four themed repos. Stats and Labeler agree on 2px checkbox.

**CHOOSE tokens-20: does the canon kit's own checkbox honour the 2px exception?**
- Frontmatter says `checkbox: 0.125rem` (kit-design:84) and Stats/Labeler both ship 2px
- The canon kit's `checkbox.js:10` ships **fully square** — no radius class
- Recommendation: **2px** — three of four sources plus the frontmatter agree; the kit component is the outlier and should be corrected to match its own spec.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-21: Shopify's 13 plot-mapper `border-radius: 2px` sites**
- Brand law grants 2px only to ~16px checkboxes; these are cards, toolbars, and buttons (shop-css:2778 `.plot-mapper-card`)
- Options: (a) flatten to 0 (law-conformant), (b) formally widen the exception to "plot-mapper surfaces" as board-approved precedent
- Recommendation: **(a) flatten to 0** — 2px on an 18px-padded card is invisible-but-inconsistent, and no other repo has it. This is the one place where the board-approved reference contradicts brand law; calling it out rather than blessing it.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Shadows / scrims

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| policy | **none** — "Never add `rounded-*` or `shadow-*`"; depth = cream fills + hairline borders (kit-conv:12); sonner explicitly `shadow-none` (sonner.js:16) | `--shadow-color: rgba(16,24,31,.14)` stats-css:48 | none | none (drop) | stock shadcn shadows |
| actual drop shadows | 0 | popover `0 12px 32px rgba(16,24,31,.14)` stats-css:99 **(uncommitted, was `0 18px 44px …18`)**; `.daycell:hover 0 4px 14px …06` stats-css:98; `.hcard:hover 0 4px 14px …06` stats-css:107 **(uncommitted, was .07)** | 0 | 0 — only INSET rules: `inset 0 0 0 1px var(--color-forest)` selected-card shop-css:341; `inset -1px 0 0 var(--border-mid)` sticky-col shop-css:1763, 2534 | many |
| scrim | — | `--scrim: rgba(16,24,31,.4)` stats-css:48 | — | — | — |
| paper veil | — | `--paper-veil: rgba(255,255,255,.85)` stats-css:49 | — | — | — |

**Agreements:** Canon, Labeler, Shopify all ship zero drop shadows. Shopify's inset rings are the sanctioned "depth without shadow" idiom.

**CHOOSE tokens-22: floating-layer shadows (popovers/tooltips)**
- **A. Zero, always** (Canon/Labeler/Shopify) — floating layers separate by hairline + paper fill
- **B. Stats' softened set** (`0 12px 32px rgba(16,24,31,.14)`, uncommitted at stats-css:99) — the working tree shows an in-flight softening pass, so this is already being pulled toward A
- Recommendation: **A, with one carve-out: floating layers that overlap their own trigger may use `0 12px 32px rgba(16,24,31,.14)`** — a day-popover on a dense calendar with no shadow is genuinely ambiguous, and Stats' uncommitted edit is already the conservative version of this value. Everything hover-decorative (`.hcard`, `.daycell`) goes to 0.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-23: adopt `--scrim rgba(16,24,31,.4)`?** Only Stats has a modal-overlay token (stats-css:48); Labeler/BC use stock shadcn overlay. Recommendation: **adopt** — ink-based, matches the hairline base color. Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Typography

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| display face | Chakra Petch 700 (kit-design:30–33); stack `"Chakra Petch", -apple-system, …` kit-tw:982–983 | `--font-display-stack: var(--font-display), 'Chakra Petch', sans-serif` stats-css:53; loaded **700 only** stats-layout:10–15 | `font-heading: var(--font-chakra-petch)` lab-tw:22; loaded **700 only** lab-layout:47–53 | `--font-heading: var(--font-chakra), sans-serif` shop-css:14; loaded **['600','700']** shop-layout:12 | Geist Sans (`--font-geist-sans`) bc-layout:8 |
| body face | TT Commons Pro (kit-design:56); **kit-tw:984–985 ships Open Sans only**; `main.css:3` uses `"tt-commons-pro","Open Sans",Helvetica,Arial` | `--font-body-stack: var(--font-body), 'Open Sans', ui-sans-serif, system-ui, sans-serif` stats-css:54 — **no TT Commons entry** | `sans: var(--font-open-sans)` lab-tw:21 — **no TT Commons** (lab-layout:19–21: "licensed through Typekit, not available to this app") | `--font-body: "TT Commons Pro", var(--font-open-sans), sans-serif` shop-css:15 — **only repo that names it first** | Geist Sans + Geist Mono bc-layout:8,13 |
| fallback display | Catamaran 800 / 0.16em (kit-design:66–72); `serif: Catamaran` kit-tw:986–987 | — | — | — | — |
| weights permitted | 400 / 500 / 700 (kit-design typography roles) | 700 display; 600 used inline (stats-shared:319,383,444) | **400/500/700 only, enforced at load** lab-layout:27–33 | 600+700 loaded | stock |
| display tracking | `0.1em` all display roles (kit-design:34,42,50); `tracking-widest: 0.1em` kit-tw:663 | `--track-display: .08em`, `--track-wide: .1em` stats-css:55 | `tracking-widest` = **0.1em** lab-css:124 | `.eyebrow` **0.14em** shop-css:75; `.heading-display` **0.06em** shop-css:84; `.section-title` **0.08em** shop-css:658 | stock |
| display sizes | 48 / 36 / 24px (kit-design:32,40,48) | h1 15px, KPI 19px (stats-shared:474,55) | `.type-display text-3xl→4xl→5xl` (30/36/48px) lab-css:134; headline 24/30/36; title 24px lab-css:138,142 | `.heading-display` **34px**/1.15 shop-css:85–86; `.section-title` **19px** shop-css:659; `.eyebrow` **12.5px** shop-css:76 | stock |
| body size / leading | 16px / 1.5 (kit-design:57–59); `fontSize.base: 1rem` kit-tw:1045 | 12.5–13.5px table/body inline (stats-shared:40,374) | `.type-body text-base/1.5` lab-css:160–161 | body inherits 16px; section copy 15px/1.6 shop-css:350,361 | stock |
| label / seed-tag | `label` 14px/700 (kit-design:61–64); law: `font-heading text-xs bold uppercase tracking-widest` on #F5F1E7 | `.seed-tag` 11px/700/`--track-display .08em`/`--text-3 #7f7973`/bg `--wheat-pale` stats-css:65; `thStyle` 10.5px stats-shared:39 | `.type-label` `text-sm font-bold` lab-css:165 | — | — |

**Agreements:** Chakra Petch bold uppercase display + Open Sans body ships in all four themed repos. Chakra loaded at 700-only in Stats and Labeler. Labeler's `.type-*` role classes and Canon's frontmatter roles agree on 400/500/700 and on 500-only-at-≥18px.

**CHOOSE tokens-24: display tracking**
- **0.1em** — Canon (kit-design:34) + Labeler (`tracking-widest`, lab-css:124)
- **0.08em** — Stats `--track-display` (stats-css:55), applied to every seed-tag, chip, eyebrow, and KPI
- **0.14em / 0.08em / 0.06em** — Shopify, three different values by role (eyebrow / section-title / heading-display, shop-css:75, 658, 84)
- Recommendation: **0.1em for display/headline/title, 0.08em for small caps ≤12px** — brand law states ~0.1em; Stats' 0.08em exists because 0.1em on 10.5px table headers over-opens. Shopify's 0.14em eyebrow and 0.06em display are the outliers to normalize.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-25: the TT Commons Pro situation**
- Canon frontmatter names TT Commons Pro as the body face (kit-design:56) with Open Sans as `body-fallback` (kit-design:74–78) — but the kit's own Tailwind ships **Open Sans only** (kit-tw:984)
- Shopify is the ONLY repo listing it first in the stack (shop-css:15); with no `@font-face` and no Typekit `<link>` in `app/layout.tsx`, it resolves to Open Sans for every visitor without the font locally
- Stats and Labeler both dropped it deliberately, with a comment explaining the Typekit licensing gap (lab-layout:19–21, stats-layout:9)
- Recommendation: **make Open Sans the shipped body face everywhere and keep `"TT Commons Pro"` first in the stack as a documented no-op** (Shopify's exact string, shop-css:15) — the day the Typekit domain list is extended, one CSS link per app upgrades all five with no token churn.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-26: display type scale**
- Canon: fixed 48 / 36 / 24px (kit-design:32,40,48)
- Labeler: responsive `text-3xl sm:text-4xl lg:text-5xl` = 30→36→48px, with a documented overflow fix (lab-css:128–135: "RECOMMENDATIONS at text-4xl is ~389px and overflowed a 390px viewport")
- Shopify: single 34px (shop-css:85)
- Recommendation: **Labeler's responsive ladder** — it lands on canon's 48px at desktop and is the only one that survives a 390px viewport with a long uppercase word at 0.1em tracking; that overflow is a real shipped bug the other repos haven't hit yet.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-27: seed-tag size** — Stats ships 11px (stats-css:65) / 10.5px for table `th` (stats-shared:39); brand law says `text-xs` = 12px; Labeler's `.type-label` is `text-sm` = 14px. Recommendation: **12px (`text-xs`) as the token, 10.5–11px permitted in dense table headers only.** Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
**CHOOSE tokens-28: Catamaran display fallback** — defined in canon (kit-design:66–72, `serif` in kit-tw:986) and shipped by zero themed repos. Recommendation: **retire from the token layer, keep in the print/brand-book prose** — a webfont fallback nobody loads is dead weight. Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Spacing

| Role | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| unit / scale | 4px unit; xs 4 · sm 8 · md 16 · lg 24 · xl 48 (kit-design:87–92) | untokenized; inline 7/8/9/10/13px (stats-shared:39,374,444) | untokenized; Tailwind default 4pt | **`ui_spacing_scale: [4,8,16,18,22,24,32,44,64]`** shop-plan (`workflow.ui_spacing_scale`) | stock 4pt |
| section band | `section: 80px` kit-design:93 | — | — | (64 is the scale max) | — |
| card padding | `card-padding: 48px` kit-design:94 | 11–13px popover, 8–10px cells | — | 18px `.plot-mapper-card` shop-css:2780; 14×28 button shop-css:673 | — |
| gutter / page margin | 16px both (kit-design:95–96) | — | `container.padding: "1rem"` lab-tw:15–18 | — | `container.padding: "2rem"` bc-tw:14 |
| touch target | — | — | — | **44px minimum height** (shop-plan note) | — |

**Agreements:** 4 / 8 / 16 / 24 are common to Canon and Shopify. 16px gutter agrees Canon↔Labeler.

**CHOOSE tokens-29: the spacing scale**
- **Canon** 4 · 8 · 16 · 24 · 48 · 80 (+48 card padding)
- **Shopify** 4 · 8 · 16 · **18 · 22** · 24 · 32 · **44** · 64 — deliberately denser, documented as house scale in shop-plan with a note that the UI checker must evaluate against THIS scale, not the generic 8pt grid (recorded 2026-07-19)
- Recommendation: **Canon's 4/8/16/24/48/80 as the token scale; adopt Shopify's 44px as an explicit `--touch-target-min` (not a spacing step)** — 18 and 22 are one-off drifts from 16 and 24 with no visual payoff, but 44px is a real accessibility floor the other four repos never named.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE tokens-30: container padding** — Labeler 1rem (lab-tw:17, matching canon's 16px page-margin) vs BC 2rem (bc-tw:14, stock). Recommendation: **1rem** — canon `page-margin: 16px` (kit-design:96). Decision: **Accepted — per recommendation above** (recorded 2026-08-06).
### Dark mode

| Aspect | Canon | Stats | Labeler | Shopify | BC |
|---|---|---|---|---|---|
| exists | no | `color-scheme: light` stats-css:7 | **explicitly refused** — lab-css:76–78: "No `.dark` block. This app has no dark mode — zero `dark:` variants in src/ — and a stock-zinc dark palette sitting here unused is how off-brand colour creeps back in" | no | **yes** — full `.dark` block bc-css:35–60; `darkMode: ["selector"]` bc-tw:4; `safelist:["dark"]` bc-tw:10; `next-themes` ThemeProvider bc-layout:2; `dark:` variants in ≥10 components |
| dark values | — | — | — | — | bg `#0C0A09` · fg `#FAFAF9` · secondary/muted/accent/border `#292524` · muted-fg `#A8A29E` · destructive `#7F1D1D` · ring `#D6D3D1` · charts `#2662D9 · #2EB88A · #E88C30 · #AF57DB · #E23670` |

**Agreements:** Four of five repos are light-only, and Labeler documents the refusal as a deliberate anti-drift decision.

**CHOOSE tokens-31: does the brand get a dark mode?**
- **A. Light-only, system-wide** (Canon + Stats + Labeler + Shopify) — Labeler's rationale at lab-css:76–78 is the strongest written argument in any repo
- **B. Keep BC's** — but BC is untheming's starting point, and its dark palette is 100% stock stone/zinc with five saturated stock chart hues that violate the six-color consolidation
- Recommendation: **A — strip `.dark`, `darkMode`, the `dark` safelist, and the ~10 components' `dark:` variants when BC is themed** — no brand dark palette exists, and inventing one is a Phase-0 decision, not a retheme step. If BC's users depend on dark mode, that is a separate scoped project.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags

**Brand-law violations (not choices):**
1. **BC `--destructive: #EF4444`** (bc-css:23) and dark `#7F1D1D` (bc-css:50) — stock red in UI chrome. Must become the ember family. Same for BC's `--ring #0C0A09` (bc-css:27) and `--primary #1C1917` (bc-css:15), which are stone-900, not Field Green.
2. **BC `--radius: 0.5rem`** (bc-css:33) cascading to `lg/md/sm` (bc-tw:62–66) — rounded everything.
3. **BC chart tokens** (bc-css:28–32, 55–59) — 10 stock saturated hues, none brand.
4. **Shopify's 13 `border-radius: 2px` plot-mapper sites** (shop-css:2778 et al.) — 2px is granted only to ~16px checkboxes. The two `border-radius: 50%` spinners (shop-css:3079, 3111) ARE legal (genuinely circular primitives).
5. **Shopify loads Chakra Petch at weight 600** (shop-layout:12) — the brand has exactly three weights (400/500/700); 600 does not exist (lab-css:112–113, lab-layout:23–25).
6. **Stats' three drop shadows** (stats-css:98, 99, 107) — see CHOOSE tokens-22; the uncommitted working tree is already softening them, so this is half-fixed in flight.
7. **Canon kit's own checkbox ships square** (`src/components/ui/checkbox.js:10`) while its own frontmatter specifies 2px (kit-design:84) — the canon repo contradicts itself.
8. **Canon docs contradict canon code on the focus ring**: kit-tokens:43 and kit-conv:29 say `green-300 #52BA64`; `button.js:7` / `input.js:9` / kit-conv:13,32 ship `ring-green-500 #296533`.

**Labeler-only (for the user's own pass — inventory, no edits proposed):**
- `--border`/`--input: #E7E5E4` (lab-css:58–59) is **stock shadcn stone-200, byte-identical to untheme'd BC** (bc-css:25–26), yet commented "Hairline". The near-miss against canon `#E2E2DD` (ΔE ~2) is why it survived the theming pass.
- `brand.stone-warm: #44403C` (lab-tw:102) is stock stone-700, not canon `#474440`.
- Remapped `green-600: #21532a` (lab-tw:128) contradicts `brand.field-hover: #2B3C1D` (lab-tw:84) **in the same file**.
- The remapped-stock-scale trap is self-documented at lab-tw:105–111 ("`text-yellow-800` is wheat #D8C7A2, not amber… `text-yellow-800` on `bg-yellow-50` = wheat-on-wheat, near invisible"). Canon has the identical trap (kit-tw:1018–1029, kit-tokens:47–60) — but kit-tokens:66–68 explicitly forbids exporting these scale names to other repos, which is exactly what Labeler did.
- `--chart-1..5` (lab-css:64–68) has three near-identical greens and zero call sites.

**Open / unresolvable:**
- **Stats has no spacing tokens at all** — every gap is an inline literal (7, 9, 10, 11, 13px at stats-shared:39,374,444). Auditing it against any chosen scale is a separate mechanical pass, not a token decision.
- **Shopify's `--rating-fill` tiers 2–4** (`#b56f1c`, `#8a7b24`, `#58712c`, shop-css:1307–1315) have no documented derivation — they interpolate ember→forest but no ADR records the method.
- **`--gold #ef9f27` provenance**: kit-dataviz:24 calls it "brand-adjacent (pre-existing in app)" — it entered via Stats, not the brand book. Whether it earns a canon name is unsettled.
- **`--text-3 #7f7973` vs `--text-faint #a9a49c`**: Stats uses `--text-faint` for the seed-tag in table headers (stats-shared:39) but `--text-3` in the `.seed-tag` recipe (stats-css:65) — the signature's own muted-ink value is inconsistent inside a single repo.
- Canon's `warning-bg #E8773E` (kit-design:25) vs the ember-hover `#E8763C` differ by 2 in the blue channel; likely a transcription drift rather than two intentional colors, but no source settles which is correct.

## Duplicate component groups

One section per overlapping component role. Implementations are lettered A, B, C… within each group; CHOOSE blocks reference those letters. Every value carries file:line provenance from the working trees.

## BUTTON treatments

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/button.js`
- **Provenance:** button.js:6-38 (cva); variant contract in `.design-sync/conventions.md:11`; canon spec `DESIGN.md:208-214` ("square, 24×12px padding, 0.875rem bold, 3px focus ring in own hue, 200ms").
- **Geometry:** radius 0 (no radius class anywhere). Sizes (:20-23) `sm` 16/8px + text-xs(12px) · `default` 24/12px + text-sm(14px) · `lg` 32/16px + text-sm · `icon` 44×44px. `font-bold`, sentence case (no uppercase), no tracking. Compound outline padding (:29-31) `22/10`, `14/6`, `30/14` — compensates the 2px border so heights match filled variants exactly.
- **Colors per state:** default fill `#296533` / white, hover `#2B3C1D` (:11). secondary fill `#E7DDC6` / ink `#10181F`, hover `#ECE5D3` sand (:12). destructive **filled** `#C05017` / white, hover `#A84413` (:13). outline 2px `#296533` border on white, `#296533` text, hover fill `#F5F1E7` (:15). ghost `#296533` text, hover `#F5F1E7` (:16). link `#296533` + underline (:17). Focus (:7) `ring-2 ring-green-500 (#296533) ring-offset-2` — **2px, green for every variant**. Disabled `opacity-50` + `cursor-not-allowed` (:7). No active/selected state.
- **Variants:** default, secondary, destructive, outline, ghost, link × 4 sizes.
- **Usage:** 8 files, 16 `<Button>` call sites — outline 5, secondary 4, destructive 3, link 2, ghost 2 (showcase sections only).
- **Compliance:** compliant. Note the sibling **raw recipes** in the same repo (see B) that the kit does not cover.

#### B. KIT-RAW — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/.design-sync/conventions.md:29-30` + `src/components/primaryLogo.js:260`
- **Provenance:** conventions.md:29 CTA recipe `px-6 py-3 text-sm font-bold text-white transition duration-200` + `bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 (#52BA64)` primary / `bg-orange-500 (#E56625) hover:bg-orange-600 focus:ring focus:ring-orange-300` secondary. conventions.md:30 download pair: wheat `bg-yellow-500 (#E7DDC6) hover:bg-yellow-400 focus:ring-yellow-200` / rust `bg-orange-900 (#C05017) text-white hover:bg-orange-800 (#C05017) focus:ring-orange-700`.
- **Shipped instance:** `bg-orange-900 text-white ... hover:bg-orange-800 focus:ring focus:ring-orange-700` at primaryLogo.js:260, icons.js:31, wordmark.js:79, horizontalStackedSubBrand.js:127, illustrations.js:39 — 5 logo-download buttons, `w-full sm:w-auto`.
- **Divergence vs A:** focus ring is `focus:ring` (3px, per-hue, matches DESIGN.md:172) not `focus-visible:ring-2 ring-green-500`. Hover for the green CTA is `green-600 #2B3C1D` in both. `bg-orange-500` as a "secondary" is not in the cva variant set at all.
- **Compliance:** rust hover is a no-op — `orange-900` and `orange-800` both resolve to `#C05017`, so hover is visually dead.

#### C. LABELER — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/button.tsx` *(inventory only)*
- **Provenance:** button.tsx:18-53; tokens `src/styles/globals.css:28-60`; brand palette `tailwind.config.ts:81-104`; ADR `docs/adr/0003-destructive-ui-is-outlined-ember.md:36`.
- **Geometry:** radius 0. `text-sm font-bold leading-tight`, sentence case. Sizes (:42-46) `default` **`w-full` h-10 px-6 py-3** · `sm` h-9 px-3 · `lg` h-11 px-8 · `icon` h-10×10. **No compound outline padding** — outline's 1px border eats into the h-10 box.
- **Colors per state:** default `--primary #296533`/white, hover `brand-field-hover #2B3C1D` (:24). cta `--cta #E56625`/white, hover `brand-ember-hover #E8763C` (:25). destructive **1px outlined** `--destructive #C05017` border + text, transparent fill, hover `brand-cream #F6ECEB` (:30). outline `--input #E7E5E4` 1px border on white, hover `--accent #F5F1E7` / ink text (:32). secondary `--secondary #E7DDC6` / ink `#10181F`, hover `brand-wheat-harvest #D8C7A2` (:34). ghost hover `#F5F1E7`. Focus (:19) `ring-2 ring-ring (#296533) ring-offset-2` for all variants. Disabled `opacity-50`.
- **Variants:** default, **cta** (the only sanctioned ember fill, ADR 0002), destructive, outline, secondary, ghost, link.
- **Usage:** 33 files; variant census ghost 14, default 13, outline 8, secondary 3, `cta` 0, `destructive` 0. Size census: sm 16, lg 4, icon 2, default 2 — plus stray `size="md"` ×1 and `size="button"` ×1 (invalid, silently fall through to `default` = full-width).
- **Compliance:** compliant on law. Divergences are structural (see CHOOSE blocks).

#### D. SHOPIFY — `/Users/Sheppardjm/Repos/harveys-seed-shopify/app/globals.css` *(board-approved reference)*
- **Provenance:** tokens :root globals.css:1-16 (`--color-forest #296533`, `--color-pine #1a4121`, `--color-tan #e7ddc6`, `--color-sand #ece5d3`, `--color-ember #c05017`, `--color-ink #10181f`).
- **`.button` / `.button--primary`** (:90-107): 14/28px, 14px/700, `border:0`, radius 0; fill `#296533` white → hover `#1A4121` (**pine, not `#2B3C1D`**). 4 uses.
- **`.button-outline`** (:677-684): **2px** `#296533` border, `#296533` text, 12/24px — i.e. 14/26 optical box, **padding compensated exactly like the kit**. No hover rule at all. 4 uses.
- **`.button-tan`** (:663-675): `#E7DDC6`/ink, 14/26px, 14px/700 → hover `#ECE5D3`. 2 uses.
- **Commerce copy-paste family** — same tan recipe, four paddings: `.product-buy__add` 16px/15px (:1129-1149), `.button-tan` 14/26/14px, `.product-card__add` 9/14/12.5px (:772-792), `.species-card__add` 8/13/12.5px (:506-526). All `#E7DDC6`→hover `#ECE5D3`; all carry an `.is-added` **selected** state that flips to `#296533`/white (:523, :789, :1146) — the only selected-state button in any repo.
- **Ember pill CTAs:** `.catalog-quiz-card__cta` (:921-933) `#C05017`/white, 10px, 12.5/700, hover `#A84413`; `.home-quiz-banner__cta` (:2326-2339) `#C05017`, 12/24px, 14/700, hover `#A84413`; `.cover-crop-compare-cta` (:938-945) `#C05017`, h-44px line-height 44, 12.5px. 3 sites total — genuinely rationed.
- **Disabled:** only scoped per-surface — `.plot-mapper-draw-toolbar .button--primary:disabled { opacity:.5; cursor:default }` (:3407-3411); same block sets `min-height:44px` (:3401-3405), the only place the 44px touch target from `DESIGN.md:305` is enforced.
- **Focus:** none — no `:focus-visible` rule on any button class.
- **Component seam:** `components/add-to-cart-button.tsx:22` takes `className: string` as a **required** prop and appends `is-added` (:49) — the skin is entirely caller-supplied at product-card.tsx:35, purchase-panel.tsx:92, species-card.tsx:77.
- **Compliance:** compliant on law (radius 0, no shadow, ember = `#C05017`). Violation of consistency, not brand: 4 paddings for one commerce intent; zero focus styling.

#### E. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx` (no Button component)
- **Provenance:** tokens `app/globals.css:9-49`; global focus `app/globals.css:78` `button:focus-visible{outline:none; box-shadow:0 0 0 3px var(--focus-ring)}` where `--focus-ring: rgba(82,186,100,.35)` (:47) — **3px soft green ring, matches DESIGN.md:172 exactly**; `.hbtn:hover{background:var(--wheat-veil) #f9f7f1}` (:80), 62 uses.
- **MineButton** (shared.tsx:444): `padding 7px 13px`, 13px/600, `borderRadius: 0`, 1px `--line #e1ddd8` on `--paper #fff`, text `--text-strong #474440`. **Selected (`mineOn`)**: border `--green-pos #30783d`, fill `--green-tint #e8f4e9`, text `--green #296533`.
- **GlobalSearchBox trigger** (shared.tsx:528): `.hbtn`, `7px 11px`, 1px `--line`, `--paper`, radius 0.
- **WindowPills** (shared.tsx:592-597): segmented control, `padding 5px 11px`, 12px/600, radius 0, track `--line-soft #edeae4`; selected = `--paper` + `--ink` + **`box-shadow: 0 1px 2px rgba(16,24,31,.08)`**; unselected transparent/`--text-3 #7f7973`.
- **Primary submit** (`components/ReportProblem.tsx:95`): `7px 14px`, 12.5px/600, **fill `--ink #10181F`** / `--paper` text — *not* Field Green. Disabled = `background: var(--text-faint) #a9a49c` + `cursor: default` (no opacity).
- **Type scale:** 12–13.5px / weight **600**, vs 14px/700 everywhere else.
- **Compliance:** WindowPills selected-pill shadow is a shadow (brand law: no shadows). No filled-green primary exists anywhere in the app. Uncommitted: none of the button values above are touched by the working-tree diff (`git diff` hits only shadow softening on `.day-pop`/`.hcard`/TrendChart tooltip, `APP_HEADER_H` 59→73, and the new `marginTint` helper) — all button values are committed.

#### F. BC — `/private/tmp/.../scratchpad/bc-harveymilling-com/components/ui/button.tsx`
- **Provenance:** button.tsx:7-35; tokens `app/globals.css:9-33`.
- **Geometry:** `rounded-md` (`--radius: 0.5rem`, globals.css:33), `text-sm font-medium`, sizes h-9/px-4 · h-8/px-3/text-xs · h-10/px-8 · icon h-9.
- **Colors:** default `--primary 24 9.8% 10%` = **`#1C1917` stone-900** + `shadow`; destructive `--destructive 0 84.2% 60.2%` = **`#EF4444` red** + `shadow-sm`; outline/secondary `shadow-sm`; secondary `#F5F5F4`. Focus `ring-1 ring-ring (#0C0A09)`.
- **Usage:** 98 files carry `<Button>`; explicit-variant census outline 44, ghost 10, rest default.
- **Compliance:** **four violations** — `rounded-md` (radius law), `shadow`/`shadow-sm` on 4 variants (no-shadow law), red `#EF4444` destructive (no-red law), `font-medium` not bold. Untouched stock; this is the retheme target, not a candidate.

### Agreements
- Radius 0 on every themed button (A, C, D, E). Only BC (F) diverges, and that's a law violation, not a choice.
- Green primary fill `#296533` with white text: A:11, C:24, D:100. (E has no green primary at all.)
- Wheat/tan secondary is the commerce action, ink `#10181F` text, `#E7DDC6` fill, `#ECE5D3` sand hover: A:12 and D:663-675 agree exactly.
- Ember hover-on-fill is `#A84413`: A:13 (`orange-950`) and D:931/2337 agree exactly.
- No uppercase, no letterspacing on button labels anywhere — display type is reserved for headings/eyebrows/seed-tags.
- 200ms color transition: A:7, C:19, `DESIGN.md:213`.
- `disabled:opacity-50` in every cva (A:7, C:19, F:8) and in shopify's one disabled rule (D:3409).
- Variant *names* default/secondary/outline/ghost/link are identical across A, C, F — only `destructive`/`cta` diverge.

### CHOOSE blocks

**CHOOSE button-1: Is `destructive` a filled ember button or an outlined one?**
- **A (KIT):** filled `#C05017` / white text, hover `#A84413` — button.js:13. 3 in-repo uses.
- **C (LABELER):** transparent fill, 1px `#C05017` border + text, hover `#F6ECEB` cream — button.tsx:29-30, argued in ADR 0003:36-62 ("a filled button is always affirmative; outlined orange is always destructive — survives in grayscale"). **0 actual uses in the app.**
- Recommendation: **C's shape rule, A's weight** — adopt outlined destructive, but at KIT's 2px border with compensated padding (A:29-31) rather than labeler's 1px. ADR 0003's grayscale argument is the only written rationale either repo offers, and it also keeps ember out of the "routine fill" territory the brand law rations; 1px is inconsistent with the repo's own 2px outline variant.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-2: Does the `default` size ship full-width or intrinsic?**
- **A (KIT):** intrinsic `inline-flex`, `px-6 py-3` — button.js:20. Full-width is opt-in via `className="w-full"`.
- **C (LABELER):** `w-full h-10 px-6 py-3` — button.tsx:42, defended in the comment as "pre-existing app behaviour" + `DESIGN.md:210-214` ("full-width in forms and mobile drawers, **auto-width inline**").
- Evidence: labeler's own census shows the workaround — `size="sm"` used 16× vs `default` 2×, i.e. authors reach for `sm` to escape full-width, which also drops them to h-9/px-3 they didn't ask for. Two invalid sizes (`md`, `button`) silently land on full-width.
- Recommendation: **A** — the canon sentence makes auto-width the default and full-width the exception; C's default forces a size change to opt out and is already distorting the size census.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-3: Which padding scale for the wheat/commerce ("Add to cart") button?**
- **A (KIT) / D (`.button-tan`, globals.css:666):** 14/26–24×12 — effectively the same box; canon `DESIGN.md:210` says `24px × 12px`.
- **D variants in the wild:** `.product-buy__add` 16px all-round @15px type (:1134), `.product-card__add` 9/14 @12.5px (:776), `.species-card__add` 8/13 @12.5px (:510).
- Recommendation: **A's size ladder** — map the four shopify paddings onto `lg`(32/16) / `default`(24/12) / `sm`(16/8), and treat `.product-card__add` + `.species-card__add` as one `sm`. The board-approved reference already agrees at the top of the ladder; the three tighter values are in-card density, which a size prop expresses without a fourth recipe.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-4: Where does the ember pill CTA live in the variant set?**
- **D (SHOPIFY):** `.catalog-quiz-card__cta` / `.home-quiz-banner__cta` / `.cover-crop-compare-cta` — `#C05017` fill, white, hover `#A84413`, 3 sites, all "take the quiz / compare" funnel entries.
- **C (LABELER):** already has a named home for exactly this — `variant="cta"` (button.tsx:25), fill `#E56625`, hover `#E8763C`, gated by ADR 0002. Currently 0 uses.
- **A (KIT):** no home — conventions.md:29 calls `bg-orange-500 #E56625` "secondary," which collides with the wheat `secondary` variant in the cva.
- Divergence inside the option: shopify's ember fill is `#C05017` (hover `#A84413`), labeler's `cta` fill is `#E56625` (hover `#E8763C`).
- Recommendation: **adopt C's `cta` variant name, at D's `#C05017`/`#A84413` values** — the variant gives ember a greppable, ask-for-it-by-name gate (satisfying "rationed accent"), and D is the shipped board-approved pairing; it also matches A's destructive hover `#A84413`, so one ember-hover exists rather than two.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-5: Focus ring recipe — 2px hard green, or 3px soft per-hue?**
- **A (KIT cva):** `focus-visible:ring-2 ring-green-500 #296533 ring-offset-2`, same green for every variant — button.js:7. C matches (`ring-2 ring-ring` = `#296533`, button.tsx:19).
- **B (KIT raw) / E (STATS) / canon:** 3px soft ring in the button's own hue — conventions.md:29 `focus:ring focus:ring-green-300 (#52BA64)` / `ring-orange-300`; STATS `box-shadow: 0 0 0 3px rgba(82,186,100,.35)` globals.css:78 + `--focus-ring-ember` (:47) for the ember twin; specced at `DESIGN.md:172` and `:213`.
- **D (SHOPIFY):** none.
- Recommendation: **E's recipe** — 3px soft ring, per-hue, is what the canon spec states twice and what STATS already implements with both green and ember tokens; the kit's cva is the outlier and silently green-rings the ember/destructive variants.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-6: Primary-action fill in dense internal tools — green or ink?**
- **A/C/D:** Field Green `#296533`.
- **E (STATS):** `--ink #10181F` for the one true submit (ReportProblem.tsx:95); green is reserved for *selected* state (MineButton `--green-tint` fill, shared.tsx:444).
- Recommendation: **A/C/D green for affirmative submits**, keep E's green-tint for selected/toggle state — the two roles are distinguishable (fill vs tint) and canon names green as the interactive colour (`DESIGN.md:145`, `:327`). Flag that this is a real retheme edit in STATS, not a rename.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE button-7: Green hover — `#2B3C1D` or `#1A4121`?**
- **A:11 / C:24 / E:20:** `#2B3C1D` (`green-600` / `brand-field-hover` / `--green-hover`) — 3 repos.
- **D:105:** `#1A4121` (`--color-pine`, i.e. Deep Forest) — board-approved shipped.
- Recommendation: **`#2B3C1D`** — `DESIGN.md:145` states hover "darkens toward `#2B3C1D`" by name, and three of four repos already agree; shopify's pine is a one-line fix.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **BRAND-LAW VIOLATION (BC, F):** `rounded-md`, `shadow`/`shadow-sm` on 4 variants, red `#EF4444` destructive, `font-medium`. button.tsx:8-19. Not a choice — this is the untheme baseline. 98 files affected.
- **BRAND-LAW VIOLATION (STATS, E):** `WindowPills` selected pill carries `box-shadow: 0 1px 2px rgba(16,24,31,.08)` — shared.tsx:595. Depth must come from cream fill + hairline. Committed, not in the working-tree diff.
- **BUG (KIT, B):** logo-download rust button hover is inert — `bg-orange-900` and `hover:bg-orange-800` both resolve to `#C05017` (tailwind.config.js). 5 call sites: primaryLogo.js:260, icons.js:31, wordmark.js:79, horizontalStackedSubBrand.js:127, illustrations.js:39.
- **LABELER-ONLY (for the user's own pass):** (a) `size="md"` and `size="button"` are not in the cva — they fall through to the full-width default; (b) `variant="destructive"` and `variant="cta"` have **zero** call sites, so ADR 0003's outline decision is currently unexercised; (c) the `outline` variant has no padding compensation, so its 1px border makes it 2px shorter in content-box terms than a filled `default` at the same size; (d) tailwind.config.ts:105-147 remaps stock numeric scales onto brand values — a stray `bg-yellow-800` on a button silently becomes wheat.
- **Missing everywhere:** no `:active` / pressed state in any of the five implementations. `DESIGN.md` doesn't spec one either — open question.
- **Missing in SHOPIFY (D):** no `:focus-visible` on any of the 6+ button classes, and no `:hover` on `.button-outline` (globals.css:677-684). 44px min-height exists only inside `.plot-mapper-draw-toolbar` (:3401), not globally, despite `DESIGN.md:305`.
- **Open question:** shopify's `.is-added` selected state (tan → `#296533`/white, globals.css:523/789/1146) has no equivalent in any cva. Does the canon Button need a `data-state=selected` treatment, or is that a distinct Toggle primitive? Not resolvable from the button files alone.
- **Open question:** `AddToCartButton`'s required `className` prop (add-to-cart-button.tsx:22) means the commerce button's skin is caller-supplied at 3 sites. Whether the canonical component absorbs the skin or keeps the seam is an API decision, not a value decision.

---

## BADGE / CHIP / STATUS

### Implementations

#### A. KIT — `src/components/ui/badge.js` (solid poster chip)
- Provenance: `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/badge.js:5-20`; scale resolved from `src/tailwind/tailwind.config.js:993-1041`.
- Geometry: `px-3 py-1` = 12px/4px; `text-xs` 12px; `font-heading` (Chakra Petch); 700; uppercase; `tracking-widest` 0.1em; radius 0 (no rounded class; config `borderRadius.none:"0px"` at :250).
- Colors per state: default `bg-green-500` **#296533** / #FFF · secondary `bg-yellow-100` **#d8c7a2** (Harvest Wheat) / `text-black` **#10181F** · destructive `bg-orange-700` **#C05017** / #FFF · outline 1px `border-green-500` **#296533** + text #296533, transparent fill. **No hover/active/selected/disabled states defined.** Focus: `ring-2 ring-green-500` #296533 + `ring-offset-2`.
- Variants: default / secondary / destructive / outline (4).
- Used: `catalogueActions.js:60-63` (variant showcase), `catalogueData.js:202` (order-status table — Completed=default, all else=destructive), `catalogueLayout.js:71` (secondary). ~4 sites.
- Compliance: compliant (square, no shadow, ember not red). Two gaps: outline uses 1px (buttons use 2px + compensated padding), and `DESIGN.md:164-165` specs the Completed chip as **#60BF71 fill + deep-green text**, warning as `#E8773E`+white — badge.js ships #296533/#C05017 instead.
- Seed-tag signature is prose-only: `.design-sync/conventions.md:15` = `font-heading text-xs font-bold uppercase tracking-widest text-gray-500` **#57534E** on `bg-yellow-50` **#F5F1E7**. Not a badge variant.

#### B. STATS — `app/globals.css:66-70` (`.chip` tint recipe)
- Geometry: inline-block, padding **2px 8px**, display stack (Chakra Petch), **11px**, 700, uppercase, `--track-display` **.08em**, 1px solid border, radius 0 (`--radius:0px`, :51).
- Colors: `.chip-success` bg **#e8f4e9** / text **#296533** / border **#abcfae** (:68) · `.chip-warn` bg **#fbede4** / text **#a84413** / border **#eec4a9** (:69) · `.chip-info` bg **#e7eef5** / text **#2a5b88** / border **#aec7e0** (:70). Tokens at :22, :29, :35.
- Used: **zero call sites** — grep for `className="chip*"` across `components/` returns nothing. Dead recipe.
- Compliance: compliant; exactly matches the validated spec in `docs/design-system/dataviz-palette.md:16-23`.

#### C. STATS — `components/directory/shared.tsx:43` (`Chip` component, raw color props)
- Provenance: line numbers post-uncommitted-edit (`git diff` adds `marginTint` at :26-33, shifting `Chip` from ~:33 to :43; the Chip body itself is unmodified).
- Geometry: `fontSize:10`, 700, padding **2px 7px**, `borderRadius:0`, display stack, uppercase, `.08em`, `whiteSpace:nowrap`.
- Colors: **entirely caller-supplied** (`color`, `bg`, optional `border`). When `border` is omitted it renders `border:'none'` → a 1px height/width delta vs bordered siblings on the same row.
- Used: **101 call sites** across `components/*.tsx`. Actual bg distribution: `--wheat-veil` #f9f7f1 ×27, `--ember-tint` #fbede4 ×16, `--gold-tint` #f8efde ×14, `--wheat-pale` #f5f1e7 ×10, `--green-tint` #e8f4e9 ×7, `--slate-tint` #e7eef5 ×5, `--paper` ×1, `--data-red-tint` #fcece9 ×1. Example: `CustomersApp.tsx:440` past-due = ember triad with border; `:442` unpriced = same tint **without** border.
- Compliance: square/no-shadow OK, but 10px + free-form props means the sanctioned triads are re-typed per call and only ~half carry the border.
- Adjacent: `.seed-tag` (`globals.css:65`) 11px/700/.08em/`--text-3` **#7f7973** on **#f5f1e7**; `.eyebrow` (:72) 4px 8px/12px/700/.08em on `--wheat-strong` **#d8c7a2**, ink text — both also **unused in components**; `shared.tsx:5 thStyle` is a third variant at 10.5px/`--text-faint` #a9a49c.

#### D. SHOPIFY — `app/globals.css` (6 hand-rolled treatments, board-approved)
- Tokens `:root:2-8`: forest **#296533**, cream #f5f1e7, tan **#e7ddc6**, sand **#ece5d3**, ember **#c05017**, ink #10181f, slate **#3d4148**, gray #5a5f66.
- `.product-card__badge` :711 — absolute left 0/top 12px, bg **#c05017**, #fff, **11px/700/.08em/uppercase, padding 4px 10px**. 1 site (`components/product-card.tsx:21`).
- `.species-card__badge` :441 — same geometry (11px/700/.08em/4px 10px) but bg **#e7ddc6 tan** + ink text; `--best` :455 flips to **#296533**/#fff. 1 site (`components/quiz/species-card.tsx:37`).
- `.winterkill-chip` / `.overwinters-chip` :1227-1244 — padding **4px 8px**, **12px**/700/.08em/uppercase, #fff on ember #c05017 (winterkill) / forest #296533 (overwinters). 1 site (`app/products/[handle]/page.tsx:116`).
- `.quiz-flag` :2738 — bg **#ece5d3 sand**, text **#3d4148 slate**, **11px/700/.06em**, padding **3px 8px**. 4 sites (`species-card.tsx:65,66`; `plot-finder-quiz.tsx:246,247`).
- `.plot-mapper-tile__auto-chip` :2864 — bg #c05017/#fff, **10px/700/.1em**, padding **2px 7px**, **`border-radius:2px`**. 1 site (`plot-mapper/tile-group.tsx:71`).
- Compliance: `border-radius:2px` on the auto-chip is a **brand-law violation** (2px is checkbox-only). **None of the six declares `font-family`** → all render in the body face (TT Commons Pro/Open Sans), not Chakra Petch. Otherwise square/no-shadow/ember-not-red. Ember fill count (3 of 6 treatments incl. an always-on AUTO chip) strains "ember is rationed."

#### E. LABELER (inventory-only) — 4 duplicated color tables, no shadcn badge
- `src/app/admin/mixes/_components/status-badge.tsx:15` base = `inline-flex items-center gap-1 border px-2 py-0.5 text-xs font-normal` → 8px/2px, **12px, weight 400, no uppercase, no tracking, body sans**. States (:24,:40,:53,:64): generated+lowConfidence `border-brand-wheat-harvest #D8C7A2 / bg-brand-wheat-pale #F5F1E7 / text ink`; generated `border+bg brand-success #60BF71 / text brand-forest #1A4121`; failed `border-brand-ember #E56625 / bg-brand-cream #F6ECEB / ink`; pending `border-border / bg-brand-concrete #E2E1DD / text-brand-stone #57534E`. Lucide icon per state.
- `src/app/fertilizer/_components/soil-level-chip.tsx:23` `chipBase` = same idiom but **`px-2 py-1 text-sm`** (8px/4px, 14px) — different geometry, same color vocabulary. Table :26-45: very-low **and** low are byte-identical ember/cream/ink; medium wheat triad; high success triad; unknown renders nothing.
- `src/app/quiz/_components/species-row.tsx:176,203,214` — the same three triads re-typed inline with no shared map.
- `src/app/quiz/_components/species-detail-panel.tsx:63` `DOT_FILL_BY_RANK` — ranks 1-3 `bg-brand-ember-deep` **#C05017**, 4 `bg-brand-field-light` **#30783D**, 5-6 `bg-brand-field` **#296533**, 7 `bg-brand-forest` **#1A4121**; rendered as `rounded-full` dots (legal circular primitive).
- `src/app/fertilizer/results/_components/nutrient-card.tsx:96-106` `TIER_A..F_CLASSES` — card-scale (`px-4 py-3 text-sm`), 6 tiers: sage #A6DBAF, wheat, ember/cream, secondary/muted, and F = `border-2` ember/cream.
- Brand palette source: `tailwind.config.ts:81-104`. Type role `.type-eyebrow` (`src/styles/globals.css:147`) is only `text-sm` + line-height 1.25 — no weight/case/tracking, despite the comment at :145 calling it "the signature eyebrow chip."
- Compliance: square, no shadows, ember-not-red — but chips are **lowercase body-sans weight-400**, i.e. no seed-tag/display signature anywhere.

#### F. BC — `components/ui/badge.tsx:6-24` (stock shadcn) + 5 independent status maps
- Badge base: `rounded-md` (**6px**, `--radius:0.5rem` at `app/globals.css:33`), `border px-2.5 py-0.5` (10px/2px), `text-xs` 12px, **font-semibold 600, no uppercase, no tracking**, `transition-colors`.
- default `bg-primary` hsl(24 9.8% 10%) ≈ **#1C1917** + **`shadow`** + hover `/80` · secondary hsl(60 4.8% 95.9%) ≈ #F5F5F4 · destructive `--destructive` hsl(0 84.2% 60.2%) = **#EF4444** + shadow · outline text-foreground.
- Used: **291 `<Badge` instances across 68 files.**
- `components/migration/StatusBadge.tsx:46-119` — 6 states: pending gray-50/600/200; **pushing blue-100 #DBEAFE / blue-700 #1D4ED8**; success green-100/700/200; **error red-100 #FEE2E2 / red-700 #B91C1C** (+ `text-red-600` detail at :87); item_creating & variants_creating = the pushing blue.
- `components/gantt/GanttTaskList.tsx:41` `PRIORITY_COLORS` — high `bg-red-500` #EF4444, medium `bg-amber-400` #FBBF24, low `bg-gray-300`; 2×2 `rounded-full` dot.
- `app/(dashboard)/agvance-company-split/page.tsx:88` `COMPANY_COLORS` — Feed green / Seed **blue** / Retail amber / Harvey's **purple** / Unassigned **red** (100/800 pairs + dark variants).
- `app/(dashboard)/product-matching/page.tsx:825` `statusColors` — pending gray, mapped green, skipped **red**.
- `app/(dashboard)/migration-readiness/page.tsx:87` `STATUS_COLORS` — 5-field objects (border/bg/badge/badgeText/text) using **emerald** (not green), amber, red; plus `SCORE_BAR_COLORS` emerald-500/amber-500/red-500 at :121.
- Compliance: **violations** — 6px radius, `shadow` on default/destructive, red destructive + red/blue/purple status chrome, no uppercase/display face, 5 disjoint vocabularies (`pending|pushing|success|error|item_creating|variants_creating` / `high|medium|low` / company names / `pending|mapped|skipped` / `ready|needs-review|blocked`) with green-vs-emerald drift between two of them.

### Agreements
- Radius 0 on chips in KIT, STATS, SHOPIFY, LABELER (only exceptions: shopify auto-chip 2px, BC 6px).
- No shadows on chips in all four themed repos (only BC's stock badge carries `shadow`).
- Ember family — never red — for warning/failed/destructive in KIT (#C05017), STATS (#fbede4/#a84413), SHOPIFY (#c05017), LABELER (#E56625/#C05017). Only BC uses red.
- **#C05017 is the agreed ember *fill* for badge-scale chips** in both KIT (`orange-700`) and SHOPIFY (`--color-ember`), independently.
- The validated tint triads in `docs/design-system/dataviz-palette.md:16-23` and stats `globals.css:22,29,35` match exactly (#e8f4e9/#296533/#abcfae · #fbede4/#a84413/#eec4a9 · #e7eef5/#2a5b88/#aec7e0).
- Green success fill = #296533 (KIT default, shopify overwinters/best) or #60BF71 (labeler `brand-success`, DESIGN.md spec) — the *hue* is agreed, the step is not.
- Uppercase + 700 + positive tracking is the chip idiom in KIT, STATS, SHOPIFY (BC and LABELER are the outliers).
- 11-12px chip text in KIT/STATS/SHOPIFY.

### CHOOSE blocks

**CHOOSE BADGE-1: Do we ship one chip or two (poster chip vs tint chip)?**
- Options: A (KIT) solid fills only, no tint variants — B/STATS `.chip-*` tints only, no solid — dataviz-palette.md:18-23 rule: tints for table-scale text, solid poster chips reserved for **≥18px** badge text
- Recommendation: **two-tier, per dataviz-palette.md:18-23** — add `success/warning/info` tint variants to KIT badge and keep A's solids for poster/card overlays; solid #296533 at 11px fails small-text contrast, which is exactly why STATS built the tints.
- Decision: **A (user override):** the Badge component keeps solid poster fills only. The tint tier ships as the separate `StatusChip` component (per X-3 + tokens-15's two-tier rule) — tints never become Badge variants.

**CHOOSE BADGE-2: One chip geometry.**
- Options: A KIT 12px/4px pad · 12px · .1em — B STATS `.chip` 8px/2px · 11px · .08em — C STATS `Chip` 7px/2px · 10px · .08em — D SHOPIFY 10px/4px · 11px · .08em — F BC 10px/2px · 12px semibold lowercase
- Recommendation: **D's padding + B/C's type (4px 8px, 11px, 700, .08em)** — shopify is the shipped board-approved reference and its 4px vertical reads better than 2px; .08em is what 3 of 4 themed repos already use, and KIT's .1em is the only .1em outlier.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-3: One semantic status vocabulary.**
- Options: BC's five disjoint maps (E-2..E-5 above) — LABELER's 4 duplicated tables — a single `success | warning | error | pending | info` union mapped onto the validated tints (green/ember/ember-strong/concrete/slate)
- Recommendation: **single 5-term union on the tint triads** — it absorbs every BC state (pushing/item_creating/variants_creating → `pending`; blocked/skipped/failed → `error`; needs-review → `warning`) and deletes 9 hand-rolled tables.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-4: Shopify's ember product badge vs tan species badge (identical geometry, different fill).**
- Options: D `.product-card__badge` **#c05017 + white** — D `.species-card__badge` **#e7ddc6 tan + ink** (with #296533 for `--best`)
- Recommendation: **tan #e7ddc6 as the default card-overlay badge, ember reserved for genuine warnings** (winterkill) — an always-on ember badge on every promoted product violates "ember is a rationed accent."
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-5: STATS chip API — raw color props or named variants?**
- Options: C `Chip({color,bg,border})` 101 call sites, border optional (8 distinct bg values in the wild) — B `.chip-success/.chip-warn/.chip-info` (0 call sites, spec-correct)
- Recommendation: **B's triads as named variants** (`<Chip tone="success|warning|info|neutral|gold">`), keeping the prop escape hatch off by default — the current API is why 16 ember chips exist with inconsistent borders.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-6: Exact seed-tag / eyebrow values.**
- Options: KIT `conventions.md:15` **12px, .1em, #57534E on #F5F1E7** — STATS `.seed-tag:65` **11px, .08em, #7f7973 on #f5f1e7** — STATS `.eyebrow:72` **12px, .08em, ink on #d8c7a2** — STATS `thStyle:5` **10.5px, #a9a49c** — LABELER `.type-eyebrow:147` 14px, no weight/case/tracking
- Recommendation: **KIT's 12px/#57534E on #F5F1E7 for seed-tag (table headers), STATS `.eyebrow` on #d8c7a2 for section eyebrows** — two distinct roles that are currently being conflated; #7f7973 and #a9a49c are contrast-marginal on cream.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-7: Do chips use the display face?**
- Options: KIT/STATS **Chakra Petch bold uppercase** — SHOPIFY **body face, bold uppercase** (no `font-family` declared on any of its 6 chips) — LABELER/BC body sans, weight 400/600, sentence case
- Recommendation: **Chakra Petch bold uppercase** — it is the seed-tag signature and shopify's omission looks like an oversight, not a decision (its sibling `.plot-mapper-tile__label:2876` *does* set `--font-heading`).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE BADGE-8: Success-chip green step.**
- Options: **#296533 + white** (KIT `badge.js:10`, shopify `--best`/overwinters) — **#60BF71 + deep-green text** (`DESIGN.md:164`, labeler `brand-success`) — **#e8f4e9 tint + #296533 text** (stats/dataviz)
- Recommendation: **#e8f4e9 tint at table scale, #60BF71+#1A4121 for ≥18px poster chips** — this is the only reading that satisfies both DESIGN.md:164 and the ≥18px contrast rule; #296533+white then belongs to buttons, not chips.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Violation — BC `components/ui/badge.tsx:7,12,16`**: `rounded-md` 6px, `shadow` on default/destructive, and `--destructive` #EF4444 red. 291 usages across 68 files; this is the single largest remediation surface in this group.
- **Violation — BC status chrome**: red in `StatusBadge.tsx:78,87`, `GanttTaskList.tsx:42`, `COMPANY_COLORS` Unassigned, `statusColors.skipped`, `STATUS_COLORS.blocked`, `SCORE_BAR_COLORS.blocked`; blue in `StatusBadge.tsx:60,107,115` + `COMPANY_COLORS.Seed`; purple in `COMPANY_COLORS["Harvey's"]`. None are Data-Red numeric semantics (DR-1), so all are UI-chrome red violations.
- **Violation — SHOPIFY `app/globals.css:2871`**: `border-radius:2px` on `.plot-mapper-tile__auto-chip` (2px is checkbox-only).
- **Dead code — STATS**: `.chip/.chip-success/.chip-warn/.chip-info` (`globals.css:66-70`), `.eyebrow` (:72) and `.seed-tag` (:65) have zero component call sites; the app renders 101 prop-driven `Chip`s instead. Deciding BADGE-5 also decides whether these classes survive.
- **STATS uncommitted**: `components/directory/shared.tsx` and `app/globals.css` both have working-tree edits (`git diff --stat`: +35/-10 and +20/-3). The `Chip` body is unchanged by them, but its line number (43) is post-edit; at HEAD it is ~line 33. The added `marginTint` helper (:26-33, uncommitted) is a *numeric* traffic light using `--data-red` — correct per DR-1, not chip chrome.
- **LABELER (for the user's own pass, no edits proposed)**: (1) `chipBase` `text-sm/py-1` vs mixes `text-xs/py-0.5` — two geometries for one vocabulary; (2) the ember/cream, wheat, and success triads are re-typed in 4 files (`soil-level-chip.tsx:26`, `status-badge.tsx:24-64`, `species-row.tsx:176,203,214`, `nutrient-card.tsx:96-106`) with no shared token; (3) `soil-level-chip.tsx:29-36` gives `very-low` and `low` byte-identical styling — the band distinction is text-only; (4) chips are weight-400 sentence-case body sans, so the seed-tag signature is absent repo-wide; (5) `.type-eyebrow` (`globals.css:147`) declares only size/leading despite documenting a chip; (6) no shadcn badge exists, so any kit adoption here is greenfield.
- **Open question**: KIT `badge.js` defines no hover/active/disabled/selected states at all — if badges become interactive filters anywhere, the state matrix is undefined in canon. Not resolvable from the code.
- **Open question**: `--color-ember` differs by repo — shopify `globals.css:7` = **#C05017**, stats `:28` = **#e56625** (with `--ember-strong` #c05017). Same token name, different value. Not a badge-only issue, but it silently decides every ember chip fill.

---

## CARD surfaces + KPI/STAT tiles

### Implementations

#### A. KIT — `src/components/ui/card.js`
- Provenance: `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/card.js:4-51`. Token source: `src/tailwind/tailwind.config.js:1031-1041` (private scale overrides the stone preset at :18-29).
- Geometry: Card = border 1px + no padding (padding lives in parts). Header/Content/Footer `p-6` = **24px**, Content/Footer `pt-0`; Header `space-y-1.5` (6px). Radius **0** (no radius class). No shadow class.
- Colors: border `gray-200` = **#E2E2DD** (config:1035); bg `white` **#FFFFFF**; text `black` = **#10181F** (config:1030); CardDescription `gray-500` = **#57534E** (config:1032). No hover/selected/disabled/focus states defined at all.
- Type: CardTitle = `font-heading text-xl font-bold uppercase tracking-widest` → Chakra Petch **20px/28px, 700, uppercase, 0.1em** (fontSize.xl at config:407-412). CardDescription = `text-sm` 14px/20px.
- Variants: none (6-part composition only).
- Usage: 1 showcase site — `src/components/catalogueLayout.js:69-88` (Card + Header + Badge secondary + Title + Description + Content + Footer w/ secondary+link buttons).
- Compliance: **compliant** (flat, square, no shadow, no gradient). Note canon spec disagreement: `DESIGN.md:97` says `card-padding: 48px` and `DESIGN.md:219` "White cards (`padding: 48px`) … at most a whisper of shadow (`shadow-sm`)" — the *guidelines-page* card, not the kit primitive; kit ships 24px/no shadow.

#### B. STATS — `components/directory/shared.tsx:36` (`card` style fragment)
- Provenance: `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx:36`. Tokens `app/globals.css:16-17`.
- Geometry: `padding: '18px 20px'`, `borderRadius: 0`, border 1px.
- Colors: bg `var(--paper)` = **#FFFFFF**; border `var(--line)` = **#E1DDD8** (globals.css:17). Hover is opt-in via `.hcard:hover` (`globals.css:120`): `border-color: var(--line-strong)` **#CECAC3** + `box-shadow:0 4px 14px rgba(16,24,31,.06)`.
- Variants: none; section title pairs via `secTitle` (`shared.tsx:37` — 11px/700/uppercase/`--track-display` .08em/`--text-faint` #A9A49C).
- Usage: **63** `style={card}` sites across `components/*.tsx` + `app/`.
- Compliance: flat/square/no-gradient OK. **Violation:** `.hcard:hover` adds a real box-shadow (globals.css:120) — depth-by-shadow on hover.

#### C. STATS — `components/directory/shared.tsx:38,51` (`kpiTile` + `<Kpi>`) + `.kpi-numeral`
- Provenance: `shared.tsx:38` (tile), `shared.tsx:51-60` (component), `app/globals.css:74` (`.kpi-numeral`).
- Geometry: tile `padding: '12px 14px'`, radius 0, border 1px. Label 11.5px; value 19px/700 `letterSpacing: '.02em'`, `marginTop: 3`; sub 11px, `marginTop: 1`, `minHeight: 13` (reserves the sub line so a row of tiles aligns).
- Colors: border `var(--line)` #E1DDD8; bg `var(--paper)` #FFFFFF; label `var(--text-3)` **#7F7973**; value `color ?? var(--ink)` **#10181F**; sub `var(--text-faint)` **#A9A49C**.
- API: `{ label, value, sub?, color?, title?, explain?, subExplain? }` — value tint is caller-supplied. Negative semantics: `LeaderboardApp.tsx:451` `net >= 0 ? var(--green) : var(--data-red-strong)` (#296533 / **#A21C10**); `LeaderboardApp.tsx:439` gold/`--data-red-strong`; `HedgedPreviewApp.tsx:206,212` use `marginTint` (`shared.tsx:26-31`, **uncommitted addition** — `<0 → --data-red #C02617`, `<8 → --ember-text #A84413`, else `--green-pos #30783D`). `FreightApp.tsx:210` tints a non-signed KPI `var(--ember-text)`.
- Type: `.kpi-numeral` (globals.css:74) = display stack, 700, `--track-display` .08em, `tabular-nums` — **defined but zero `<Kpi>` consumers**; the component hardcodes `letterSpacing:'.02em'` + `fontVariantNumeric` is absent.
- Usage: `<Kpi>` **35** call sites; raw `style={kpiTile}` **15** more.
- Compliance: compliant. DR-1 respected. `--data-red-strong` #A21C10 vs canon Data Red #C02617 is a shade drift, not a law break.

#### D. STATS — `components/CustomersApp.tsx:36,38,51` (private card/KPI copies — drift evidence)
- Provenance: byte-identical `card` (`:36`) and `kpiTile` (`:38`) fragments; **divergent** `Kpi` signature at `:51`: `{ label, value, sub, color, explain }` — missing `title` and `subExplain` vs C.
- Also duplicates `TrendChart` tooltip (`:530-533`) with the same paper/line/radius-0 recipe.
- **Uncommitted** DR-1 fix in this file: `:219` and `:656` changed from `net > 0 ? green-pos : data-red` to `net < 0 ? data-red : green-pos` (zero now reads green, not red) — the fix exists only in the working tree, and shared.tsx has no equivalent.
- Compliance: compliant, but an unsynced fork.

#### E. LABELER — `src/components/ui/card.tsx` (INVENTORY-ONLY)
- Provenance: `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/card.tsx:5-70`. Tokens `src/styles/globals.css:22-23,58,72`.
- Geometry: `border bg-card text-card-foreground` — `rounded-*`/`shadow` stripped. Parts identical to A: `p-6`/`pt-0`, `space-y-1.5`. `--radius: 0rem` (globals.css:72).
- Colors: bg `--card` **#FFFFFF** (globals.css:22); text `--card-foreground` **#10181F** (:23); border `--border` = `20 5.9% 90%` = **#E7E5E4** (:58, stock stone-200 retained, labeled "Hairline"). `no-vetted-data-screen.tsx:16` / `invalid-link-state.tsx:16` override to `border-border bg-secondary` = wheat **#E7DDC6** (globals.css:33).
- Type: CardTitle = `.type-title leading-none` → `globals.css:122,141-143`: `font-heading font-bold uppercase tracking-widest text-2xl` = Chakra Petch **24px, 700, uppercase, 0.1em** (line-height 1.2727 overridden by `leading-none`).
- Usage: **12** `<Card>` sites (fertilizer results, quiz species-row, admin planting-artifacts, agronomy panel); common override `className="w-full p-6"` — i.e. padding applied on Card *and* CardContent `pt-6`.
- Compliance: compliant. Two labeler-only notes in Flags.

#### F. SHOPIFY — `.product-card`, `app/globals.css:693-698`
- Border **`1px solid rgba(16,24,31,0.12)` written as a literal**, not `var(--border-mid)`; no bg (inherits page); radius 0; padding 0 on shell, `__body` **16px** (`:724-730`, `gap:6px`).
- Type: `__name` `:740-747` heading face, 700, uppercase, **0.05em**, **15.5px**, #10181F; `:hover` → `--color-forest` **#296533** (`:749`). `__kind` `:732` 11px/700/0.1em/uppercase in `--color-ember` **#C05017**. `__desc` 13px `--color-gray` #5A5F66.
- Media `__img` 180px cover (`:704`); `__badge` (`:711`) ember fill, white text, square, 4px×10px.
- Action `__add` (`:772`): tan **#E7DDC6** fill, ink text, 9px×14px, 12.5px/700, no border, no radius; hover → sand **#ECE5D3**; `.is-added` → forest #296533 / #FFF.
- Usage: catalog / home / pairs grids.
- Compliance: compliant. Border is a hard-coded twin of the token family — 0.12 is the canon hairline alpha but no token holds it (`--border-soft` .10 / `--border-mid` .15 / `--border-strong` .20, `:11-13`).

#### G. SHOPIFY — `.species-card`, `app/globals.css:430-436` (+`--best :437-439`)
- Border `1px solid var(--border-mid)` = **rgba(16,24,31,0.15)**; radius 0; body padding **16px** (`:467`).
- Selected state: `.species-card--best` → **2px solid var(--color-forest) #296533** (`:437-439`); paired badge `__badge--best` forest fill/white (`:455-458`); base badge tan/ink (`:441-453`).
- Type: `__name` 15px, 0.05em (vs F's 15.5px) `:475-482`; img 150px (vs F's 180px) `:460`; `__add` 8px×13px (vs F's 9px×14px) `:506-516`.
- Usage: quiz ranking grid (`/cover-crops` quiz results).
- Compliance: compliant. The 2px forest selected-border is the board-approved selection idiom.

#### H. SHOPIFY — `.plot-mapper-card`, `app/globals.css:2776-2782` (`GroundFactsCard`)
- Border `1px solid var(--border-mid)` rgba(16,24,31,0.15); **`border-radius: 2px`**; `background:#fff` (literal, not a token); `padding: 18px`; `margin-bottom: 22px`.
- Type: `__name` heading face 700 uppercase **0.03em, 19px** (`:2784-2791`); `__sub` 13.5px #5A5F66; `__facts` dl grid `minmax(160px,1fr)` gap 8/18, dt = 12px/700/uppercase/0.08em/#5A5F66 (`:2807-2814`).
- Consumer: `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/plot-mapper/ground-facts-card.tsx:28-60`.
- Compliance: **VIOLATION — `border-radius: 2px`** (2px is legal only on ~16px checkboxes). Also `#fff` literal where `--paper`/token idiom applies.

#### I. SHOPIFY — `.catalog-quiz-card`, `app/globals.css:899-905`
- **No border at all**; fill `var(--color-cream)` **#F5F1E7**; padding **16px**; gap 10px; radius 0. Title 12.5px heading/0.08em (`:907`); text 12.5px `--color-slate` #3D4148; CTA (`:921-934`) **ember #C05017** fill, white, 10px, hover **#A84413**.
- Compliance: compliant (cream-fill depth, no shadow). Only card family that uses fill-instead-of-border.

#### J. SHOPIFY — `.plot-mapper-entry-card`, `app/globals.css:3442-3447`
- Border `1px solid var(--border-mid)`; **`border-radius: 2px`**; bg `var(--color-cream)` #F5F1E7; padding **18px**. Heading 14px/0.06em (`:3449`); body 14px `--color-slate`.
- Compliance: **VIOLATION — 2px radius** (second instance; same authoring pass as H).

#### K. BC — `components/ui/card.tsx:6-17` (stock shadcn New York / stone)
- `rounded-xl border bg-card text-card-foreground shadow` → radius **12px** (stock, not var-driven; `tailwind.config.ts:63-65` only maps lg/md/sm to `var(--radius)` = **0.5rem/8px**, `app/globals.css:33`); shadow = Tailwind `shadow` (`0 1px 3px rgb(0 0 0/.1), 0 1px 2px -1px rgb(0 0 0/.1)`).
- Colors: `--card` `0 0% 100%` #FFFFFF (globals.css:11); `--card-foreground` `20 14.3% 4.1%` ≈ **#0C0A09**; `--border` `20 5.9% 90%` = **#E7E5E4** (:25). Dark block at :36-52 exists and is used (`dark:` variants on tiles).
- Parts identical to A (`p-6`, `pt-0`, `space-y-1.5`); CardTitle = `font-semibold leading-none tracking-tight` (**no heading face, no uppercase, negative tracking**).
- Usage: **915** `<Card`/`<Card ` opens across **153** files in `app/` + `components/`; 794 `CardDescription` references.
- Compliance: **VIOLATIONS — rounded-xl (12px) + shadow + CardTitle type role** (sans, semibold, sentence case, tracking-tight vs Chakra Petch bold uppercase 0.1em).

#### L. BC — inline gradient KPI/STAT tile pattern (canonical copy `app/(dashboard)/migration-readiness/page.tsx:168-243`)
- Shape: `<Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-900">` → CardHeader `pb-2` + CardDescription (label, `text-emerald-600` #059669) + CardTitle `text-2xl text-emerald-800` (#065F46) **with a 20px lucide icon inline** + CardContent holding a Badge or `text-xs` sub.
- Geometry: header 24px padding w/ `pb-2` (8px), content `p-6 pt-0`; value 24px semibold sentence-case; radius 12px + shadow inherited from K.
- Count: **50** `<Card className="bg-gradient…` instances (52 `bg-gradient-to-br from-*` total) across **11** files; palette families in use: emerald→green ×17, violet→purple ×10, teal→emerald ×5, orange→amber ×5, amber→orange ×5, slate→gray ×4, amber→yellow ×4, indigo→blue ×2. `CardTitle text-2xl` appears 49×.
- Compliance: **VIOLATIONS — gradients (×50), shadow, 12px radius, off-brand hues (violet/indigo/teal/emerald), no display face on the numeral, no negative→Data-Red rule.**

### Agreements
- Radius 0 on the card shell: A, B, C, D, E, F, G, I all agree (only H/J at 2px, K/L at 12px).
- No shadow on the card's resting state: A, B, C, D, E, F, G, H, I, J agree.
- White paper fill for the neutral card: A (#FFFFFF), B/C/D (`--paper` #FFFFFF), E (`--card` #FFFFFF), H (`#fff`).
- Cream #F5F1E7 as the *emphasis* card fill: I and J agree (Shopify) — matches the seed-tag cream and canon `surface-wheat-pale`.
- 6-part API (`Card/Header/Title/Description/Content/Footer`) with `p-6` / `pt-0` / `space-y-1.5`: A, E, K identical structurally.
- Display-face uppercase card title with `tracking-widest` (0.1em): A (text-xl/20px) and E (`.type-title`/24px) agree on the *role*; Shopify's `__name` classes agree on face+weight+case.
- KPI value = display face, 700, tabular alignment intent: C (`shared.tsx:53-57`) and `.kpi-numeral` (globals.css:74) agree in spirit; both are display-stack + 700.
- DR-1 respected everywhere it applies in STATS: `LeaderboardApp.tsx:439,451`, `marginTint` (`shared.tsx:26-31`), `CustomersApp.tsx:219,656`.

### CHOOSE blocks

**CHOOSE card-1: What is the canonical card border color/width?**
- Options:
  - A (KIT) — `border-gray-200` **#E2E2DD**, opaque, 1px
  - B/C (STATS) — `var(--line)` **#E1DDD8**, opaque, 1px (plus `--hairline-alpha: rgba(16,24,31,.12)` declared at `globals.css:18` but unused by cards)
  - E (LABELER) — `--border` **#E7E5E4** (stock stone-200, labeled "Hairline")
  - F (SHOPIFY) — literal **rgba(16,24,31,0.12)** on `.product-card`
  - G/H/J (SHOPIFY) — `var(--border-mid)` **rgba(16,24,31,0.15)**
  - K (BC) — **#E7E5E4** stock
- Recommendation: **rgba(16,24,31,0.12)**, exposed as a token in every repo (`--hairline` / `hairline`), with the opaque **#E2E2DD** as the kit's Tailwind alias. Rationale: 0.12 is the canon hairline (`tailwind.config.js:1042` `hairline: "rgba(16,24,31,0.12)"`), it is what the board-approved Shopify `.product-card` (`globals.css:694`) actually ships, and alpha composites correctly over the cream/wheat fills that carry depth in this system. STATS already declares it (`globals.css:18`) and just needs `--line` retargeted.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-2: Card padding scale — 24px (kit `p-6`) vs 18/20px (stats) vs 16px (shopify) vs 48px (DESIGN.md)?**
- Options:
  - A/E/K — `p-6` = **24px**, uniform on Header/Content/Footer
  - B — **18px 20px** (asymmetric, tighter vertical)
  - F/G/I — **16px** body padding; H/J — **18px**
  - `DESIGN.md:97,219` — **48px** `card-padding`
- Recommendation: **24px (`p-6`) as the app-density default, with a documented `dense` 16px for grid/tile cards and 48px reserved for marketing/guidelines-page cards.** Rationale: three of five repos already ship `p-6`; Shopify's 16px is a product-grid density case, not a disagreement about the base; DESIGN.md's 48px describes the brand-site card, and `DESIGN.md:219` also permits `shadow-sm` — a spec written for the guidelines page, not the app kit.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-3: Canonical KpiTile API — stats `Kpi` vs BC's icon+gradient tile?**
- Options:
  - C (STATS) — `{label, value, sub?, color?, title?, explain?, subExplain?}`; 12×14 padding, 11.5px label / 19px display value / 11px sub with `minHeight:13`; caller supplies the signed tint (DR-1)
  - D (STATS/CustomersApp) — same visuals, narrower props (no `title`, no `subExplain`)
  - L (BC) — Card + CardHeader(`pb-2`) + CardDescription label + CardTitle(icon + 24px value) + CardContent(Badge or 12px sub); hue-family gradient per tile
- Recommendation: **C, promoted to a real exported `KpiTile` primitive** (kit `src/components/ui/kpi-tile.js`), signature `{label, value, sub, tone?}` where `tone` derives the tint from sign rather than accepting a raw color, plus an **optional 20px leading icon slot borrowed from L** (the one genuinely useful idea in BC's version). Rationale: C is the only implementation that already encodes DR-1, reserves the sub line for cross-tile baseline alignment (`shared.tsx:58`), and has 50 combined call sites proving the shape; L's gradients are unfixable under brand law.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-4: KPI numeral type — `.kpi-numeral` recipe (0.08em, tabular-nums) vs the component's inline 0.02em?**
- Options:
  - `.kpi-numeral` (`stats/app/globals.css:74`) — display stack, 700, **0.08em**, `font-variant-numeric: tabular-nums`, currently **0 consumers**
  - `<Kpi>` inline (`shared.tsx:55`) — display stack, 19px, 700, **0.02em**, **no** tabular-nums
- Recommendation: **`.kpi-numeral`, with tracking relaxed to ~0.02em for the numeral size** — keep `tabular-nums` (it is the actual bug: 35 KPI values currently jitter on update), drop the 0.08em on large numerals. Rationale: a dead recipe class next to a hand-rolled inline style is exactly the drift this document exists to close; tabular figures are non-negotiable for a stat tile.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-5: Does `.plot-mapper-card` / `.plot-mapper-entry-card` 2px radius stay a recorded exception?**
- Options:
  - Keep — record 2px as a sanctioned second exception (ground-facts/entry cards)
  - Drop to 0 — `border-radius: 2px` deleted at `shopify/app/globals.css:2778` and `:3444` (2 declarations, no other consumers)
- Recommendation: **Drop to 0.** Rationale: brand law names exactly one radius exception (16px checkbox, `DESIGN.md:242`); the 2px here is an authoring artifact from a single SOIL-01/D-09 pass (the comment at `globals.css:2772-2775` says these classes were "scoped fresh"), it is invisible at 18px padding, and every other Shopify card family (`.product-card:693`, `.species-card:430`, `.catalog-quiz-card:899`) is square.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-6: Emphasis/selected-card treatment — 2px forest border vs cream fill?**
- Options:
  - G — `.species-card--best` **2px solid #296533** on white (`globals.css:437-439`), paired with a forest badge
  - I/J — **cream #F5F1E7 fill**, border dropped (I) or kept (J)
- Recommendation: **Both, split by meaning: 2px forest = *selected/best* (a state), cream fill = *emphasis/aside* (a category).** Rationale: they answer different questions and both already ship in the board-approved repo; the compensated-border idiom matches the canon outline-button rule (2px green outline with compensated padding).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE card-7: Card title type role — 20px (kit `text-xl`) vs 24px (labeler `.type-title`)?**
- Options: A — `text-xl` **20px/28px**, 0.1em · E — `.type-title` **24px**, 0.1em, `leading-none` (matches `DESIGN.md` `title: 24px`)
- Recommendation: **24px via a `.type-title`-equivalent role class**, because `DESIGN.md:104-108` fixes `title` at 24px/1.2727 and role classes are what stop weight/tracking drift; the kit's `text-xl` is an unexplained one-step-down.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Brand-law violations (not choices):** BC `components/ui/card.tsx:12` `rounded-xl` + `shadow` on all **915** card instances; BC's **50** gradient KPI tiles (`bg-gradient-to-br`) across 11 files, canonically `app/(dashboard)/migration-readiness/page.tsx:168-243`, including off-brand violet/indigo/teal/emerald hues; BC `CardTitle` sans/semibold/tracking-tight (49 `text-2xl` KPI titles). Shopify `border-radius: 2px` at `app/globals.css:2778` and `:3444`. STATS `.hcard:hover` box-shadow at `app/globals.css:120` (depth-by-shadow, and `card` fragment consumers opt into it).
- **Labeler-only (for the user's own pass, no edits proposed):** `--border` still holds stock stone-200 `#E7E5E4` (`src/styles/globals.css:58`) while commented "Hairline" — retarget to whatever card-1 settles. `Card` callers apply `p-6` on the shell *and* inherit `CardContent pt-6` (e.g. `src/app/admin/_components/agronomy-explanation-panel.tsx:89`, `src/app/fertilizer/results/_components/nutrient-card.tsx:468-469`) — double-padding. No KPI/stat tile primitive exists in labeler at all.
- **Uncommitted-value warnings (STATS):** `marginTint` (`components/directory/shared.tsx:26-31`) is new in the working tree — the ember-for-thin-margin rule it encodes is not yet committed. The DR-1 zero-handling fix (`components/CustomersApp.tsx:219,656`, `> 0` → `< 0`) is uncommitted and has **no counterpart in shared.tsx**.
- **Open questions:** (1) `--data-red-strong` **#A21C10** is what STATS KPIs actually render for negatives (`LeaderboardApp.tsx:439,451`), not canon Data Red **#C02617** — is the darker shade intentional for large display numerals, or drift? (2) `DESIGN.md:219` explicitly sanctions `shadow-sm` on cards, contradicting the no-shadow law — the canon doc needs an erratum either way. (3) `stats/CustomersApp.tsx` keeps a full private fork of card/kpiTile/Kpi/TrendChart; no decision here fixes that without a follow-up consolidation task. (4) No repo has a card *disabled*, *focus-visible*, or *error* state defined — if cards become interactive (BC's are, via wrapping links), those states are unspecified everywhere.

---

## TABLE family (table, header treatment, sortable header, pagination, density)

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/table.js`
- **Provenance:** `table.js:50-58` (TableHead), `:38-46` (TableRow), `:62-63` (TableCell), `:29-35` (TableFooter), `:5` (wrapper `overflow-x-auto`). Token source `src/tailwind/tailwind.config.js:1006-1042`.
- **Geometry:** head `h-12` (48px) `px-4` (16px); cell `p-4` (16px all round ⇒ ~56px row); head type `font-heading` (= Chakra Petch, config `:982-984`) `text-xs` 12px/16px (`:383-387`) `font-bold` uppercase `tracking-widest` 0.1em (`:663`); body `text-sm` 14px.
- **Colors per state:** head fill `bg-yellow-50` #F5F1E7, head ink `text-gray-500` #57534E (~6.3:1 on cream — AA pass); row border-b `gray-200` #E2E2DD; row hover `bg-yellow-50` #F5F1E7 (200ms transition); row selected `bg-yellow-50` #F5F1E7 (**identical to hover and to the header band**); footer `border-t gray-200` + `bg-yellow-50` + bold; caption `text-gray-500` #57534E. No disabled/error/focus states on the table itself.
- **Variants:** none (single density).
- **Used:** `src/components/catalogueData.js:106-130` (the Catalogue data-table showcase) — 1 consumer.
- **Compliance:** compliant (radius 0, no shadow, no gradient, no red). Matches the conventions seed-tag contract verbatim (`.design-sync/conventions.md:15`).

#### B. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/data-table-column-header.js`
- **Provenance:** `:25-27` (trigger button classes).
- **Geometry:** ghost Button `-ml-3 h-8` (32px), restates `text-xs font-heading font-bold uppercase tracking-widest`; sort glyphs `h-3.5 w-3.5` (14px).
- **Colors:** default `text-gray-500` #57534E; hover `text-green-500` #296533; open `data-[state=open]:bg-yellow-50` #F5F1E7. Menu item icons `text-gray-500`.
- **Variants:** dropdown menu (Asc / Desc / — / Hide); non-sortable columns fall through to a plain `<div>` (`:14-16`).
- **Used:** 3 columns in `catalogueData.js:54,63,69`.
- **Compliance:** compliant. Notably it *does* re-state the head treatment on the button — the same fix the labeler's SortableHeader documents.

#### C. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/data-table-pagination.js` (+ `pagination.js`)
- **Provenance:** `data-table-pagination.js:19` (`pageSizeOptions = [5,10,20,50]`), `:21` (`py-4` row), `:31` `text-sm font-bold` "Rows per page", `:38` SelectTrigger `h-9 w-[70px] px-3 py-1`, `:59-61` nav buttons `variant="outline" h-9 w-9 p-0` (first/last `hidden … lg:flex`).
- **Colors:** selected-count line `text-sm text-gray-500` #57534E; nav buttons inherit kit `outline` = 2px green #296533 border with compensated padding; disabled per Button cva.
- **Variants:** client TanStack only. Separate link-style `pagination.js:30-43` (PaginationLink → `buttonVariants({variant: isActive ? "outline" : "ghost"})`, `h-9 w-9` ellipsis at `:71-79`) — a second, unrelated pagination idiom in the same kit.
- **Used:** 0 consumers in `src/` (kit export only).
- **Compliance:** compliant.

#### D. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx`
- **Provenance:** `shared.tsx:39` (`thStyle`), `:40` (`tdStyle`); recipe class `app/globals.css:65` (`.seed-tag`); tokens `globals.css:9-11,13-14,17,55`. All committed (not in working diff).
- **Geometry:** th `fontSize: 10.5px`, weight 700, uppercase, `letterSpacing: var(--track-display)` = **0.08em** (`globals.css:55`), `fontFamily: var(--font-display-stack)` Chakra Petch, `padding: 8px 10px`, `whiteSpace: nowrap` (⇒ ~28px head). td `fontSize: 12.5px`, `padding: 9px 10px`, `verticalAlign: top` (⇒ ~31px row). Trading-desk dense.
- **Colors:** head fill `--wheat-pale` #F5F1E7; head ink `--text-faint` **#A9A49C** (~2.2:1 on cream — well below AA, and fainter than the labeler's); borders `--line-soft` #EDEAE4 top and bottom; row hover only where `.hrow` is applied → `--wheat-veil` #F9F7F1 (`globals.css:83`); no selected state; scrollbar thumb `--line-strong` #CECAC3 (`globals.css:88`).
- **Variants:** sticky-header twin in `components/LoadsApp.tsx:55-60` and `components/HedgedPreviewApp.tsx:33-38` — same values but `padding: 9px 10px`, `position:'sticky', top: APP_HEADER_H - 1` (APP_HEADER_H **73**, changed from 59 in the *uncommitted* `shared.tsx` diff), `zIndex:1`, `overflow:hidden/textOverflow:ellipsis`. `TableScroll` (`components/TableScroll.tsx:37-61`) adds a synced sticky top scrollbar (`.tscroll-top`, `globals.css:90-93`, 11px track on `--wheat-veil`).
- **Used:** 12 files, ~257 `thStyle` sites (VendorsApp 37, ProductsApp 34, FreightApp 32, CustomersApp/LanesApp 27 each, LoadsApp 24, HedgedPreview 23, AnalyticsApp 13, LeaderboardApp 15, InventoryApp 11, ReportsApp/UsersApp 7 each).
- **Compliance:** flat/square/no-red — compliant. Two deviations: (1) `.seed-tag` (`globals.css:65`) is defined at **11px / `--text-3` #7F7973** but is **used by nothing** — every table uses the fainter, smaller inline `thStyle` instead; (2) tracking is 0.08em, not the canon 0.1em.

#### E. LABELER *(inventory-only)* — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/table.tsx`
- **Provenance:** `table.tsx:80-90` (TableHead, with the ADR-0004 comment), `:60-70` (TableRow), `:96-99` (TableCell); tokens `src/styles/globals.css:21,40,41,58,72`.
- **Geometry:** head `h-12` (48px) `px-4`, `font-heading text-xs font-bold uppercase tracking-widest` (0.1em); cell `p-4`. Identical geometry to KIT (A).
- **Colors:** head fill **transparent** (no cream band); head ink `text-foreground/40` = #10181F @40% ≈ #9FA3A5 on white (~2.6:1, accepted sub-AA per ADR 0004); row hover `bg-muted/50` = #F5F1E7 @50% ≈ #FAF8F3; selected `bg-muted` #F5F1E7; footer `bg-muted/50` + `font-bold`; border `--border` #E7E5E4; `--radius: 0rem` (`globals.css:72`).
- **Sortable header:** `src/app/_components/sortable-header.tsx:29-33` — ghost Button `-ml-3 h-auto py-1 font-heading text-xs font-bold uppercase tracking-widest text-foreground/40`, hover `hover:bg-transparent hover:text-foreground` (#10181F), `ArrowUpDown ml-2 h-3 w-3` (always visible, no direction glyph).
- **Shell:** `src/app/_components/dataTable.tsx:89` desktop table `hidden … lg:block` inside `overflow-hidden border`; cells `text-center` (`:117`); **no pagination at all** — plus a mobile card list and a Select-based sort dropdown (`:70-84`).
- **Used:** 20 SortableHeader sites across 4 tables; 10 files reference Table/DataTable (`/products`, `/seeds`, `/admin/tags`, `/admin/mixes`, planting-artifacts pages, `/quiz`, `/fertilizer`).
- **Compliance:** radius 0, no shadow, no red — compliant. Two open items for the user's own pass: the 40% head ink (accepted, but it's the outlier vs A/F/G) and the missing cream band.

#### F. SHOPIFY *(board-approved reference)* — `/Users/Sheppardjm/Repos/harveys-seed-shopify/app/globals.css`
- **Provenance:** `:1672-1677` wrap, `:1682-1686` table, `:1688-1693` cells, `:1695-1703` thead, `:1705-1723` column min-widths/alignment, `:1726-1764` sticky columns, `:1875-1903` sort affordance; tokens `:1-15`.
- **Geometry:** table `font-size: 14.5px`, `border-collapse: collapse`, `width:100%`; th/td `padding: 8px 16px`, `min-height: 44px`; thead th **12px / 700 / `letter-spacing: 0.06em` / uppercase**, **no `font-family` declared ⇒ body face (TT Commons Pro → Open Sans), not Chakra Petch**. Column min-widths 190 / 150 / 108px; first two columns left, rest centered (`:1725-1735`).
- **Colors:** thead fill `--color-cream` #F5F1E7; thead ink `--color-gray` #5A5F66 (~5.6:1 — AA pass); cell border-bottom `rgba(16,24,31,0.08)`; wrap border `rgba(16,24,31,0.12)`; sticky body cells `#fff`, sticky head cells cream; sorted column `[aria-sort]` → `--color-forest` #296533; header link hover → `text-decoration: underline`; stars `--color-forest`, dash `--color-gray`.
- **Sticky affordance:** `:1760-1764` — 2nd column `left: 190px` + `box-shadow: inset -1px 0 0 var(--border-mid)` (= `rgba(16,24,31,0.15)`), a deliberate 1px border-simulation (inset, not a drop shadow).
- **Sort control:** real `<a href>` links with `aria-sort` on the `<th>` and a `▲/▼` `::after` caret at 12px / `margin-left: 4px` (`:1892-1903`) — URL-driven, server-navigable, works without JS (`components/cover-crops/cover-crop-chart.tsx:255-270`).
- **Sibling recipe:** `.contents-table__head` `:1186-1194` — same 12px/700/0.06em/cream/gray, grid-based, also body face.
- **Used:** 1 consumer (`cover-crop-chart.tsx:239-244`) + `.contents-table` on PDP; **no pagination anywhere** in the repo.
- **Compliance:** compliant. `box-shadow` here is an inset hairline simulation, not depth.

#### G. BC *(unthemed stock)* — `.../scratchpad/bc-harveymilling-com/components/ui/table.tsx` + `components/ui/data-table.tsx`
- **Provenance:** `table.tsx:72-82` (TableHead), `:57-67` (TableRow); `data-table.tsx:66-70` (`pageSize: 25`), `:96` (`h-9 px-2`), `:115` (`h-9` row), `:118` (`py-1 px-2`), `:89` (`rounded-md border`), `:85` (`max-w-sm h-8` search); tokens `app/globals.css:8-33`.
- **Geometry:** base head `h-10 px-2` overridden to **`h-9` (36px) `px-2` (8px)**; base cell `p-2` overridden to **`py-1 px-2`** (4px/8px); rows pinned `h-9`. Head type = `font-medium text-sm` **sentence case, no tracking, body face** — zero seed-tag treatment.
- **Colors:** head ink `text-muted-foreground` hsl(25 5.3% 44.7%) = **#78716C** (stone) on transparent; row hover `bg-muted/50` = #F5F5F4 @50%; selected `bg-muted` #F5F5F4; border hsl(20 5.9% 90%) = #E7E5E4; footer `bg-muted/50 font-medium`. Stock stone palette throughout; `--destructive: 0 84.2% 60.2%` = **#EF4444 red**.
- **Variants:** one dense preset baked into `DataTable` (no prop to switch); `.data-table-dense .table-cell { @apply py-1 px-2 }` helper at `app/globals.css:72-76` is **dead — 0 `.tsx` references**.
- **Used:** 13 files (6 `/migration/*` pages, `/contracts`, `/discovery`, `/positions`, `ConnectionList`), 27 files with a raw `<Table>`.
- **Compliance:** **violations** — `--radius: 0.5rem` (`globals.css:33`) with `rounded-md` (6px) on the table wrapper `data-table.tsx:89`; stock red destructive token; stone greys instead of brand ink/warm-grey; no brand type roles.

#### H. BC — `.../bc-harveymilling-com/components/ui/data-table-column-header.tsx`
- **Provenance:** `:37-39` trigger `variant="ghost" size="sm" -ml-3 h-8 data-[state=open]:bg-accent` (#F5F5F4); glyphs `ml-2 h-4 w-4` (16px, vs KIT's 14px); menu icons `text-muted-foreground/70`.
- **Colors/type:** **no header treatment restated** — the ghost Button contributes `text-sm font-medium` ink, so sortable heads render darker and larger than static ones (exactly the drift labeler's `sortable-header.tsx` header comment documents).
- **Compliance:** violation-adjacent (inconsistent header type within one row); stock tokens.

#### I. BC — `.../bc-harveymilling-com/components/ui/data-table-pagination.tsx`
- **Provenance:** `:28` row `px-2 py-2`, `:35` `text-sm font-medium`, `:42` SelectTrigger `h-8 w-[70px]`, `:46` options `[10,25,50,100,250]`, `:54` fixed `w-[100px]` page indicator, `:59-94` nav buttons `outline h-8 w-8 p-0`; **`ServerDataTablePagination` `:115-195`** — a near-verbatim clone taking `pageIndex/totalCount/totalPages/pageSize/selectedCount` + `onPageChange/onPageSizeChange` instead of a TanStack `table`.
- **Used:** client variant via `DataTable` (10 pages); server variant in 3 `/migration/items-*` pages.
- **Compliance:** stock tokens; the two functions are ~95% duplicated markup.

### Agreements
- Table wrapper is always a `div` with `overflow-x/auto` around a `w-full caption-bottom text-sm` table (A `:5-11`, E `:8-15`, G `table.tsx:9-17`); STATS/SHOPIFY do the same by hand.
- Header row semantics identical everywhere: `<thead>` with `[&_tr]:border-b`, left-aligned text-columns, `align-middle`.
- Hairline-only separators, no vertical rules, no zebra striping in any of the five.
- Every themed repo (A, D, E, F) puts head labels in bold uppercase; only BC (G) does not.
- Row hover and row-selected both resolve to the pale wheat surface in A, D, E (#F5F1E7 / veil), and to `muted` in G — same idiom, different token.
- KIT (A/C) and BC (G/I) share the identical TanStack v8 component contract (`DataTableColumnHeader`, `DataTablePagination`), so a swap is drop-in.
- Sticky-header/sticky-column is implemented as `position: sticky` + opaque background in both D (`LoadsApp.tsx:58`) and F (`globals.css:1740-1751`).
- Radius 0 in A, D, E, F.

### CHOOSE blocks

**CHOOSE table-1: One header treatment — which exact type + color + band?**
- **A (KIT)** — Chakra Petch, 12px/700, uppercase, tracking **0.1em**, `#57534E` on `#F5F1E7` band, `h-12` (48px). ~6.3:1.
- **D (STATS)** — Chakra Petch, **10.5px**/700, uppercase, tracking **0.08em**, `#A9A49C` on `#F5F1E7`, ~28px tall. ~2.2:1.
- **E (LABELER)** — Chakra Petch, 12px/700, 0.1em, `#10181F @40%` ≈ `#9FA3A5`, **no band**, 48px. ~2.6:1.
- **F (SHOPIFY)** — **body face**, 12px/700, tracking **0.06em**, `#5A5F66` on `#F5F1E7`, ~44px min. ~5.6:1.
- **G (BC)** — body face, 14px/500, **sentence case**, `#78716C`, no band, 36px.
- Recommendation: **A** — it is the canon contract stated in `.design-sync/conventions.md:15` and the only one that is simultaneously the display face, 0.1em (DESIGN.md frontmatter tracking), cream-banded, and AA-legible. F is board-approved but its 0.06em + body face reads as a generic caps label rather than the seed tag; adopt A's type onto F's band (F already has the band and an AA-safe ink).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE table-2: Sortable-header rendering — does the head treatment survive inside the sort control?**
- **B (KIT)** — dropdown trigger *restates* the full seed-tag type; hover ink → green #296533; 14px glyphs; menu offers Asc/Desc/Hide.
- **E (LABELER)** — direct-toggle ghost button, restates type, hover ink → full ink #10181F, always-on `ArrowUpDown` (no direction indication).
- **F (SHOPIFY)** — `<a href>` + `aria-sort` + ▲/▼ caret, URL-driven, no-JS safe, sorted column turns forest green.
- **H (BC)** — restates nothing; sortable heads render as darker sentence-case buttons beside plain heads.
- Recommendation: **B for app surfaces, F's `aria-sort` + link semantics folded in** — B is the only one that restates the type *and* shows sort direction; F contributes the accessibility contract (`aria-sort`, real hrefs) that B lacks. H is the documented failure mode and should be retired.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE table-3: Density presets — sanctioned axis, and what are the two stops?**
- **Default (A/E)** — head `h-12` 48px, cell `p-4` 16px ⇒ ~56px rows.
- **Dense (G)** — head `h-9` 36px `px-2`, cell `py-1 px-2` ⇒ ~28-36px rows, `pageSize: 25`.
- **Desk-dense (D)** — head ~28px `8px 10px`, cell `9px 10px`, body 12.5px ⇒ ~31px rows, no pagination (full scroll).
- **Comfortable-web (F)** — `8px 16px` + `min-height: 44px` (touch target).
- Recommendation: **two stops — `default` = A geometry, `dense` = G geometry (h-9 / py-1 px-2), exposed as a `density` prop rather than per-consumer className overrides**; D's 10.5px/12.5px type is a third stop only if the trading desk needs it, and F's 44px min-height should be the mobile floor on customer routes.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE table-4: Pagination — one component, and how is the server-side case expressed?**
- **C (KIT)** — `pageSizeOptions` prop, defaults `[5,10,20,50]`, `h-9` controls, `font-bold` labels, `flex-wrap` (responsive), TanStack-only.
- **I (BC)** — hardcoded `[10,25,50,100,250]`, `h-8` controls, `font-medium`, fixed `w-[100px]` indicator, plus a duplicated `ServerDataTablePagination` (`:115-195`).
- **E / F** — no pagination at all (labeler scrolls; shopify has none).
- Recommendation: **C's styling + I's page-size options and server variant, unified as one component with an optional controlled-state API** (`{pageIndex, pageCount, pageSize, onPageChange, onPageSizeChange}` — pass a TanStack adapter when a `table` exists). This kills the ~95% duplication at `I:115-195` and gives back-office pages the 100/250 sizes they actually need.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE table-5: Sticky-column affordance recipe.**
- **F** — `position: sticky` + opaque `#fff` body / cream head + `box-shadow: inset -1px 0 0 rgba(16,24,31,0.15)` on the last sticky column (`globals.css:1760-1764`); explicit `left` offsets tied to declared column min-widths.
- **D** — sticky *header row* only (`LoadsApp.tsx:58`, `top: APP_HEADER_H - 1`), plus a synced sticky top scrollbar (`TableScroll.tsx:37-53`).
- Recommendation: **F for horizontal (column) freeze, D for vertical (header) freeze — they are orthogonal and both should ship**; F's inset hairline is the correct no-shadow way to mark the freeze edge, and D's `TableScroll` solves a real problem F does not (wide table taller than the viewport).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE table-6: Row hover vs. selected must be distinguishable.**
- **A** — hover `#F5F1E7` and selected `#F5F1E7` are the **same value** (`table.js:42`), and both equal the header band.
- **E/G** — hover is `muted/50` (a 50% tint), selected is full `muted` — two distinct steps.
- Recommendation: **E/G's two-step pattern with brand tokens** — hover `#F9F7F1` (STATS `--wheat-veil`), selected `#F5F1E7`; keeps the header band visually distinct from a hovered row.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Brand-law violation (BC, G):** `--radius: 0.5rem` (`app/globals.css:33`) + `rounded-md border` on the DataTable wrapper (`components/ui/data-table.tsx:89`) — the brief assumed BC was already zero-radius; it is not. Must go to 0.
- **Brand-law violation (BC, G):** `--destructive: 0 84.2% 60.2%` = #EF4444 (`app/globals.css:24`) — stock red in UI chrome; must become the ember family (#E56625 / #C05017 / #A84413).
- **Dead code (BC):** `.data-table-dense .table-cell` (`app/globals.css:72-76`) has zero `.tsx` consumers; density is hardcoded in `data-table.tsx` instead.
- **Dead recipe (STATS):** `.seed-tag` (`app/globals.css:65`, 11px / `--text-3` #7F7973) is defined and unused — all 257 header sites use the divergent inline `thStyle` (`components/directory/shared.tsx:39`, 10.5px / `--text-faint` #A9A49C). Two competing "canonical" recipes in one repo.
- **Tracking divergence (STATS):** `--track-display: .08em` (`app/globals.css:55`) is what the seed tag actually uses; canon is 0.1em (`--track-wide` exists at 0.1em but is not applied to tables).
- **Contrast (STATS):** head ink #A9A49C on #F5F1E7 is ~2.2:1 — *lower* than the labeler's ADR-0004 deviation, with no ADR covering it. Not a brand-law item, but it should be a deliberate decision, not an accident.
- **Labeler, for the user's own pass:** (1) `text-foreground/40` head ink (`src/components/ui/table.tsx:88`) — accepted sub-AA per ADR 0004, but it is the only themed repo with no cream header band; (2) `dataTable.tsx` has no pagination — long admin tables render every row; (3) `dataTable.tsx:117` forces `text-center` on every body cell, which fights the left-align convention every other repo uses for text columns; (4) admin density preserved per ADR 0005 (`docs/adr/0005-…:31-33`) — any density unification must respect that route-class scoping.
- **Kit duplication:** two pagination idioms coexist — `data-table-pagination.js` (TanStack) and `pagination.js` (link-list, 0 consumers). Worth deciding whether `pagination.js` survives at all.
- **Kit config note:** `src/tailwind/tailwind.config.js:329-345` defines a *first* `fontFamily.heading` of **Poppins**; the later `:982-984` extend block sets Chakra Petch. Chakra Petch wins in the merge order I read, but the stale Poppins stack is a trap for anyone copying the config — could not fully settle which block the build actually consumes.
- **Unsettled:** SHOPIFY has no pagination anywhere, so there is no board-approved reference for CHOOSE table-4; the recommendation there rests on kit canon + BC's shipped needs only.

---

## SELECT / COMBOBOX / COMMAND-PALETTE

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/select.js`
Radix select. Trigger (select.js:17): `w-full`, no fixed height, px-6/py-3 (24px/12px → ~44px tall), text-sm 14px, border 1px `gray-200` #E2E2DD, bg #FFFFFF, radius 0, no shadow. States: focus-visible ring-2 `green-500` **#296533** + offset-2; disabled `cursor-not-allowed opacity-50`; placeholder `gray-400` #E2E1DD. Chevron `text-green-500` #296533 (select.js:24). Content (:68) border #E2E2DD, bg #FFFFFF, text `black` #10181F, max-h-96, viewport `p-1`. Label (:97) `font-heading text-xs font-bold uppercase tracking-widest text-gray-500` #57534E = **seed-tag signature** (no cream fill). Item (:109) py-2 pl-8 pr-2, text-sm, `cursor-pointer`; **selected/focus = bg `yellow-50` #F5F1E7 + text `green-500` #296533**; disabled opacity-50; check indicator **left** (pl-8, :114) `green-500`. Separator `bg-gray-200` (:127). Used: catalogueForms.js:162 (1 demo). Compliance: compliant (radius 0, no shadow, no red).

#### B. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/command.js` (+ `popover.js`)
cmdk. Root bg #FFFFFF/text #10181F (:40). Input wrapper border-b #E2E2DD px-3, Search icon `green-500` #296533 (:66); input **h-11** (44px), text-sm, placeholder #E2E1DD (:70). List max-h-300px (:82). Empty py-6 text-sm #57534E (:91). Group heading (:101) seed-tag: `font-heading text-xs font-bold uppercase tracking-widest text-gray-500` #57534E. Item (:122) px-2 py-2 text-sm, `data-[selected=true]:bg-yellow-50` #F5F1E7 + `text-green-500` #296533, disabled opacity-50. Shortcut `text-xs tracking-widest text-gray-400` #E2E1DD (:133). CommandDialog (:52) Dialog + p-0, overrides `[&_[cmdk-input]]:h-12` (48px) and item py-3. **Develop-only scroll fix at :14-30** (no-ops `scrollIntoView` on cmdk items until after first paint — required for inline menus). Popover (popover.js:19): z-50 w-72, border #E2E2DD, bg #FFFFFF, p-4, radius 0, no shadow. Used: catalogueNavigation.js:176, catalogueOverlays.js:101. Compliance: compliant.

#### C. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx:502` (EntityPicker)
Hand-rolled disclosure+filter, tokens-only. Trigger (:527-528) border 1px `--line` #E1DDD8, bg `--paper` #FFFFFF, radius 0, padding 7px/11px, gap 9, width `min(380px,42vw)`; label 13.5px/600 `--ink` #10181F; right meta 12px `--text-faint` #A9A49C; chevron **hardcoded stroke `#7f7973`** (:533). Hover `.hbtn:hover` → `--wheat-veil` #F9F7F1 (globals.css:80). Panel (:536): abs `calc(100%+6px)`, bg #FFFFFF, border #E1DDD8, radius 0, **boxShadow `0 12px 32px rgba(16,24,31,.14)`**, w 440/maxW 90vw/maxH 460. Filter input (:548) 13px, border #E1DDD8, radius 0, 7px/9px, **bg `--wheat-pale` #F5F1E7**. Rows (:560-561) padding 7px/9px, radius 0; **selected = bg `--green-tint` #E8F4E9 + border 1px `--green-border` #ABCFAE**; hover `.hrow` #F9F7F1 (globals.css:81); title 13px/600, sub 11px #A9A49C. Footer (:570) 11px #A9A49C, borderTop `--line-soft` #EDEAE4, bg #F5F1E7. Empty (:557) "No {noun} match." 12.5px #A9A49C. Keyboard: Escape closes, Enter picks `items[0]` — **no arrow-key highlight**. Used 4×: VendorsApp.tsx:472, FreightApp.tsx:146, LanesApp.tsx:163, ProductsApp.tsx:547. Compliance: **shadow violation**.

#### D. STATS — `shared.tsx:334` (GlobalSearchBox)
Input (:364-372) w 280, 13.5px, border 1px #E1DDD8, radius 0, padding `7px 10px 7px 31px`, bg #FFFFFF, **`outline: none` with no replacement focus style**; 15px magnifier at left:10, `--text-faint` #A9A49C. Panel (:374) right-aligned, bg #FFFFFF, border #E1DDD8, radius 0, **boxShadow `0 12px 32px rgba(16,24,31,.14)`**, w 340, maxH 420, padding 3px/5px/5px. Group heading (:378) **10px/700 uppercase, `--track-display` .08em, Chakra Petch, `--text-faint` #A9A49C** — near-miss on seed-tag (kit: 12px / .1em / #57534E). Rows (:381) 7px/9px, hover #F9F7F1, no keyboard highlight; Enter → `groups[0].items[0]`. Blur closes at 160ms. Used once, but mounted on every route via AppHeader (:479 — **this line is an uncommitted change**: `search` override prop added, `git diff components/directory/shared.tsx`). Compliance: **shadow violation**; focus-visibility defect.

#### E. STATS — native selects (four recipes)
`app/monthly-margin-history/ProductSelect.tsx:38-46` and `app/vouchers/VendorSelect.tsx:34-43` are near-duplicates: padding 5px/8px, radius 0, 13px; **active** border `--green` #296533 / bg `rgba(41,101,51,.08)` / color #296533 / weight 600; **idle** border #E1DDD8 / bg #FFFFFF / color `--text-strong` #474440 / weight 400. VendorSelect adds `maxWidth: 260`. Two other recipes exist: `inputStyle` (HedgedPreviewApp.tsx:44-47 — 13px, 1px #E1DDD8, 7px/10px) reused at HedgedPreviewApp:270 and LoadsApp:480,484 with `padding: '5px 8px'`; and UsersApp.tsx:133-139 (5px/7px, `--line-strong` #CECAC3, 12.5px). No `appearance` reset anywhere → native OS chevron + native focus ring. Compliance: radius 0 OK; no hover/focus/disabled treatment defined.

#### F. SHOPIFY — `app/globals.css:826` (`.catalog-head__sort select`) / `:1818` (`.cover-crop-sort select`)
border 1px `--border-strong` rgba(16,24,31,.2), padding 8px 12px (cover-crop: 8px 16px + **min-height 44px**, :1827), font-weight 600, color `--color-ink` #10181F, `font-family: inherit`, 13.5px, background #fff, **`border-radius: 0`** explicit reset. Responsive stack at :2559. Used 3×: catalog-view.tsx:118, cover-crop-chart.tsx:171,194. No hover/focus/disabled rules → UA defaults. Compliance: compliant.

#### G. SHOPIFY — `components/search-overlay.tsx:43` + `app/globals.css:3530`
Full-page mode, not a scrim dialog: `position:fixed; inset:0; z-index:60; background: var(--color-cream)` **#F5F1E7** (:3530-3536). Inner max-width 640, padding 64px 24px, gap 24 (:3538). Close 44×44, border 1px `--border-mid` rgba(16,24,31,.15), 24px; hover border+color → `--color-forest` **#296533** (:3565). Input (:3570) w 100%, padding 16px 18px, **15.5px**, `--font-body` (TT Commons Pro / Open Sans), border 1px rgba(16,24,31,.15); **focus `outline: 2px solid #296533; outline-offset: 2px`**. Hint 15.5px `--color-gray` #5A5F66. Empty heading (:3595) Chakra Petch 700 uppercase .1em 24px; body 15.5px `--color-slate` #3D4148. Result row (:3618) min-height 44px, padding 16px 18px, border 1px `--border-soft` rgba(16,24,31,.1), **background `--color-sand` #ECE5D3**; hover → border-color #296533; **highlighted (:3641) border 2px #296533 + background `--color-tan` #E7DDC6 + compensated padding 15px 17px**. Thumb 44×44 `border-radius: 2px` (:3648). Keyboard: ArrowUp/Down/Enter/Escape + full Tab trap (:77-120), mouseenter syncs highlight, index resets per query. Static ≤33-item index (`lib/search-index.ts`). Board-approved, shipped. Compliance: compliant except 2px thumb radius.

#### H. SHOPIFY — `components/plot-mapper/location-search.tsx:42` + `app/globals.css:2894`
Commit-on-Enter/button (not per-keystroke). Input (:2906) 14px, padding 10px 12px, border 1px rgba(16,24,31,.2), **`border-radius: 2px`**; focus `outline:none` + border-color #296533. Button (:2920) 700/14px/10px 18px, **radius 2px**, bg #296533, #fff text; hover `--color-pine` **#1A4121**; disabled opacity .6. Status 13px #5A5F66; error (:2947) `--color-ember` **#C05017** 600. Result rows (:2958) border 1px rgba(16,24,31,.2), **bg #fff**, padding 12px 14px, 13.5px; hover border #296533 + bg #F5F1E7. **No highlighted index, no arrow keys.** Zero CSS shared with G (different row bg, border token, radius, hover model). Compliance: **2px radius violations** ×2.

#### I. BC — `components/ui/select.tsx:15` (untheme baseline)
Trigger: `h-9` (36px), **`rounded-md`** (=0.5rem/8px, globals.css:33), border `--input` hsl(20 5.9% 90%) ≈ #E7E5E4, bg-transparent, px-3 py-2, text-sm, **`shadow-sm`**, focus `ring-1 ring-ring` hsl(20 14.3% 4.1%) ≈ #0C0A09 (near-black), placeholder `--muted-foreground` ≈ #78716C, disabled opacity-50; chevron `opacity-50` neutral. Content (:71) `rounded-md` + **`shadow-md`**, bg-popover #FFFFFF. Label (:108) `px-2 py-1.5 text-sm font-semibold` — not seed-tag. Item (:114) `rounded-sm`, py-1.5 **pl-2 pr-8 (check on the RIGHT)**, focus `bg-accent` hsl(60 4.8% 95.9%) ≈ **#F5F5F4 stone** (not wheat #F5F1E7). 193 references across 34 importing files. Compliance: radius + shadow + non-brand focus ring.

#### J. BC — `components/ui/command.tsx` + `components/docs/DocsSearch.tsx:22`
**Newer data-slot shadcn generation** (function components, `data-slot="command-*"`, `outline-hidden`, `size-4`, Tailwind-v4 `**:data-[slot=…]` variant at :55) — while I (select.tsx) is the older forwardRef generation, in the same repo. Root `rounded-md bg-popover` (:23). Input wrapper `h-9 border-b px-3`, icon opacity-50 (:69-72); input **h-10** `rounded-md` (:76). List max-h-300px scroll-py-1 (:92). Group heading (:121) `text-xs font-medium text-muted-foreground` — no uppercase/tracking/heading font. Item (:149) `rounded-sm px-2 py-1.5`, `data-[selected=true]:bg-accent` #F5F5F4. DocsSearch: ⌘K/Ctrl-K binding (:28-33), static `DOCS_SEARCH_INDEX` grouped by section, router.push on select; trigger `Button variant="outline" h-9 rounded-md bg-muted/50 shadow-none` + `<kbd rounded border bg-muted>` (:61-68). Other consumers: CreateChecklistDialog.tsx:30, AccountMappingReview.tsx:20. Compliance: radius violations; `DialogHeader` rendered **outside** `DialogContent` (:47-51) — a11y bug.

#### K. LABELER (inventory only) — `src/components/ui/{select,command,popover}.tsx`
Stock shadcn shape, themed by token remap. `--radius: 0rem` (globals.css:72) so no rounded classes are emitted. Trigger (select.tsx:22) `h-10` px-3 py-2 text-sm, border `--input` hsl(20 5.9% 90%) #E7E5E4, focus `ring-2 ring-ring` = **#296533** (globals.css:60). Item (select.tsx:120) py-1.5 pl-8 pr-2, check **left**; focus `bg-accent` = **#F5F1E7 pale wheat** (globals.css:42) + `text-accent-foreground` **#10181F ink** (kit uses green text). SelectLabel (:107) `py-1.5 pl-8 pr-2 text-sm font-bold` — not seed-tag. CommandItem (command.tsx:117) px-2 py-1.5, `data-[selected]:bg-accent` #F5F1E7; group heading (:30) `font-bold text-muted-foreground` only. PopoverContent (popover.tsx:22) w-72 border bg-popover p-4, plus global `.PopoverContent { width: var(--radix-popover-trigger-width) }` (globals.css:102-105) — the trigger-width trick all four comboboxes rely on.

#### L. LABELER (inventory only) — four parallel comboboxes, ~961 lines
`combobox.tsx:47` (114 L, Popover+Command+cmdk, tRPC-fed, `useCombobox` hook), `customcombobox.tsx:188/228` (380 L, `useCombobox` + hand-rolled filtering, `role="combobox"` on the Button), `seedcombobox.tsx:146/158` (287 L, **does not use the hook** — local useState; otherwise a copy of customcombobox), `product-selector.tsx:85/95` (180 L, takes `productCombobox: ReturnType<typeof useCombobox<number>>` as a prop). All four share the identical trigger/panel shape: `<Button className="w-full justify-between">` + `<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />` + `<PopoverContent className="PopoverContent w-full p-0">`. Hook `src/hooks/use-combobox.ts` is 16 lines: `{value,id,open,setValue,setId,setOpen,reset}`. `stockform.tsx:5-6` already documents a planned "Phase 2" unification.

### Agreements
- **Radius 0 on select/listbox surfaces** is already universal outside BC: KIT (no rounded classes), STATS (`borderRadius: 0` on every element), SHOPIFY (`border-radius: 0` explicit resets, globals.css:834/1826), LABELER (`--radius: 0rem`).
- **Forest green #296533 is the affordance/focus color** everywhere themed: KIT ring + chevron + check, STATS active-select border (ProductSelect.tsx:42), SHOPIFY focus outline + highlight border, LABELER `--ring`.
- **Cream/wheat #F5F1E7 is the row-highlight fill** in KIT (`yellow-50`), LABELER (`--accent`), and SHOPIFY LocationSearch hover; STATS uses it for the filter-input fill (shared.tsx:548).
- **Depth via border-color shift, not shadow lift**, in both SHOPIFY implementations (globals.css:3634, :2969).
- **cmdk over a custom filter engine** in KIT, BC, and LABERER's combobox.tsx.
- **Static in-memory index + router.push on select** is the identical behavioral contract in STATS GlobalSearchBox, SHOPIFY SearchOverlay, and BC DocsSearch.
- No red anywhere in this group; SHOPIFY's only error color is ember #C05017 (globals.css:2948).

### CHOOSE blocks

**CHOOSE sel-1: What is the canonical combobox composition?**
- Options: **A+B** — Popover + Command primitives, one configurable component; **L** — N hand-maintained wrappers over the same primitives (labeler's 4 = 961 L); **C** — fully hand-rolled disclosure + filter input, no primitives (works in no-radix repos)
- Recommendation: **A+B, one configurable component** — KIT already ships both halves, LABELER's own `stockform.tsx:5-6` names the 4-wrapper sprawl as debt, and C's model can be re-expressed as props (async items, right-column meta, footer count) rather than a second component.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-2: Selected/active row fill in listboxes?**
- Options: **A/B** wheat #F5F1E7 fill + green #296533 text, no border; **C** green-tint #E8F4E9 fill + #ABCFAE border (shared.tsx:561); **G** tan #E7DDC6 fill + 2px #296533 border with compensated padding (globals.css:3641); **K** wheat #F5F1E7 fill + ink #10181F text
- Recommendation: **A/B** — canon; #E8F4E9/#ABCFAE have no equivalent anywhere in the token spec, and G's 2px border is a full-page-mode treatment that reads too heavy at 32px row height.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-3: Native-select recipe for no-tailwind/no-radix contexts (stats + shopify)?**
- Options: **F** shopify — 8px/12px (16px in tables), 600 weight, 13.5px, border rgba(16,24,31,.2), bg #fff, radius 0, min-height 44px; **E** stats — 5px/8px, 13px, border #E1DDD8, radius 0, green active state
- Recommendation: **F as the base geometry + E's active-state rule** — F is board-approved and already meets the 44px touch target; E's green-border/tinted-bg "filter is engaged" signal is a real behavior F lacks. Either way stats must collapse its **four** recipes (ProductSelect.tsx:38, HedgedPreviewApp.tsx:44, LoadsApp.tsx:480, UsersApp.tsx:133) to one.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-4: Select trigger geometry in the radix repos?**
- Options: **A** px-6 py-3, no fixed height (~44px), text-sm; **K** h-10 (40px) px-3 py-2; **I** h-9 (36px) px-3 py-2
- Recommendation: **A** — canon, and 24px horizontal padding matches the kit's button rhythm; 44px also satisfies the touch target SHOPIFY already enforces at globals.css:1827.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-5: Group-heading treatment inside select/command lists?**
- Options: **A/B** full seed-tag — `font-heading text-xs bold uppercase tracking-widest #57534E` (select.js:97, command.js:101); **D** 10px / .08em / Chakra Petch / #A9A49C (shared.tsx:378); **I/J/K** plain `text-sm font-semibold` or `text-xs font-medium`, no case/tracking
- Recommendation: **A/B** — seed-tag is brand law for this role; D is the same idea two sizes and one tracking step off, and should be normalized to 12px/.1em/#57534E.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-6: Which side does the check indicator sit on?**
- Options: **left** — `pl-8` + absolute left-2 (select.js:114, labeler select.tsx:127); **right** — `pr-8` + absolute right-2 (BC select.tsx:120)
- Recommendation: **left** — both themed repos already agree; BC is the untheme baseline.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-7: Search-overlay / command-palette treatment?**
- Options: **G** full-page cream #F5F1E7 mode, 15.5px input, sand result cards, hand-rolled (shopify never adopts radix — visual parity only); **B/J** cmdk inside a Dialog, 48px input, wheat row highlight, ⌘K
- Recommendation: **G's visual shell, B's interaction spec** — G is the board-approved look and the only palette with a real focus trap; adopt its cream field / sand cards / 44px rows into a cmdk-rendered dialog for the radix repos, keeping ⌘K (DocsSearch.tsx:29) as the shared binding.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE sel-8: Typeahead keyboard contract?**
- Options: **G** arrow-key highlighted index + Enter + Escape + Tab trap + hover-syncs-highlight (search-overlay.tsx:77-120); **C/D** Escape + Enter-picks-first-result only, no arrow keys (shared.tsx:545-547, :368-372); **B/J** cmdk built-in
- Recommendation: **G/B** (identical contract) — C/D's keyboard model is a gap, not a variant; anything with a result list gets arrow-key navigation.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
**Brand-law violations (not choices):**
- STATS panel shadows `0 12px 32px rgba(16,24,31,.14)` on EntityPicker (shared.tsx:536) and GlobalSearchBox (shared.tsx:374). Note the **uncommitted** diff *standardizes* this shadow upward (TrendChart `0 10px 28px` → `0 12px 32px`, shared.tsx:312) — the idiom is spreading, not retreating.
- SHOPIFY LocationSearch `border-radius: 2px` on input (globals.css:2913) and button (:2925); `search-overlay__result-thumb` radius 2px (:3648). None is a ~16px checkbox.
- BC (expected, untheme baseline): `rounded-md`/`rounded-sm` + `shadow-sm`/`shadow-md` across select.tsx:22,:81,:120 and command.tsx:23,:76,:149; stone `#F5F5F4` accent instead of wheat; near-black `--ring` #0C0A09 instead of green.

**Defects found during extraction:**
- KIT `placeholder:text-gray-400` = **#E2E1DD on #FFFFFF** (select.js:17, command.js:70) and `CommandShortcut text-gray-400` (command.js:133) — roughly 1.1:1 contrast, effectively invisible. Should be `gray-500` #57534E.
- KIT CommandDialog forces `[&_[cmdk-input]]:h-12` (command.js:53) over CommandInput's own `h-11` (:70) — inline and dialog inputs differ by 4px.
- KIT command.js:14-30 scroll fix exists **only on `develop`** — it must ride along wherever Command is adopted, or inline menus yank the page on mount.
- STATS GlobalSearchBox sets `outline: 'none'` with no replacement focus style (shared.tsx:372) — keyboard focus is invisible on the app-wide search box.
- STATS chevron stroke hardcoded `#7f7973` (shared.tsx:533) rather than `var(--text-3)`.
- STATS `--green-tint: #e8f4e9` / `--green-border: #abcfae` (globals.css:22) have no canon equivalent (kit `green-100` = #A6DBAF).
- BC `command.tsx:47-51` renders `DialogHeader`/`DialogTitle` **outside** `DialogContent`, so the palette's accessible name is never associated with the dialog.
- BC generation mismatch: `select.tsx` is forwardRef-era shadcn, `command.tsx` is data-slot/Tailwind-v4-era, in one repo — any kit-side codemod must handle both shapes.

**Labeler-only (for the user's own pass, no edits proposed):** four comboboxes ≈ 961 L over one primitive pair; `seedcombobox.tsx` duplicates `customcombobox.tsx` without using the shared `use-combobox` hook; `SelectLabel` (select.tsx:107) and Command group headings (command.tsx:30) are `font-bold` only, missing the seed-tag signature; `.PopoverContent` global (globals.css:102) is the de-facto trigger-width contract and should be named as such if the pattern is canonized.

**Open questions:** no repo defines a **disabled** listbox-row color beyond `opacity-50`, and no repo defines an **error** state on a select trigger (ember border? ember helper text?) — both need a canon answer before a shared component ships.

---

## FORM / INPUT / CONTROLS

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/input.js`
- **Provenance:** input.js:9; textarea.js:8; label.js:9; form.js:65,99,118.
- **Geometry:** `px-6 py-3` = **24×12px**, no fixed height, `text-sm` (14px), 1px border. Textarea `min-h-20` (80px), same padding. Label `block text-sm font-bold leading-none`.
- **Colors/state:** border `gray-200` **#E2E2DD** (tailwind.config.js:1035) · bg `#FFFFFF` · placeholder `gray-400` **#E2E1DD** (config:1033) · focus `ring-2 ring-green-500 #296533 ring-offset-2` · disabled `opacity-50 cursor-not-allowed` · error (FormLabel + FormMessage) `text-orange-700` = **#C05017**, FormMessage additionally `font-bold` (form.js:118) · description `text-gray-500` #57534E · label ink `gray-500` **#57534E**.
- **Variants:** none on input/textarea/label. Toggle (toggle.js:7-19): `default`/`outline` × `default h-11 px-4` / `sm h-9 px-3 text-xs` / `lg h-12 px-5`; on-state = `bg-yellow-50` **#F5F1E7** + `text-green-500` + `ring-1 ring-inset ring-green-500`.
- **Other controls:** checkbox.js:10 `h-4 w-4 border-2 border-gray-500 #57534E`, **no rounded class → radius 0**, checked `bg/border green-500` + white check `strokeWidth={3}`. switch.js:8 `h-6 w-11`, **square track and square 20px thumb** (no `rounded-full`), unchecked `bg-sand #ECE5D3`, checked `bg-green-500`. slider.js:14-17 track `h-2 bg-sand`, range `bg-green-500`, thumb `h-5 w-5 border-2 border-green-500 bg-white`, all square.
- **Used in:** exactly one consumer, `src/components/catalogueForms.js` (RHF + zodResolver demo at :3-4,36; raw Input/Label demo at :104-113). Kit is reference-only.
- **Compliance:** compliant on radius/shadow/gradient/ember-errors. Two defects — placeholder `#E2E1DD` on white is effectively invisible; checkbox radius 0 contradicts canon `rounded.checkbox: 0.125rem` (DESIGN.md:87, :242).

#### B. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/app/globals.css`
- **Provenance:** globals.css:47, 78-79, 82, 105-106; components/directory/shared.tsx:361-374; components/ReportProblem.tsx:89,95.
- **Geometry:** search input (shared.tsx:374) width 280px, `padding: 7px 10px 7px 31px`, `fontSize: 13.5`, `borderRadius: 0`. ReportProblem textarea (:89) `padding: 7px 9px`, `fontSize: 12.5`, `resize: vertical`, `borderRadius: 0`.
- **Colors/state:** border `1px solid var(--line)` · input bg `var(--paper)` #FFFFFF; textarea bg `var(--wheat-pale)` · text `var(--ink)` #10181F · **focus = `outline:none; box-shadow:0 0 0 3px var(--focus-ring)`** where `--focus-ring: rgba(82,186,100,.35)` (:47, :79) — soft green glow, no offset · ember focus variant `--focus-ring-ember: rgba(232,118,60,.35)` exists (:47) but is unused for inputs · `.priceInput:focus-within` additionally swaps border to `var(--green)` (:82) · disabled: none on inputs (buttons use `var(--text-faint)` fill, ReportProblem.tsx:95) · error: **no field-level error treatment anywhere**.
- **Variants:** none — every input is a one-off inline style. Native `input[type=range]` and `input[type=checkbox]` are left native with `accent-color: var(--green)` (:105-106); no custom checkbox/switch/slider/toggle components exist.
- **Used in:** 12 files carry raw `<input>`/`<textarea>`; zero `<label>` elements repo-wide (aria-label only). ~30 control instances.
- **Compliance:** compliant (radius 0, no gradients, no red chrome). The focus rules at :78-79 are **committed**, not part of the uncommitted working-tree edits (`git diff app/globals.css` touches only shadow values, `.sbar`, and a new reduced-motion block).

#### C. LABELER *(inventory only — feature/brandTheming)* — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/input.tsx`
- **Provenance:** input.tsx:11,19-22; checkbox.tsx:18; switch.tsx:14,22; label.tsx:10; form.tsx:98,161; globals.css:28,54,58-60,72,87-98,164-167.
- **Geometry:** input `h-10` (**40px**) `px-3 py-2 text-base md:text-sm`, no radius (`--radius: 0rem`, globals:72). Label `text-sm font-bold leading-none`. Checkbox `h-4 w-4 rounded-[2px]` set explicitly with a comment that it is the single sanctioned rounding.
- **Colors/state:** border `--input` hsl(20 5.9% 90%) ≈ **#E7E5E4** · focus `ring-2 ring-[--ring] ring-offset-2` where `--ring` = hsl(130 42.3% 27.8%) = **#296533** · disabled `opacity-50 cursor-not-allowed` · checkbox checked `bg-primary #296533` / `text-primary-foreground #FFFFFF` · switch checked `bg-primary #296533`, unchecked `bg-input #E7E5E4`, thumb `h-5 w-5 bg-background` — **square, no `rounded-full` present in the file** · error `text-destructive` = hsl(20.2 78.6% 42.2%) = **#C05017**, FormMessage `text-sm font-bold text-destructive` (form.tsx:161), FormLabel flips to `text-destructive` (:98).
- **Variants:** none. Extras: number-input wheel guard (input.tsx:19-22, blurs on wheel for `type="number"`) and global spinner removal (globals.css:87-98).
- **Used in:** input 11 files, form 14 files, label 3 files, switch 2 files, **checkbox 0 files**.
- **Compliance:** compliant. Two drifts for the user's own pass: `label.tsx` is stock and never applies `.type-label` (defined globals.css:164-167, **0 usages repo-wide**); `ui/checkbox.tsx` is dead code.

#### D. SHOPIFY *(board-approved)* — `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/plot-mapper/manual-acreage-input.tsx`
- **Provenance:** manual-acreage-input.tsx:45-57; globals.css:3321-3346, 3570-3582, 1818-1828, :1-15.
- **Geometry:** field `padding: 10px 12px`, `font-size: 14px`, `border: 1px solid var(--border-strong)` = rgba(16,24,31,0.2), **`border-radius: 2px`** (globals:3327). Suffix span 14px `var(--color-gray)` #5A5F66. Error `<p>` 12px, `font-weight: 600`, `margin: 4px 0 0`.
- **Colors/state:** default border rgba(16,24,31,.2) · **focus = `outline: none; border-color: var(--color-forest) #296533`** (:3330-3333) — border swap, no ring · error text `var(--color-ember)` = **#C05017** (:3342); the input border itself does **not** change on error · no disabled state.
- **Second recipe in same repo:** `.search-overlay__input` (:3570-3582) `padding: 16px 18px`, 15.5px, `border: 1px solid var(--border-mid)` rgba(16,24,31,.15), radius 0, **focus = `outline: 2px solid var(--color-forest); outline-offset: 2px`**. Third: `.cover-crop-sort select` (:1818-1828) `padding: 8px 16px`, `min-height: 44px`, 13.5px/600, `border-radius: 0`.
- **Used in:** ManualAcreageInput is the only labelled-input-with-error pattern in the repo; ~3 input families total. No `<label>` element — `aria-label` on the input (:54). No checkbox/switch/slider/toggle CSS families exist.
- **Compliance:** `border-radius: 2px` on a text input violates the checkbox-only rounding exception. Otherwise compliant (ember errors, no shadow, no gradient).

#### E. BC *(untheme baseline)* — `/private/tmp/.../scratchpad/bc-harveymilling-com/components/ui/input.tsx`
- **Provenance:** input.tsx:11; textarea.tsx:12; label.tsx:10; checkbox.tsx:16,22-24; slider.tsx:20-23; toggle.tsx:10,19-21; globals.css:15,23,25-27,33,78-81; EntityForm.tsx:415-422; ConnectionForm.tsx:100-174,196-243.
- **Geometry:** input `h-9` (**36px**) `px-3 py-1 text-base md:text-sm` `rounded-md` (0.375rem) `shadow-sm`. Textarea `min-h-[80px] px-3 py-2 rounded-md`. Label `text-sm font-medium`, no color. Toggle `h-9 px-2 min-w-9` / `sm h-8` / `lg h-10`, `rounded-md`.
- **Colors/state:** border `--input` hsl(20 5.9% 90%) #E7E5E4 · input focus `ring-1 ring-[--ring]` where `--ring` = hsl(20 14.3% 4.1%) ≈ **#0C0A09 near-black**, no offset (input.tsx:11) — **textarea uses a different recipe**, `ring-2 + ring-offset-2` (textarea.tsx:12) · disabled `opacity-50` · checkbox `rounded-sm` (2px) `border-primary` hsl(24 9.8% 10%) ≈ #1C1917 + `shadow`, checked `bg-primary`, `grid place-content-center` on both Root and Indicator with a `h-4 w-4` Check · slider `rounded-full` track `bg-primary/20` + `rounded-full` thumb with `shadow` · error: **`--destructive` is hsl(0 84.2% 60.2%) = #EF4444 red**; required marker is `text-red-500` (EntityForm.tsx:421); all validation surfaces as `toast.error(...)` (ConnectionForm.tsx:142-154), no inline field errors.
- **Variants:** toggle `default`/`outline`; no switch.tsx, no form.tsx, **no RHF/zod**. Forms are hand-wired `useState` — EntityForm 493 L (field-config array → `space-y-4` / `space-y-2` Label+Input rows, :415-422), ConnectionForm 313 L (:196-243).
- **Used in:** input 37 files, label 28, checkbox 19, textarea 10, slider+toggle 3.
- **Compliance:** untheme baseline — `rounded-md`/`rounded-sm`/`rounded-full`, `shadow-sm`/`shadow`, red destructive, near-black focus ring. `.form-compact input,select { h-8 text-sm }` (globals.css:78-81) is **defined and never applied in any `.tsx`** — dead CSS.

### Agreements
- Error/validation ink is already **#C05017** in KIT (`text-orange-700`, form.js:118), LABELER (`text-destructive`, form.tsx:161) and SHOPIFY (`--color-ember`, globals.css:3342) — same hex, three token names.
- Error text weight is bold/600 in all three of those (KIT `font-bold`, LABELER `font-bold`, SHOPIFY `font-weight: 600`).
- Disabled = `opacity-50` (+ `cursor-not-allowed`) in KIT, LABELER, BC identically.
- Focus **hue** is Field Green #296533 in KIT, STATS, LABELER, SHOPIFY (only BC is near-black).
- Input geometry: radius 0 in KIT, STATS, LABELER, SHOPIFY search/select; 1px hairline border, white/paper fill, no shadow, no gradient in all four themed repos.
- KIT and LABELER `form.tsx` are structurally identical (FormProvider/FormField/FormItem `space-y-2`/FormControl/FormDescription/FormMessage), differing only in the error token name.
- Switch is square in **both** repos that have one (KIT switch.js:8, LABELER switch.tsx:14) — no `rounded-full` in either file.

### CHOOSE blocks

**CHOOSE FORM-1: One focus-ring recipe across all repos.**
- **A (KIT):** `focus-visible:ring-2 ring-green-500 ring-offset-2` → 2px solid #296533, 2px white gap. Also the written house rule (conventions.md:13, :32).
- **B (STATS):** `box-shadow: 0 0 0 3px rgba(82,186,100,.35)`, no offset, no border change — soft glow, matches DESIGN.md:213/:240 ("3px soft glow").
- **C (LABELER):** `ring-2 ring-[--ring #296533] ring-offset-2` — identical rendering to A, token-driven.
- **D (SHOPIFY):** two recipes in one repo — border-color swap to #296533 (acreage field) vs `outline: 2px solid #296533; outline-offset: 2px` (search overlay).
- **E (BC):** `ring-1 ring-[#0C0A09]` on input, `ring-2 ring-offset-2` on textarea — inconsistent and off-brand hue.
- **Recommendation:** **A/C** (they are the same rendering) — it is the written contract in `.design-sync/conventions.md:13`, already shipped in two repos, and works on both light and cream fills where a 35%-alpha glow washes out. Fold STATS' `--focus-ring` into a 2px solid #296533 + 2px offset, keep `--focus-ring-ember` for ember-intent controls only.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FORM-2: Error / validation rendering recipe.**
- **A (KIT):** `text-sm font-bold text-orange-700 #C05017`, label also flips to #C05017; input border unchanged (form.js:65,118).
- **C (LABELER):** identical, via `text-destructive` = #C05017 (form.tsx:98,161).
- **D (SHOPIFY):** 12px / weight 600 / #C05017 below the field, label absent, border unchanged (globals.css:3340-3346).
- **E (BC):** `toast.error()` only, no inline message; required asterisk `text-red-500` #EF4444.
- **Recommendation:** **A**, with SHOPIFY's placement (message directly below field, `margin-top: 4px`) — same hex everywhere already, and A is the only one that also flips the label so the error is findable without color-only signalling. Name the token `--destructive: #C05017` (C's spelling) so the shadcn slot resolves correctly.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FORM-3: Input height / padding scale.**
- **A (KIT):** `px-6 py-3` = 24×12px, no fixed height (~42px rendered at text-sm) — matches DESIGN.md:239 "roomy 24×12 padding" verbatim.
- **C (LABELER):** `h-10` 40px + `px-3 py-2` (12px horizontal).
- **D (SHOPIFY):** 10×12px on the acreage field, 16×18px on search, 44px min-height on the sort select.
- **E (BC):** `h-9` 36px + `px-3 py-1`; a `.form-compact` h-8 (32px) tier is defined but unused.
- **Recommendation:** **A** as the canonical default (24×12, ≈42px) since it is literally the canon spec line, plus a documented dense tier at `h-9`/`px-3` for data-entry screens like BC's EntityForm — do not resurrect `.form-compact` h-8, which falls under the 44px touch target SHOPIFY already honors.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FORM-4: Checkbox radius.**
- Canon: `rounded.checkbox: 0.125rem` (DESIGN.md:87), "16px squares, 2px radius — the only rounding in the system" (DESIGN.md:242).
- **A (KIT):** `h-4 w-4`, **no rounded class → 0px**, `border-2` #57534E.
- **C (LABELER):** `h-4 w-4 rounded-[2px]`, `border` (1px) #296533 — explicit, commented.
- **E (BC):** `h-4 w-4 rounded-sm` (= 2px) `border` #1C1917 + `shadow`.
- STATS uses native `input[type=checkbox]` with `accent-color: var(--green)`; SHOPIFY has none.
- **Recommendation:** **C** — 16px / 2px / 1px #296533 border matches canon exactly and is the only implementation carrying the rationale inline; KIT's checkbox.js needs `rounded-[2px]` added and `border-2` reconsidered against C's 1px.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FORM-5: Label treatment.**
- **A (KIT):** `block text-sm font-bold text-gray-500 #57534E` — matches DESIGN.md:241 "labels above fields in Warm Stone Gray".
- **C (LABELER):** `text-sm font-bold`, **no color** (inherits ink #10181F); repo's own `.type-label` rule is identical minus color and is unused.
- **E (BC):** `text-sm font-medium`, no color.
- STATS and SHOPIFY ship **no `<label>` elements at all** (aria-label only).
- **Recommendation:** **A** — it is the only one that encodes the canon label color; STATS/SHOPIFY inputs should gain real labels (both currently rely on aria-label, which drops the visible affordance).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FORM-6: Form architecture — RHF+zod wrapper vs hand-wired.**
- **A/C (KIT + LABELER):** `form.js`/`form.tsx` RHF + zodResolver, `FormItem space-y-2`, a11y wiring (`aria-invalid`, `aria-describedby` chaining) free. LABELER uses it in 14 files.
- **E (BC):** no `form.tsx`; `useState` + manual validation + `toast.error` (EntityForm 493 L, ConnectionForm 313 L) — no `aria-invalid`, no inline messages.
- **B (STATS):** fully hand-wired inline-style inputs, no validation layer at all.
- **Recommendation:** **A/C** — the wrapper is what makes FORM-2's label-flip and the aria wiring automatic; hand-wired forms in BC/STATS are exactly where the red asterisk and the missing error text crept in. STATS' tokens-only idiom can keep inline styles but should adopt the FormItem/message *markup* contract.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Brand-law violation — BC:** required-field asterisk `text-red-500` #EF4444 (EntityForm.tsx:421) and `--destructive: 0 84.2% 60.2%` #EF4444 (globals.css:23) are red in UI chrome. Must become ember #C05017.
- **Brand-law violation — SHOPIFY:** `.plot-mapper-acreage-input__field { border-radius: 2px }` (globals.css:3327) — 2px is checkbox-only; text inputs are radius 0. Note this is in the board-approved repo, so it is a defect to fix, not a precedent.
- **Brand-law violation — BC (expected, untheme):** `rounded-md` on input/textarea/toggle, `rounded-sm` on checkbox is fine, `rounded-full` on slider track *and* thumb (slider.tsx:20,23 — track is not a circular primitive), `shadow-sm`/`shadow` on input, checkbox and slider thumb.
- **Bug — KIT:** `placeholder-gray-400` resolves to **#E2E1DD** (tailwind.config.js:1033) on a `bg-white` field — placeholder text is essentially invisible. Note the repo has two `gray` scales (stock stone at config:18-29, private override at config:1031-1037); the override wins. Likely intended `gray-500` #57534E.
- **Inconsistency — KIT:** checkbox radius 0 contradicts its own DESIGN.md:87/:242 (2px).
- **Inconsistency — BC:** input focus is `ring-1` no-offset while textarea is `ring-2 ring-offset-2` — the two controls disagree inside one repo.
- **Dead code — BC:** `.form-compact` (globals.css:78-81) has zero `.tsx` consumers; the "compact h-8 tier" is aspirational, not shipped.
- **Labeler-only, for the user's own pass:** `label.tsx` is unmodified stock and the repo's `.type-label` class (globals.css:164-167) has **0 usages** anywhere in `src/`; `ui/checkbox.tsx` is correctly built but imported by **0 files**.
- **Correction to the brief:** LABELER `switch.tsx` contains **no** `rounded-full` — the track and thumb are square, same as KIT. If a circular knob is the intent, neither repo implements it today.
- **Open:** STATS has no `<label>`, no field-error, and no disabled input state to compare — FORM-2/FORM-5 decisions there are greenfield, not a migration.
- **Open (corrected):** for slider and switch/toggle the decision rides on KIT (square, sand track, green range) vs BC (rounded-full, shadow). For **toggle-group**, SHOPIFY ships a hand-rolled equivalent the first draft of this flag missed: `TileGroup` (`components/plot-mapper/tile-group.tsx`, generic over `<V extends string>`, `aria-pressed` buttons) styled at `app/globals.css:2821-2875` — title in heading face 14px/700/0.1em uppercase, tiles 1px `--border-mid` on white, hover border `--color-forest`, and a **selected state that is the house recipe verbatim: 2px `--color-forest` border + `--color-cream` fill + padding compensated 12→11px** (globals.css:2858-2862). It is the strongest promotion candidate for a canonical selectable-tile/ToggleGroup pattern; its 2px tile radius is part of the plot-mapper-scoped radius drift already flagged in the Cards group.

---

## Overlays (dialog / sheet / popover / tooltip / dropdown / scrim)

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/dialog.js`
- Provenance: overlay `dialog.js:17-19`; content `dialog.js:32-38`; close `dialog.js:41`; title `dialog.js:73-77`.
- Scrim: `bg-black/80` → **rgba(16,24,31,0.80)** (`black:"#10181F"`, `src/tailwind/tailwind.config.js:1030`). Fade-only in/out, no blur.
- Panel: centered `translate-[-50%]`, `w-full max-w-lg` (512px), `p-6` (24px), `gap-4`, `bg-white #FFFFFF`, `border border-gray-200` = **#E2E2DD 1px** (`tailwind.config.js:1031-1037`), radius 0, **no shadow**. Anim: fade-in-0 + zoom-in-95, `duration-200`.
- Title: `font-heading text-lg font-bold uppercase tracking-widest` → Chakra Petch 700, 18px, 0.1em. Desc: `text-sm` 14px `text-gray-500 #57534E`.
- Close: abs right-4/top-4; default `#57534E` → hover `text-green-500 #296533`; focus `ring-2 ring-green-500 #296533 ring-offset-2`; disabled `pointer-events-none`.
- Used: story `ConfirmDialog` in `src/components/catalogueOverlays.js:56-73`. Compliance: **compliant**.

#### B. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/sheet.js`
- Provenance: overlay `sheet.js:18` (identical `bg-black/80`); variants `sheet.js:27-44`; close `sheet.js:56`.
- Base: `bg-white p-6 gap-4`, radius 0, **no shadow**, `duration-200` both open and close.
- Variants: `top` (border-b) / `bottom` (border-t) / `left` (`w-3/4 sm:max-w-sm` 384px, border-r) / `right` (default, border-l) — all `border-gray-200 #E2E2DD`, slide-in per side.
- Title/desc/close identical to A. Used: `FilterTray` story, `catalogueOverlays.js:74-81`. Compliance: **compliant**.

#### C. KIT — `popover.js:19`, `tooltip.js:18`, `dropdown-menu.js:57,71`
- Popover: `w-72` (288px) `p-4` (16px) `bg-white border border-gray-200 #E2E2DD text-black #10181F`, `align="center" sideOffset={4}` (`popover.js:12`), no shadow.
- Tooltip: `bg-black #10181F px-3 py-1.5 text-xs font-bold text-white`, `sideOffset={4}` (`tooltip.js:12`), **no arrow**, no `delayDuration` override → Radix default 700ms.
- Dropdown content `min-w-[8rem] border border-gray-200 bg-white p-1`, `sideOffset={4}`; item `px-2 py-2 text-sm cursor-pointer transition duration-200`, focus `bg-yellow-50 #F5F1E7` + `text-green-500 #296533`, disabled `opacity-50`. Compliance: **compliant**.

#### D. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/Explain.tsx`
- Provenance: `Explain.tsx:88-117`. `position:fixed`, `zIndex 90`, `maxWidth min(380px, 100vw-16px)`, `maxHeight 70vh`, auto flip above/below anchor (`:50-53`).
- Surface: `var(--paper) #ffffff`, `1px solid var(--line) #e1ddd8` (`app/globals.css:17`), `borderRadius 0`, `padding 10px 12px`, **`boxShadow: 0 12px 32px rgba(16,24,31,.14)` (`Explain.tsx:105` — uncommitted edit, was `.16`)**.
- Type: title 12.5px/700 `--ink #10181f`; formula 12px mono; GL eyebrow 10px/600 uppercase `--track-display .08em` display stack, `--text-faint #a9a49c`; rows 11.5px, `1px solid var(--line-soft) #edeae4` separators, tabular-nums.
- No scrim. Dismiss: outside mousedown, Escape, capture-phase scroll (`:57-78`). Best-in-class behaviour per critique.
- Compliance: **violation — shadow** (brand law: no shadows).

#### E. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/MarketApp.tsx:222-224`
- Only true centred modal in STATS. Scrim `rgba(16,24,31,.40)` **hardcoded inline** (equal to `--scrim` but not referencing it), flex-centered, `zIndex 50`, `padding 24`.
- Panel: `var(--paper)`, radius 0, `width min(760px,95vw)`, `maxHeight 92vh`, **`boxShadow 0 24px 70px rgba(16,24,31,.3)`** — heaviest in the fleet; sticky header `padding 18px 24px`, `borderBottom 1px var(--line-soft)`.
- Compliance: **violation — shadow**, and scrim is 40% vs canon 80%. Not touched by the working-tree shadow-normalization pass.

#### F. STATS — `ReportProblem.tsx:66-67` + `components/directory/shared.tsx:312, 376, 539`
- Anchored panel idiom: invisible click-catcher `position:fixed inset:0 zIndex 90` with **no background at all** (`ReportProblem.tsx:66`), panel `absolute top:calc(100% + 8px) right:0`, `width 302`, `--paper`, `1px solid --line`, radius 0, `padding 14`, `zIndex 95`, `boxShadow 0 12px 32px rgba(16,24,31,.14)`.
- Same recipe reused: chart hover-tip `shared.tsx:312` (uncommitted normalize from `0 10px 28px`), search panel `shared.tsx:376` (w 340, maxH 420), picker `shared.tsx:539` (w 440, maxH 460), calendar `.day-pop` `app/globals.css:99` (uncommitted normalize from `0 18px 44px rgba(...,.18)`).
- Compliance: **violation — shadow** (fleet-wide, but consistent at one recipe).

#### G. STATS tokens — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/app/globals.css:48`
- `--shadow-color: rgba(16,24,31,.14); --scrim: rgba(16,24,31,.4);`
- **Neither token is referenced by any file in the repo** (grep across `*.tsx/*.ts/*.css` returns only the declaration). Every shadow and the one scrim are hardcoded literals. Dead tokens.

#### H. LABELER (inventory-only) — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/dialog.tsx`
- Overlay `:24` `bg-black/80` → **rgba(16,24,31,0.80)** (`tailwind.config.ts:148 black:"#10181F"`) — matches KIT.
- Content `:41`: `max-w-lg p-6 gap-4 border bg-background`; `--border 20 5.9% 90% = #E7E5E4` (`src/styles/globals.css:58`), `--background #FFFFFF` (`:19`), `--radius: 0rem` (`:72`), **shadow stripped** vs stock. Adds `slide-out-to-left-1/2 / slide-in-from-top-[48%]` that KIT dropped.
- Title `:90` `type-title` → `text-2xl` (24px) font-heading bold uppercase tracking-widest (`globals.css:141-143`) — **24px vs KIT 18px**.
- Close `:47`: stock `opacity-70 → hover:opacity-100`, focus `ring-ring #296533`; no green hover-ink.
- Used by 5 files incl. `src/components/ui/command.tsx:29`. Popover `:22` `w-72 p-4 border bg-popover #FFFFFF`, `sideOffset 4`, no shadow; 7 consumers; opt-in `.PopoverContent { width: var(--radix-popover-trigger-width) }` (`globals.css:102-105`). Dropdown `:50` no shadow/no radius, item `px-2 py-1.5 cursor-default focus:bg-accent #F5F1E7`. **No tooltip.tsx, no sheet.tsx.**

#### I. LABELER (inventory-only) — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/app/_components/nav-drawer.tsx`
- Deliberately bypasses shared DialogContent (rationale `:12-24`, cites Design Spec §4 + ADR 0001). Overlay `:53` `bg-black/80`.
- Panel `:56`: `fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] border-r border-border #E7E5E4 bg-background #FFFFFF p-6 duration-200`, slide-in-from-left, radius 0, no shadow, **no built-in close X in the shared shape — hand-rolled at `:67-72`** (`text-brand-ink` → hover `text-brand-stone-warm`).
- Links `gap-6` (1.5rem, per spec); "Menu" chip `:64` `type-eyebrow bg-brand-wheat-harvest px-2 py-1 text-brand-ink`. Compliance: **compliant**.

#### J. SHOPIFY (board-approved) — `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/search-overlay.tsx` + `app/globals.css:3529-3582`
- The only dialog-like surface in the repo; no Radix, no scrim, no drawer anywhere in 3,692 lines.
- `.search-overlay` `:3530-3536`: `position:fixed; inset:0; z-index:60; background: var(--color-cream) #f5f1e7; overflow-y:auto` — explicit comment `:3529` *"Full-viewport, solid-cream distinct full-page mode — not a scrim over page content."*
- Inner `:3538-3546`: `max-width 640px`, `padding 64px 24px`, `gap 24px`. Close `:3548-3568`: 44×44px, `border 1px var(--border-mid) rgba(16,24,31,.15)`, hover border+color `--color-forest #296533`. Input `:3570-3582`: `padding 16px 18px`, 15.5px body, focus `outline 2px solid #296533 offset 2px`.
- Focus trap + Escape hand-rolled (`search-overlay.tsx:34-41, 77-82`). Compliance: **compliant** (no shadow, no radius, no red).

#### K. BC (untheméd baseline) — `/private/tmp/.../bc-harveymilling-com/components/ui/{dialog,sheet,popover,dropdown-menu}.tsx`
- Dialog `:24` overlay `bg-black/80` → **rgba(0,0,0,0.80)** (stock black). Content `:43` `p-6 gap-4 border bg-background shadow-lg sm:rounded-lg` (`--radius: 0.5rem`, `app/globals.css:33`); local addition `showCloseButton` prop `:34-37,49`; close `rounded-sm opacity-70`.
- Sheet `:34` `shadow-lg`, `data-[state=closed]:duration-300 data-[state=open]:duration-500` (vs KIT 200/200); title `:111` `text-lg font-semibold` (**weight 600 — a weight the brand does not have**).
- Popover `:23` `w-72 rounded-md border bg-popover p-4 shadow-md`, `sideOffset 4`. Dropdown `:50` `rounded-md shadow-lg`, sub `:68` `shadow-md`, items `rounded-sm px-2 py-1.5`.
- Usage: dialog ~31 files, tooltip 8, dropdown-menu 4, popover 2, sheet 1 (MobileNav).

#### L. BC — `/private/tmp/.../bc-harveymilling-com/components/ui/tooltip.tsx` (NEWER generation)
- `data-slot` function components, no forwardRef. `TooltipProvider delayDuration = 0` (`:9`); `Tooltip` auto-wraps its own Provider (`:25-27`); `TooltipContent sideOffset = 0` (`:39`).
- Content `:49`: `bg-foreground text-background rounded-md px-3 py-1.5 text-xs text-balance w-fit` — **no font-bold**. Ships a `TooltipPrimitive.Arrow` `:55` (`size-2.5 rotate-45 rounded-[2px]`), which no other repo has.

### Agreements
- Scrim opacity is **80%** in KIT (A/B), LABELER dialog (H), LABELER NavDrawer (I) and BC (K) — four of five overlay systems agree on 80%.
- Scrim ink is **#10181F @ .80** in KIT and LABELER identically (both define `black: "#10181F"`); only BC's is literal `#000`.
- Popover geometry `w-72` (288px) + `p-4` + `sideOffset 4` + `align center`: identical in KIT (C), LABELER (H), BC (K).
- Dialog panel geometry `max-w-lg` + `p-6` + `gap-4` + centered translate: identical in KIT, LABELER, BC.
- Dropdown content `min-w-[8rem]` + `p-1` + `sideOffset 4`: identical across KIT, LABELER, BC.
- Radius 0 on all overlay surfaces in KIT, STATS, LABELER, SHOPIFY (BC is the sole `rounded-md`/`sm:rounded-lg` holdout).
- STATS has already converged its anchored-panel shadow on one recipe `0 12px 32px rgba(16,24,31,.14)` (uncommitted normalization pass across `Explain.tsx:105`, `shared.tsx:312`, `globals.css:99`).
- Sheet/drawer side-panel geometry: KIT `w-3/4 sm:max-w-sm` (384px) vs LABELER `w-72 max-w-[85vw]` (288px) — both left/right, both hairline-bordered, both `duration-200`.

### CHOOSE blocks

**CHOOSE OVERLAYS-1: What is the canonical scrim?**
- Option A/B/H/I (KIT + LABELER): `bg-black/80` = `rgba(16,24,31,0.80)`, ink-based, fade-only.
- Option E (STATS MarketApp `MarketApp.tsx:222`): `rgba(16,24,31,.40)` hardcoded.
- Option G (STATS token `globals.css:48`): `--scrim: rgba(16,24,31,.4)` — declared, never used.
- Option J (SHOPIFY): **no scrim at all** — full-viewport cream `#f5f1e7` takeover.
- Option K (BC): `rgba(0,0,0,0.80)` — pure black, off-palette.
- Recommendation: **A** (`rgba(16,24,31,0.80)`) as the modal scrim; retire BC's pure black and raise STATS' `--scrim` to `.8`. Canon (`DESIGN.md:232`) states "80% dark scrim" verbatim, and it is the only value four repos already ship.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-2: Anchored surfaces (popover / dropdown / hover-tip) — border-only or shadow?**
- Option C/H (KIT + LABELER): hairline border only (`#E2E2DD` / `#E7E5E4`), zero shadow.
- Option D/F (STATS): `1px solid #e1ddd8` **plus** `0 12px 32px rgba(16,24,31,.14)`.
- Option K (BC): `shadow-md` / `shadow-lg` + `rounded-md`.
- Recommendation: **C** — brand law is explicit ("no shadows; depth = cream fills + hairline borders", `.design-sync/conventions.md:12`), and SHOPIFY's board-approved overlay ships zero shadow. This is a violation fix in STATS/BC, not a taste call; the only genuine question is whether STATS wants a compensating `--line-strong #cecac3` border on floating panels to keep them legible over dense tables.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-3: Tooltip defaults — old-gen or new-gen?**
- Option C (KIT `tooltip.js:12,18`): `delayDuration` unset (Radix default **700ms**), `sideOffset 4`, `bg-#10181F text-white text-xs **font-bold**`, no arrow.
- Option L (BC `tooltip.tsx:9,39,49,55`): `delayDuration 0`, `sideOffset 0`, `bg-foreground` `text-xs` **no bold**, ships an Arrow, self-wrapping Provider.
- Recommendation: **C for visual treatment (bold ink chip, no arrow) + L's `delayDuration 0`**. Instant tooltips are the better desk-tool behaviour and BC already ships them across 8 files; `sideOffset 0` and the rotated `rounded-[2px]` arrow should be dropped (arrow is a bevel/elevation cue this brand doesn't use).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-4: Overlay title type size.**
- Option A/B (KIT `dialog.js:73-77`, `sheet.js:88-92`): `text-lg` = 18px, font-heading bold uppercase tracking-widest.
- Option H (LABELER `dialog.tsx:90` → `globals.css:141-143`): `type-title` = `text-2xl` = **24px**, same family/weight/case.
- Option K (BC `sheet.tsx:111`): `text-lg font-semibold` — sans, weight 600, sentence case.
- Recommendation: **A** — 18px keeps a confirm dialog's title from out-shouting the page headline; 24px Chakra at 0.1em tracking is the exact overflow class LABELER already had to defend against (`globals.css:130-136`). BC's 600 weight is a flat violation.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-5: Canonical drawer/sheet pattern.**
- Option B (KIT `sheet.js`): generic 4-side `Sheet` with cva `side` variant, `w-3/4 sm:max-w-sm` (384px), built-in close X.
- Option I (LABELER `nav-drawer.tsx`): purpose-built left drawer on raw Radix, `w-72 max-w-[85vw]` (288px), hand-rolled close, sr-only Title — explicitly rejects the shared component because it is centre-positioned.
- Option J (SHOPIFY): no drawer at all; full-page cream takeover instead.
- Recommendation: **B as the shipped primitive, with I's left-side + `max-w-[85vw]` behaviour folded in as `side="left"` defaults.** LABERER's bypass exists only because it needed a non-centred dialog and its own close affordance — both of which `Sheet` already provides; keeping two drawer idioms is the divergence.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-6: Dropdown item geometry and focus fill.**
- Option C (KIT `dropdown-menu.js:71`): `px-2 py-2` (8px vertical), `cursor-pointer`, `transition duration-200`, focus `bg-yellow-50 #F5F1E7` + `text-green-500 #296533`.
- Option H (LABELER `dropdown-menu.tsx:86`): `px-2 py-1.5` (6px), `cursor-default`, focus `bg-accent #F5F1E7` + `text-accent-foreground #10181F` (ink, not green).
- Option K (BC `dropdown-menu.tsx:87`): `px-2 py-1.5 rounded-sm`, focus `bg-accent` stone.
- Recommendation: **C** — the cream focus fill is identical in KIT and LABELER already; the open items are the 8px vs 6px row height and green-vs-ink focus text. KIT's green focus ink is the brand's own selection signal and reads at a glance in long menus.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE OVERLAYS-7: Does the full-page cream takeover (SHOPIFY search) become a sanctioned overlay mode?**
- Option J: `position:fixed; inset:0; background:#f5f1e7; z-index:60` — no scrim, no panel, no shadow; the page is replaced, not veiled.
- Option A: everything is a scrimmed centre panel.
- Recommendation: **Sanction J as a second, named mode ("takeover") for search/immersive flows only**, keeping A for confirmations. J is board-approved and shipped, and it is the single most brand-compliant overlay in the fleet (`app/globals.css:3529` documents the intent).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Brand-law violation (not a choice) — shadows in STATS:** `Explain.tsx:105`, `ReportProblem.tsx:67`, `directory/shared.tsx:312,376,539`, `app/globals.css:99` (`.day-pop`), `:107` (`.hcard:hover`), `:98` (`.daycell:hover`), and the outlier `MarketApp.tsx:223` `0 24px 70px rgba(16,24,31,.3)`. Note several of these are **uncommitted working-tree edits** that *lowered* the shadow rather than removing it — the pass currently in flight normalizes toward a shadow the brand forbids.
- **Brand-law violation — BC:** `shadow-lg`/`shadow-md` on dialog/sheet/popover/dropdown; `sm:rounded-lg` + `rounded-md` + `rounded-sm` (`--radius: 0.5rem`, `app/globals.css:33`); `font-semibold` (600) on `sheet.tsx:111`; scrim `rgba(0,0,0,.8)` off-palette. Expected for an untheméd baseline — listed so the retheme has a checklist.
- **Dead tokens (STATS):** `--scrim` and `--shadow-color` (`app/globals.css:48`) are declared but referenced by **zero** files. Whatever OVERLAYS-1/2 decide, these need either wiring up or deleting.
- **Labeler-only, for the user's own pass:** no `tooltip.tsx` and no `sheet.tsx` exist in `src/components/ui/` — any tooltip/sheet decision has no landing site there yet; `nav-drawer.tsx` is the de facto sheet. Also `.PopoverContent` (`src/styles/globals.css:102-105`) is a bare global class with no equivalent in any other repo — a trigger-width pin the kit has no concept of.
- **Open question:** KIT `Sheet` uses `duration-200` symmetrically; BC uses `300` close / `500` open. No repo documents an intended overlay motion duration, so OVERLAYS-5 does not settle it — needs a separate motion decision.
- **Open question:** KIT dialog anim is fade+zoom only; LABELER `dialog.tsx:41` and BC `dialog.tsx:43` both retain the stock `slide-in-from-top-[48%]` / `slide-out-to-left-1/2` pair. Whether the slide was deliberately dropped from the kit or lost is not recorded in `.design-sync/conventions.md`.
- **Coverage gap:** no repo has a themed Radix `Sheet` in production — KIT's exists only as the `FilterTray` story (`catalogueOverlays.js:74-81`), BC's single use is MobileNav, LABELER bypasses it. Whatever wins OVERLAYS-5 is effectively unproven in a shipped surface.

---

## FEEDBACK (toast, spinner/loader, progress, skeleton)

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/sonner.js`
- Provenance: sonner.js:1-30; dep `sonner: ^1.7.4` (package.json:42); usage recipe `.design-sync/conventions.md:14`, `.design-sync/NOTES.md:34`, doc `.design-sync/docs/Toaster.md`.
- Geometry: sonner defaults for size/position; `style={{borderRadius:0, boxShadow:"none"}}` inline (sonner.js:13) because sonner's runtime-injected stylesheet outranks utilities. `theme="light"` hardcoded (no dark path).
- Colors: toast fill `bg-white` #FFFFFF, text `text-black` #10181F (config override, tailwind.config.js:1030), border `border-gray-200` **#E2E2DD** (tailwind.config.js:1035 — *not* the `hairline` token rgba(16,24,31,0.12) at :1043), title `font-bold`, description `text-gray-500` #57534E (:1032), actionButton `bg-green-500` #296533 / white / bold / square, cancelButton `bg-yellow-50` #F5F1E7 / #57534E / bold / square (sonner.js:15-23).
- States: no `error` / `success` / `warning` / `loading` classNames defined → those fall through to sonner's own defaults.
- Used: 1 demo mount (catalogueOverlays.js:152), 1 `toast()` call (catalogueOverlays.js:144).
- Compliance: square, shadow-free, Sonner-only, no gradients — compliant. Gap: no ember error mapping.

#### B. KIT — `src/components/ui/skeleton.js`
- Provenance: skeleton.js:4-8. Classes: `animate-pulse bg-gray-400` = **#E2E1DD** (tailwind.config.js:1033); no radius class → square; no size (caller supplies).
- Used: catalogueLayout.js:112-115 (avatar + 2 lines), sidebar.js:549-550 (`SidebarMenuSkeleton`). 8 `<Skeleton|<Progress` instances repo-wide.
- Compliance: compliant (square, flat, opacity pulse only).

#### C. KIT — `src/components/ui/progress.js`
- Provenance: progress.js:5-16 (Radix `@radix-ui/react-progress`). Geometry: `h-2` (8px) × `w-full`, `overflow-hidden`, no radius → square.
- Colors: track `bg-sand` **#ECE5D3** (tailwind.config.js:1041); indicator `bg-green-500` **#296533**; motion `transition-transform duration-250 ease-out`, translateX technique.
- Used: catalogueData.js:276 (`value={62}`).
- Compliance: compliant.

#### D. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/PageLoading.tsx`
- Provenance: PageLoading.tsx:23 (SVG), globals.css:110-111 (`@keyframes hspin{to{rotate(360deg)}}`, `.hspin{animation:hspin .8s linear infinite}`).
- Geometry: 22×22 arc (`M21 12a9 9 0 1 1-6.2-8.56`), strokeWidth 2.4, round caps — an open 3/4 ring, not a full circle.
- Colors: stroke **raw literal `#296533`** (not `var(--green)`, which exists at globals.css:19); caption `var(--text-3)` #7F7973 at 13.5px; frame `var(--paper)` #FFFFFF + content area `var(--wheat-pale)` #F5F1E7 (globals.css:9-11).
- Composition: renders Sidebar + AppHeader so only the content region blanks; caption default "Querying iRely…", `marginBottom: 18vh`.
- Used: 57 references — every `app/*/loading.tsx`.
- Reduced motion: globals.css:127-137 dampens all animation **except** `.hspin` (deliberate; this hunk is an **uncommitted** working-tree change per `git diff app/globals.css`).
- Toast/skeleton/progress: **none exist**. Only `docs/design-system/components/Toaster.md` + `docs/design-system/conventions.md` (kit doc mirror, no implementation).
- Compliance: compliant; token drift on the hardcoded hex.

#### E. LABELER — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/app/_components/monogram-loader.tsx` (inventory-only)
- Provenance: monogram-loader.tsx:1-140; CSS `src/styles/globals.css:170-213` (`.harveys-loader-ring::before/::after`, `.harveys-loader-glyph`, `@keyframes harveys-loader-spin`, `@keyframes harveys-loader-breathe`), reduced-motion at :215+.
- Geometry: sizes `button` 16px / `sm` 28px / `md` 56px / `lg` 80px (loaderSizeClasses:7-12). Ring = `rounded-full` inset-0; `::before` 2px solid currentColor @ opacity .18 (static track), `::after` 2px with only right+top borders, `harveys-loader-spin 1.05s cubic-bezier(.65,0,.35,1) infinite`. Glyph = H-monogram SVG at `h-[68%] fill-current`, `harveys-loader-breathe 1.8s ease-in-out` (scale .96↔1, opacity .72↔1).
- Colors: `text-brand-forest` **#1A4121** (tailwind.config.ts:82) drives both ring and glyph via currentColor.
- Variants: `MonogramLoaderMark` (bare), `MonogramLoader` (role=status, aria-busy, sr-only label, `inline` mode, optional visible label `font-heading text-xs font-bold uppercase`), `PageLoader` (min-h-screen, bg-white, size lg), `SegmentLoader` (container, min-h calc(100vh-7rem), size lg).
- Used: 39 references — route `loading.tsx` files, quiz Suspense fallback (quiz/page.tsx:51), in-button spinners (regenerate-button.tsx:72 size="button"), inline doc loads (mix.tsx:265, tag.tsx:261).
- Decoupling cost: 3 external deps — the two `@layer components` rules + 2 keyframes in globals.css, `brand.forest` in tailwind.config.ts, and `~/lib/utils` `cn`.
- Compliance: compliant (`rounded-full` is a genuine circular primitive; reduced-motion honored by freezing).

#### F. LABELER — `src/components/ui/toast.tsx` + `toaster.tsx` + `~/hooks/use-toast` (inventory-only, LEGACY)
- Provenance: toast.tsx:27-41 (cva), toaster.tsx:13-35, mount at `src/app/layout.tsx:59`; dep `@radix-ui/react-toast: ^1.2.6` (package.json:49); **no sonner dep**.
- Geometry: viewport `fixed top-0 z-[100] p-4 sm:bottom-0 sm:right-0 md:max-w-[420px]`; toast `border p-6 pr-8`, no radius class → square; radix swipe/slide animations.
- Colors: default `bg-background`/`text-foreground` (white/#10181F); destructive `border-destructive bg-destructive text-destructive-foreground` = **#C05017 fill / #FFFFFF text** (globals.css:54-55, `--destructive: 20.2 78.6% 42.2%`). Action button `h-8 px-3 text-sm font-bold`, hover→destructive fill. Close button `group-[.destructive]:text-brand-cream`, `group-[.destructive]:focus:ring-offset-red-600` (stock red leftover).
- Used: 20 `toast(` call sites (columns.tsx, customform.tsx, stockform.tsx, regenerate-button.tsx…).
- Compliance: **violates Sonner-only**; stock `red-600` ring-offset survives.

#### G. LABELER — segmented progress (inventory-only)
- Provenance: `src/app/quiz/_components/quiz-question.tsx:59-68` (5 segments), `src/app/fertilizer/_components/wizard-progress.tsx` (4 segments, same pattern).
- Geometry/colors: `flex gap-1`, each segment `h-1 flex-1` (4px), filled `bg-brand-field` #296533, empty `bg-secondary`; label "Question N of 5" `text-sm text-muted-foreground`. Square. No `Progress`/`Skeleton` component exists in `src/components/ui/`.
- Compliance: compliant.

#### H. SHOPIFY — spinner, `/Users/Sheppardjm/Repos/harveys-seed-shopify/app/globals.css:3067-3120`
- Provenance: `@keyframes plot-mapper-spin` :3067; `.plot-mapper-spinner` :3073-3082; `.plot-mapper-tile__spinner` :3103-3113.
- Geometry: 13×13px (inline) / 14×14px (tile, absolute top-8 right-8); `border: 2px solid var(--border-mid)` = rgba(16,24,31,0.15) (:11), `border-top-color: var(--color-forest)` **#296533** (:2); `border-radius: 50%`; `plot-mapper-spin 0.7s linear infinite`.
- Loading-state surface: `.plot-mapper-tiles.is-loading .plot-mapper-tile` → `background: var(--color-cream)` #F5F1E7, border `--border-mid`, `cursor: progress`, label/desc `opacity: .4` (:3092-3100).
- Reduced motion: slows to `animation-duration: 1.8s` rather than freezing (:3115-3120).
- Used: plot-mapper.tsx:616,622 (notice) and tile-group.tsx:55,72 (per-tile). No toast library anywhere (repo-wide grep for toast/sonner: 0 hits). No skeleton/shimmer.
- Compliance: compliant (circle is a true circular primitive).

#### I. SHOPIFY — progress bar, `app/globals.css:281-306`
- Geometry: `.quiz-progress` flex gap 12px; `__track` `flex:1; height:6px`; `__fill` height 100%, `transition: width .25s ease`. Square (no radius).
- Colors: track `var(--color-sand)` **#ECE5D3** (:6); fill `var(--color-forest)` **#296533**; label 12.5px/700/uppercase/`letter-spacing:.08em`/`var(--color-forest)`.
- Compliance: compliant; board-approved shipped reference.

#### J. BC — `…/scratchpad/bc-harveymilling-com/components/ui/sonner.tsx`
- Provenance: sonner.tsx:1-31; dep `sonner: ^2.0.5` (package.json:68); one mount at `app/layout.tsx:42`.
- Geometry/colors: stock shadcn — `theme` from `next-themes` (`"system"` → dark toasts possible); `bg-background`/`text-foreground`/`border-border`, **`shadow-lg`**, no radius override → sonner v2's injected `--border-radius` (~8px) survives; `--radius: 0.5rem` (globals.css:33).
- Used: **163** `toast.success|error|info|warning(` call sites across components/app.
- Compliance: **violates** no-shadow and radius-0; dark-mode toasts undefined in brand canon; error toasts use sonner's default (red-family) treatment, no ember.

#### K. BC — `components/ui/progress.tsx` + 5 bespoke bars
- `ui/progress.tsx:12-24`: `h-4` (16px), `w-full`, **`rounded-full`**, track `bg-secondary` hsl(60 4.8% 95.9%)≈#F5F5F4, indicator `bg-primary` hsl(24 9.8% 10%)≈#1C1917 (near-black stone), `transition-all`. 10 call sites, most override height (`h-2`, `h-3`).
- `components/migration/PushProgressBar.tsx:57-75`: `h-2 rounded-full bg-secondary`; fill **`bg-blue-500`** (in-flight) / **`bg-amber-500`** (completed-with-errors) / `bg-green-500` — stock Tailwind, off-palette.
- `components/checklists/ChecklistProgress.tsx:36-64`: `h-2 w-full bg-gray-200 rounded-full`; fill `bg-green-500` / `bg-amber-500` / `bg-gray-300`.
- `components/migration/MigrationProgress.tsx:51-73`: rail `h-0.5 bg-muted` + `bg-primary` fill; step nodes `w-8 h-8 rounded-full` (circular primitive, but `bg-primary` near-black / `bg-primary/20`).
- `PostingProgress.tsx:405`, `TransactionPostingProgress.tsx:393`: plain `<Progress className="w-full" />`.

#### L. BC — ad-hoc spinner/skeleton (no components)
- **280** `Loader2` lines with `animate-spin`, typical `h-4 w-4` in buttons and `h-6 w-6` for regions, `text-muted-foreground` hsl(25 5.3% 44.7%)≈#78716B (ModuleBrowser.tsx:169,364,447; ConnectionForm.tsx:297; PositionAnalysisTrigger.tsx:347).
- No `Skeleton` component; 15 `animate-pulse` instances instead (UserMenu.tsx:22 `h-8 w-8 animate-pulse bg-muted rounded`; ChatWindow.tsx:199 `rounded-lg bg-muted animate-pulse`; migration-readiness/page.tsx:533 `<Card className="animate-pulse">`).
- Compliance: `rounded`/`rounded-lg` on pulse placeholders violate radius-0; no brand-loader identity.

### Agreements
- Progress track/fill palette is already identical in KIT (C) and SHOPIFY (I): sand **#ECE5D3** track + forest/field **#296533** fill, square, width/transform transition ~0.25s.
- Progress bars are square everywhere themed (KIT h-2, SHOPIFY 6px, LABELER 4px segments); only BC is `rounded-full`.
- Spinner stroke green is #296533 in both STATS (D) and SHOPIFY (H).
- Exactly one Toaster mounted at app root wherever a toast system exists (KIT convention `.design-sync/conventions.md:14`; BC `app/layout.tsx:42`; LABELER `layout.tsx:59`).
- Loading placeholders that exist are opacity/pulse-based — no shimmer gradients anywhere (gradient law upheld).
- Every repo with a spinner handles `prefers-reduced-motion` (STATS, SHOPIFY, LABELER); BC does not.
- Sonner is the toast library in both repos that ship one (KIT, BC); STATS and SHOPIFY have none.

### CHOOSE blocks

**CHOOSE FEEDBACK-1: What is the canonical loading indicator?**
- E (LABELER MonogramLoader): H-monogram + 2px ring, 4 sizes 16/28/56/80, spin 1.05s + breathe 1.8s, `role=status` + sr-only label, needs 2 CSS rules + 2 keyframes ported
- D (STATS hspin): 22px open-arc SVG, 0.8s linear, one hardcoded #296533, 57 sites
- H (SHOPIFY ring): 13/14px CSS-only border ring, 0.7s linear, tokens only, no JS
- L (BC Loader2): lucide icon + `animate-spin`, 280 sites, no brand identity
- Recommendation: **E** as the brand-signature loader for md/lg (page + segment) with **H's CSS-only ring** as the button/inline 16px form — the monogram is unreadable at 16px, and H is already board-approved and dependency-free. Port E out of labeler globals into the kit as a self-contained component.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-2: Loader ink color — forest #1A4121 or field #296533?**
- E uses `brand-forest` **#1A4121**; D and H both use **#296533**
- Recommendation: **#296533** — two of three themed repos already ship it, and green-500 is the interactive/system green in canon (DESIGN.md `primary-interactive`); #1A4121 reads as an anchor/structural color.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-3: Sonner version + Toaster recipe.**
- A (KIT): sonner ^1.7.4, `theme="light"`, inline `borderRadius:0 / boxShadow:"none"`, white toast + #E2E2DD border + #296533 action + #F5F1E7 cancel
- J (BC): sonner ^2.0.5, `theme` from next-themes, `shadow-lg`, default ~8px radius, 163 call sites in production
- Recommendation: **A's recipe on sonner 2.x** — BC's version is the one carrying real traffic and 1.x is EOL-ish, but A's inline-style override is the only thing that actually defeats sonner's injected stylesheet. Keep `theme="light"` (no dark canon exists).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-4: Toast error/destructive treatment (undefined in KIT, red-default in BC).**
- F-style: solid ember fill **#C05017** + white text (labeler `--destructive`)
- A-style: white toast, hairline border, ember **text** #A84413 + ember icon (ration principle — ember as accent, not fill)
- Recommendation: **A-style ember text/icon on white** — ember is a rationed accent per brand law; a full #C05017 toast fill is the loudest possible use of it for a transient message. Add explicit `classNames.error` so sonner's red default can never surface.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-5: Progress bar height.**
- C (KIT) `h-2` = 8px · I (SHOPIFY) 6px · G (LABELER) 4px segments · K (BC) `h-4` = 16px rounded-full
- Recommendation: **6px (I)** as the determinate default with C's square geometry and identical colors — SHOPIFY is the shipped board-approved value and the palette already agrees; keep G's 4px segmented form as the distinct "step/wizard" variant.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-6: Skeleton treatment.**
- B (KIT): `animate-pulse bg-gray-400` **#E2E1DD**, square, caller-sized — the only real component
- L (BC): ad-hoc `animate-pulse bg-muted rounded` / `rounded-lg`, 15 sites
- STATS/SHOPIFY: none (STATS uses the full PageLoading frame instead)
- Recommendation: **B**, and adopt STATS' pattern-level rule — prefer chrome-preserving loading frames (D) over skeleton fields; use Skeleton only for list/table rows. #E2E1DD on white is a legible flat tint with no shadow.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE FEEDBACK-7: Reduced-motion policy for spinners.**
- STATS (globals.css:127-137): exempt the spinner, freeze everything else ("a frozen spinner reads as a hung page")
- SHOPIFY (globals.css:3115-3120): slow to 1.8s
- LABELER (globals.css:215+): freeze the spinner entirely, glyph static at opacity 1
- Recommendation: **SHOPIFY's slow-to-1.8s** — keeps the "still working" signal STATS argues for while honoring the user's setting, unlike a full exemption.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Violation (BC, `components/ui/progress.tsx:16`)**: `rounded-full` + `h-4`; also `bg-primary` #1C1917 fill instead of green. Repeated in PushProgressBar.tsx:67-70 and ChecklistProgress.tsx:59.
- **Violation (BC, `components/ui/sonner.tsx:18`)**: `shadow-lg` plus sonner's default ~8px radius; `theme` from next-themes admits dark toasts with no brand canon behind them.
- **Violation (BC, PushProgressBar.tsx:57-61)**: `bg-blue-500` / `bg-amber-500` state colors — blue is not in the palette and warning must be ember (#E56625 / #C05017).
- **Violation (BC, UserMenu.tsx:22, ChatWindow.tsx:199)**: `rounded` / `rounded-lg` on pulse placeholders.
- **Labeler-only, for the user's own pass**: the Radix `toast.tsx` / `toaster.tsx` / `use-toast` triple (20 call sites, mounted at layout.tsx:59) contradicts the Sonner-only decision recorded in `.design-sync/NOTES.md:34`; migrating it also removes the stock `focus:ring-offset-red-600` at toast.tsx:80.
- **Labeler-only**: MonogramLoader can't be lifted as-is — it depends on `globals.css:170-213` and `brand.forest`; decoupling means inlining those styles (or a `<style>`-free Tailwind rewrite) before it can be canon.
- **KIT gap**: `sonner.js` defines no `error`/`success`/`warning`/`loading` classNames, so sonner's own (red-family) defaults are what renders on `toast.error()` — the one place red can re-enter chrome.
- **KIT token drift**: toast border uses `gray-200` #E2E2DD rather than the `hairline` token rgba(16,24,31,0.12) (tailwind.config.js:1043) used elsewhere for hairlines.
- **STATS token drift**: PageLoading.tsx:23 hardcodes `#296533` instead of `var(--green)`; PageLoading.tsx itself is clean in git, but the reduced-motion rule that exempts `.hspin` is an **uncommitted** globals.css edit.
- **Open question**: BC has 280 `Loader2` occurrences — whether the canonical loader replaces all of them (including 16px in-button) or only page/section-level ones is a scope call the extraction can't settle.
- **Open question**: no repo defines an indeterminate/streaming progress treatment; SHOPIFY/KIT bars are determinate-only.

---

## Empty States & Error Surfaces

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/` (GAP)
- **Provenance:** no `empty-state.js` exists; `ls src/components/ui/` returns 37 files, none of them an EmptyState. Nearest neighbor is `alert.js`.
- **`alert.js` (the only error surface in canon):** `alert.js:5-19` — container `relative w-full border p-4`, icon slot absolutely positioned `left-4 top-4`, content offset `[&>svg~*]:pl-7`.
  - default: border `#hairline rgba(16,24,31,0.12)`, bg `yellow-50 #F5F1E7`, text `#10181F`, icon `green-500 #296533`
  - destructive: border `orange-700 #C05017`, bg `red-50 #F6ECEB` (cream, not red), text + icon `#C05017`
  - `AlertTitle` `alert.js:31-40`: `font-heading text-sm font-bold uppercase tracking-widest` — the seed-tag signature
  - `AlertDescription` `alert.js:43-49`: `text-sm`, `leading-relaxed`
- **Variants:** default | destructive. No `tone` prop, no icon/title/desc/action anatomy, no `EmptyState`.
- **Used:** kit demo only.
- **Compliance:** compliant (radius 0 inherited, no shadow, ember-not-red destructive). Gap = no EmptyState primitive; `alert.js` is the correct anatomical + color parent for one.

#### B. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx:604-621` (`DbDownShell`)
- **Provenance:** `shared.tsx:604` signature; panel `shared.tsx:610`; heading `:611`; body `:612`.
- **Geometry:** full-page shell (Sidebar + AppHeader + main `padding: '18px 30px 60px'`); panel `maxWidth: 720`, `padding: '16px 18px'`, `borderRadius: 0`, `border: 1px solid`. Heading `fontWeight: 600`, `marginBottom: 6`, inherits 16px body. Body is a `<pre>` — `fontSize: 12.5`, `whiteSpace: 'pre-wrap'`, `fontFamily: 'ui-monospace, monospace'`.
- **Colors (single state, no interaction):** panel border `var(--data-red-border)` = **#E9B6AD** (`app/globals.css:26`); panel bg `var(--data-red-tint)` = **#FCECE9** (`:26`); heading `var(--data-red-strong)` = **#A21C10** (`:25`); body text `var(--data-red-deep)` = **#791B11** (`:25`). Surrounding page `var(--wheat-pale)` #F5F1E7 (`:9`).
- **Variants:** one. Fixed heading string "Couldn't reach the iRely database"; body = `error ?? 'No data.'`.
- **Used:** 7 route apps — `InventoryApp.tsx:115`, `VendorsApp.tsx:422`, `MarketApp.tsx:529`, `FreightApp.tsx:126`, `LanesApp.tsx:133`, `PositionApp.tsx:219`, `ProductsApp.tsx:497`.
- **Compliance:** **VIOLATION.** Data Red family painting UI chrome error state, contradicting the repo's own ADR 0001 — which the *uncommitted* `marginTint` helper restates verbatim (`git diff components/directory/shared.tsx`, added at `shared.tsx:26-35`: "ADR 0001: Data Red is for negative numerics only"). Ember tokens already exist and are unused here (`globals.css:28-29`: `--ember #E56625`, `--ember-strong #C05017`, `--ember-text #A84413`, `--ember-tint #FBEDE4`, `--ember-border #EEC4A9`). Secondary violation: the `error` string is dev-speak leaked from `lib/db/client.ts:172` — "…the SSH tunnel is probably down. Run: `pnpm tunnel` (status: `pnpm tunnel status`)" — rendered monospace to a commodity-desk user. No retry affordance.

#### C. STATS — `shared.tsx:429-447` (`MineButton`, zero-feedback empty)
- **Provenance:** `shared.tsx:446` inline style.
- **Geometry/colors:** `padding: '7px 13px'`, `fontSize: 13`, `fontWeight: 600`, `borderRadius: 0`. off: border `var(--line)` #E1DDD8 (`globals.css:17`), bg `var(--paper)` #FFF, text `var(--text-strong)` #474440 (`:13`). on: border/text `var(--green-pos)`/`var(--green)`, bg `var(--green-tint)`.
- **Compliance:** compliant chrome, but **UX gap**: toggling Mine to a zero-row result renders an empty table with no message — the only explanation lives in a `title` tooltip (`shared.tsx:441-444`) that itself contains dev-speak (`localStorage harveyMe = "DM,DMCCRACKIN"`).

#### D. SHOPIFY — `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/search-overlay.tsx:150-159` + `app/globals.css:3590-3610`
- **Provenance:** wrapper `globals.css:3590`; heading `:3596`; body `:3606`. Render `search-overlay.tsx:150`.
- **Geometry:** `.search-overlay__empty` = `flex column, gap: 8px` — **no panel, no border, no background, no icon**. Heading: `var(--font-heading)` (Chakra Petch), `700`, `uppercase`, `letter-spacing: 0.1em`, `24px`, `line-height 1.15`, `margin 0`. Body: `15.5px`, `line-height 1.6`, `margin 0`.
- **Colors:** heading inherits ink `#10181F` (`globals.css:7`); body `var(--color-slate)` = **#3D4148** (`:8`). No other states.
- **Action:** inline `<Link href="/catalog">` in the body sentence — not a button.
- **Twin state:** the pre-query idle hint `.search-overlay__hint` (`globals.css:3585-3589`, `15.5px`, `var(--color-gray)` #5A5F66) is a *separate, distinct* state (`search-overlay.tsx:145`).
- **Used:** 1 surface.
- **Compliance:** compliant.

#### E. SHOPIFY — `components/catalog/catalog-view.tsx:202-206` + `app/globals.css:961-964` (`.catalog-empty`)
- **Provenance:** `globals.css:961`.
- **Geometry/colors:** the entire rule is `font-size: 14.5px; color: var(--color-slate)` **#3D4148**. A bare `<p>` inside `.catalog-grid`. No border, no bg, no padding, no icon, no heading.
- **Copy + action:** "Nothing matches those filters. `<Link href="/plot-finder">Try the plot quiz</Link>` instead." — inline link, next-step affordance.
- **Used:** 1 surface.
- **Compliance:** compliant. This is the board-approved minimum: **text + a real next step, no panel.**

#### F. SHOPIFY — the omit rule (`/.planning/phases/11-farmer-forward-copy-navigation/11-UI-SPEC.md`)
- **Provenance:** `11-UI-SPEC.md:105` (contact block: "the two `<div>` blocks stay **removed** — … no placeholder, no 'coming soon'"); `:226` (loading state "genuinely not applicable, not omitted"); `:237` ("give them a real next step"); `:282` (partial rows: fields "omitted individually … never rendered as an empty label or a dash"); `:189` (reuse `.catalog-empty` verbatim rather than author new empty copy).
- **Effect:** sections with no data render **nothing**. An EmptyState is authored only where the *user performed an action* (search, filter) and deserves an answer.

#### G. LABELER (inventory-only) — `src/app/fertilizer/results/_components/invalid-link-state.tsx:15-29`
- **Geometry:** `Card` `w-full border-border bg-secondary`; `CardContent` `flex flex-col gap-4 pt-6`. Title `h2.type-title` = `font-heading font-bold uppercase tracking-widest text-2xl`, `line-height 1.2727` (`src/styles/globals.css:122-127,141-143`). Body `text-base` 16px. Action: `Button variant="default"` `min-h-[44px] w-full` wrapping `<Link href="/fertilizer">Start over</Link>`.
- **Colors:** bg `--secondary` `41.8 40.7% 84.1%` = **#E7DDC6 wheat** (`globals.css:33`); text `--secondary-foreground` #10181F (`:34`); border `--border` `20 5.9% 90%` = **#E7E5E4** (`:58` — note: stock stone hairline, NOT the kit's `rgba(16,24,31,0.12)`).
- **Anatomy: title + desc + action, no icon, no tone variant.** Full-bleed wheat panel.
- **Compliance:** compliant. **This is the closest thing to a canonical EmptyState anatomy in any repo.**

#### H. LABELER (inventory-only) — `src/app/fertilizer/results/_components/no-vetted-data-screen.tsx:16-30`
- Same shell as G (`border-border bg-secondary`, `type-title` h2, `text-base` p) but `gap-2` instead of `gap-4` and **no action button** — the CTA is prose ("Bring your soil-test results to Harvey Seed staff"). Deliberate: the header comment declares it takes no `outcome` data so the "render sentinel citation" failure mode is structurally impossible.

#### I. LABELER (inventory-only) — `src/app/_components/dataTable.tsx:127-135` (desktop) and `:266-270` (mobile)
- Desktop: `TableCell colSpan={columns.length} className="h-24 text-center"` → "No results." — verbatim stock shadcn.
- Mobile: `<p className="py-8 text-center text-sm text-muted-foreground">{emptyMessage ?? "No results."}</p>` — `--muted-foreground` `33.3 5.5% 32.4%` = **#57534E** (`globals.css:41`). Only the mobile branch accepts the `emptyMessage` prop (`:36,48`) — **the desktop branch ignores it**, so a caller-supplied message disappears above 1024px.

#### J. BC — `components/ui/data-table.tsx:128-135`
- Stock shadcn: `TableCell colSpan={columns.length} className="h-24 text-center"` → "No results." No icon, no action, no `emptyMessage` prop. Text inherits `--foreground`.

#### K. BC — the icon+title+desc dashed-panel family (the de-facto BC EmptyState)
- **Canonical instance:** `components/migration/EnvironmentChecker.tsx:183-193` — `<Card className="border-dashed">`, `CardContent flex flex-col items-center justify-center py-12 text-center`, `<Package className="h-12 w-12 text-muted-foreground mb-4" />`, `<h3 className="text-lg font-medium">No Data Loaded</h3>`, `<p className="text-muted-foreground max-w-md mt-2">` + instruction.
- **Div variant:** `app/(dashboard)/hfb-analysis/page.tsx:523-528` and `:537-541` — `<div className="rounded-lg border border-dashed p-6 text-center"><p className="text-muted-foreground">No {activeTab} volume data available.</p></div>`. Same idiom at `gl-account-mapping/page.tsx:713,813,976,1891,1928` and `agvance-products/page.tsx:540,618,707,762,1502,1962,2143`.
- **Two-line variant with icon:** `gl-account-mapping/page.tsx:1891-1898` — `p-8`, `Link2 h-8 w-8 mx-auto mb-2 text-muted-foreground`, primary `<p className="text-muted-foreground">`, secondary `<p className="text-sm text-muted-foreground mt-2">`.
- **Colors:** `--border` `20 5.9% 90%` ≈ #E7E5E4, `--muted-foreground` `25 5.3% 44.7%` ≈ **#78716C** (`app/globals.css:20,25`). `rounded-lg` = 0.5rem.
- **Scale: 120 `border-dashed` occurrences and 44 "No data/No results/No … available" strings** across `app/` + `components/`. Zero share a component.
- **Compliance:** **VIOLATIONS** — `rounded-lg` 8px radius (brand law: radius 0); `border-dashed` is a stock-shadcn idiom absent from every themed repo; stone `--muted-foreground` #78716C instead of #57534E.

#### L. BC — the one-line prose empties (no panel)
- `components/bc/ConfigDiff.tsx:477` `<p className="text-muted-foreground">No data available for comparison</p>` inside a `Card`.
- `components/bc/quick-setup/CategorySection.tsx:185-187` `<p className="text-sm text-muted-foreground italic">No data or not loaded</p>` — **italic**, used nowhere else in any repo.
- `components/migration/PostingGroupComparisonTab.tsx:272-278` `<p className="text-sm text-muted-foreground py-4 text-center">` — ternary between `"✓ BC already matches the recommended defaults — no changes needed."` (**a checkmark glyph in copy**) and `"No data loaded. Select this tab to load comparison data."`
- `components/docs/DocsSearch.tsx:78` `<CommandEmpty>No results found.</CommandEmpty>` — cmdk default.
- `app/(dashboard)/exports/page.tsx:166` `<Badge variant="secondary" className="text-muted-foreground">No data</Badge>` (empty-as-badge) and `:481-483` `<div className="text-sm text-muted-foreground">{resultSummary ?? "No data available"}</div>`.

### Agreements
- Empty **copy** is a sentence in muted ink at 14–16px everywhere; nobody uses an illustration.
- Nobody uses a shadow on an empty/error panel in any of the five repos.
- Both themed web repos (SHOPIFY D/E) resolve their zero-result copy to muted-slate text plus an inline next-step link — no panel, no icon.
- Shopify and Labeler both treat "idle / not-yet-queried" as a **distinct state** from "queried, zero results" (`11-UI-SPEC.md:278`; BC `PostingGroupComparisonTab.tsx:274-277` also distinguishes loaded-and-clean from not-yet-loaded).
- KIT `alert.js` destructive and STATS `--ember-strong` agree on **#C05017** as the error border/text color; KIT `red-50 #F6ECEB` and STATS `--ember-tint #FBEDE4` are both cream-family error fills.
- "No results." is the literal string in both BC `data-table.tsx:133` and LABELER `dataTable.tsx:132` — both untouched stock shadcn.

### CHOOSE blocks

**CHOOSE empty-1: What is the canonical `EmptyState` anatomy?**
- **G (Labeler InvalidLinkState):** wheat `#E7DDC6` panel, `type-title` (Chakra bold uppercase tracked 0.1em, 24px) + `text-base` body + full-width `min-h-[44px]` Button. No icon.
- **K (BC dashed card):** `rounded-lg border-dashed` panel, 48px lucide icon, `text-lg font-medium` sentence-case h3, muted `<p>`. No action.
- **E (Shopify `.catalog-empty`):** no panel at all — 14.5px slate `<p>` + inline link.
- **Recommendation: G's anatomy, E's restraint** — ship `EmptyState({icon?, title, description, action?, tone})` with the Labeler's type ramp and wheat/cream fill, icon **optional and off by default**, and require `action` OR an inline next-step link. G is the only implementation whose title already carries the Chakra display treatment DESIGN.md mandates; E proves the panel is optional.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE empty-2: Error tone fill — which ember pair?**
- **A (KIT `alert.js:11`):** bg `red-50 #F6ECEB` cream, border + text `orange-700 #C05017`, icon `#C05017`.
- **STATS ember tokens (`globals.css:28-29`, currently unused by DbDownShell):** bg `--ember-tint #FBEDE4`, border `--ember-border #EEC4A9`, text `--ember-text #A84413`.
- **B (STATS DbDownShell as shipped):** bg `#FCECE9`, border `#E9B6AD`, text `#A21C10` — Data Red. Not an option; see Flags.
- **Recommendation: A** — kit is canon and its two-value scheme (cream fill + one ember hex for border/text/icon) is simpler than the three-hex stats set; `#F6ECEB` is already the DESIGN.md `surface-cream` token, and `#C05017` is already the shared error color per Agreements. Stats' `--ember-text #A84413` remains correct for hover-text only, per brand law.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE empty-3: Panel treatment — dashed, solid hairline, or none?**
- **border-dashed + `rounded-lg`:** BC only (K), 120 occurrences, zero themed repos.
- **solid hairline on a fill:** G (`border-border` #E7E5E4 on wheat #E7DDC6) and A (`border-hairline rgba(16,24,31,0.12)` on `#F5F1E7`).
- **no panel:** D + E (Shopify, board-approved).
- **Recommendation: solid hairline `rgba(16,24,31,0.12)` on cream `#F5F1E7`, radius 0** — matches `alert.js:10` default exactly, so EmptyState and Alert read as one family. `border-dashed` + `rounded-lg` is a brand-law violation, not a competing option (Flags). Reserve "no panel" for inline zero-result copy inside an already-bordered container (tables, grids).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE empty-4: Does the Shopify omit rule override having an EmptyState at all?**
- **Omit (F, `11-UI-SPEC.md:105,282`):** absent data → render nothing, no placeholder, no dash, no "coming soon".
- **Always show:** BC's default — 44 "No data" strings including `exports/page.tsx:166` rendering *a Badge* that says "No data".
- **Recommendation: scope the omit rule by causality** — omit when the *system* has nothing (a content section, an unpopulated field); show an EmptyState when the *user acted* and deserves an answer (search, filter, toggle). This is exactly what Shopify already ships: omit at `11-UI-SPEC.md:105`, but `.catalog-empty` and `__empty-heading` exist for search/filter. Retires the `exports/page.tsx:166` "No data" Badge and `CategorySection.tsx:185` italic line.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE empty-5: Is a retry affordance required on `tone="error"`?**
- **Required:** no shipped implementation does this. B (DbDownShell, 7 surfaces) shows a raw error string with no button; BC has retry logic (`compare/page.tsx:476`) but never surfaces a retry control in an empty panel.
- **Optional (`action?`):** G ships "Start over" (navigation, not retry); H deliberately ships no action because retry is meaningless there.
- **Recommendation: required for `tone="error"`, optional for `tone="neutral"`** — B's 7 surfaces are transient-connectivity failures where retry is the only correct user move, and its current alternative is telling a commodity trader to run `pnpm tunnel`. H is the precedent for the neutral exemption (no action when no action exists).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE empty-6: Table zero-row cell — keep the stock shadcn `h-24 text-center` "No results."?**
- **J + I (BC `data-table.tsx:133` / Labeler `dataTable.tsx:132`):** identical stock string, 96px row, no per-instance message.
- **Labeler mobile branch (`dataTable.tsx:268`):** accepts `emptyMessage` and renders `py-8 text-center text-sm text-muted-foreground`.
- **Recommendation: keep the compact table-cell form (not the full EmptyState) but plumb `emptyMessage` through both branches** — a 96px cell inside an already-bordered table shouldn't nest a second panel, and the Labeler's desktop branch silently dropping `emptyMessage` is a bug either way.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **BRAND-LAW VIOLATION — STATS `shared.tsx:610-612`:** `DbDownShell` paints a connectivity error in the Data Red family (`#E9B6AD` / `#FCECE9` / `#A21C10` / `#791B11`), violating DR-1 and the repo's own ADR 0001 — which the working tree's own uncommitted `marginTint` helper (`shared.tsx:26-35`) restates. Ember tokens sit unused at `globals.css:28-29`. Affects 7 route apps. Not a choice; fix.
- **BRAND-LAW VIOLATION — BC:** `rounded-lg` on every dashed empty panel (8px radius vs. mandated 0) — 120 `border-dashed` sites. Not a choice; retire wholesale when the kit EmptyState lands.
- **COPY VIOLATION — STATS:** dev-speak surfaced to end users. `lib/db/client.ts:172` composes "Run: `pnpm tunnel` (status: `pnpm tunnel status`)" and `shared.tsx:612` renders it in `ui-monospace`. Also `shared.tsx:443` tooltip: `localStorage harveyMe = "DM,DMCCRACKIN"`. Split operator-facing detail from user-facing copy.
- **UX GAP — STATS `MineButton` (`shared.tsx:429-447`):** toggling to zero rows yields a silent empty table across the 5 apps that import it (`Vendors/Freight/Lanes/Products` + others). Needs the neutral EmptyState with a "Show all" action.
- **LABELER — for the user's own pass (inventory-only, no edits proposed):**
  - `invalid-link-state.tsx` + `no-vetted-data-screen.tsx` are the strongest extraction candidates for the kit's EmptyState — near-identical shells differing only in `gap-4`/`gap-2` and presence of an action.
  - `src/styles/globals.css:58` `--border: 20 5.9% 90%` (#E7E5E4) is stock stone, not the kit hairline `rgba(16,24,31,0.12)` — every Labeler empty-state border inherits the stock value.
  - `src/app/_components/dataTable.tsx:36,48,268` — `emptyMessage` prop is honored only in the mobile branch; the desktop branch (`:132`) hardcodes "No results."
- **Open question:** BC `PostingGroupComparisonTab.tsx:275` uses a `✓` glyph in body copy for the "loaded and clean" state. That is a *success* state wearing empty-state clothes — it belongs to a success/confirmation pattern, not EmptyState, and no repo has one. Out of scope for this group but unowned.
- **Open question:** `.catalog-empty` (`globals.css:961`) is 14.5px while `.search-overlay__empty-body` (`:3606`) is 15.5px — both Shopify, both slate #3D4148, both zero-result body copy. Neither matches DESIGN.md body 16px. Unclear whether the 1px delta is intentional (overlay type runs one step larger throughout) or drift.

---

## Section Headers / Eyebrows / Bands / Page Headers

### Implementations

#### A. KIT — `src/components/catalogueActions.js` (repeated across 22 section files; no extracted primitive)
- Provenance: `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/catalogueActions.js:11-27`; identical idiom in `colors.js:19`, `dataVisualization.js:17`, `assets.js:14`, `illustrations.js:14`, `hero.js:19`, `agentHelp.js:84`, `icons.js:15` (+14 more).
- Anatomy: `<section className="py-20 bg-yellow-50">` (80px band, cream #F5F1E7) → centered chip `bg-yellow-100 py-1 px-2 font-bold inline-block` (#D8C7A2 wheat, ink text, 4px/8px padding, **not** uppercase, **not** font-heading, **no tracking**) → `h1.font-heading text-center text-4xl lg:text-5xl font-bold uppercase tracking-widest` (36px→48px, 0.1em) → `p.text-gray-600 text-center max-w-xl mx-auto mb-12` (#474440 lede).
- Sub-section header (per-component label, 40 occurrences): `src/components/catalogueActions.js:28-29` — `div.px-2 py-1 font-bold inline-block bg-orange-500 text-white` = ember #E56625 fill, white text, **not** uppercase/heading/tracked.
- Band rhythm: `py-20` (80px) on 43 sections; alternating `bg-yellow-50` (#F5F1E7) / `bg-white`.
- Canon spec it should express: `DESIGN.md:29-49` display 48px/700/1.2727/0.1em/uppercase Chakra Petch; headline 36px; title 24px.
- Documented glue: `.design-sync/conventions.md:50-58` — `<section className="py-20 container mx-auto px-4">` + `h2.font-heading text-4xl font-bold uppercase tracking-widest mb-6 text-center` + `p.text-gray-600 text-center max-w-xl mx-auto mb-8`. **Conventions' documented glue has no eyebrow chip at all.**
- Compliance: flat/square/no-shadow OK. **Violations:** (1) 40 ember-fill chips per catalogue = ember as routine fill, not rationed accent; (2) chips are not the seed-tag signature (missing `font-heading text-xs uppercase tracking-widest`); (3) gap — no `SectionHeader`/`Band` primitive exists, so the pattern is copy-pasted 22×.

#### B. LABELER — `src/app/_components/section-header.tsx` (INVENTORY-ONLY)
- Provenance: `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/app/_components/section-header.tsx:16-108`; type roles `src/styles/globals.css:120-157`; colors `tailwind.config.ts:85-102`.
- Chip: `type-eyebrow inline-block px-2 py-1` = 8×4px padding, `font-heading font-bold uppercase tracking-widest` (0.1em), `text-sm` 14px, line-height 1.25 (globals.css:147-150). Default fill `bg-brand-wheat-harvest` #D8C7A2 + `text-brand-ink` #10181F. `emphasis` fill `bg-brand-ember` #E56625 + white text — max one per screen (ADR 0002/0004).
- Headline: `mt-5 max-w-3xl break-words`; `level="h1"` → `.type-display` `text-3xl sm:text-4xl lg:text-5xl` = 30/36/48px (globals.css:133-134); `level="h2"` → `.type-headline` `text-2xl sm:text-3xl lg:text-4xl` = 24/30/36px (:137-138). Both `font-heading font-bold uppercase tracking-widest`, line-height 1.2727 (:124-125).
- Lede: `.type-subhead mt-5 max-w-xl text-brand-stone` = TT Commons 20px/500/lh1.75, #57534E (:154-157).
- Band: `w-full py-20` (80px), tone white `bg-background` / wheat `bg-brand-wheat-pale` #F5F1E7; inner `container flex flex-col items-center` (:88-108).
- Usage: 3 customer routes only — `src/app/page.tsx:19-29` (the one `emphasis` chip site-wide), `src/app/quiz/page.tsx:27-37`, `src/app/fertilizer/page.tsx:21-29`; 4 more `<Band tone="wheat" className="flex-1 pt-12">` work bands. Admin routes excluded by ADR 0005.
- Compliance: compliant. Responsive step-down is documented as a real overflow fix (globals.css:128-132: "RECOMMENDATIONS" at text-4xl = ~389px > 390px viewport).

#### C. SHOPIFY — `app/globals.css` eyebrow/display/section-title (board-approved, shipped)
- `.eyebrow` `app/globals.css:71-78`: **bare text, no chip, no fill, no padding** — Chakra Petch 700, uppercase, 12.5px, letter-spacing 0.14em, `color: var(--color-ember)` = **#C05017** (`:root` :66).
- `.heading-display` `:80-88`: Chakra 700 uppercase, **34px**, tracking **0.06em**, line-height 1.15.
- `.section-title` `:654-661`: Chakra 700 uppercase, **19px**, tracking 0.08em, margin 0 0 14px.
- `.home-hero__title` `app/globals.css:2244-2252`: **46px**, 0.06em, lh 1.1 — larger than `.heading-display`.
- `.home-section__title` `:2356-2363`: 24px, tracking **0.1em** — a third headline tier.
- Bands: `.home-section` `:2341-2348` `padding: 56px 48px 0`, last-of-type `padding-bottom:56px`; `.quiz-hero` `:242-246` and `.plot-mapper-hero` `:2975-2979` `padding: 44px 48px 40px`, `background: var(--color-cream)` #F5F1E7, text-align center; `.about-values :2135` 56px/48px.
- Usage: `.eyebrow` 4 sites — `app/page.tsx:9` (hero, left-aligned), `app/plot-finder/page.tsx:19`, `app/plot-mapper/page.tsx:17`, plus `.product-info__eyebrow` variant (`globals.css:1034`). `.section-title` 13 sites. `.heading-display` 2 sites.
- Compliance: flat/square/no-shadow/no-gradient OK. Ember is text-only and rare (4 instances) — within rationing. Tracking is 0.14em (eyebrow) / 0.06em (display) / 0.08em (section) / 0.1em (home-section) — **four different tracking values, none is canon's 0.1em display value.**

#### D. STATS — `.eyebrow` recipe (defined, zero consumers) + `AppHeader`
- `.eyebrow` `app/globals.css:72`: `display:inline-block; padding:4px 8px; background:var(--wheat-strong)` #D8C7A2 (`:10`); `color:var(--ink)` #10181F (`:13`); Chakra 700 uppercase, **12px**, `letter-spacing:var(--track-display)` = **0.08em** (`:55`). **Dead code — grep finds zero `.eyebrow` consumers in any `.tsx`.**
- `AppHeader` `components/directory/shared.tsx:459-484`: sticky top-0 z-30, `background: rgba(255,255,255,.85)` + `backdropFilter: blur(8px)`, `borderBottom: 1px solid var(--line)`, padding `11px 26px`, flex space-between gap 9. Title `h1` fontSize **15px**/700/Chakra/uppercase/0.08em/lh 20px. Sub 11.5px/lh14/`var(--text-3)` #7F7973, `minHeight:28`, 2-line clamp.
- **UNCOMMITTED:** `APP_HEADER_H` changed **59 → 73** and the sub gained the reserved 2-line clamp (`git diff components/directory/shared.tsx`, lines 49-57 of diff). The 73px figure and the clamp are working-tree only.
- **UNCOMMITTED:** `components/DashboardApp.tsx:62-64` now uses `<AppHeader title="Product Performance" sub={headerSub || "Per-ton pricing & margin"}>` — the hardcoded-string H1 flagged in the critique; the string is baked into the component, not derived from route metadata.
- Divergent page header: `components/CustomersApp.tsx:637` — bespoke inline `h1` fontSize **17px** (not 15px), no sticky chrome, sits in `main` with `padding: '26px 30px 60px'`, sub 13px `var(--text-3)`. A second, non-`AppHeader` page-header idiom.
- Compliance: square/no-shadow OK; `backdropFilter: blur(8px)` + translucent white is the only non-flat treatment. No eyebrow chip anywhere in shipped UI.

#### E. BC — `components/docs/DocsPageTemplate.tsx` (untheged stock shadcn)
- Provenance: `/private/tmp/.../bc-harveymilling-com/components/docs/DocsPageTemplate.tsx:47-76`. Used by **101 files**.
- Anatomy: `<div className="space-y-6">` → Breadcrumb trail (auto-derived from path segments, `:40-52`) → `h1.text-3xl font-bold flex items-center gap-2` (30px, **sentence case, Geist/system sans, no tracking**) with a `<Icon className="h-8 w-8"/>` glyph inline → `p.text-muted-foreground` (hsl(25 5.3% 44.7%) = ~#797470, `app/globals.css:20`). **No eyebrow, no band, no uppercase, no Chakra.**
- Sidebar section headers (eyebrow-adjacent, the closest BC gets): `text-xs font-semibold text-muted-foreground uppercase tracking-wider` (0.05em) — collapsible-trigger form at `:108` and `:167` (adds `w-full group flex items-center px-3 py-1.5 … hover:text-foreground`), static `h3.px-3` form at `:289` and `:392`. **font-semibold (600), not bold (700); tracking-wider (0.05em), not widest (0.1em).**
- Welcome page: `app/(welcome)/GetStarted/GetStarted.tsx:25` `h1.text-6xl font-extrabold leading-none tracking-tight` (60px, weight 800, **negative-ish tracking**) with a `text-4xl font-semibold text-muted-foreground` sub-span at `:27`; `h2.text-3xl md:text-4xl` at `:72`.
- Compliance: untheged baseline — sentence-case/system-sans/tracking-tight/extrabold all diverge from canon; icon-in-h1 has no analogue anywhere else. Not a violation to "fix" so much as the un-themed floor.

### Agreements
- Eyebrow face/weight/case: Chakra Petch 700 uppercase in KIT-canon (DESIGN.md:29-49), LABELER (:147), SHOPIFY (:71-78), STATS (:72). Only BC uses system sans.
- Display headline face/weight/case: Chakra 700 uppercase everywhere themed (KIT `catalogueActions.js:18`, LABELER `:133`, SHOPIFY `:80-88`).
- Band fills: white ↔ cream #F5F1E7 alternation is universal — KIT `bg-yellow-50` (`catalogueActions.js:11`), LABELER `bg-brand-wheat-pale` (`section-header.tsx:103`), SHOPIFY `var(--color-cream)` (`globals.css:243`).
- Centered eyebrow-over-headline-over-lede stack: KIT and LABELER agree exactly (chip, mt-5 headline, mt-5 max-w-xl lede).
- Lede color: #57534E LABELER (`type-subhead text-brand-stone`) vs #474440 KIT (`text-gray-600`) — both warm-gray secondary, no repo uses pure gray.
- Squareness/no-shadow/no-gradient across all five header treatments; only STATS' `backdropFilter: blur(8px)` deviates.
- Sub-24px section labels are uppercase + tracked in KIT, SHOPIFY (`.section-title` 19px), STATS (`.seed-tag :65`), BC sidebar.

### CHOOSE blocks

**CHOOSE HDR-1: Eyebrow treatment — wheat chip with ink text, or bare ember text?**
- **B (LABELER):** filled chip, 8×4px, #D8C7A2 wheat / #10181F ink, 14px, 0.1em; ember-fill+white only via explicit `emphasis`, max one per screen.
- **C (SHOPIFY, shipped/board-approved):** no chip at all — bare text, 12.5px, 0.14em, #C05017 ember, 4 sites.
- **D (STATS):** chip identical in structure to B but 12px / 0.08em — and it has zero consumers, so it is unenforced.
- **A (KIT):** chip present but unstyled as an eyebrow (no uppercase, no heading face, no tracking) — not a real competitor, it's an under-implementation of B.
- Recommendation: **B**, with the chip geometry and colors from LABELER and the size normalized in HDR-2. LABELER is the only implementation that both matches DESIGN.md's display-type spec and keeps ember rationed by construction; SHOPIFY's bare ember text makes ember the *default* eyebrow color at 4 sites, which reads as routine accent rather than rationed. Migrating SHOPIFY's 4 `.eyebrow` sites to the chip is a small, contained change.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-2: Eyebrow type size and tracking**
- 14px / 0.1em / lh1.25 — LABELER `globals.css:147-150` (`text-sm` + `tracking-widest`)
- 12.5px / 0.14em — SHOPIFY `globals.css:71-78`
- 12px / 0.08em — STATS `globals.css:72`
- 12px / 0.1em — seed-tag signature per brand law (`text-xs tracking-widest`), which the KIT documents at `.design-sync/conventions.md:15`
- Recommendation: **12px / 0.1em** — the seed-tag signature is already brand law and already the KIT's documented recipe; adopting it for the eyebrow makes chip and seed-tag one recipe instead of four near-misses, and 12px sits closer to all three shipped values than LABELER's 14px does.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-3: Display headline scale for marketing/customer surfaces**
- **B (LABELER):** responsive 30 / 36 / 48px (`type-display`, globals.css:133-134), tracking 0.1em — hits DESIGN.md's 48px display at `lg`, steps down for a documented 390px overflow.
- **C (SHOPIFY):** fixed 34px, tracking 0.06em (`:80-88`) — plus an inconsistent 46px hero (`:2244-2251`) and a 24px `home-section__title` at 0.1em (`:2356-2363`).
- **A (KIT):** `text-4xl lg:text-5xl` = 36 / 48px, tracking 0.1em — matches canon at both steps but has no small-screen step-down.
- Recommendation: **B** — it is the only scale that reaches canon's 48px display *and* has a tested small-viewport fallback; SHOPIFY's 34px/0.06em is a third set of numbers that also contradicts its own 46px hero.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-4: Section-title (the sub-display tier) size and its "never enlarged" rule**
- **C (SHOPIFY):** 19px / 0.08em, 13 sites, margin-bottom 14px (`:654-661`).
- **B (LABELER):** `.type-title` 24px fixed / 0.1em (`globals.css:141-143`).
- Canon (`DESIGN.md:44-49`): title = 24px / 0.1em.
- Recommendation: **24px / 0.1em (canon + LABELER)** for a *title* tier, keeping SHOPIFY's 19px as a distinct denser "subsection label" only if the density is load-bearing on the product page — otherwise fold it in. Canon already names 24px; 19px has no spec entry I could find.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-5: Band vertical rhythm**
- **A/B (KIT + LABELER):** `py-20` = 80px symmetric; KIT applies it on 43 sections, LABELER on all customer bands.
- **C (SHOPIFY):** 56px vertical / 48px horizontal (`.home-section :2341`, `.about-values :2135`), heroes 44px top / 40px bottom (`:243`, `:2977`).
- Recommendation: **80px (A/B) for marketing/customer bands, keeping a documented 56px "dense band" variant** — two repos already agree on 80px and it is the spec value LABELER cites; SHOPIFY's 56px is real shipped density that deserves a named token rather than silent divergence.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-6: Page-header anatomy for app-chrome surfaces (STATS, BC)**
- **D (STATS `AppHeader`):** sticky, 73px, 15px Chakra uppercase 0.08em title + 11.5px 2-line-clamped sub, right-side controls slot. No eyebrow, no breadcrumb.
- **E (BC `DocsPageTemplate`):** non-sticky, breadcrumb trail + 30px sentence-case bold h1 with inline icon + muted description. 101 consumers.
- Recommendation: **D's chrome + E's breadcrumb** — STATS' sticky compact bar is the right density for dense app screens and already carries the brand face; BC's auto-derived breadcrumb (`DocsPageTemplate.tsx:40-52`) is the one genuinely useful piece STATS lacks. Explicitly exclude eyebrow chips and bands from app chrome (LABELER ADR 0005 already draws this line).
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE HDR-7: Should the KIT ship extracted `SectionHeader` + `Band` primitives?**
- Today: KIT has neither; the pattern is hand-copied across 22 section files with drifting chip styling.
- LABELER's `section-header.tsx` is 108 lines, dependency-free (only `cn`), and already props-shaped (`eyebrow/title/lede/emphasis/level`).
- Recommendation: **Yes — port LABELER's `SectionHeader` + `Band` into `src/components/ui/` verbatim**, adjusting only per HDR-1/2/3 outcomes. It is the only extracted primitive in the group and it encodes the ember-rationing rule structurally.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **BRAND-LAW VIOLATION (KIT):** 40 `bg-orange-500 text-white` label chips across the catalogue sections (`src/components/catalogueActions.js:28`, `catalogueData.js`, `catalogueForms.js`, +7 files) make ember #E56625 a routine fill. Not a choice — must become wheat/seed-tag chips with at most one ember emphasis per page.
- **BRAND-LAW VIOLATION (KIT):** the chips at `catalogueActions.js:14` etc. are `font-bold inline-block` only — missing `font-heading text-xs uppercase tracking-widest`, so they are not the seed-tag signature the KIT itself documents at `.design-sync/conventions.md:15`.
- **DOC DRIFT (KIT):** `.design-sync/conventions.md:50-58` idiomatic page glue shows a headline + lede with **no eyebrow chip**, while every shipped section has one. Conventions should be updated to whatever HDR-1/HDR-7 decides.
- **DEAD CODE (STATS):** `.eyebrow` (`app/globals.css:72`) has zero consumers. Either wire it into `AppHeader`/section openers or drop it — right now it is a fourth competing eyebrow spec that nothing enforces.
- **UNCOMMITTED (STATS):** `APP_HEADER_H` 59→73 and the 2-line sub clamp in `components/directory/shared.tsx`, and the `AppHeader` adoption in `components/DashboardApp.tsx:62-64`, are working-tree only. Any decision quoting 73px depends on those landing.
- **INCONSISTENCY (STATS):** `components/CustomersApp.tsx:637` is a bespoke 17px non-sticky `h1` bypassing `AppHeader` — one page out of ~14 with its own header idiom.
- **HARDCODED TITLE (STATS):** `"Product Performance"` is a literal in `DashboardApp.tsx:63`; the same string appears in `docs/DATA-REQUIREMENTS.md:56` as spec copy. If titles should come from route metadata, this is the one place it doesn't.
- **LABELER-ONLY (for the user's own pass):** `.type-eyebrow` is `text-sm` (14px) where the seed-tag signature is `text-xs` (12px) — `src/styles/globals.css:147`. If HDR-2 lands on 12px, LABELER needs the same edit. Also `tailwind.config.ts:106-109` documents that stock scales are remapped so `text-yellow-800` = wheat #D8C7A2 — worth confirming no header code relies on stock-scale intuition.
- **OPEN QUESTION:** SHOPIFY's "single visual anchor per page" and "60/30/10 allocation" rules are cited in the brief but I found no codified source — only `.planning/phases/08-.../08-UI-SPEC.md:145` ("Declaring the primary visual anchor per new section"). The "`.section-title` is never enlarged" rule has no grep hit in the repo. If those rules are to bind the shared primitive, they need a home in DESIGN.md.
- **OPEN QUESTION:** SHOPIFY has four headline tiers (46px hero / 34px display / 24px home-section / 19px section-title) with three tracking values. Whether 46px hero is intentional or drift from `.heading-display` I could not settle from the code alone.

---

## Navigation & Chrome

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/tabs.js`
- Provenance: tabs.js:11 (List), :23 (Trigger), :35 (Content).
- Geometry: List `inline-flex items-center justify-center gap-1 p-1` (4px), no fixed height. Trigger `px-4 py-2` (16/8), `text-sm font-bold`, sentence case, no tracking. Content `mt-4`.
- Colors per state: List fill `bg-yellow-50` #F5F1E7 cream, idle text `text-gray-500` #57534E; **active = white fill #FFFFFF + `text-green-500` #296533** (tabs.js:23); hover = none defined; focus `ring-2 ring-green-500 #296533 ring-offset-2`; disabled `opacity-50` + pointer-events-none.
- Variants: none. Used in `src/components/catalogueLayout.js:126-140` (1 demo, 3 triggers).
- Compliance: compliant (radius 0 inherited, no shadow, cream+green only).

#### B. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/breadcrumb.js`
- Provenance: breadcrumb.js:15 (List), :39 (Link), :55 (Page), :65 (Separator).
- Geometry: `flex flex-wrap gap-1.5 sm:gap-2.5 text-sm`; separator ChevronRight `h-3.5 w-3.5`; ellipsis `h-9 w-9`.
- Colors: list `text-gray-500` #57534E; link `text-green-500` #296533 → hover `text-green-600` #2B3C1D **+ underline** (breadcrumb.js:39); current page `font-bold text-black` #10181F; separator `text-gray-400` #E2E1DD.
- Used: `src/components/catalogueNavigation.js:87` (1 demo).
- Compliance: compliant. Note separator at #E2E1DD is very low-contrast on white.

#### C. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/sidebar.js`
- Provenance: sidebar.js:19-21 widths, :140/:202 rail fill, :194 border, :362 group label, :423 menu button, :428-433 variants, :566/:590 submenu.
- Geometry: `SIDEBAR_WIDTH 16rem` (256px), `SIDEBAR_WIDTH_MOBILE 18rem`, `SIDEBAR_WIDTH_ICON 3rem` (48px). MenuButton `p-2 text-sm gap-2`, sizes default `h-8` / sm `h-7 text-xs` / lg `h-12`. GroupLabel `h-8 px-2`. Rail transition `duration-200 ease-linear`.
- Colors per state: rail `bg-yellow-50` #F5F1E7 with `text-black` #10181F, border-r `border-gray-200` ≈#E2E2DD (sidebar.js:194); item hover `bg-yellow-100` #D8C7A2 + `text-green-500` #296533; active `bg-white + font-bold + text-green-500` (**white fill inside cream rail**, sidebar.js:423); focus `ring-2 ring-green-500`; disabled `opacity-50`. Inset content `bg-white`. MenuBadge `text-green-500` seed-tag type. SubButton `text-gray-600` #474440, same hover/active.
- Group label = seed-tag signature: `font-heading text-xs font-bold uppercase tracking-widest text-gray-500` (sidebar.js:362).
- Variants: `default | outline` (`bg-white border border-gray-200`); collapsible `offcanvas | icon | none`.
- Used: `src/components/catalogueNavigation.js:211-267` (1 framed demo, `collapsible="none"`).
- Compliance: compliant.

#### D. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/header.js` (guidelines-site top bar)
- Geometry: `py-5` (20px) inside `container mx-auto px-4`; centered absolute link list, `text-sm`, items `mr-9` (36px gap); hamburger below `lg`.
- Colors: **section fill `bg-gradient-to-b from-white to-yellow-50`** (header.js:8); link idle inherits body #10181F, hover `text-gray-700`; hamburger icon hard-coded `fill="#006251"` (header.js:72) — a teal that is in no palette; mobile drawer white panel over `bg-gray-800 opacity-80` scrim (header.js:85), links stacked `mb-6`.
- Active-nav treatment: **none** (anchor-scroll nav, no is-active state).
- Compliance: **VIOLATIONS** — gradient fill (header.js:8) and off-palette #006251 (header.js:72). Spec text at DESIGN.md:229-231 says hover shifts to warm gray #44403C; the code uses `text-gray-700` instead.

#### E. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/Sidebar.tsx` + `app/globals.css:112-129`
- Geometry: `.sbar{width:248px}` open → `html[data-sbc="1"] .sbar{width:58px}` icon rail (globals.css:119-120). Head `padding:18px 16px` (Sidebar.tsx:133); body `padding:14px 12px`; item `padding:8px 10px, gap:10, fontSize:14, borderRadius:0` (Sidebar.tsx:124); product rows `6px 10px, fontSize:13.5`; footer `borderTop 1px var(--line-soft) #EDEAE4, padding:10px 12px`. Icons 16px.
- Colors per state: rail fill `var(--wheat-pale)` #F5F1E7, border-right `var(--line)` #E1DDD8 (Sidebar.tsx:132); idle text `var(--text-strong)` #474440 weight 400; **hover `.hbtn:hover{background:var(--wheat-veil)}` #F9F7F1** (globals.css:80); **active = `background:var(--line-soft)` #EDEAE4 + `color:var(--ink)` #10181F + weight 600** (Sidebar.tsx:126-128) — a grey-tint fill, no green anywhere; focus: none on the divs; disabled: n/a.
- Section labels: 11px, 700, uppercase, `var(--track-display)`, `--font-display-stack`, `color:var(--text-faint)` #A9A49C (Sidebar.tsx:74-77) — seed-tag family but #A9A49C, not #57534E.
- Collapsed rail: labels become a `border-top:1px solid var(--line)` divider (globals.css:125); items center, gap 0. State on `<html data-sbc>` + localStorage, restored pre-paint (Sidebar.tsx:107-117).
- Variants: role-gated sections Overview/Directory/Data/Managers(manager+)/Admin(admin) = 28 items + product quick-links + Sign out.
- Compliance: radius 0, no shadow, no gradient — compliant visually. **A11y: every nav item is an onClick `<div>`** (Sidebar.tsx:150, 159, 167) — not keyboard reachable, no `aria-current`.
- Uncommitted: globals.css:115-119 comment + removal of `transition:width .15s` is an uncommitted edit (`git diff app/globals.css`); rail width values themselves are committed.

#### F. STATS — `AppHeader`, `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/components/directory/shared.tsx:451-484`
- Geometry: `position:sticky; top:0; z-index:30; padding:11px 26px` with a two-line-reserved sub → **deterministic 73px** (`APP_HEADER_H = 73`, shared.tsx:458). (Prompt's "59px" is stale; 73 is the exported constant.) Title 15px/700 display stack, uppercase, `var(--track-display)`, line-height 20px; sub 11.5px/14px, `min-height 28`, 2-line clamp.
- Colors: `background: rgba(255,255,255,.85)` + `backdropFilter: blur(8px)`; `borderBottom: 1px solid var(--line)` #E1DDD8; sub `var(--text-3)` #7F7973.
- Used: every route page (via `PageShell`, shared.tsx:609) — ~20 apps.
- Compliance: no shadow/gradient/radius. **Translucency + backdrop-blur is a depth effect not in the "cream fills + hairline borders" vocabulary** — flag, not a violation per se.
- Uncommitted: `components/directory/shared.tsx` has uncommitted edits (35 lines); the header block itself is unchanged in the diff.

#### G. LABELER (inventory-only) — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/app/_components/navbar-content.tsx`
- Geometry: `container flex items-center justify-between gap-6 py-3` (12px) with a 36px monogram → ~60px bar; link list `hidden lg:flex gap-10` (40px), centered via flex-1 · auto · flex-1 (navbar-content.tsx:60-84).
- Colors: `border-b border-border bg-background` = hairline #E7E5E4 on #FFFFFF (globals.css:58, :20). Links `text-sm font-normal text-brand-ink` #10181F → **hover `text-brand-stone-warm` #44403C** (navbar-content.tsx:38, tailwind.config.ts brand.stone-warm).
- Active-nav treatment: **none — no `usePathname`, no is-active, no `aria-current`.**
- Auth slot: `Button variant="secondary"` (wheat) desktop + drawer.
- Mobile: `nav-drawer.tsx:56` — white left drawer `w-72 max-w-[85vw] border-r border-border p-6`, scrim `bg-black/80`, links `gap-6` (1.5rem) `text-base` ink → #44403C hover, "Menu" chip = `type-eyebrow bg-brand-wheat-harvest #D8C7A2 text-brand-ink`.
- Compliance: compliant (radius 0 via `--radius: 0rem`, globals.css:72; flat white, hairline).

#### H. LABELER (inventory-only) — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/components/ui/tabs.tsx`
- Geometry: List `h-10 p-1`; Trigger `px-3 py-1.5 text-sm font-bold`; Content `mt-2`.
- Colors: List `bg-muted` = #F5F1E7 (globals.css:40), idle `text-muted-foreground` #57534E; **active `bg-background` #FFFFFF + `text-foreground` #10181F** (tabs.tsx:32) — white fill, ink text, **no green**; focus `ring-ring` #296533.
- Used: `src/app/_components/tabs.tsx:36-38` only (Stock/Blend | Custom Mix), 1 surface.
- Compliance: flat/square/no shadow — compliant. **There is no field-green underline tab anywhere in the repo** (only DESIGN.md:145 in the KIT names "tab underlines" as a Field Green use); labeler's active tab is the white-fill idiom minus the green text.

#### I. SHOPIFY (board-approved) — `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/site-header.tsx` + `app/globals.css:121-177`
- Geometry: `.site-header{display:flex; gap:18px 36px; padding:18px 48px; border-bottom:1px solid var(--border-soft) rgba(16,24,31,0.1)}` (globals.css:121-127) → ~70px. Logo img 34px. `.site-header__nav{gap:26px; font-size:14px; font-weight:600}` (:136-142). `.site-header__actions{margin-left:auto; gap:18px; font-size:13.5px; font-weight:600}` (:158-165).
- Colors per state: nav idle `var(--color-ink)` #10181F; hover `var(--color-forest)` #296533; **active `.is-active{color:#296533; border-bottom:2px solid #296533; padding-bottom:2px}` (globals.css:152-156) — the 2px forest underline**, driven by `pathname === item.href` + `aria-current="page"` (site-header.tsx:68-75). Cart pill `background:#296533; color:#fff; padding:8px 14px` → hover `#1A4121` (:167-177).
- ⌘K hint: `.search-trigger__hint` (globals.css:3519) `font-heading 700 uppercase letter-spacing .14em 12.5px var(--color-gray) #5A5F66`, hidden <760px (:237). Cmd/Ctrl-K global binding (site-header.tsx:47-58), modifier-click falls through to `/catalog`.
- Responsive: header/footer side padding → 20px at ≤760px (globals.css:229-234). No hamburger — nav wraps.
- Compliance: compliant.

#### J. SHOPIFY — `SiteFooter`, `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/site-footer.tsx` + `app/globals.css:179-207`
- Geometry: `display:flex; gap:12px 24px; padding:26px 48px; font-size:13px`; monogram 34px; links `margin-left:auto; gap:18px`.
- Colors: **dark band `background:var(--color-pine)` #1A4121, text `var(--color-tan)` #E7DDC6** (globals.css:179-188); links #E7DDC6 → hover `#fff`.
- Compliance: compliant. Only footer implementation in the five repos.

#### K. SHOPIFY — `AnnouncementBar`, `announcement-bar.tsx` + `app/globals.css:110-119`
- Geometry: `padding:8px 16px; text-align:center; font-size:12.5px; font-weight:600; letter-spacing:.03em`.
- Colors: `background:var(--color-forest)` #296533, `color:var(--color-cream)` #F5F1E7.
- Compliance: compliant.

#### L. SHOPIFY — `.breadcrumb`, `app/globals.css:686-690`
- Geometry/colors: `padding:20px 48px 0; font-size:13px; color:var(--color-gray)` #5A5F66; links inherit the global `a{color:#296533}` → hover `#1A4121` (globals.css:29-35); no separator styling (literal `·`/`/` in markup), no bold current page.
- Used: `app/products/[handle]/page.tsx:98`, `app/cover-crops/compare/page.tsx:52`, `app/food-plots/troubleshooting/page.tsx:22` (3 surfaces).

#### M. BC (untheming baseline) — `components/Sidebar.tsx` (440 L) + `app/(dashboard)/layout.tsx:56-75`
- Geometry: fixed `md:w-72` (288px) column, **no collapse** (layout.tsx:58); items `px-3 py-2 text-sm font-medium rounded-md`, icons `h-5 w-5 mr-3`; docs/migration subsections `ml-4 space-y-0.5`, `px-3 py-1.5 text-sm`; section headings `px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground`; footer `border-t p-4`.
- Colors per state: rail `bg-card` #FFFFFF, `border-r` #E5E5E1 (hsl 20 5.9% 90%); idle `text-muted-foreground` hsl(25 5.3% 44.7%) ≈#78716C; hover `bg-accent` hsl(60 4.8% 95.9%) ≈#F5F5F4 + `text-accent-foreground` ≈#1C1917; **NO active state at all — `pathname` is computed and passed down but never used to style the current item** (Sidebar.tsx NavItemComponent, ~line 205-220); only used to auto-expand Collapsible sections.
- Compliance: **stock stone/New York — untheme baseline. `rounded-md` on every item (radius violation), no brand color, no active state.** Collapsible sections (docs, migration) are a structural capability neither kit nor stats has.
- Top bar: `app/(dashboard)/layout.tsx:65-79` — two bars, mobile `flex md:hidden items-center justify-between p-4 border-b bg-background` and desktop `hidden md:flex justify-end p-4 border-b` (ThemeToggle + UserMenu only, no title). Welcome layout has a different one: `app/(welcome)/layout.tsx:12` `sticky top-0 z-10 flex h-20 border-b bg-background/80 px-4 backdrop-blur md:px-6` (80px, translucent-blur).
- Mobile: `MobileNav.tsx:37-41` — `Sheet side="left" w-72 p-0` wrapping the same Sidebar; the only Sheet consumer in BC.

#### N. BC — `components/ui/tabs.tsx`
- Geometry: List `h-9 rounded-lg p-1`; Trigger `rounded-md px-3 py-1 text-sm font-medium`; Content `mt-2`.
- Colors: List `bg-muted` ≈#F5F5F4, idle ≈#78716C; active `bg-background #FFFFFF + text-foreground + data-[state=active]:shadow` (tabs.tsx:33).
- Used: 10 surfaces (checklists, quick-setup, compare, gl-accounts, SetupDashboard, TrialBalanceTable, PostingGroupComparisonTab, BalanceComparisonTable, TransactionTable, AccountMappingTable).
- Compliance: **violations — `rounded-lg`/`rounded-md` and `data-[state=active]:shadow`.**

#### O. BC — `components/ui/breadcrumb.tsx` (new-gen shadcn, function components not forwardRef)
- Colors: link `hover:text-foreground` (breadcrumb.tsx:46) — no green; current page `text-foreground font-normal` (:59) — **not bold**; separator `[&>svg]:size-3.5`; ellipsis `size-9`.
- Used: `components/docs/DocsPageTemplate.tsx` only (1 surface).

### Agreements
- Tab **structure** is identical everywhere: Radix `Tabs` with cream/muted List strip, `p-1`, white-fill active trigger, no underline variant anywhere (A, H, N).
- Tab active idiom is white fill on a tinted strip in all three repos that have tabs — only the active *text color* and radius/shadow diverge.
- Sidebar section labels are the seed-tag signature (display font, ~11-12px, 700, uppercase, wide tracking, muted) in A (sidebar.js:362), E (Sidebar.tsx:74-77) and M (uppercase tracking-wider, unthemed) — the treatment already agrees, only the muted-ink hex differs.
- Sidebar rail fill is Pale Wheat #F5F1E7 with a hairline right edge in both KIT (sidebar.js:140) and… KIT only for fill; STATS matches exactly (`--wheat-pale` #F5F1E7 + `--line` #E1DDD8, Sidebar.tsx:132). Both are radius 0 and shadow-free.
- Top bars are universally: flat fill + `1px` hairline bottom border, no shadow (G navbar-content.tsx:59, I globals.css:127, F shared.tsx:472, M layout.tsx:67).
- Mobile nav is a left drawer over a dark scrim in both repos that have one: labeler `bg-black/80 w-72 max-w-[85vw]` (nav-drawer.tsx:52-56) and BC `Sheet side="left" w-72` (MobileNav.tsx:39).
- Both header-link hover and both sidebar hover moves are *toward* a color, never a fill change with radius.
- Nav link size agrees at 14px (`text-sm` / `font-size:14px`) in D, G, I.

### CHOOSE blocks

**CHOOSE NAV-1: What is the canonical active-nav-item treatment for horizontal top-bar navs?**
- Option I (SHOPIFY, board-approved): `color:#296533` + `border-bottom:2px solid #296533; padding-bottom:2px`, plus `aria-current="page"` (globals.css:152-156).
- Option G (LABELER): no active treatment at all — links are ink→#44403C hover only (navbar-content.tsx:38).
- Option D (KIT header): no active treatment; anchor-scroll nav, hover `text-gray-700` (header.js:29).
- Recommendation: **I** — it is the shipped, board-approved treatment, matches DESIGN.md:145 which names Field Green explicitly for "tab underlines," and is the only one carrying `aria-current`. Adopt the 2px forest underline + forest text as the horizontal-nav active rule and add it to the kit header.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-2: What is the canonical active-nav-item treatment for vertical sidebar rails?**
- Option C (KIT): white fill #FFFFFF on the cream rail + `font-bold` + `text-green-500` #296533 (sidebar.js:423).
- Option E (STATS): `--line-soft` #EDEAE4 grey-tint fill + `--ink` #10181F text + weight 600, no green (Sidebar.tsx:126-128).
- Option M (BC): none.
- Recommendation: **C** — white-on-cream inverts the depth relationship correctly (the active row lifts out of the rail without a shadow), and it carries brand green so the sidebar's active state reads the same *language* as the header underline. STATS' #EDEAE4 vs #F5F1E7 is a 4-value difference that is nearly invisible in practice.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-3: Sidebar hover fill — wheat-veil or wheat-strong?**
- Option C (KIT): `hover:bg-yellow-100` #D8C7A2 + `hover:text-green-500` (sidebar.js:423) — a strong wheat.
- Option E (STATS): `.hbtn:hover{background:var(--wheat-veil)}` #F9F7F1 (globals.css:80) — a whisper, no color shift.
- Recommendation: **E's weight, C's color shift** — #D8C7A2 hover is louder than the white active state, which inverts the hierarchy; use a light tint (#F9F7F1 or #ECE5D3-at-low-weight) plus the green text shift. Concretely: hover = cream veil + `text-green-500`.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-4: Sidebar rail width and collapse behavior for internal apps (stats vs bc).**
- Option E (STATS): 248px open / 58px icon rail, `html[data-sbc]` + localStorage, pre-paint restore, no width transition (globals.css:119-120, Sidebar.tsx:107-117).
- Option C (KIT): 256px / 48px icon / 288px mobile, `duration-200 ease-linear` transition, `SidebarProvider` (sidebar.js:19-21, :178).
- Option M (BC): 288px fixed, no collapse (layout.tsx:58).
- Recommendation: **E's numbers, C's API** — 248/58 are the values already in a shipped internal app and the no-transition rationale (relayout jank on the content column) is documented and correct; but the kit's `SidebarProvider` is the reusable shape. Reconcile by setting KIT `SIDEBAR_WIDTH = 15.5rem` / `SIDEBAR_WIDTH_ICON = 3.625rem` and dropping the width transition.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-5: Active tab text color — green or ink?**
- Option A (KIT): white fill + `text-green-500` #296533, trigger `px-4 py-2 font-bold` (tabs.js:23).
- Option H (LABELER): white fill + `text-foreground` #10181F, trigger `px-3 py-1.5 font-bold`, List `h-10` (tabs.tsx:32).
- Option N (BC): white fill + ink + `rounded-md` + `shadow` (violation).
- Recommendation: **A** — green active text ties tabs to NAV-1's green underline and to the link/interactive color; `px-4 py-2` also gives a 36px trigger that matches the 40px `h-10` strip better than `py-1.5`. Adopt A's colors; keep H's explicit `h-10` on the List.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-6: Top-bar recipe — opaque or translucent-blur?**
- Option I (SHOPIFY): opaque `#FFFFFF` + `1px solid rgba(16,24,31,0.1)`, `padding:18px 48px` (globals.css:121-127).
- Option G (LABELER): opaque `#FFFFFF` + `1px #E7E5E4`, `py-3` container-padded (navbar-content.tsx:59).
- Option F (STATS): `rgba(255,255,255,.85)` + `backdrop-filter:blur(8px)` + `1px var(--line)` #E1DDD8, sticky, 73px (shared.tsx:472).
- Recommendation: **Opaque (I/G)**, with the hairline standardized to `rgba(16,24,31,0.12)`. Translucency + blur is an elevation effect, and "depth = cream fills + hairline borders" reads it as out of vocabulary; STATS can stay sticky-opaque with no visual loss.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-7: Which hairline value do chrome borders use?**
- Option: `rgba(16,24,31,0.10)` — SHOPIFY `--border-soft` (globals.css:11), used by `.site-header`.
- Option: `rgba(16,24,31,0.12)` — the canon `hairline` token, and SHOPIFY's own `.product-card` (globals.css:687-ish).
- Option: `#E1DDD8` — STATS `--line` (globals.css:17); `#E7E5E4` — LABELER `--border` / KIT `brand.hairline`; `#E2E2DD` — KIT `border-gray-200`.
- Recommendation: **`rgba(16,24,31,0.12)`** — it is the canon token, it composites correctly on both white and cream (the solid hexes visibly disagree with cream at #F5F1E7), and Shopify already uses it on cards.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-8: Breadcrumb current-page and link treatment.**
- Option B (KIT): link #296533 → hover #2B3C1D **+ underline**; current page `font-bold` #10181F; separator #E2E1DD chevron (breadcrumb.js:39, :55, :65).
- Option L (SHOPIFY): 13px `#5A5F66` container, links inherit global `a{#296533}` → hover #1A4121, no underline, current page not distinguished (globals.css:686-690).
- Option O (BC): no green, current page `font-normal` (breadcrumb.tsx:46, :59).
- Recommendation: **B** — bold current page is the only version that makes the trail legible as a hierarchy; keep B but raise the separator from #E2E1DD to #57534E-at-low-emphasis (see Flags) and align hover to #1A4121 to match Shopify's shipped link hover.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE NAV-9: Footer treatment — is the Shopify dark band the canon?**
- Option J (SHOPIFY): `#1A4121` pine band, `#E7DDC6` tan text, links tan→white, `26px 48px`, monogram-negative 34px (globals.css:179-207).
- Option: no footer exists in KIT, STATS, LABELER, or BC.
- Recommendation: **J** — it is the only implementation and it is board-approved; promote it into the kit as a `SiteFooter` section so internal apps have a sanctioned option rather than inventing one.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags

**Brand-law violations (not choices):**
- KIT `src/components/header.js:8` — `bg-gradient-to-b from-white to-yellow-50` on the guidelines-site masthead. Gradients are prohibited. The kit's own canon site violates it.
- KIT `src/components/header.js:72` — hamburger icon `fill="#006251"`, a teal in no palette. Should be #296533.
- KIT `header.js:29-46` — hover `text-gray-700` contradicts DESIGN.md:229-231 which specifies warm gray #44403C for nav-link hover (labeler is the only repo that follows the spec, navbar-content.tsx:38).
- BC `components/ui/tabs.tsx:18,33` — `rounded-lg`, `rounded-md`, and `data-[state=active]:shadow`. Radius + shadow.
- BC `components/Sidebar.tsx` (NavItemComponent + all Link items) — `rounded-md` on every nav row.
- BC `app/(welcome)/layout.tsx:12` — `bg-background/80 backdrop-blur` header; same translucency question as NAV-6, plus it is a second, inconsistent top-bar height (h-20) in the same app.
- STATS `components/Sidebar.tsx:150,159,167` — 30+ nav items are `onClick` `<div>`s with no `role`, `tabIndex`, keyboard handler, or `aria-current`. Not a style choice; a11y defect. (Known/pre-flagged.)
- BC `components/Sidebar.tsx` — `pathname` is read but never applied to styling; the sidebar has no active state at all. Whatever NAV-2 resolves to, BC needs it added.

**Labeler-only (for the user's own pass — no edits proposed):**
- `navbar-content.tsx` has no active-link state and no `usePathname`; whatever NAV-1 decides will need `aria-current` wiring there.
- `tailwind.config.ts:~100+` — the stock numeric scales (`orange.*`, and per the file comment `yellow.*`) are remapped to brand values. `text-yellow-800` resolves to wheat, not amber. Any nav class using a stock scale name is silently reinterpreted; noted in-file as a TRAP.
- Labeler has no sidebar, no breadcrumb, and exactly one tab surface (`src/app/_components/tabs.tsx`) — the smallest nav surface area of the five.

**Open questions:**
- The prompt describes labeler tabs as "field-green underline." No underline tab exists in the repo — `src/components/ui/tabs.tsx:32` is white-fill/ink-text. The only "tab underline" reference is KIT `DESIGN.md:145` naming Field Green for it. So the underline idiom is *specified but unimplemented*; NAV-5 assumes fill (all three implementations agree on fill). If the intent is actually to move tabs to underline, that is a larger change and should be its own CHOOSE.
- The prompt lists the STATS AppHeader as 59px; the exported constant is `APP_HEADER_H = 73` (`components/directory/shared.tsx:458`). Using 73.
- KIT breadcrumb separator `text-gray-400` #E2E1DD (breadcrumb.js:65) is ~1.2:1 on white — effectively invisible. Likely a scale-name slip (gray-400 is a surface tint in this palette, not a text gray); worth confirming intent before adopting B wholesale.
- No repo has a sidebar *footer* convention in common: STATS puts Sign out in a bordered footer (Sidebar.tsx:166-171), BC puts Admin/Settings there (Sidebar.tsx, bottom block), KIT's `SidebarFooter` is unused in the demo. Not a divergence in treatment, but the slot's contents are unspecified.

---

## Charts & Dataviz

### Implementations

#### A. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/docs/design-system/dataviz-palette.md` (canon palette spec)
- Provenance: `docs/design-system/dataviz-palette.md:1-78`; mirrored spec at `DESIGN.md:261-266` and `DESIGN.md:361-362`.
- Categorical, 8 fixed slots, never re-ranked (`dataviz-palette.md:18-27`): 1 `#296533` field green (hero) · 2 `#e8763c` ember light · 3 `#0d9488` deep teal · 4 `#ef9f27` harvest gold · 5 `#30783d` mid green · 6 `#3d76a9` slate · 7 `#c05017` harvest orange · 8 `#52ba64` sage. Lists >8 cycle `i % 8`.
- Sequential (`:46-48`): `#76b97d → #5aa363 → #408d4c → #2f763b → #235f2e → #1e4725` (H147, L .725→.36).
- Diverging (`:50-57`): `#c02617 · #d36e5f · #e0a79c · #e2e1dd · #90bd94 · #51935a · #296533`. Threshold text form: ≤$3 `#c02617`, <$8 ember text `#a84413`, else `#30783d`.
- Rules of use: slots 2/4/8 are sub-3:1 contrast → **direct labels mandatory**; all-pairs forms (map, scatter) carry at most slots 1–3; Data Red is never a categorical slot; diverging/sequential fills sit on paper, never on wheat. Validator evidence: worst adjacent CVD ΔE 9.9, worst normal-vision ΔE 17.1 on `#ffffff` and `#f5f1e7`.
- Tint chips (`:64-78`): success green-tint/green/green-border; warning-pending-canceled-past-due ember-tint/`#a84413`/ember-border; info slate-tint/`#2a5b88`/slate-border. Solid poster chips (`#60bf71`, `#e8773e`) reserved for ≥18px badge text.
- Note the internal conflict: `DESIGN.md:263-265` still states only the old two-color rule ("brand green hero / pale putrid light green competitor, chart copy TT Commons Pro Regular") — the 8-slot palette supersedes but does not replace that text.
- Compliance: compliant.

#### B. KIT — `/Users/Sheppardjm/Repos/harveys-brand-guidelines-shuffle/src/components/ui/chart.js` (recharts-2 ChartContainer family)
- Provenance: `chart.js:1-284`; recharts pinned `^2.15.0` (`package.json:41`); pin restated in `.design-sync/conventions.md:40`.
- Container (`chart.js:26-29`): `aspect-video`, `font-body text-xs`, light-theme only (`chart.js:5` — "the brand has no dark mode"). Recharts stock-default overrides: axis tick text → `gray-500` `#57534E`; grid/polar-grid/reference lines with stock `stroke='#ccc'` → `gray-200` `#E2E2DD`; tooltip cursor curve → `gray-200`; rectangle tooltip cursor + radial-bar background sector → `yellow-50` `#F5F1E7`; dots/sectors with stock `stroke='#fff'` → transparent; all `outline-none`.
- `ChartStyle` (`:43-64`) injects `--color-<key>` per config entry — series colors are caller-supplied, not palette-enforced.
- Tooltip (`:135`): `border border-gray-200 bg-white px-2.5 py-1.5 text-xs`, square, no shadow; label `font-bold`; series name `text-gray-500` `#57534E`; value `font-bold tabular-nums text-black` `#10181F`; indicator dot `h-2.5 w-2.5` square, `line` = `w-1`, `dashed` = `border-[1.5px] border-dashed`.
- Legend (`:214-243`): `gap-4`, `pt-3`/`pb-3`, swatch `h-2 w-2` square, label `text-gray-500`.
- Usage: 1 demo — `src/components/catalogueData.js:238-252`, config `catalogueData.js:86-89` = `{harveys:#296533, competitor:#a6dbaf}`, grid `stroke="#e7e5e4"` hardcoded (`:240`). Doc `docs/design-system/components/ChartContainer.md:5` still teaches the 2-color forest/`#a6dbaf` rule.
- Compliance: compliant (square, no shadow, no gradient, no red). The `#a6dbaf` "competitor" color is not a slot in the validated 8-slot palette.

#### C. STATS — `/Users/Sheppardjm/Repos/stats-harveyscommodites-com/app/globals.css` + `lib/theme.ts` (tokens-only, dual source)
- Provenance: `app/globals.css:37-45` (`--cat-1..8`, `--seq-1..6`, `--div-neg-3..--div-pos-3`) and `lib/theme.ts:13-30` (`CATEGORICAL`, `SEQ`, `DIVERGING`). **Byte-identical to canon A**, both committed (not in the working-tree diff). A unit test asserts the two stay identical (`dataviz-palette.md:15-17`, `scripts/codemods/retheme.test.ts`).
- Signed-value constants `theme.ts:33-38`: `DATA_RED #c02617`, `DATA_RED_STRONG #a21c10`, `GREEN_POS #30783d`, `EMBER_TEXT #a84413`.
- Threshold logic `lib/logic/usmap.ts:97-99` `marginColor()`: `<0 → #c02617`, `<8 → #a84413`, else `#30783d`. Continuous flow-map form `usmap.ts:90-93` `flowColor()` lerps `DIVERGING[0] → [3] → [6]` over $0–20/t.
- **Uncommitted**: `components/directory/shared.tsx:27-33` adds `marginTint()` — the same rule in `var()` flavour (`var(--data-red)` / `var(--ember-text)` / `var(--green-pos)`), a deliberate var-twin of the hex `marginColor`.
- Chart chrome (hand-rolled SVG, `shared.tsx:251-320`): viewBox `620×190`, padL 8 / padR 44 / padT 18 / padB 26; bars `#e1ddd8` (`--line`), partial bars stroke `#cecac3` dashed `3 2`, hover bar `#aec7e0` (slate-border), `rx={2}`; month labels 9.5px, `#a9a49c` default / `#57534e` + weight 700 on hover; zero line `#e1ddd8` dashed; hover rule `#cecac3` 1px; series lines `strokeWidth 2`, dots r 2.6 → 4 on hover with `#ffffff` halo; axis end-labels 9.5px `#7f7973`.
- Tooltip (`shared.tsx:309-315`, uncommitted shadow change `0 10px 28px → 0 12px 32px rgba(16,24,31,.14)`): paper bg, 1px `--line`, radius 0, padding `8px 11px`, 11.5px, minWidth 150.
- FlowMiniMap mapbox paint `shared.tsx:155`: `line-color` from feature `color` (flowColor output), `line-opacity 0.82`; pins — origin 11px square `--ink`, dest 11px circle `--green`, 2px paper border (uncommitted shadow softened `.4 → .3`, `shared.tsx:172`).
- **Duplicate**: `components/CustomersApp.tsx:467-525` is a second, private `TrendChart` with the same geometry but raw hexes inline — net line `#0d9488` (cat-3), gross line `#30783d` (cat-5), same bar/label hexes. SVG paint attrs can't take `var()`, so hexes are required, but this file duplicates `shared.tsx` rather than importing it. `shared.tsx` `TrendChart` is consumed by 5 apps (`LanesApp.tsx:348`, `VendorsApp.tsx:892`, `FreightApp.tsx:387`, `ProductsApp.tsx:1062`, plus the shared export); `CustomersApp.tsx:1257` uses its local copy.
- ADR `docs/adr/0003-charts-stay-hand-rolled.md`: recharts explicitly rejected; "Do not introduce recharts to match the kit doc."
- Compliance: compliant. `rx={2}` on bars and the tooltip/pin box-shadows are the only soft edges — bar `rx` is arguably a flat-and-square nit; shadows on the map pin and tooltip conflict with the no-shadow law.

#### D. LABELER — `/Users/Sheppardjm/Repos/harveys-seed-labeler/src/styles/globals.css:64-68` (INVENTORY ONLY)
- Provenance: `globals.css:61-68` (HSL with hex comments), consumed only by `tailwind.config.ts:71-75` (`chart.1`–`chart.5`).
- Values: `--chart-1 130 42.3% 27.8%` `#296533` · `--chart-2 130.2 42.4% 75.5%` `#A6DBAF` · `--chart-3 130.8 42.9% 17.8%` `#1A4121` · `--chart-4 41.1 40.9% 74.1%` `#D8C7A2` · `--chart-5 20.3 78.7% 52.2%` `#E56625`.
- Variant list: 5 slots, no sequential, no diverging. Comment at `globals.css:61-62` self-describes as "Unused today; on-brand defaults if charts land."
- Usage: **zero consumers** — no `bg-chart-*`/`fill-chart-*` anywhere in `src/`. Dead tokens.
- Only dataviz-ish surface: `src/app/admin/_components/maps-embed.tsx:20-62` renders 3 pre-baked planting-zone SVGs via `dangerouslySetInnerHTML` (frozen kernel output, colors live inside the SVG bytes, not in CSS); wrappers are `border border-border`, `max-h-[70vh] sm:max-h-none`.
- Compliance: no brand-law violation (all 5 are brand hexes), but the set diverges from validated canon A on 4 of 5 slots and has no CVD validation.

#### E. SHOPIFY — `/Users/Sheppardjm/Repos/harveys-seed-shopify/app/globals.css:1296-1330` (rating-bar tier ramp)
- Provenance: `globals.css:1296-1330`; root tokens `globals.css:1-16` (`--color-forest #296533`, `--color-pine #1a4121`, `--color-ember #c05017`, `--color-sand #ece5d3`, `--color-gray #5a5f66`).
- Geometry: segment `16px × 8px`, `gap: 4px`, unfilled = `--color-sand` `#ece5d3`; square (no radius).
- 5-step ramp keyed to the filled count (`--rating-fill` reassigned per `.rating-bar--N`): 1 → `#c05017` ember · 2 → `#b56f1c` · 3 → `#8a7b24` · 4 → `#58712c` · 5 → `#296533` forest. This is an ordinal ember→forest ramp; `#b56f1c` / `#8a7b24` / `#58712c` exist nowhere else in any repo.
- Usage: `app/products/[handle]/page.tsx:38` `rating-bar rating-bar--${filled}` inside `.rating-row` (`globals.css:1284-1294`, 14.5px, label `--color-slate #3d4148`), one PDP surface.
- Compliance: square, flat, no shadow, no red — compliant. Not derived from any canon ramp.

#### F. SHOPIFY — `/Users/Sheppardjm/Repos/harveys-seed-shopify/components/cover-crops/cover-crop-chart.tsx` (star chart, flat by spec)
- Provenance: `cover-crop-chart.tsx:60-82`; styles `globals.css:1766-1777`.
- Stars `.cover-crop-table__stars`: `font-weight 700`, `color: var(--color-forest)` `#296533`, `line-height 1` — **flat forest at every tier, no per-tier ramp, by design decision D-06**; the not-rated arm renders an em dash `.cover-crop-table__dash` weight 400, `--color-gray` `#5a5f66`, on a structurally separate render path. Exactly `stars` glyphs, never a 4-slot frame with a grayed remainder (`:74`).
- Usage: cover-crop compare table (4 family tables), sticky first two columns; no chart library.
- Compliance: compliant.

#### G. BC — `.../scratchpad/bc-harveymilling-com/app/(dashboard)/hfb-analysis/page.tsx` + `neucadia-analysis/page.tsx` (stock recharts 3)
- Provenance: recharts `^3.7.0` (`package.json:67`); consumers `app/(dashboard)/hfb-analysis/page.tsx:505-518` and `app/(dashboard)/neucadia-analysis/page.tsx:508-520`. **No `components/ui/chart.tsx` wrapper exists** — raw `ResponsiveContainer`/`BarChart` inline.
- Series fills, hardcoded, off-brand: hfb `#059669` (emerald-600) count / `#0ea5e9` (sky-500) amount; neucadia `#6366f1` (indigo-500) count / `#0ea5e9` amount. Both bars carry `opacity={0.8}` / `0.6` and `radius={[2,2,0,0]}`.
- Axes/tooltip: `tick={{fontSize:11}}`, stock recharts Tooltip (default white card + `#ccc` cursor, un-overridden since there's no ChartContainer), stock axis label styles at fontSize 11. Empty state `rounded-lg border border-dashed` (`:522`).
- Chart tokens `app/globals.css:28-32` (`--chart-1 12 76% 61%` … `--chart-5 27 87% 67%`) and dark set `:55-59` (`220 70% 50%` blue / `280 65% 60%` purple / `340 75% 55%` magenta), surfaced as `chart.1`–`chart.5` in `tailwind.config.ts:54-59`: **all 10 dead** — no `bg-chart-*`/`fill-chart-*` consumer in `app/`, `components/`, or `lib/`.
- Compliance: **violations** — off-brand saturated hues (emerald/sky/indigo), rounded bar caps, opacity-as-encoding, stock recharts chrome (`#ccc` grid, `#fff` dot strokes) with no brand override layer, and a live dark palette in a brand that has no dark mode.

#### H. BC — `.../bc-harveymilling-com/components/gantt/gantt.types.ts:16-23` (8-company Gantt palette)
- Provenance: `gantt.types.ts:16-23` `COMPANIES[].color`, derived map `:26-28` `COMPANY_COLORS`; fallback `#6B7280` at `components/gantt/GanttChart.tsx:21` and `components/gantt/GanttTaskList.tsx:208`.
- Values (all stock Tailwind-500s): commodities `#3B82F6` · feed `#10B981` · seed `#F59E0B` · retail `#EC4899` · harveys-trading-co `#8B5CF6` · hfb `#06B6D4` · neucadia `#F97316` · cross-company `#6B7280`.
- Vendor chrome: `@svar-ui/react-gantt ^2.5.2` (`package.json:44`), `import "@svar-ui/react-gantt/all.css"` (`GanttChart.tsx:3`) and `<Willow>` theme wrapper (`GanttChart.tsx:6, 217-229`) — an unthemed third-party CSS surface (rounded, shadowed, blue accents) sitting under the brand.
- A second unrelated `COMPANY_COLORS` (Tailwind class strings, not hexes) lives at `app/(dashboard)/agvance-company-split/page.tsx:88` and feeds ~9 Badge call sites; `:1512` uses `border-purple-400 dark:border-purple-600`.
- Compliance: **violations** — 8 saturated stock hues, pink/violet/cyan not in the brand, `dark:` variants in a no-dark-mode brand, vendor Willow theme unstyled.

### Agreements
- KIT canon (A) and STATS (C) carry **byte-identical** categorical, sequential and diverging arrays — 8 slots, 6 ramp steps, 7 diverging steps — and the same threshold rule (`≤$3 → #c02617`, `<$8 → #a84413`, else `#30783d`). No decision needed; this is already the two-repo canon with a test enforcing it.
- Data Red `#c02617` is never a categorical slot or chart chrome in KIT or STATS (ADR 0001 honored in both).
- Square marks: STATS bars, KIT tooltip/legend swatches, SHOPIFY rating segments and stars are all flat, radius 0 (STATS `rx={2}` and BC `radius=[2,2,0,0]` excepted).
- Light-theme-only is explicit in KIT (`chart.js:5`) and LABELER (`globals.css:70-72`); STATS has `color-scheme: light` (`globals.css:8`). Only BC ships a dark chart set.
- Both hand-rolled repos (STATS, SHOPIFY) reject chart libraries by written decision (ADR 0003; SHOPIFY has none at all) — the library question is only live for KIT and BC.
- Chart copy is body face everywhere (KIT `font-body`, STATS 9.5–11.5px body, DESIGN.md:265).

### CHOOSE blocks

**CHOOSE charts-1: Which categorical/sequential/diverging palette is canonical everywhere?**
- Option A/C (validated 8-slot): `#296533/#e8763c/#0d9488/#ef9f27/#30783d/#3d76a9/#c05017/#52ba64`; SEQ `#76b97d→#1e4725`; DIV `#c02617↔#e2e1dd↔#296533`. CVD-validated, 2 repos, unit-tested.
- Option D (labeler 5-slot): `#296533/#A6DBAF/#1A4121/#D8C7A2/#E56625`. Pure brand hexes, no derived hues, but 5 slots, no ramps, no CVD validation, zero consumers.
- Option B-legacy (2-color kit doc rule): forest `#296533` + `#a6dbaf` competitor only.
- Recommendation: **A/C** — it is the only palette with validator evidence, it already has two identical implementations, and it is the only one that covers sequential and diverging. `DESIGN.md:263-265` and `docs/design-system/components/ChartContainer.md:5` should be updated to point at it rather than restating the 2-color rule.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE charts-2: BC recharts version — pin to 2 (kit parity) or keep 3?**
- Option B (recharts `^2.15.0`, kit-pinned, `.design-sync/conventions.md:40`): lets BC copy `chart.js` verbatim; ChartContainer's stock-default overrides (`stroke='#ccc'`, `stroke='#fff'` selectors) are written against recharts 2 DOM.
- Option G (recharts `^3.7.0`, BC today): newer API; the `#ccc`/`#fff` attribute selectors and some primitive props changed in v3, so a ported ChartContainer needs verification, and only 2 files consume it.
- Recommendation: **B** — 2 consumer files is a trivial downgrade surface, and pinning to the kit means BC inherits the brand chrome layer for free instead of maintaining a v3 fork of it.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE charts-3: Does BC adopt a ChartContainer wrapper, or brand its charts inline?**
- Option B (port kit `chart.js` → `components/ui/chart.tsx`): brings axis `#57534E`, grid `#E2E2DD`, cursor `#F5F1E7`, transparent dot strokes, square flat tooltip/legend — fixes the stock-chrome violations in one file.
- Option G-inline (brand the 4 `<Bar fill>` values and hand-set axis/grid/tooltip props per chart): less code, but 2 files × ~6 props each and no guardrail against the next chart landing stock.
- Recommendation: **B** — BC is the only repo with a chart library and no chrome layer; the wrapper is the mechanism the kit already ships, and it makes the `#ccc`/`#fff` recharts defaults impossible to ship again.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE charts-4: BC 8-company Gantt palette — 1:1 remap to the canonical categorical slots?**
- Option H→A 1:1 (proposed): commodities `#296533` (slot 1, the hero business) · feed `#e8763c` (2) · seed `#0d9488` (3) · retail `#ef9f27` (4) · harveys-trading-co `#30783d` (5) · hfb `#3d76a9` (6) · neucadia `#c05017` (7) · cross-company `#52ba64` (8). Fallback `#6B7280` → `#57534E` (gray-500).
- Option H-alt: same 8 slots but cross-company takes a neutral (`#57534E`) and slot 8 `#52ba64` goes unused — cross-company is a catch-all, not a peer entity.
- Recommendation: **H-alt** — Gantt bars are an all-pairs surface where any two rows can neighbor, and `#52ba64` (slot 8, sub-3:1) sitting next to `#296533` (slot 1) is the palette's weakest adjacency; a neutral for the catch-all both reads correctly and dodges it. Company names are always direct-labeled in the task list, which keeps the remaining low-contrast slots (2/4) legal.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE charts-5: SHOPIFY rating ramp — sanction the local 5-step or align to canon sequential?**
- Option E (ship today, board-approved): `#c05017 → #b56f1c → #8a7b24 → #58712c → #296533`, ember→forest, hue-shifting, semantically "bad→good".
- Option A-SEQ (canon sequential, 5 of 6 steps): e.g. `#76b97d/#5aa363/#408d4c/#2f763b/#1e4725` — single-hue green, magnitude-only, loses the ember "low rating is a warning" signal.
- Option A-DIV (canon diverging positive half + ember low end): `#a84413 → #e0a79c → #e2e1dd → #90bd94 → #296533` — keeps bad/good polarity using canon steps.
- Recommendation: **E, sanctioned as a local ordinal ramp** — it is shipped and board-approved, and it is a bad→good ordinal scale, which is neither a magnitude ramp nor a signed diverging scale; the canon sequential ramp would erase the tier-1 warning read. Register the three intermediate hexes as named tokens rather than leaving them raw at `globals.css:1307-1315`.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE charts-6: STATS TrendChart duplication — dedupe or keep two?**
- Option C-shared (`components/directory/shared.tsx:251` generic `TrendChart` w/ `TrendSeries.color` prop) — already consumed by 5 apps.
- Option C-local (`components/CustomersApp.tsx:467-525`) — same geometry, hardcoded `#0d9488` / `#30783d` series, its own tooltip.
- Recommendation: **C-shared** — the local copy is a pre-generalization fossil; its two series map cleanly onto `TrendSeries` with `CATEGORICAL[2]` and `CATEGORICAL[4]`. Raw hexes in SVG attrs stay legitimate, but they should come from `lib/theme.ts`, not be retyped.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

### Flags
- **Violation (BC, G):** `#059669`, `#0ea5e9`, `#6366f1` bar fills at `hfb-analysis/page.tsx:508,515` and `neucadia-analysis/page.tsx:508,515` — off-brand saturated hues, plus `radius={[2,2,0,0]}` rounded bar caps and `opacity` used as an encoding channel. Not a choice.
- **Violation (BC):** dark `--chart-1..5` at `app/globals.css:55-59` (blue/purple/magenta) in a brand with no dark mode; `dark:border-purple-600` at `agvance-company-split/page.tsx:1512`. All 10 `--chart-*` tokens are dead — delete or replace, don't leave stock values loaded.
- **Violation (BC):** `@svar-ui/react-gantt` Willow vendor theme (`GanttChart.tsx:3,6,217`) ships unthemed rounded/shadowed chrome. Needs a CSS override layer or the Gantt is a permanent brand hole.
- **Violation (STATS, minor):** `box-shadow` on TrendChart tooltip (`shared.tsx:312`, uncommitted `0 12px 32px rgba(16,24,31,.14)`) and FlowMiniMap pins (`shared.tsx:172`, uncommitted `0 1px 3px rgba(16,24,31,.3)`) — no-shadow law says depth = cream fill + hairline. Both were *softened* in the working tree, not removed; confirm intent. Also `rx={2}` on bars (`shared.tsx:281`).
- **Labeler-only (for the user's own pass):** `src/styles/globals.css:64-68` `--chart-1..5` diverge from validated canon on 4 of 5 slots and have zero consumers — replace with the 8-slot categorical set (plus SEQ/DIV) or delete. `tailwind.config.ts:71-75` exposes `chart.1`–`chart.5` and would need widening to 8. `maps-embed.tsx` colors live inside frozen kernel SVG bytes — out of reach of any token change; flagged as a separate upstream job.
- **Doc drift (kit):** `DESIGN.md:263-266` and `docs/design-system/components/ChartContainer.md:5` still teach the 2-color forest/`#a6dbaf` rule, contradicting `dataviz-palette.md`. `catalogueData.js:88` `#a6dbaf` and `:240` `stroke="#e7e5e4"` are the only demo consumers; `#e7e5e4` is not a token in any repo (nearest: gray-200 `#E2E2DD`).
- **Open question:** ADR 0003 forbids recharts in STATS but the kit doc presents ChartContainer as the brand idiom. If CHOOSE charts-3 lands as "adopt", the resulting rule should be stated as "recharts + ChartContainer wherever a chart library is used; hand-rolled SVG is sanctioned where already shipped" so STATS and SHOPIFY don't read as non-compliant.
- **Open question:** the canon "slots 2/4/8 need direct labels" rule has no enforcement anywhere — no lint, no test. Adoption in BC (Gantt legend, recharts legend) depends on it being honored by hand.

## Brand-compliance audit

### BC / bc-harveymilling-com (unthemed — full audit)

Internal accounting-migration platform ("Accounting Data Analyzer" — 7 companies → Business Central); 150 routes (101 docs pages), 69 API routes, no tests/CI (only a docs-content prebuild gate, `scripts/docs-consistency-scan.mjs`, which bans the literal strings `Harvey Milling`/`harvey-milling` in docs copy — read it before touching docs).

| Violation | Scale | Notes |
|---|---|---|
| Border radius | **1,618 uses / 170 files** | 861 bare `rounded` (docs `<code>` chips), 426 `rounded-full` (dots, pucks, progress), 323 `rounded-lg/md/sm` (killable in one line via `--radius: 0`), `card.tsx` root is `rounded-xl` |
| Shadows | 49 uses | Clustered in the 28 `components/ui/` primitives — the cheapest violation to eliminate |
| Gradients | 54 `bg-gradient-to-*` / 12 files | All KPI-tile backgrounds (emerald→green, teal→emerald, orange→amber, violet→purple) |
| Red as status | **426 red utilities + 76 `destructive` refs / 40 files** | `--destructive` = `#EF4444`; `StatusBadge` error state, `Callout` important variant, blocked-status maps. Only ~15–20% (balance diffs, variance columns) legitimately becomes **Data Red**; the rest moves to ember |
| Off-brand hues | **~4,700 utilities** | 989 green (wrong green, remaps), 761 amber, **744 purple**, **461 blue**, 441 emerald, 177 orange, 154 violet, 129 indigo, 125 teal… Hotspots: `agvance-products` (171 green), `intercompany-analysis` (103 purple/violet/indigo), `customer-dedup` (72 purple), `agvance-customers`, `agvance-company-split`, `migration-readiness` |
| Fonts | Total | Geist + Geist Mono only; `fontFamily` never wired into Tailwind; no brand faces anywhere |
| Dark mode | **1,740 `dark:` uses / 123 files** | Fully wired 3-way toggle. No brand dark spec exists → see CHOOSE X-1 |
| Hardcoded hexes | 14 | 8-company Gantt palette (`components/gantt/gantt.types.ts:16-23`, blue/pink/violet/cyan), 4 recharts fills (indigo/sky), 2 grays |
| Brand assets | None | Favicon is `convex.svg`; Convex splash page; no Harvey's logo/wordmark in the repo |

Head starts: `stone` base is warm (secondary/muted ≈ wheat-adjacent; `--border #E7E5E4` — the same value labeler chose); checkbox already `rounded-sm`; Table/DataTable already flat; `Callout` (383 call sites) and `StatusBadge` are single-point-of-control files; all 10 `--chart-*` tokens are dead code; sonner already in place; Sidebar section headers already use the eyebrow pattern (awaiting Chakra Petch).

Dead weight to delete rather than retheme: `app/product/**` (orphaned Convex starter chat), `app/(welcome)/**` (Convex splash; dashboard root redirects past it), `components/docs/ScreenshotPlaceholder.tsx` (deprecated), the 10 dead `--chart-*` tokens.

### Stats (themed; open deviations)

- **DbDownShell painted in Data Red** (`components/directory/shared.tsx:589-604`) — violates its own ADR 0001; errors are ember. Fix direction settled.
- `lib/logic/usmap.ts` — the correct fix (only negatives → Data Red) **already sits uncommitted in the working tree**; needs committing + a small test.
- `/schedule`: 19 instances of 1px-border + 44px-shadow — off flat-and-square.
- 100+ low-contrast sites (2.4–3.8:1, mostly `--text-faint #a9a49c` on white) and sub-11px text; zero `@media` rules (no responsive layer).
- `Chip` takes raw color/bg/border props — the main drift re-entry point (see the Badges group).
- Production note: the retheme lives on `develop`; **`main` still serves the legacy Geist theme.**

### Shopify (board-approved reference; micro-diffs recorded, bias = KEEP)

- `#a84413` (ember hover) hardcoded ×3 (`app/globals.css:931,951,2337`) — the one genuine missing token.
- `--color-gray #5a5f66` vs canon text-secondary `#57534E`; border alphas `.1/.15/.2` vs canon `.12`; `--color-pine` doubles as hover vs canon `#2b3c1d`; `--color-slate #3d4148` near-dead; "cream" names `#f5f1e7` (canon calls that wheat-pale; canon "cream" is `#f6eceb`).
- `TT Commons Pro` listed first in `--font-body` but never loaded (Open Sans renders); Typekit kit `ooa7szh` is domain-scoped — Adobe-admin action to activate.
- 2px radii confined to the plot-mapper block (14 declarations) — candidate recorded exception.
- Tan commerce-button recipe copy-pasted 4× at four paddings; six chip treatments share geometry with zero shared CSS (see the group sections).

### Labeler (themed; **inventory-only — flagged for your own pass, nothing here will be changed by this effort**)

- `feature/brandTheming` (193 commits, the whole brand pass) is **local-only and unpushed** — worth pushing for safety.
- Still on the **legacy shadcn Toast/Toaster pair** — violates the Sonner-only decision.
- Token drifts vs canon: `--border`/`--input` `#E7E5E4` and `brand.hairline`; `stone-warm #44403C` vs canon `#474440`; `--chart-1..5` diverge from the validated palette (currently zero consumers — free to fix).
- 4 duplicated chip color tables; 4 parallel combobox implementations; byte-parallel PrintLabelSection/RegenerateButton pairs; dead T3 scaffold `post.tsx`.
- `.claude/settings.json` (the harveys-brand plugin binding) is untracked — machine-local only.
- The tailwind config **remaps stock scales** (`text-yellow-800` = wheat) — a documented landmine for any config sharing.

## Cross-cutting decisions

**CHOOSE X-1: BC dark mode — keep or kill?**
- Options: (A) **Kill** — remove the toggle and all 1,740 `dark:` variants during the retheme; brand has no dark spec; ~40% less retheme surface. (B) **Keep** — author a Harvey's dark palette first (new brand work: dark wheat/ink inversions, dark status tints), then retheme both modes.
- Recommendation: **A** — no brand dark spec exists, the app is internal, and B blocks the retheme on net-new brand design.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE X-2: BC typography adoption**
- Options: (A) Full brand type — Chakra Petch display (uppercase/tracked via the type-role pattern) + Open Sans body, dropping Geist. (B) Body-only — Open Sans body, keep headings lowercase/bold (internal-tool concession). 
- Recommendation: **A** — the eyebrow/uppercase pattern already exists in its Sidebar; labeler proves the pattern works on an internal-ish app; type is the strongest brand signal available.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE X-3: One semantic status vocabulary**
- Options: (A) Adopt `success / warning / error / pending / info` mapped to the validated tint triads (tint bg + strong text + tint border; error = ember family), replacing BC's five independent status maps, stats' raw-prop Chip, labeler's four tables (flag-only), and naming shopify's chip colors. (B) Keep per-app vocabularies, align values only.
- Recommendation: **A** — five apps invented the same five states independently; this is the single highest-leverage consistency decision in the estate.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE X-4: Toast standardization target**
- Options: (A) sonner pinned major 1 (kit's pin, per its NOTES.md version-pin rationale) with the kit's mount recipe (inline `toastOptions.style` killing radius/shadow, ember errors). (B) sonner 2 (BC's version) with the same mount recipe, kit upgrades its pin.
- Recommendation: **A** unless BC uses sonner-2-only APIs (extraction will say) — one pinned major across repos beats chasing the newest.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

**CHOOSE X-5: BC brand assets**
- Options: (A) Full pass — Harvey's favicon + logo in chrome, delete Convex splash/branding, source assets from the brand repo's `public/`. (B) Minimal — favicon swap only.
- Recommendation: **A** — the Convex splash and favicon read as unbranded scaffolding; asset cost is trivial.
- Decision: **Accepted — per recommendation above** (recorded 2026-08-06).

## Go-forward map (what your choices unlock)

Once the CHOOSE blocks above are filled in:

1. **Brand repo** — promote `dataviz-palette.md` into canon (`skills/harveys-brand/references/dataviz.md` + DESIGN.md `dataviz:` frontmatter block + status-tint tokens); add the chosen canonical components to the kit (SectionHeader, Band, StatusChip, KpiTile, MonogramLoader, WizardProgress, EmptyState) with a `CataloguePatterns` showcase section and design-sync registration; build `packages/tokens` + `packages/ui` (kit rewritten onto semantic `--hb-*` vars) + the `brand-sync` vendoring channel with per-repo parity tests; merge `develop`→`master` (consumers only see master); delete the untracked `docs/design-system/` snapshot (its one novel file is what gets promoted).
2. **BC retheme** (per `skills/harveys-brand/references/retheming.md`), in cost tiers: ① token layer + `--radius: 0` + fonts (reskins 925 Cards / 364 Buttons / 291 Badges at once) → ② the 28 ui primitives (shadows, radius holdouts, checkbox 2px) → ③ the five single-point-of-control components (`Callout` 383 sites, `StatusBadge`, `StepIndicator`, `DocsPageTemplate`, extract `StatTile` killing 54 gradients) → ④ the ~4,700-utility long tail by hotspot order (halved if X-1 = kill) → ⑤ separate workstream: SVAR Gantt vendor CSS, Gantt 8-company palette rebuilt from the categorical slots, recharts fills, brand assets. Natural first consumer of `@harveys/ui`. No tests/CI: manual QA or visual snapshots must gate it.
3. **Stats** — commit the usmap fix; DbDownShell → ember; Chip → semantic intents; token-parity test; doc-sync script replacing the manual copy. (`develop`→`main` production ship is its own go/no-go.)
4. **Shopify** — `--color-ember-hover` token; grouped-selector consolidation of the tan button + chip families (zero rendered change); crosswalk doc recording the KEEP decisions.
5. **Labeler** — **handoff list only** (this document's Flags), for your own pass.
