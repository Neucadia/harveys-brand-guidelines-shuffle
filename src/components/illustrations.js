import React from "react";

export default function Illustrations() {
  return (
    <React.Fragment>
      <>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 px-2 py-1 font-bold inline-block">
                Illustrations
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto uppercase tracking-widest">
              Adding some personality
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Illustrations are great for in-house print materials as they use
              less ink than photography. We're currently sparse on our available
              assets, but we'll try to bring more Harvey options and guidelines
              in the future.
            </p>
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4 mx-auto">
                <div className="bg-gray-50 p-8">
                  <img
                    className="mb-6 w-full"
                    style={{ height: 223 }}
                    src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/HMC01.svg"
                    alt
                  />
                  <h3 className="text-green-500 text-xl font-bold text-center mb-2">
                    Harvey primary
                  </h3>
                  <p className="text-gray-500 text-center mb-6">
                    Use for in-house retail and Garden Center materials.
                  </p>
                  <a
                    className="px-6 py-3 text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200 hidden"
                    href="#"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
