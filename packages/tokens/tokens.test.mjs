// node --test packages/tokens/tokens.test.mjs
// Guards the committed dist/ against hand edits and drift: regenerating from
// DESIGN.md must reproduce dist byte-for-byte, and the preset's baked
// fallbacks must equal the css/json values.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, mkdtempSync, rmSync, cpSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const DIST = join(here, "dist");

test("dist regenerates byte-identically from DESIGN.md", () => {
  const tmp = mkdtempSync(join(tmpdir(), "hb-tokens-"));
  try {
    cpSync(join(here, "build.mjs"), join(tmp, "packages", "tokens", "build.mjs"));
    cpSync(join(here, "..", "..", "DESIGN.md"), join(tmp, "DESIGN.md"));
    execFileSync("node", [join(tmp, "packages", "tokens", "build.mjs")]);
    const fresh = join(tmp, "packages", "tokens", "dist");
    for (const f of readdirSync(DIST)) {
      assert.equal(
        readFileSync(join(DIST, f), "utf8"),
        readFileSync(join(fresh, f), "utf8"),
        `${f} diverges from a fresh regeneration — never hand-edit dist/`
      );
    }
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});

test("preset fallbacks equal css and json values", async () => {
  const { default: preset } = await import(
    join(DIST, "tailwind-preset.cjs")
  ).then((m) => ({ default: m.default || m }));
  const json = JSON.parse(readFileSync(join(DIST, "tokens.json"), "utf8"));
  const css = readFileSync(join(DIST, "tokens.css"), "utf8");
  const colors = preset.theme.extend.colors;
  for (const [name, hex] of Object.entries(json.colors)) {
    const key = `hb-${name}`;
    assert.equal(
      colors[key],
      `var(--hb-${name}, ${hex})`,
      `preset ${key} fallback mismatch`
    );
    assert.ok(css.includes(`--hb-${name}: ${hex};`), `css missing --hb-${name}`);
  }
  assert.equal(colors["hb-ink"], `var(--hb-black, ${json.colors.black})`);
  json.dataviz.categorical.forEach((hex, i) =>
    assert.equal(colors[`hb-cat-${i + 1}`], `var(--hb-cat-${i + 1}, ${hex})`)
  );
});

test("all color hexes are lowercase 6-digit (or rgba)", () => {
  const json = JSON.parse(readFileSync(join(DIST, "tokens.json"), "utf8"));
  for (const [name, v] of Object.entries(json.colors)) {
    assert.match(
      v,
      /^(#[0-9a-f]{6}|rgba\(\d+,\d+,\d+,[\d.]+\))$/,
      `${name}: ${v}`
    );
  }
});
