import React from "react";

export default function IndexSectionApplication16() {
  return (
    <React.Fragment>
      <>
        <section className="relative bg-green-700 py-20">
          {" "}
          <div className="container mx-auto px-4 text-center">
            {" "}
            <div className="max-w-5xl mx-auto">
              {" "}
              <div className="flex justify-center mb-6">
                {" "}
                <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
                  Iconography
                </div>{" "}
              </div>{" "}
              <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold text-white max-w-2xl lg:max-w-6xl mx-auto mb-4 uppercase tracking-widest">
                Icons
              </h1>{" "}
              <p className="text-green-100 text-center max-w-xl mx-auto mb-6">
                There are times when an icon can greatly enhance the utility of
                a piece of UI; however, most of the time icons are used
                superfluously, so we'll offer a download—but use sparingly.
              </p>{" "}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  className="px-6 py-3 block text-center w-full sm:w-auto bg-yellow-500 text-sm font-bold hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
                  href="#"
                >
                  Download Icon Images
                </a>
                <a
                  className="px-6 py-3 block text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200"
                  href="#"
                >
                  Download Icon Font
                </a>
              </div>{" "}
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
