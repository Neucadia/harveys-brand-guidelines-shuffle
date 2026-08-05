## Harvey's brand conventions — read this before building

**What this DS is.** 30 self-contained, full-width brand-guidelines *sections* (hero, palette, logo lockups, type specimen…), not granular UI controls. Each renders its complete content with no props — compose pages by stacking sections, and build any custom UI you need around them with the utility classes below.

**Setup.** No provider or theme wrapper. Link `styles.css` and load `_ds_bundle.js`; components live on `window.HarveysBrand`. Give your own page root `class="antialiased font-body bg-body text-body"` — the site sets exactly these on `<body>`. All brand fonts load from Google Fonts/Adobe Typekit via `styles.css`'s remote `@import`s; never add `@font-face` yourself.

**Styling idiom: purged Tailwind.** `_ds_bundle.css` is a *content-purged* Tailwind build — only classes the 30 sections use exist. Before using any utility, confirm it appears in `_ds_bundle.css`; if it's missing, use an inline style with the hex values below. Ignore the `--tw-*` custom properties (Tailwind internals, not brand tokens).

Verified core vocabulary:

| Family | Classes that exist |
|---|---|
| Brand color bgs | `bg-green-400 bg-green-500 bg-green-700`, `bg-orange-500`, `bg-yellow-50 bg-yellow-100 bg-yellow-500`, `bg-gray-50`, `bg-white`, `bg-body` |
| Text color | `text-white`, `text-body`, `text-gray-500 text-gray-600`, `text-green-100 text-green-500`, `text-orange-500` |
| Headings | `font-heading font-bold uppercase tracking-widest` + `text-2xl`/`text-3xl`/`text-4xl`/`text-5xl` (`lg:text-5xl`) |
| Body text | `font-body`, `text-sm`, `text-center`, `max-w-xl max-w-2xl max-w-3xl mx-auto` |
| Layout | `container mx-auto px-4`, `py-20`, `flex flex-wrap items-center justify-center`, `gap-4`, `-m-4` + `p-4` gutters, `w-full md:w-1/2 lg:w-1/3` |
| Buttons (CTA) | `px-6 py-3 text-sm font-bold text-white transition duration-200` — primary `bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300`, secondary `bg-orange-500 hover:bg-orange-600 focus:ring focus:ring-orange-300` — square corners, no border-radius (this is the brand's form/CTA button, per the UIElements section) |
| Buttons (downloads) | logo-card download pair only: `bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-200` (wheat) / `bg-orange-900 text-white hover:bg-orange-800 focus:ring-orange-700` (rust) — same padding, don't use for generic CTAs |
| Links | `text-green-500 hover:underline` or `text-green-500 hover:text-green-600` |

**Palette (hex, for custom glue when a utility is missing).** Green `#296533` (primary; dark `#1A4121`), orange `#e56625` (accent; dark `#C05017`), wheat `#e7ddc6` (light `#f5f1e7`, dark `#D8C7A2`), black `#10181F`, background white. Headlines: Chakra Petch, always bold + uppercase + wide tracking. Body/UI copy: TT Commons Pro (falls back to Open Sans) — regular weight.

**Component quirks.**
- `NegativePrimaryOnWheat` ships no background — always place it on brand green (`bg-green-500`); its OnBlack/OnOrange siblings carry their own.
- `Icons` renders `display:none` by design; don't use it expecting visible output.
- Sections with pickers (`HorizontalSubBrand`, `StackedPrimarySubBrand`, `HorizontalStackedSubBrand`) and the `Header` menu manage their own state — mount as-is.

**Where the truth lives.** Styling: `styles.css` → `_ds_bundle.css` (grep it before inventing a class). Per-component usage + example JSX: `components/<group>/<Name>/<Name>.prompt.md`.

**Idiomatic page glue:**
```jsx
const { Hero, Purpose, Colors } = window.HarveysBrand;
const Page = () => (
  <main className="antialiased font-body bg-body text-body">
    <Hero />
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-heading text-4xl font-bold uppercase tracking-widest mb-6 text-center">
        Our dealers
      </h2>
      <p className="text-gray-600 text-center max-w-xl mx-auto">…</p>
    </section>
    <Colors />
  </main>
);
```
