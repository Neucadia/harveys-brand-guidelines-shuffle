# Context — Harvey's Brand Guidelines

Glossary of terms as we use them in this repo. Keep implementation detail out;
this is language only.

## Terms

### Design Spec
The single canonical, stack-agnostic description of the Harvey's brand for
consumption by AI agents in *other* projects: palette, typography, component
stylings, layout principles, and voice. Lives as `DESIGN.md`. It describes the
brand, not any particular codebase — a consumer may be React, Rails, or a
static page.

### DS Bundle
The design-sync export of the actual React components (`window.HarveysBrand`),
styles, and per-component docs. A *separate channel* from the Design Spec:
the DS Bundle ships working components to design tooling; the Design Spec
ships brand knowledge to agents. Not shared via git.

### Brand Guidelines (site)
The single-page site this repo builds — the human-facing presentation of the
brand, composed of stacked full-width sections.

### Section
One full-width band of the Brand Guidelines site (Hero, Colors, Writing, …).
Sections are the unit of page composition.

### Agent Help
The feature (and eventual bottom-of-page Section) that tells fellow developers
how to point their own AI agents at the Design Spec.

### Brand Plugin
The live distribution channel for Claude users: this repo exposed as a Claude
Code plugin marketplace whose plugin ships a skill wrapping the Design Spec.
Installing it gives a consuming project an updatable subscription to the brand.

### Snapshot
A point-in-time copy of the Design Spec fetched into a consuming repo (the
Google/OpenAI path, and the fallback for anyone). Refreshed by re-running the
fetch; expected to drift between refreshes.
