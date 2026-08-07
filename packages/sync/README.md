# brand-sync — the vendoring channel (ADR 0003)

`brand-sync.mjs` copies declared brand artifacts from this repo's **master**
branch into a consumer repo, records the source commit and per-file sha256
hashes in the consumer's `brand-sync.json`, and detects drift both ways:

- `--check` **fails** on locally modified vendored files (fix upstream, then
  re-sync — never patch the copy) and **warns** when upstream master has
  moved past the pinned commit (consumers upgrade on their own cadence).
- `--sync` re-clones master (or `--from <local-clone>` for pre-merge
  testing) and rewrites the pins.

Bootstrap a consumer:

1. Copy `brand-sync.mjs` to `<consumer>/scripts/brand-sync.mjs` (vendoring
   the vendoring script is deliberate — no install-time dependency).
2. Write `<consumer>/brand-sync.json` with the `takes` the repo needs.
   Typical sets —
   - Tailwind+shadcn consumer: `tokens.css`, `tailwind-preset.cjs`,
     `tokens.ts`, plus individual `packages/ui/src/*.js` components.
   - Tokens-only consumer (no Tailwind): `tokens.css` and/or `tokens.json`.
   - Docs refresh: `DESIGN.md`, `.design-sync/conventions.md`,
     `.design-sync/docs/`.
3. Run `--sync`, commit the vendored files **and** the manifest, and add
   `--check` to the consumer's test script so drift fails CI.

Never add a `takes` path inside a consumer's frozen zones (e.g. any file
importing `@react-pdf/renderer` in the labeler).

Why vendoring: consumers deploy from committed code (Vercel), clone access
is the universal credential (ADR 0001), and the recorded-SHA + hash + parity
tests answer ADR 0001's original objection that vendored copies drift
silently.
