import React, { useState } from "react";

const FETCH_SPEC = [
  "rm -rf /tmp/harveys-brand && git clone --depth 1 \\",
  "  https://github.com/Neucadia/harveys-brand-guidelines-shuffle /tmp/harveys-brand",
  "mkdir -p docs/harveys && cp /tmp/harveys-brand/DESIGN.md \\",
  "  /tmp/harveys-brand/skills/harveys-brand/references/retheming.md \\",
  "  /tmp/harveys-brand/skills/harveys-brand/references/tokens.md \\",
  "  /tmp/harveys-brand/skills/harveys-brand/references/decisions.md \\",
  "  /tmp/harveys-brand/.design-sync/conventions.md docs/harveys/",
  "rm -rf /tmp/harveys-brand",
].join("\n");

const CLAUDE_COMMANDS = [
  "claude plugin marketplace add Neucadia/harveys-brand-guidelines-shuffle",
  "claude plugin install harveys-brand@harveys --scope project",
].join("\n");

const GEMINI_COMMANDS =
  FETCH_SPEC +
  "\n" +
  'echo "@./docs/harveys/DESIGN.md" >> GEMINI.md\n' +
  'echo "Harvey\'s brand: for any retheme follow docs/harveys/retheming.md end to end — tokens.md maps names to hex, decisions.md pre-resolves brand-vs-domain conflicts, conventions.md has the usage recipes." >> GEMINI.md';

const AGENTS_COMMANDS =
  FETCH_SPEC +
  "\n" +
  'echo "Harvey\'s brand: read docs/harveys/DESIGN.md before styling UI. For a retheme, follow docs/harveys/retheming.md end to end (tokens.md = name-to-hex map, decisions.md = pre-resolved conflicts, conventions.md = usage recipes)." >> AGENTS.md';

const RETHEME_PROMPT = [
  "Retheme this app to the Harvey's brand. Follow the Harvey's retheming",
  "procedure end to end: settle semantics and the token layer first, make the",
  "mechanical pass total and idempotent, then verify every page with",
  "screenshots before calling it done.",
].join("\n");

function CommandBlock({ vendor, tag, note, command }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="font-heading text-xl font-bold uppercase tracking-widest text-white">
          {vendor}
        </h2>
        {tag && (
          <div className="bg-yellow-100 py-1 px-2 text-xs font-bold inline-block">
            {tag}
          </div>
        )}
      </div>
      <p className="text-green-100 mb-4 max-w-2xl">{note}</p>
      <div className="relative bg-black p-6">
        <button
          type="button"
          onClick={copy}
          className="absolute top-4 right-4 font-heading text-xs font-bold uppercase tracking-widest text-green-100 hover:text-white focus:ring focus:ring-green-300 transition duration-200"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <pre className="font-mono text-sm text-gray-200 overflow-x-auto pr-16">
          <code>{command}</code>
        </pre>
      </div>
    </div>
  );
}

export default function AgentHelp() {
  return (
    <React.Fragment>
      <section id="agent-help" className="py-20 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
              Agent help
            </div>
          </div>
          <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
            Theme your project
          </h1>
          <p className="text-green-100 text-center max-w-xl mx-auto mb-16">
            Give your AI agent the Harvey's design spec — colors, type, and
            voice — in one command. Our team works Claude-first, so start
            there; Google and OpenAI paths follow.
          </p>
          <div className="max-w-3xl mx-auto">
            <CommandBlock
              vendor="Claude Code"
              tag="Recommended"
              note="Install the brand as a project-scoped plugin. The harveys-brand skill loads whenever styling comes up, reads the spec straight from this repo, and walks the agent through the full retheme procedure."
              command={CLAUDE_COMMANDS}
            />
            <CommandBlock
              vendor="Gemini CLI"
              note="Fetch the spec and retheme kit into your repo, then let GEMINI.md import the spec and point at the rest."
              command={GEMINI_COMMANDS}
            />
            <CommandBlock
              vendor="OpenAI Codex"
              note="Same fetch, plus a pointer in AGENTS.md — Cursor and GitHub Copilot read the same file."
              command={AGENTS_COMMANDS}
            />
            <CommandBlock
              vendor="The prompt"
              note="After installing, ask for the retheme in these words — naming the procedure is what keeps results consistent. Works with every agent above."
              command={RETHEME_PROMPT}
            />
            <div className="flex flex-wrap -m-4 mt-0">
              <div className="w-full md:w-1/2 p-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-widest text-white mb-2">
                  What your agent gets
                </h3>
                <p className="text-green-100">
                  DESIGN.md, the canonical design spec, plus the retheme kit:
                  the step-by-step retheming procedure, the token crosswalk
                  (every name-to-hex mapping), pre-resolved brand decisions
                  like Data Red, and the component usage conventions.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-widest text-white mb-2">
                  Staying current
                </h3>
                <p className="text-green-100">
                  Claude installs track this repo — run{" "}
                  <code className="font-mono">
                    claude plugin marketplace update harveys
                  </code>{" "}
                  to refresh. Snapshots refresh by re-running the fetch.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-widest text-white mb-2">
                  Access
                </h3>
                <p className="text-green-100">
                  If you can clone this repo, every command here works — plain
                  git credentials, no extra tooling. Claude Code uses the same
                  access for the private marketplace.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-widest text-white mb-2">
                  Want the components too?
                </h3>
                <p className="text-green-100">
                  The React UI kit lives in packages/ui, styled by the
                  semantic tokens in packages/tokens — vendor both with
                  packages/sync/brand-sync.mjs (recorded provenance, drift
                  checks). Previews stay in Claude Design via design-sync;
                  usage rules in .design-sync/conventions.md.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
