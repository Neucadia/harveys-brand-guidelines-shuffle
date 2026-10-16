import React from "react";

export default function DevelopersDivider() {
  return (
    <section id="developers" className="py-20 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="bg-green-400 py-1 px-2 text-white font-semibold inline-block">
            For developers
          </div>
        </div>
        <h2 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
          Build with the brand
        </h2>
        <p className="text-green-100 text-center max-w-xl mx-auto">
          Everything below this line is for people writing code: the component
          kit, the interaction patterns, and the one-command setup that hands
          the design spec to an AI agent. Partners and printers have what they
          need above.
        </p>
      </div>
    </section>
  );
}
