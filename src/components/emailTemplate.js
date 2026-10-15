import React, { useState } from "react";

const TEMPLATE_HREF = "/email/harveys-mailchimp-flyer.html";
const EXAMPLE_HREF = "/email/examples/bird-feeding-month.html";
const PREVIEW_SRC = "/email/preview/bird-feeding-month.html";
const GUIDE_HREF =
  "https://github.com/Neucadia/harveys-brand-guidelines-shuffle/blob/master/templates/email/README.md";

const VIEWS = {
  desktop: { label: "Desktop", width: 640 },
  mobile: { label: "Mobile", width: 375 },
};

function ViewToggle({ view, setView }) {
  return (
    <div
      role="group"
      aria-label="Preview width"
      className="inline-flex border border-gray-200"
    >
      {Object.entries(VIEWS).map(([key, { label }]) => {
        const selected = view === key;
        return (
          <button
            key={key}
            type="button"
            aria-pressed={selected}
            onClick={() => setView(key)}
            className={`px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 ${
              selected
                ? "bg-yellow-50 text-body ring-2 ring-inset ring-green-500"
                : "bg-white text-gray-500 hover:text-body"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function EmailTemplate() {
  const [view, setView] = useState("desktop");
  return (
    <React.Fragment>
      <section id="email" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 px-2 py-1 font-semibold">Email</div>
          </div>
          <h2 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
            Mailchimp template
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            One template turns a print flyer into a brand-correct email: hero,
            wheat strip, deal rows, an optional feature band, store info.
            Import it into Mailchimp once, then build each campaign from it.
            Catamaran and Open Sans stand in for Chakra Petch and TT Commons
            Pro, which cannot load in email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              className="px-6 py-3 block text-center w-full sm:w-auto bg-yellow-500 text-sm font-semibold hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
              href={TEMPLATE_HREF}
              download="harveys-mailchimp-flyer.html"
            >
              Download template
            </a>
            <a
              className="px-6 py-3 block text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-semibold hover:bg-orange-950 focus:ring focus:ring-orange-700 transition duration-200"
              href={EXAMPLE_HREF}
              download="bird-feeding-month.html"
            >
              Download example
            </a>
          </div>
          <div className="max-w-3xl mx-auto bg-white border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-gray-200">
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-smallcaps text-gray-500">
                  Example campaign
                </p>
                <p className="font-semibold">National Bird Feeding Month, February 2026</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <ViewToggle view={view} setView={setView} />
                <a
                  className="text-sm font-semibold text-green-500 hover:underline"
                  href={PREVIEW_SRC}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in a new tab
                </a>
              </div>
            </div>
            <div className="bg-gray-400 p-4 sm:p-8 flex justify-center">
              <iframe
                title="Example campaign: National Bird Feeding Month"
                src={PREVIEW_SRC}
                loading="lazy"
                sandbox="allow-popups allow-popups-to-escape-sandbox"
                className="block border-0 bg-white max-w-full"
                style={{ width: VIEWS[view].width, height: 720 }}
              />
            </div>
          </div>
          <p className="text-gray-500 text-center max-w-xl mx-auto mt-8">
            Export sizes, slot names, and the Mailchimp import steps are in the{" "}
            <a
              className="text-green-500 hover:underline"
              href={GUIDE_HREF}
              target="_blank"
              rel="noreferrer"
            >
              PSD-to-email guide
            </a>
            .
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
