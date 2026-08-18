## Harvey's brand conventions — read this before building

**What this DS is.** 36 self-contained, full-width brand-guidelines *sections* (hero, palette, logo lockups, type specimen, and seven `Catalogue*` component-showcase sections) **plus a granular shadcn-style UI kit** (Button, Card, Dialog, Table, Select, Sidebar, …) exported as named components. Compose pages by stacking sections and building screens from the UI-kit primitives; only reach for raw utility classes for glue the kit doesn't cover.

**Setup.** No provider or theme wrapper (exceptions below). Link `styles.css` and load `_ds_bundle.js`; components live on `window.HarveysBrand`. Give your own page root `class="antialiased font-body bg-body text-body"` — the site sets exactly these on `<body>`. All brand fonts load from Google Fonts/Adobe Typekit via `styles.css`'s remote `@import`s; never add `@font-face` yourself.

**UI kit idiom.**
```jsx
const { Button, Card, CardHeader, CardTitle, CardContent, Badge } = window.HarveysBrand;
```
- **Button intents:** `default` = green system action (`bg-green-500`), `secondary` = wheat commerce action (ink text — this is the "Add to cart" button), `destructive` = ember (rationed — ember is never a routine accent), plus `outline` / `ghost` / `link`. Sizes `sm | default | lg | icon`.
- **Flat and square, always.** Never add `rounded-*` or `shadow-*` to kit components or your glue. Depth = cream `bg-yellow-50` fills + hairline borders (`border-gray-200`, or `border-hairline` on tinted fills).
- **House recipes:** focus = `focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2`; selected = cream fill + inset green ring (see Toggle) or 2px green border with compensated padding; disabled = `disabled:opacity-50 disabled:cursor-not-allowed`; errors/warnings are **ember, never red** (single data-only exception: Data Red `#C02617` for negative numeric values — see `decisions.md`, shipped with the design spec; there is no red in UI chrome).
- **Providers:** wrap tooltip-bearing subtrees in `TooltipProvider`; mount exactly one `<Toaster />` (sonner) at the app root and fire with sonner's `toast()`. The legacy shadcn Toast/Toaster pair is deliberately absent. `Sidebar` needs `SidebarProvider` (use `collapsible="none"` inside framed demos).
- **Brand patterns:** `SectionHeader` (+`Band`) opens sections — wheat eyebrow chip, `emphasis` = rationed ember; `StatusChip` is the tint status tier (success/warning/info/neutral — solids stay `Badge`, DR-3); `KpiTile` (`negative` = Data Red, DR-1); `MonogramLoader` (the brand spinner); `WizardProgress`; `EmptyState` (error tone = ember, never Data Red); `NotFound` (the shared 404 page — no ember, no red). Demos in `CataloguePatterns`.
- **Seed-tag signature:** table headers, group labels, and badges use `font-heading text-xs font-bold uppercase tracking-smallcaps text-gray-500` on `bg-yellow-50` (0.08em — 0.1em over-opens caps at 12px and below, tokens-24).

**Styling idiom: purged Tailwind.** `_ds_bundle.css` is a *content-purged* Tailwind build — only classes the sections and UI kit use exist. Before using any utility, confirm it appears in `_ds_bundle.css`; if it's missing, use an inline style with the hex values below. Ignore the `--tw-*` custom properties (Tailwind internals, not brand tokens).

Verified core vocabulary:

| Family | Classes that exist |
|---|---|
| Brand color bgs | `bg-green-400 bg-green-500 bg-green-700`, `bg-orange-500 bg-orange-700`, `bg-yellow-50 bg-yellow-100 bg-yellow-500`, `bg-sand`, `bg-gray-50`, `bg-white`, `bg-body`, `bg-black/80` (scrim) |
| Text color | `text-white`, `text-body`, `text-gray-500 text-gray-600`, `text-green-100 text-green-500`, `text-orange-500 text-orange-700` |
| Borders | `border-gray-200` (hairline on white), `border-hairline` (on tints), `border-green-500` (2px selected/outline) |
| Headings | `font-heading font-bold uppercase tracking-widest` + `text-2xl`/`text-3xl`/`text-4xl`/`text-5xl` (`lg:text-5xl`) |
| Body text | `font-body`, `text-sm`, `text-center`, `max-w-xl max-w-2xl max-w-3xl mx-auto` |
| Layout | `container mx-auto px-4`, `py-20`, `flex flex-wrap items-center justify-center`, `gap-4`, `-m-4` + `p-4` gutters, `w-full md:w-1/2 lg:w-1/3` |
| Buttons (CTA) | prefer the `Button` component; raw recipe: `px-6 py-3 text-sm font-semibold text-white transition duration-200` + `bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300` (primary) or `bg-orange-500 hover:bg-orange-600 focus:ring focus:ring-orange-300` (secondary) — square corners, no border-radius |
| Buttons (downloads) | logo-card download pair only: `bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-200` (wheat) / `bg-orange-900 text-white hover:bg-orange-950 focus:ring-orange-700` (rust) — same padding, don't use for generic CTAs |
| Links | `text-green-500 hover:underline` or `text-green-500 hover:text-green-600` |
| Status tints | `bg-green-50 border-success-tint-border`, `bg-warning-tint border-warning-tint-border text-orange-950`, `bg-info-tint border-info-tint-border text-info-strong`, `tracking-smallcaps` |
| State variants | `focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2`, `data-[state=checked]:*`, `data-[state=open]:animate-in` + `fade-in-0 zoom-in-95 slide-in-from-*` (tailwindcss-animate), `animate-accordion-down/up`, `duration-250` |

**Palette (hex, for custom glue when a utility is missing).** Green `#296533` (primary; dark `#1A4121`), orange `#e56625` (accent; hover `#E8763C`; dark/ember `#C05017`, pressed/AA-text `#a84413`), wheat `#D8C7A2` (bare "wheat" is always this hex — light `#e7ddc6`, pale `#f5f1e7`; never call `#f5f1e7` cream), sand `#ece5d3`, hairline `rgba(16,24,31,0.12)`, focus ring Sage `#52BA64`, black `#10181F`, background white. Headlines: Chakra Petch, always bold + uppercase + wide tracking. Body/UI copy: TT Commons Pro (falls back to Open Sans) — regular weight; emphasis is `font-semibold` 600, never 700 (**TT Commons Pro has no Bold — DemiBold 600 is the ceiling**; 700 belongs to Chakra Petch alone). Chart series: forest `#296533` for Harvey's, light green `#a6dbaf` for competitors.

**Component quirks.**
- `NegativePrimaryOnWheat` ships no background — always place it on brand green (`bg-green-500`); its OnBlack/OnOrange siblings carry their own.
- `Icons` renders `display:none` by design; don't use it expecting visible output.
- Sections with pickers (`HorizontalSubBrand`, `StackedPrimarySubBrand`, `HorizontalStackedSubBrand`) and the `Header` menu manage their own state — mount as-is.
- `Calendar` is react-day-picker **v8** API; `ChartContainer` is recharts **2**; both pinned — don't assume newer APIs.

**Where the truth lives.** Styling: `styles.css` → `_ds_bundle.css` (grep it before inventing a class). Per-component usage + example JSX: `components/<group>/<Name>/<Name>.prompt.md`. Semantic token names → hex → Tailwind class: `tokens.md`, shipped with the design spec (the only sanctioned crosswalk).

**Idiomatic page glue:**
```jsx
const { Hero, Purpose, Colors, Button, Card } = window.HarveysBrand;
const Page = () => (
  <main className="antialiased font-body bg-body text-body">
    <Hero />
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-heading text-4xl font-bold uppercase tracking-widest mb-6 text-center">
        Our dealers
      </h2>
      <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">…</p>
      <div className="flex justify-center">
        <Button variant="secondary">Find a dealer</Button>
      </div>
    </section>
    <Colors />
  </main>
);
```
