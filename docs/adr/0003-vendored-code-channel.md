# Components and tokens ship to consumers as vendored code with recorded provenance

ADR 0001 gave the estate two distribution channels — the Design Spec
(DESIGN.md + skills, via plugin/clone-snapshot) and the DS Bundle
(design-sync → claude.ai/design) — and explicitly rejected "vendored copies
only" because consuming repos drift silently. But neither channel delivers
*installable code*: the 2026-08-06 consistency work needs the same Button and
StatusChip compiling inside multiple product repos, and this repo publishes
no package.

We added a third channel: `packages/tokens` (semantic `--hb-*` artifacts
generated from DESIGN.md's frontmatter) and `packages/ui` (the kit rewritten
onto those semantics) are **vendored** into consumers by
`packages/sync/brand-sync.mjs`, which records the source master commit and
per-file sha256 hashes in the consumer's `brand-sync.json`. Drift is answered
mechanically, not by discipline: `--check` fails the consumer's tests on
local tampering and warns on upstream movement, and each consumer carries a
token-parity test asserting its values round-trip to the vendored canon.

## Considered options

- **npm registry / GitHub Packages** — install-time auth on every deploy;
  the estate has no registry and Vercel builds need committed code.
- **pnpm git-subdirectory dependencies** — same deploy-time credential
  problem, plus one consumer is npm-only.
- **Live-import from the plugin install** — the plugin is a knowledge
  channel; its install location is machine-local and untracked in consumers.

## Consequences

- The brand repo's `master` is the only publishing act — nothing new to
  operate. Consumers upgrade deliberately by re-running `--sync`.
- `src/components/ui/` here is now a **generated copy** of
  `packages/ui/src` (`scripts/sync-ui.mjs`, wired into the CRA build and the
  design-sync buildCmd); the kit is edited in `packages/ui/src` only.
- The kit's classes are semantic (`hb-*`, with baked hex fallbacks), so a
  vendored component renders correctly even before a consumer loads
  `tokens.css` — and the private Tailwind scale stays un-exported, as
  `tokens.md` requires.
