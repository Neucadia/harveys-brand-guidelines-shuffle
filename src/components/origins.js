import React from "react";

export default function Origins() {
  return (
    <React.Fragment>
      <>
        <section className="pt-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 py-1 px-2 font-semibold inline-block">
                Our origins
              </div>
            </div>
            <h2 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              A LONG WAY FROM A LITTLE MILL ON FISH CREEK
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6 text-xl">
              What began as a sawmill in 1866 evolved into a gristmill before
              Harvey Waldron transformed it into a livestock feed operation in
              1945. With that shift, Harvey’s became more than just a place of
              business—it became a cornerstone of the agricultural community.
            </p>
            <div className="relative" style={{ height: 512 }}>
              <img
                className="relative w-full object-cover h-full"
                src="/images/history-mill-crew.jpg"
                alt="History mill crew"
              />
            </div>
          </div>
        </section>
        <section className="pt-20 pb-10 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-6 text-center lg:text-5xl max-w-2xl lg:max-w-5xl mx-auto uppercase tracking-widest">
                upholding tradition
              </h2>
              <div className="flex items-center justify-center">
                <div className="mr-4"></div>
                <div className="text-left">
                  <p className="text-gray-600 text-xl text-center">
                    Today, Harvey’s remains a family-owned, community-driven
                    business that stands by the same principles it was founded
                    on —Quality, integrity, and service—values that remain at
                    the core of everything we do.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 relative">
              <img
                className="w-full object-cover mx-auto"
                src="/images/history-mill-drawing.jpg"
                alt="History mill drawing"
              />
            </div>
          </div>
          <div className="container mx-auto px-4"></div>
        </section>
        <section className="pt-10 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/3 p-4">
                <ul>
                  <li className="mb-6">
                    <h2
                      className="font-bold font-heading text-4xl lg:text-5xl max-w-2xl lg:max-w-5xl mx-auto uppercase tracking-widest text-green-500 text-green-500"
                    >
                      honoring the past, forging the future
                    </h2>
                  </li>
                  <li className="mb-6 text-black">
                    <p className="text-gray-600 text-xl">
                      Over the decades, we’ve evolved to meet the needs of our
                      customers, growing from a small feed operation into a
                      multi-division company offering Feed, Seed, Commodities,
                      Garden, and Retail services.
                    </p>
                  </li>
                </ul>
                <img
                  className="w-full object-cover"
                  style={{ height: 445 }}
                  src="/images/garden-center-flats.jpg"
                  alt="Garden center flats"
                />
              </div>
              <div className="w-full lg:w-2/3 p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full lg:w-1/3 p-4">
                    <img
                      src="/images/calf-in-barn.jpg"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 p-4">
                    <img
                      className="w-full object-cover"
                      style={{ height: 445 }}
                      src="/images/mill-exterior.jpg"
                      alt="Mill exterior"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 p-4">
                    <div className="relative">
                      <img
                        className="w-full object-cover"
                        style={{ height: 445 }}
                        src="/images/retail-apparel-wall.jpg"
                        alt="Retail apparel wall"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 p-4">
                    <div className="relative">
                      <img
                        className="w-full object-cover"
                        style={{ height: 445 }}
                        src="/images/food-plot-seed.jpg"
                        alt="Food plot seed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-6 text-center lg:text-5xl max-w-2xl lg:max-w-5xl mx-auto uppercase tracking-widest">
                Standing By farmers from the start
              </h2>
              <div className="flex items-center justify-center">
                <div className="mr-4"></div>
                <div className="text-left">
                  <p className="text-gray-600 text-xl text-center">
                    For generations, we’ve stood by our customers with
                    reliability, expertise, and an unwavering dedication to
                    their success. Because at Harvey’s, agriculture isn’t just
                    business—it’s a way of life.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 relative">
              <img
                className="w-full object-cover"
                src="/images/feed-bagging.jpg"
                alt="Feed bagging"
              />
            </div>
          </div>
          <div className="container mx-auto px-4"></div>
        </section>
      </>
    </React.Fragment>
  );
}
