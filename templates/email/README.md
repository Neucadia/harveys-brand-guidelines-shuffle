# Harvey's Mailchimp flyer template

One Mailchimp "Code your own" template that turns a print flyer PSD into a
brand-correct HTML email. Its sections mirror the flyer top to bottom:
hero panel, wheat strip, deal rows, an optional feature band with two
photos, store info, legal footer. Import it once; build each month's
campaign from it in Mailchimp's editor.

| File | What it is |
| --- | --- |
| `harveys-mailchimp-flyer.html` | The template. Editable regions (`mc:edit`), repeatable deal rows (`mc:repeatable`), hideable feature band (`mc:hideable`). Sample content is the February 2026 bird-feeding campaign. |
| `examples/bird-feeding-month.html` | The same campaign resolved: template attributes stripped, paste-ready. The brand-correct replacement for the email that went out on 2026-02-04. |

## From PSD to email

1. **Export from the PSD** (sRGB, JPEG, quality 80):

   | Slot | Export | Size | Notes |
   | --- | --- | --- | --- |
   | `hero_image` | The hero panel with its title and logo baked in | 1200 × 600 (2:1) | Crop the hero layer group. Under 200 KB. |
   | `deal_*_photo` | One photo per offer | 520 px wide; 3:2 landscape or 4:5 portrait | Pick one ratio per email so the rows keep an even rhythm. Under 120 KB each. |
   | `feature_photo_1`, `feature_photo_2` | Two photos, same ratio | 600 × 400 each (3:2) | Under 120 KB each. |
   | Lockup | Already hosted in the Harvey's Mailchimp account | 220 px wide | Do not re-export. |

2. **Upload** the exports to Mailchimp's Content Studio and copy their URLs.
3. **Build the campaign** from the template. Replace each image, edit the copy.
   Hover a deal row to duplicate, remove, or switch between "photo on the
   right" and "photo on the left". Hide the feature band, its photos, and
   its details when there is no second flyer. Hide the button if there is
   nothing to link.
4. **Subject and preview text** are set in the campaign settings. The HTML
   reads them through `*|MC:SUBJECT|*` and `*|MC_PREVIEW_TEXT|*`.
5. **Send tests** to Gmail, Apple Mail, and Outlook before scheduling.

### Flyer layers to template slots (bird-feeding-final.psd)

| PSD layer(s) | Slot |
| --- | --- |
| `National Bird Feeding Month`, `Background copy 10`, `EGG NEG`, `PRIMARY NEG` | `hero_image` |
| `Sales run all month` | `lede` |
| `15%`, `OFF`, `BIRD FEEDERS`, `Line 2` | Deal row 1 copy |
| `Background copy 2/5/9` (feeder photo) | Deal row 1 photo |
| `$1 off bag Harvey Bird #25 Black Sunflower #40`, `Line 1` | Deal row 2 copy |
| `Background copy 6` (staff with bags) | Deal row 2 photo |
| `$1 off suet Value 10pk` | Deal row 3 copy |
| `729 W MAIN ST…`, `989.584.3466 \| HARVEYMILLING.com`, `MONO` | `store_info` (fixed in the template) |
| `stuff-the-tote-sale.psd` | `feature`, `feature_photo_1`, `feature_photo_2`, `feature_details` |

## Brand rules the template enforces

These are the errors in the sent email that the template now prevents.

- **Display face** is Catamaran ExtraBold 800, always uppercase and
  letterspaced. It appears only in offers, headlines, and short labels.
  Never mixed case, never a sentence of body copy, never bold-for-emphasis.
  Mailchimp's text editor will happily let someone type "Buy a Harvey's
  Tote…" into a Catamaran block. Anything in a Catamaran block is typed in
  caps.
- **Body face** is Open Sans 400 at 16/24. Emphasis is 600, never 700.
- **Ember is a dose.** One solid ember band per email, white text only.
  Pale wheat on ember fails AA for body text.
- **Deals read like the flyer:** ink display type on white with 2 px ember
  rules and an ember product label. No colored slabs per offer.
- **Square corners, flat surfaces.** No radius, no shadows, no gradients.
- **The name is "Harvey's"** in prose. "Harvey Milling" is retired. The
  copyright line is hardcoded to "Harvey's". The physical address comes
  from `*|LIST:ADDRESSLINE|*`, so check Audience settings in Mailchimp;
  if the audience's company name still reads "Harvey Milling Co." it will
  print that way.

### Tokens used

| Role | Token | Hex |
| --- | --- | --- |
| Canvas | `neutral-gray` | `#E2E1DD` |
| Masthead, hero backdrop | `primary` | `#1A4121` |
| Masthead link | `on-primary-muted` | `#A6DBAF` |
| Wheat strip, feature details | `wheat` | `#D8C7A2` |
| Deals panel | `surface` | `#FFFFFF` |
| Offers, body text | `text` | `#10181F` |
| Rules, product labels, feature band | `secondary` | `#C05017` |
| Store info | `wheat-pale` | `#F5F1E7` |
| Button, footer links | `primary-interactive` | `#296533` |
| Legal text | `text-secondary` | `#57534E` |

### Type ramp (email, in px)

| Role | Face | Size / line | Tracking | Mobile |
| --- | --- | --- | --- | --- |
| Offer | Catamaran 800 | 40 / 44 | 6 | 36 / 40, 5 |
| Feature headline | Catamaran 800 | 28 / 34 | 4 | 26 / 32, 4 |
| Feature date | Catamaran 800 | 18 / 24 | 3 | same |
| Product label, details | Catamaran 800 | 15–16 / 22–24 | 2 | same |
| Small label (HOURS, VISIT) | Catamaran 800 | 13 / 18 | 2 | same |
| Body | Open Sans 400 | 16 / 24 | 0 | same |
| Strip | Open Sans 600 | 16 / 24 | 0 | same |
| Fine print | Open Sans 400 | 13 / 20 | 0 | same |
| Legal | Open Sans 400 | 12 / 18 | 0 | same |

## Importing into Mailchimp

- **As a template:** Content → Templates → Create template → Code your own
  → Paste in code. Paste `harveys-mailchimp-flyer.html` and save. Every
  required merge tag is present (`*|UNSUB|*`, `*|UPDATE_PROFILE|*`,
  `*|ARCHIVE|*`, `*|LIST:ADDRESSLINE|*`).
- **As a one-off campaign:** in the campaign's Design step → Code your own
  → Paste in code. Paste `examples/bird-feeding-month.html`.

## Client support

- Catamaran and Open Sans load from Google Fonts in Apple Mail, iOS Mail,
  Samsung Mail, and Outlook for Mac. Gmail and Outlook for Windows fall
  back to Arial or Helvetica bold; weight, caps, and tracking survive.
- Two-column rows stack below 620 px wherever media queries run (iOS Mail,
  Apple Mail, Gmail app on Google accounts). Elsewhere they stay two-up at
  600 px, which still fits a phone.
- Outlook for Windows gets a fixed 600 px table, rules drawn as colored
  cells, and a button padded with an MSO spacer.
- Keep the HTML under 102 KB so Gmail does not clip it. The template is
  about 20 KB.

## Regenerating the example

The example is the template with Mailchimp attributes removed:

```sh
node -e '
const fs=require("fs");
let s=fs.readFileSync("harveys-mailchimp-flyer.html","utf8")
  .replace(/\s+mc:(edit|repeatable|variant)="[^"]*"/g,"")
  .replace(/\s+mc:hideable/g,"");
fs.writeFileSync("examples/bird-feeding-month.html",s);'
```

Then update the header comment in the example by hand.
