import React from "react";

export default function Origins() {
  return (
    <React.Fragment>
      <>
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
                Our origins
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              A LONG WAY FROM A LITTLE MILL ON FISH CREEK
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 text-xl">
              What began as a sawmill in 1866 evolved into a gristmill before
              Harvey Waldron transformed it into a livestock feed operation in
              1945. With that shift, Harvey’s became more than just a place of
              business—it became a cornerstone of the agricultural community.
            </p>
            <div className="relative" style={{ height: 512 }}>
              <img
                className="relative w-full object-cover h-full"
                src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/history-1.jpg"
                alt
              />
            </div>
            <div className="py-20 relative" style={{ height: 512 }}>
              <img
                className="relative w-full object-cover h-full"
                src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/history-2-1.jpg"
                alt
              />
            </div>
            <h6 className="font-bold mb-4 font-heading uppercase tracking-widest text-4xl text-center">
              upholding tradition
            </h6>
            <p className="text-center mx-auto max-w-lg text-gray-600 text-xl">
              Today, Harvey’s remains a family-owned, community-driven business
              that stands by the same principles it was founded on —Quality,
              integrity, and service—values that remain at the core of
              everything we do.
            </p>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
