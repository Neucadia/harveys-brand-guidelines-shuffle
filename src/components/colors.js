import React from "react";

function CopyValue({ value }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <span className="inline-flex items-center gap-2">
      <span className="font-semibold">{value}</span>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${value}`}
        className="font-heading text-xs font-bold uppercase tracking-smallcaps text-green-500 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}

export default function Colors() {
  return (
    <React.Fragment>
      <>
        <section id="colors"
          className="py-20 bg-yellow-500 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/elements/contour-wheat.svg")',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 py-1 px-2 font-semibold inline-block">
                Colors
              </div>
            </div>
            <h2 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Harvey's color palette
            </h2>
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
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Black
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="Black 6" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="48, 23, 0, 88" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="16, 24, 31" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#10181F" />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gray-400">
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Gray
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="Cool Grey 4" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="10,8,10,0" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="226,225,221" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#E2E1DD" />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-green-700">
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    green
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="2411 C" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="60, 0, 49, 75" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="26, 65, 33" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#1A4121" />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-orange-700">
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    orange
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="167" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="0, 58, 88, 25" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="192, 80, 23" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#C05017" />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-yellow-700">
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Wheat
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="453" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="0, 6, 22, 14" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="216, 199, 162" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#D8C7A2" />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white p-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-red-50">
                    <span className="text-xl font-semibold text-white" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-6 uppercase tracking-widest">
                    Cream
                  </h2>
                  <p className="text-gray-500">
                    PMS: <CopyValue value="use white for print" />
                  </p>
                  <p className="text-gray-500">
                    CMYK: <CopyValue value="2, 7, 4, 0" />
                  </p>
                  <p className="text-gray-500">
                    RGB: <CopyValue value="246, 236, 235" />
                  </p>
                  <p className="text-gray-500">
                    HEX: <CopyValue value="#F6ECEB" />
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
