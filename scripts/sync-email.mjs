#!/usr/bin/env node
// templates/email is the source of truth for the Mailchimp flyer template.
// This script publishes it under public/email so the site can offer the
// files for download and render the example inline:
//
//   public/email/harveys-mailchimp-flyer.html      byte-identical copy
//   public/email/examples/bird-feeding-month.html  byte-identical copy
//   public/email/preview/bird-feeding-month.html   merge tags resolved with
//                                                  sample values, for the
//                                                  site's inline preview
//
// It runs before every CRA build. Hand edits under public/email are
// overwritten — edit templates/email instead.
//
//   node scripts/sync-email.mjs          publish
//   node scripts/sync-email.mjs --check  exit 1 on any divergence
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "templates", "email");
const DEST = join(root, "public", "email");
const check = process.argv.includes("--check");

const COPIES = ["harveys-mailchimp-flyer.html", "examples/bird-feeding-month.html"];

// Sample values for the inline preview only. Mailchimp fills the real ones
// at send time. The year is the campaign's, not today's, so the output is
// stable and --check stays meaningful.
const PREVIEW_TAGS = {
  "*|MC:SUBJECT|*": "Celebrate National Bird Feeding Month",
  "*|MC_PREVIEW_TEXT|*": "Sales on Harvey Bird, Black Sunflower, Bird Feeders &amp; more!",
  "*|CURRENT_YEAR|*": "2026",
  "*|LIST:ADDRESSLINE|*": "PO Box 189 &middot; 729 W Main Street &middot; Carson City, MI 48811",
  "*|ARCHIVE|*": "#",
  "*|UNSUB|*": "#",
  "*|UPDATE_PROFILE|*": "#",
};

function resolvePreview(html) {
  // Drop the conditional markers; the hidden preview span stays with sample text.
  let out = html.replace(/<!--\*\|IF:MC_PREVIEW_TEXT\|\*-->\n?/, "").replace(/<!--\*\|END:IF\|\*-->\n?/, "");
  for (const [tag, value] of Object.entries(PREVIEW_TAGS)) {
    out = out.split(tag).join(value);
  }
  const left = out.match(/\*\|[A-Z_:]+\|\*/g);
  if (left) {
    throw new Error(`unresolved merge tags in preview: ${[...new Set(left)].join(", ")}`);
  }
  return out;
}

const outputs = COPIES.map((rel) => [join(DEST, rel), readFileSync(join(SRC, rel), "utf8")]);
outputs.push([
  join(DEST, "preview", "bird-feeding-month.html"),
  resolvePreview(readFileSync(join(SRC, "examples", "bird-feeding-month.html"), "utf8")),
]);

let drift = 0;
for (const [path, want] of outputs) {
  const have = existsSync(path) ? readFileSync(path, "utf8") : null;
  if (have === want) continue;
  drift++;
  if (check) {
    console.error(`drift: ${path.slice(root.length + 1)}`);
  } else {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, want);
  }
}

if (check && drift) {
  console.error(`sync-email --check: ${drift} file(s) diverged — run node scripts/sync-email.mjs`);
  process.exit(1);
}
console.log(
  check ? "sync-email --check: clean" : `sync-email: ${drift} file(s) updated, ${outputs.length} total`
);
