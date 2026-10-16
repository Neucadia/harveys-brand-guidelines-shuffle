import React from "react";

export default function Hero() {
  return (
    <React.Fragment>
      <>
        <section
          id="story"
          className="py-20 bg-green-700 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/elements/contour-green.svg")',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-green-400 py-1 px-2 text-white font-semibold inline-block">
                Our Story
              </div>
            </div>
            <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              SERVING MID-MICHIGAN’S FARMING AND FEED NEEDS FOR 80 YEARS
            </h1>
            <p className="text-green-100 text-center max-w-xl mx-auto mb-6">
              We've refreshed the brand to carry us forth into the next 80 years
              of service.
            </p>
            <div className="flex flex-wrap justify-center gap-4" />
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
