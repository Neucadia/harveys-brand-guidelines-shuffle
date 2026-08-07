#!/usr/bin/env node
// Rewrites the kit's private-Tailwind-scale color classes to the semantic
// hb-* utilities defined by packages/tokens/dist/tailwind-preset.cjs.
// Classname → classname (not hex): the private scale has duplicate hex
// positions, so only the classname mapping is unambiguous.
//
//   node scripts/codemods/semantic-classes.mjs --dry   report only
//   node scripts/codemods/semantic-classes.mjs         rewrite in place
//   ... [files]                                        default: packages/ui/src/*.js
//
// Provably total: --dry must report 0 unknown color utilities before an
// apply is trusted. Provably idempotent: a second run reports 0 replacements.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const DEFAULT_DIR = join(here, "..", "..", "packages", "ui", "src");

// The sanctioned classname → semantic mapping (skills/harveys-brand/references/tokens.md).
// gray-200/300 (#e2e2dd) normalize onto neutral-gray #e2e1dd — a one-digit
// historical drift, visually identical.
const MAP = {
  "green-50": "hb-success-tint",
  "green-100": "hb-on-primary-muted",
  "green-200": "hb-success-bg",
  "green-300": "hb-focus-ring",
  "green-500": "hb-primary-interactive",
  "green-600": "hb-primary-hover",
  "green-700": "hb-primary",
  "green-800": "hb-primary",
  "yellow-50": "hb-wheat-pale",
  "yellow-100": "hb-wheat",
  "yellow-500": "hb-wheat-light",
  "orange-200": "hb-warning-bg",
  "orange-400": "hb-ember-hover",
  "orange-500": "hb-secondary-interactive",
  "orange-700": "hb-secondary",
  "orange-800": "hb-secondary",
  "orange-900": "hb-secondary",
  "orange-950": "hb-ember-text",
  "red-50": "hb-cream",
  "gray-50": "hb-surface-panel",
  "gray-200": "hb-neutral-gray",
  "gray-300": "hb-neutral-gray",
  "gray-400": "hb-neutral-gray",
  "gray-500": "hb-text-secondary",
  "gray-600": "hb-text-tertiary",
  sand: "hb-sand",
  hairline: "hb-border",
  black: "hb-ink",
  "success-tint-border": "hb-success-tint-border",
  "warning-tint": "hb-warning-tint",
  "warning-tint-border": "hb-warning-tint-border",
  "info-tint": "hb-info-tint",
  "info-tint-border": "hb-info-tint-border",
  "info-strong": "hb-info-strong",
};

const PREFIXES =
  "(?:bg|text|border|ring|fill|stroke|placeholder|divide|outline|decoration|caret|accent|from|via|to)";
// Color token after a utility prefix; not followed by '/<alpha>' (the
// bg-black/80 scrim stays literal on purpose) or more word chars.
const TOKEN =
  "((?:green|yellow|orange|red|gray)-(?:50|100|200|300|400|500|600|700|800|900|950)|sand|hairline|black|success-tint-border|warning-tint-border|warning-tint|info-tint-border|info-tint|info-strong)";
const RE = new RegExp(`(${PREFIXES}-)${TOKEN}(?![\\w/-])`, "g");
const UNKNOWN_RE = new RegExp(
  `(?:${PREFIXES})-((?:green|yellow|orange|red|gray)-[0-9]+)(?![\\w-])`,
  "g"
);

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const files = args.filter((a) => !a.startsWith("--"));
const targets = files.length
  ? files
  : readdirSync(DEFAULT_DIR)
      .filter((f) => f.endsWith(".js"))
      .map((f) => join(DEFAULT_DIR, f));

let totalRepl = 0;
const unknowns = new Map();
for (const file of targets) {
  const src = readFileSync(file, "utf8");
  let count = 0;
  const out = src.replace(RE, (all, prefix, token) => {
    if (!MAP[token]) return all;
    count++;
    return `${prefix}${MAP[token]}`;
  });
  for (const m of out.matchAll(UNKNOWN_RE)) {
    unknowns.set(m[1], (unknowns.get(m[1]) || 0) + 1);
  }
  totalRepl += count;
  if (!dry && count) writeFileSync(file, out);
}

console.log(`${dry ? "[dry] " : ""}replacements: ${totalRepl} across ${targets.length} files`);
if (unknowns.size) {
  console.error("UNKNOWN color utilities (map them or take them to Phase 0):");
  for (const [k, n] of unknowns) console.error(`  ${k} ×${n}`);
  process.exit(1);
}
console.log("unknowns: 0");
