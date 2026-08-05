import React, { useState } from "react";

const FETCH_SPEC = [
  "rm -rf /tmp/harveys-brand && git clone --depth 1 \\",
  "  https://github.com/Neucadia/harveys-brand-guidelines-shuffle /tmp/harveys-brand",
  "mkdir -p docs && cp /tmp/harveys-brand/DESIGN.md docs/HARVEYS-DESIGN.md",
  "rm -rf /tmp/harveys-brand",
].join("\n");

const CLAUDE_COMMANDS = [
  "claude plugin marketplace add Neucadia/harveys-brand-guidelines-shuffle",
  "claude plugin install harveys-brand@harveys --scope project",
].join("\n");

const GEMINI_COMMANDS =
  FETCH_SPEC + "\n" + 'echo "@./docs/HARVEYS-DESIGN.md" >> GEMINI.md';

const AGENTS_COMMANDS =
  FETCH_SPEC +
  "\n" +
  'echo "Harvey\'s brand: read docs/HARVEYS-DESIGN.md before styling UI" >> AGENTS.md';

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
              note="Install the brand as a project-scoped plugin. The harveys-brand skill loads whenever styling comes up and reads the spec straight from this repo."
              command={CLAUDE_COMMANDS}
            />
            <CommandBlock
              vendor="Gemini CLI"
              note="Fetch the spec into your repo, then let GEMINI.md import it."
              command={GEMINI_COMMANDS}
            />
            <CommandBlock
              vendor="OpenAI Codex"
              note="Same fetch, plus a pointer in AGENTS.md — Cursor and GitHub Copilot read the same file."
              command={AGENTS_COMMANDS}
            />
            <div className="flex flex-wrap -m-4 mt-0">
              <div className="w-full md:w-1/2 p-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-widest text-white mb-2">
                  What your agent gets
                </h3>
                <p className="text-green-100">
                  DESIGN.md, the canonical design spec: the palette with print
                  equivalents, typography rules, component stylings, layout
                  principles, and our voice.
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
                  The React UI kit ships separately through design-sync — find
                  Harvey's in Claude Design, or start from
                  .design-sync/conventions.md in this repo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
