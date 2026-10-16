import React from "react";

const LINKS = [
  ["#story", "Story"],
  ["#logos", "Logos"],
  ["#colors", "Colors"],
  ["#type", "Type"],
  ["#photography", "Photography"],
  ["#downloads", "Downloads"],
  ["#writing", "Voice"],
  ["#email", "Email"],
  ["#developers", "Developers"],
];

export default function Footer() {
  return (
    <footer className="py-16 bg-green-700 border-t border-green-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          <div className="w-full lg:w-1/2 p-4">
            <img
              className="h-12 w-auto mb-6"
              src="/images/lockup-horizontal-green.svg"
              alt="Harvey's"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-green-100 max-w-md mb-4">
              Questions about using the brand, or need a file that isn't here?
              Call the store and ask for marketing.
            </p>
            <p className="text-white font-semibold">
              <a className="hover:underline" href="tel:+19895843466">
                989.584.3466
              </a>
              <span className="text-green-100 font-normal"> · </span>
              <a
                className="hover:underline"
                href="https://harveymilling.com"
                target="_blank"
                rel="noreferrer"
              >
                harveymilling.com
              </a>
            </p>
            <p className="text-green-100 mt-2">
              729 W Main St, Carson City, MI 48811
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <p className="font-heading text-xs font-bold uppercase tracking-smallcaps text-green-100 mb-4">
              On this page
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 max-w-md">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <a className="text-white hover:underline" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-green-100 text-sm mt-8">
              Guidelines updated {__BUILD_DATE__}. The source and the design spec
              live on{" "}
              <a
                className="text-white hover:underline"
                href="https://github.com/Neucadia/harveys-brand-guidelines-shuffle"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
