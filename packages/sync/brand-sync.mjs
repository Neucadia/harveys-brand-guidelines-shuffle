#!/usr/bin/env node
// Harvey's brand-sync — the vendoring channel for consumer repos (ADR 0003).
// Copies declared artifacts from this repo's master branch into a consumer,
// records the source commit + content hashes, and detects both local
// tampering and upstream staleness. Vendored (committed) code deliberately
// beats install-time git deps: Vercel builds need committed files, and clone
// access is the one credential every consumer has (ADR 0001).
//
// Consumer setup: copy this file to <consumer>/scripts/brand-sync.mjs and
// create <consumer>/brand-sync.json:
//   {
//     "source": "https://github.com/Neucadia/harveys-brand-guidelines-shuffle",
//     "branch": "master",
//     "takes": [
//       { "from": "packages/tokens/dist/tokens.css",  "to": "src/styles/harveys-tokens.css" },
//       { "from": "packages/tokens/dist/tokens.ts",   "to": "src/lib/harveys-tokens.ts" }
//     ],
//     "pinnedCommit": "",
//     "fileHashes": {}
//   }
//
//   node scripts/brand-sync.mjs --sync                 pull from master, rewrite pins
//   node scripts/brand-sync.mjs --sync --from <path>   pull from a local clone (pre-merge testing)
//   node scripts/brand-sync.mjs --check                fail on local edits; warn if upstream moved
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, cpSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";

const MANIFEST = "brand-sync.json";
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

const args = process.argv.slice(2);
const mode = args.includes("--sync") ? "sync" : args.includes("--check") ? "check" : null;
if (!mode) {
  console.error("usage: brand-sync.mjs --sync [--from <local-clone>] | --check");
  process.exit(2);
}
const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));

if (mode === "check") {
  let bad = 0;
  for (const t of manifest.takes) {
    if (!existsSync(t.to)) {
      console.error(`missing: ${t.to}`);
      bad++;
      continue;
    }
    const h = sha256(readFileSync(t.to));
    if (manifest.fileHashes[t.to] !== h) {
      console.error(`locally modified: ${t.to} (re-run --sync, or edit upstream)`);
      bad++;
    }
  }
  try {
    const remote = execFileSync(
      "git",
      ["ls-remote", manifest.source, manifest.branch || "master"],
      { encoding: "utf8" }
    ).split("\t")[0];
    if (remote && manifest.pinnedCommit && remote !== manifest.pinnedCommit) {
      console.warn(
        `note: upstream ${manifest.branch || "master"} is at ${remote.slice(0, 10)}, ` +
          `vendored from ${manifest.pinnedCommit.slice(0, 10)} — upgrade with --sync when ready`
      );
    }
  } catch {
    console.warn("note: could not reach upstream to compare pins (offline?)");
  }
  if (bad) process.exit(1);
  console.log(`brand-sync --check: ${manifest.takes.length} artifact(s) clean`);
  process.exit(0);
}

// --sync
const fromIdx = args.indexOf("--from");
let srcRoot;
let scratch = null;
if (fromIdx !== -1) {
  srcRoot = args[fromIdx + 1];
} else {
  scratch = join(tmpdir(), `harveys-brand-sync-${Date.now()}`);
  execFileSync("git", [
    "clone", "--depth", "1", "-b", manifest.branch || "master",
    manifest.source, scratch,
  ], { stdio: "inherit" });
  srcRoot = scratch;
}

const commit = execFileSync("git", ["-C", srcRoot, "rev-parse", "HEAD"], {
  encoding: "utf8",
}).trim();
for (const t of manifest.takes) {
  const from = join(srcRoot, t.from);
  if (!existsSync(from)) throw new Error(`source missing: ${t.from}`);
  mkdirSync(dirname(t.to), { recursive: true });
  cpSync(from, t.to);
  manifest.fileHashes[t.to] = sha256(readFileSync(t.to));
  console.log(`vendored: ${t.from} → ${t.to}`);
}
manifest.pinnedCommit = commit;
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
if (scratch) rmSync(scratch, { recursive: true, force: true });
console.log(`brand-sync --sync: ${manifest.takes.length} artifact(s) @ ${commit.slice(0, 10)}`);
