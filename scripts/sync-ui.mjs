#!/usr/bin/env node
// packages/ui/src is the kit's source of truth; src/components/ui is a
// generated, byte-identical copy kept so CRA compiles from src/ (CRA5 cannot
// transpile workspace JSX) and so agents find the kit where it has always
// lived. This script maintains the copy. It runs before every CRA build and
// inside the design-sync buildCmd, so hand edits to the copy are overwritten
// — edit packages/ui/src instead.
//
//   node scripts/sync-ui.mjs          copy packages/ui/src → src/components/ui
//   node scripts/sync-ui.mjs --check  exit 1 on any divergence (CI/hygiene)
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "packages", "ui", "src");
const DEST = join(root, "src", "components", "ui");

const check = process.argv.includes("--check");
const files = readdirSync(SRC).filter((f) => f.endsWith(".js"));
let drift = 0;
for (const f of files) {
  const want = readFileSync(join(SRC, f), "utf8");
  const destPath = join(DEST, f);
  const have = existsSync(destPath) ? readFileSync(destPath, "utf8") : null;
  if (have !== want) {
    drift++;
    if (check) console.error(`drift: ${f}`);
    else writeFileSync(destPath, want);
  }
}
// files present in the copy but not in the source are NOT deleted
// automatically — removing a kit file is a deliberate act; do it in both.
const extra = readdirSync(DEST).filter(
  (f) => f.endsWith(".js") && !files.includes(f)
);
if (extra.length) console.warn(`copy has files missing from source: ${extra.join(", ")}`);

if (check && drift) {
  console.error(`sync-ui --check: ${drift} file(s) diverged — run node scripts/sync-ui.mjs`);
  process.exit(1);
}
console.log(check ? "sync-ui --check: clean" : `sync-ui: ${drift} file(s) updated, ${files.length} total`);
