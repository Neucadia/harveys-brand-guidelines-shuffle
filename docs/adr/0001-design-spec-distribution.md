# DESIGN.md is the canonical agent-facing Design Spec, distributed as a Claude Code plugin

Fellow employees need to Harvey's-theme their own projects with AI agents. We
committed the formerly untracked Stitch aesthetic spec as root `DESIGN.md` and
made this repo a Claude Code plugin marketplace (`.claude-plugin/` +
`skills/harveys-brand/`) so Claude users get a live, updatable channel
(`claude plugin marketplace add Neucadia/harveys-brand-guidelines-shuffle`,
then `claude plugin install harveys-brand@harveys`), while Gemini and Codex
users take a shallow-git-clone snapshot of the same file referenced from
`GEMINI.md` / `AGENTS.md`. Plain git was chosen over `gh api` because the
team's machines are not guaranteed to have the gh CLI, and repo clone access
is the one credential every consumer already has.

## Considered Options

- **`npx skills add` (Vercel skills.sh)** — one command, but community-owned,
  not first-party, and unverified against private org repos.
- **Vendored copies only** — identical mental model for every vendor, but
  consuming repos drift silently as the brand evolves.
- **design-sync only** — already ships components to claude.ai/design, but
  doesn't reach agents working inside colleagues' repos.

## Consequences

- The marketplace and plugin names (`harveys`, `harveys-brand`) are public API
  for every consuming repo — renaming them breaks installs.
- `DESIGN.md` must stay stack-agnostic; code idiom for the component bundle
  stays in `.design-sync/conventions.md` (the separate DS Bundle channel).
- Consumers need git clone access to the Neucadia repo — nothing more.
- The GitHub default branch is `master`, and `claude plugin marketplace add`
  clones the default branch — the plugin scaffolding must stay present on
  `master`, not just `main`.
