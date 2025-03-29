import React from "react";

export default function Colors() {
  return (
    <React.Fragment>
      <>
        <section
          className="py-20 bg-yellow-500 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("cronos-assets/elements/lines2.svg")',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
                Colors
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Harvey's color palette
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
              We've simplified colors across the brands and chosen 6 muted,
              modern colors that should look great in print and digital.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
          </div>
        </section>
        <section className="pb-20 bg-yellow-500 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-black">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Black
                  </h2>
                  <p className="text-gray-500">
                    Pantone: <span className="font-bold">Black 6 C</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">48, 23, 0, 88</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">16, 24, 31</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold">#10181f</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gray-400">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Gray
                  </h2>
                  <p className="text-gray-500">
                    Pantone: <span className="font-bold">Col Grey 1 C</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">10,8,10,0</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">226,225,221</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold">#E2E1DD</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-green-700">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    green
                  </h2>
                  <p className="text-gray-500">
                    Pantone: <span className="font-bold">2411 C</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">60, 0, 49, 75</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">26, 65, 33</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold">#1A4121</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-orange-700">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    orange
                  </h2>
                  <p className="text-gray-500">
                    Pantone: <span className="font-bold">167 C</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">0, 58, 88, 25</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">192, 80, 23</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold">#C05017</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-yellow-700">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Wheat
                  </h2>
                  <p className="text-gray-500">
                    Pantone: <span className="font-bold">501 C</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">0, 6, 22, 14</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">220, 206, 171</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold">#D8C7A2</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-red-50">
                    <span className="text-xl font-bold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Cream
                  </h2>
                  <p className="text-gray-500">
                    Pantone:
                    <span className="font-bold">*use white for print*</span>
                  </p>
                  <p className="text-gray-500">
                    CMYK: <span className="font-bold">2, 7, 4, 0</span>
                  </p>
                  <p className="text-gray-500">
                    RGB: <span className="font-bold">246, 236, 235</span>
                  </p>
                  <p className="text-gray-500">
                    HEX: <span className="font-bold uppercase">#f6eceb</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
