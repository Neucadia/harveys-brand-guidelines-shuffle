import React from "react";

export default function Name() {
  return (
    <React.Fragment>
      <>
        <section id="story" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -m-4">
              <div className="w-full lg:w-1/2 p-4">
                <div className="lg:max-w-md lg:mr-auto relative">
                  <img
                    className="w-full object-cover h-full"
                    src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/H-Stacked-04-Black.svg"
                    alt
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <h1 className="font-heading font-bold text-4xl mb-16 max-w-md uppercase tracking-widest">
                  Our Name
                </h1>
                <div className="flex gap-4 mb-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L11 14.5L17 8.5"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-bold mb-3">We are Harvey's</h2>
                    <p className="text-gray-500 max-w-sm">
                      Named after a former owner, the Harvey's moniker has been
                      around since 1967.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L11 14.5L17 8.5"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-bold mb-3">
                      Always a capital ‘H’ and apostrophe ‘s’
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                      Take care to use correct grammar. The logo is in uppercase
                      but in regular writing we don't use all-caps.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="#c02617"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-bold mb-3">
                      No Harvey Milling
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                      We're dropping 'Harvey Milling' from all public branding.
                      Harvey Milling will still appear on billing and tax
                      documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
