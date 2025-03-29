import React from "react";

export default function DataVisualization() {
  return (
    <React.Fragment>
      <>
        <section
          className="py-20 bg-yellow-50 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("cronos-assets/elements/lines.svg")' }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
                Data Visualization
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Sometimes we need to show how good we are
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
              A large part of Harvey's business comes down to selecting product
              lines that perform in the real world and we often have to tell
              that story through graphs and charts.
            </p>
            <div className="w-1/2 mx-auto bg-white p-10">
              <img
                src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/chart1.jpg"
                alt="chart.jpg"
              />
            </div>
            <div className="mx-auto pt-4 w-2/5">
              <p>
                Use brand green for the main product bar and use a putrid/light
                green for competitor products. All UI copy other than the title
                in regular TT Commons Pro. Use discretion with padding and
                margin as we know applications will be varied and complex.
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
