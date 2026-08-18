# The Harvey's brand plugin — install, use, update, publish

The repo doubles as a Claude Code plugin marketplace. The plugin
(`harveys-brand@harveys`, currently **v1.2.0**) delivers the Design Spec and
the retheme kit to any agent working in a consumer repo: `DESIGN.md`, the
`harveys-brand` skill, and its references (`retheming.md`, `tokens.md`,
`decisions.md`, `dataviz.md`) plus `.design-sync/conventions.md`.

Names are public API (ADR 0001): the marketplace is `harveys`, the plugin is
`harveys-brand`, and the GitHub **default branch is `master`** — installs and
updates clone the default branch, so nothing ships until it is merged there.

## Install (once per project)

```bash
claude plugin marketplace add Neucadia/harveys-brand-guidelines-shuffle   # once per machine
claude plugin install harveys-brand@harveys --scope project
```

- Clone access to the Neucadia repo is the only credential needed.
- `--scope project` writes the binding into the consumer's
  `.claude/settings.json` — **commit that file**, or the plugin exists only
  on your machine (this bit one consumer already).
- Never register a *local-path* marketplace under the name `harveys`; the
  GitHub one is already registered on team machines and the name collision
  breaks updates.

## Use

Nothing to invoke by hand. Once installed, the `harveys-brand` skill loads
whenever styling comes up. Its routing:

- **Quick touch** (a component, a page, "make this on-brand"): the agent
  reads `DESIGN.md` in full, then `tokens.md` for name → hex and
  `conventions.md` for the recipes.
- **Full retheme** (anything that recolors across multiple files): the agent
  must follow `retheming.md` end to end — semantics first, census, token
  layer as its own commit, a provably total and idempotent mechanical pass,
  gates, adversarial review. Ask for it in these words:

  > Retheme this app to the Harvey's brand. Follow the Harvey's retheming
  > procedure end to end: settle semantics and the token layer first, make
  > the mechanical pass total and idempotent, then verify every page with
  > screenshots before calling it done.

- Brand-vs-domain conflicts are pre-resolved in `decisions.md` (DR-1 Data
  Red, DR-2 wheat naming, DR-3 chip tiers, DR-4 focus ring) — agents cite
  those instead of re-arguing them. Chart work reads `dataviz.md`.

The React components are **not** in the plugin: vendor them from
`packages/ui` + `packages/tokens` with `packages/sync/brand-sync.mjs`
(ADR 0003, `packages/sync/README.md`), and browse previews in the Claude
Design project via design-sync.

## Update (consumer side)

```bash
claude plugin marketplace update harveys
```

Pulls the current `master`. If content looks stale, the usual cause is that
a change is still only on `develop`. Gemini/Codex snapshot consumers
re-run the fetch block from the site's Agent Help section; vendored
components refresh with `node scripts/brand-sync.mjs --sync`.

## Publish (maintainer side)

1. Land content on `develop` as usual (spec, skill references, kit).
2. **Bump the version** in `.claude-plugin/plugin.json` (semver: docs/spec
   additions = minor, typo-level = patch, breaking renames of files that
   consumers reference = major). The marketplace UI keys off this — an
   unbumped version can cache as "already current".
3. Regenerate anything derived: `npm run tokens` (if `DESIGN.md` frontmatter
   changed) and `npm run css`; run `node --test packages/tokens/tokens.test.mjs`.
4. **Merge `develop` → `master` and push** — this *is* the publish act.
   The `.claude-plugin/` scaffolding must always remain present on `master`.
5. Consumers pick it up with `claude plugin marketplace update harveys`.
   Announce breaking reference renames in the commit message — the snapshot
   echo lines in `GEMINI.md`/`AGENTS.md` files point at fixed paths.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Teammate doesn't have the skill | consumer's `.claude/settings.json` not committed |
| Update pulls nothing new | change not merged to `master`, or version not bumped |
| `marketplace add` fails | no clone access to the Neucadia repo, or a stale local-path marketplace named `harveys` is registered |
| Agent styles off-spec despite plugin | it skipped the skill — re-ask using the retheme prompt above, which names the procedure |
