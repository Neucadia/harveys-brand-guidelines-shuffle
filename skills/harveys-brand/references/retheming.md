# Retheming an existing app to Harvey's — the procedure

Follow this end to end whenever a change recolors or restyles more than one
screen of an existing app. For styling a single component or screen in an
already-themed app, you don't need this file — use the spec, `tokens.md`, and
the conventions instead.

The one-line thesis: **a retheme is a semantics problem wearing a
find-and-replace costume.** Map meaning to meaning, never color to color.
Every failure mode below comes from doing the replace before settling the
semantics, or from trusting the replace to be something it provably isn't.

## The 8 failure modes (review vocabulary — cite them by name)

1. **Color-to-color mapping** — "old blue → new green" ignores that one hex did
   five jobs; the result looks re-skinned, not designed.
2. **Untracked partial replacement** — a grep sweep with no totality check
   leaves stragglers for weeks.
3. **One mudball commit** — mechanical rewrites and hand edits interleaved;
   unreviewable, unrevertable.
4. **var() leaking into non-CSS contexts** — SVG attributes, canvas, chart-lib
   paint, or color math fed `var(--x)` silently break.
5. **Non-idempotent tooling** — the codemod re-mangles its own output on a
   second run.
6. **Eyeballed chart palettes** — colors picked by taste collapse under
   colorblind simulation; nothing is measured or written down.
7. **The generated-code standoff** — "generated, do not edit" files block the
   hand-finish and nobody decides who owns them.
8. **No runtime look** — all gates green, pages ugly: stale legend copy, missed
   titles, unpainted marks. Static checks cannot see this.

Each phase below exists to kill one or more of these.

## Phase 0 — Settle semantics before touching code (MUST)

Do not write or generate any styling code until this phase is committed.

1. **Read `decisions.md` (ships alongside this file) first.** It pre-resolves
   the known brand-vs-domain conflicts — most importantly Data Red — and fixes
   the brand vocabulary (Ember, Wheat, Seed-tag header, Display face). Cite
   its terms; do not re-argue settled decisions.
2. **For conflicts it does not cover**, follow its conflict framework: write an
   ADR *in the target repo* before recoloring anything. Cover the three
   contentious areas:
   - **The meaning system.** Which color families carry which meanings, and
     every collision between Harvey's rules and the domain's conventions.
   - **The mechanism.** Token layer + mechanical rewrite? Overrides? Decide
     once, with the radius/typography policies stated as rules with named
     exceptions (Harvey's: "all radii → 0 except circles/pills and the 2px
     checkbox").
   - **Scope fences.** What does NOT get rebuilt (existing chart
     implementations usually stay; retheming in place is the point).
3. **Write a glossary** in the target repo fixing the vocabulary, seeded from
   the shared glossary in `decisions.md`. Reviews and future agents cite these
   names instead of re-arguing.
4. Leave *named* open items (e.g. exact chart-palette hues, codemod
   mechanics). An open item you can name is work; one you can't name is a
   fight waiting inside 40 files.

**Exit criteria:** ADRs + glossary committed; open items enumerated.

## Phase 1 — Survey: census and consumption inventory (MUST)

Two inventories. The second is the one that saves you.

**1a. The census** — what literals exist and how often, across *every* source
root (logic dirs like `lib/` hide hundreds of hexes computed as strings):

```bash
# hex histogram (normalize case)
grep -rhoE "#[0-9a-fA-F]{3,8}\b" src/ | tr 'A-F' 'a-f' | sort | uniq -c | sort -rn
# rgba/rgb bases, radius forms, font declarations
grep -rhoE "rgba?\([^)]+\)" src/ | sort | uniq -c | sort -rn
grep -rhoE "borderRadius:\s*[^,}]+" src/ | sort | uniq -c | sort -rn
```

**1b. The consumption inventory** — for each literal, *what consumes it*. This
determines the safe output per context:

| Consumer | Safe output | Why |
| --- | --- | --- |
| Inline `style={{}}` / CSS files | `var(--token)` | native var() support |
| SVG presentation attributes (`fill=`, `stroke=`, incl. ternaries and identifier-fed consts) | resolved literal hex | var() in attributes is not interop-safe across browsers |
| Map/canvas/chart-library paint options | resolved literal hex | libraries parse color strings themselves |
| **Anything doing color math** — lerp/mix, alpha-suffix concatenation, `parseInt(hex.slice(1),16)` | resolved literal hex **from one theme module** | `lerp('var(--x)')` parses as NaN → garbage colors. Hunt explicitly: `grep -rn "Lerp('var\|slice(1), 16"` |
| `style.cssText` strings, template literals, class recipes in global CSS | hand-edit list | they dodge property-name regexes entirely |

Also grep for **color words in copy** ("blue = scheduled", "amber ring") —
legend text and comments name the old colors and no codemod fixes them.

**Exit criteria:** full histogram; every consumer context listed with its
output mode; the hand-edit list started.

## Phase 2 — Token layer first, as its own commit (MUST)

- Define tokens by **job**, not by hue, using the semantic names from
  DESIGN.md's YAML frontmatter (`primary`, `primary-interactive`,
  `surface-wheat`, `data-negative`, …). Take hexes only from the crosswalk in
  `tokens.md` — never from this repo's Tailwind scale names, which are a trap
  (see `tokens.md`).
- Fonts via the platform loader (`next/font` etc.) behind CSS variables with a
  fallback-stack token. Harvey's specifics: Chakra Petch, Open Sans, and
  Catamaran come from Google Fonts; TT Commons Pro comes from Adobe Typekit
  kit `ooa7szh`, which is **domain-scoped** — a new app's domain won't be
  listed, so ship Open Sans as the body face behind the token and upgrading
  later is a one-token change. Load only the weights the brand uses.
- Port the house recipes from `.design-sync/conventions.md` (seed-tag header,
  eyebrow chip, focus ring, selected/disabled states) as shared classes so new
  code has a canonical vocabulary.
- The app still renders with legacy colors after this commit — that's fine and
  keeps the commit reviewable.

## Phase 3 — The mechanical pass: four provable properties (MUST)

Write the transform as a pure function over file text with a thin I/O runner,
and test the pure seam. Each property has a mechanical proof:

1. **Total.** Every literal maps or the run fails loudly listing file:line of
   every unknown. Proof: dry run over the whole tree reports **0 unknown**
   before `--write` is allowed. Never silently skip.
2. **Idempotent.** Every mapping target is itself a key mapping to itself.
   Proof: run twice; second run reports **0 replacements**. Any literal the
   style pass would re-rewrite (e.g. brand hexes in consts feeding SVG) must
   move to the literal-hex theme module.
3. **Context-aware.** Output mode per consumer context from Phase 1b: var()
   for style objects; resolved hex for SVG attributes (quoted *and* `{expr}`
   spans) and logic-land files.
4. **Meaning-aware where possible, reviewed where not.** The same legacy hex
   can map to different tokens by role (legacy red split loss vs error). Where
   a text-level transform can't know the role, flag it for the Phase 6 review
   to hunt role mismatches explicitly.

Mechanics that bite:

- Inserting properties into style objects can collide with existing keys —
  let the typechecker catch duplicates; delete the superseded declaration.
- Blanket passes overreach (an "every uppercase label gets the display face"
  pass will hit a form input). Review the diff for semantic misfits, not just
  compile errors.
- Keep one **theme module** of literal exports for logic-land/SVG/paint/math
  consumers, and add a test that the theme module, the CSS custom properties,
  and the codemod map agree on every value — three copies of a palette *will*
  drift otherwise.

Apply as **one purely mechanical commit** — zero hand edits mixed in. If files
carry a "generated, do not edit" covenant, retire it by ADR in the same commit.

## Phase 4 — Hand-finish

- **Chart palettes are computed, not picked.** Harvey's baseline: hero series
  in brand green `#296533`, competitor/secondary series in pale green
  `#A6DBAF`. Extended categorical slots need a fixed assignment order and must
  pass colorblind-simulation checks (lightness band, chroma floor,
  adjacent-pair ΔE, contrast on every surface charts sit on — including wheat
  panels). Write the resolved palette down as a spec doc in the target repo.
- Diverging scales for signed domain values use Data Red at the negative end
  (see `decisions.md` DR-1); "thin-but-positive" belongs to the ember warning
  family, not the loss color.
- **Typography by whitelist**: display face (Chakra Petch bold, uppercase,
  wide tracking) only on page titles, card titles, table headers, status
  chips, and KPI numerals — never dense table figures, never form inputs.
  Entity names are data, not chrome.
- Assets: official logo files only (never recolor logo artwork); favicon via
  the framework convention; masthead lockups wired into existing responsive
  machinery.
- Sweep copy for old color words at the same time.

## Phase 5 — Gates, per commit and at the end (MUST)

Static, after every commit: typecheck, lint, build, codemod dry-run
(0 replacements = still idempotent), plus targeted greps:

```bash
# no legacy hexes survive anywhere (fill in the target's old palette)
grep -rnE "#(dc2626|2563eb|…)" src/
# no var() where it can't resolve
grep -rnE "(fill|stroke|stopColor)=\{[^}]*var\(--" src/
grep -rn "Lerp('var\|Lerp(\"var" src/
```

Runtime, before calling it done: drive the real app through **every route**
with production-like data and *look at screenshots*. Assert the semantic
invariants: negative numbers in Data Red only; warnings/errors in ember; wheat
header bands present; **no black/unpainted SVG marks** (the signature of a
var()-in-attribute regression); display face only where the whitelist allows.
Screenshots catch what greps cannot: stale legends, tint-heavy panels, missed
titles.

## Phase 6 — Adversarial review against the written rules (MUST)

Run a review whose brief is the Phase-0 documents plus DESIGN.md, on two
independent axes: **standards** (does the diff obey the ADRs / glossary /
conventions?) and **spec** (does it do everything the spec asked, nothing it
didn't?). Have it explicitly hunt role mismatches — same-hex-different-meaning
is the classic survivor of a mechanical pass. Verify each finding against
source before acting, fix what's real, and reject the rest in writing. A
review is evidence, not a to-do list.

## Commit topology

One commit per phase, every commit green:

1. Codemod + tests (no app changes; dry run proves totality)
2. Token layer + fonts + assets (app renders, legacy data colors)
3. Mechanical rewrite, nothing else
4. Data-color hand-finish (palettes, scales, theme module)
5. Typography/signature hand-finish
6. Runtime-verify fixes
7. Review fixes

The giant diff (3) is boring by construction; the meaningful diffs are small.
Any commit can be reverted or bisected alone.

## Using the shipped material

- `DESIGN.md` — the canonical spec: read in full before Phase 0.
- `decisions.md` — pre-resolved conflicts + shared glossary + the framework
  for new conflicts.
- `tokens.md` — the only sanctioned name → hex mapping.
- `.design-sync/conventions.md` — the recipes (button intents, flat-and-square
  rule, focus/selected/disabled/error states, seed-tag header) and the palette
  apply to any target. Ignore its bundle-consumer setup (`window.HarveysBrand`,
  `_ds_bundle.css`, purged-class vocabulary) unless you are literally embedding
  the exported UI kit.
- `.design-sync/docs/*.md` — per-component usage notes for the exported kit.

## Condensed checklist

- [ ] MUST — `decisions.md` read; new conflicts resolved as ADRs + glossary in the target repo
- [ ] MUST — census across all source roots; consumption inventory with output mode per context
- [ ] Color-math consumers found and routed to a literal theme module
- [ ] MUST — token layer lands first, by job, using DESIGN.md semantic names; fonts behind variable indirection
- [ ] MUST — mechanical pass proven total (dry run, 0 unknown) and idempotent (2nd run, 0 replacements), context-aware
- [ ] Mechanical rewrite is one clean commit
- [ ] Chart palettes validated (CVD + every surface) and documented
- [ ] Typography applied by whitelist; copy swept for old color words
- [ ] MUST — greps clean: no legacy hexes, no var() in attributes/paint/math
- [ ] MUST — runtime screenshot sweep of every route; semantic invariants hold
- [ ] MUST — two-axis review against the written rules; findings verified, fixes or written rejections
