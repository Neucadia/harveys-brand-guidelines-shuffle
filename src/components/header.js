import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <>
        <section className="bg-gradient-to-b from-white to-yellow-50">
          <div className>
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-5 -px-4 relative">
                <div className="w-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto mr-14">
                      <a href="#">
                        <img
                          src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/H-Harveys-Green.svg"
                          alt
                          className="w-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                      <ul className="flex items-center">
                        <li className="mr-9 text-sm hover:text-gray-700">
                          <a href="#">Story</a>
                        </li>
                        <li className="mr-9 text-sm hover:text-gray-700">
                          <a href="#">Visuals</a>
                        </li>
                        <li className="mr-9 text-sm hover:text-gray-700">
                          <a href="#">Writing</a>
                        </li>
                        <li className="text-sm hover:text-gray-700">
                          <a href="#">Architecture</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-auto">
                  <div className="hidden lg:block">
                    <div className="inline-block" />
                  </div>
                  <div className="lg:hidden flex items-center">
                    <button>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                          fill="#006251"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                <div className="fixed inset-0 bg-gray-800 opacity-80" />
                <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                  <div className="flex flex-wrap h-full">
                    <div className="w-full">
                      <div className="flex items-center justify-between -m-2 mb-10">
                        <div className="w-auto p-2">
                          <a className="inline-block" href="#">
                            <img
                              src="cronos-assets/logos/cronos-logo.svg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="w-auto p-2">
                          <button>
                            <svg
                              style={{ width: 18, height: 18 }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <ul>
                          <li className="mb-6">
                            <a className="text-sm hover:text-gray-700" href="#">
                              About
                            </a>
                          </li>
                          <li className="mb-6">
                            <a className="text-sm hover:text-gray-700" href="#">
                              Company
                            </a>
                          </li>
                          <li className="mb-6">
                            <a className="text-sm hover:text-gray-700" href="#">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="text-sm hover:text-gray-700" href="#">
                              Testimonials
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end w-full pb-8">
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="block">
                            <a
                              className="px-6 py-3 block text-center bg-green-500 text-white text-sm font-bold w-full mb-6 hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-200"
                              href="#"
                            >
                              Try 14 Days Free Trial
                            </a>
                            <p className="text-sm mb-4 text-center text-gray-500">
                              © 2021 All rights reserved.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-12">
            <h1 className="text-center text-green-900 text-5xl lg:text-6xl font-bold max-w-sm lg:max-w-lg mx-auto mb-10">
              <span className>Brand </span>
              <span className="text-green-500">Guidelines</span>
            </h1>
            <div className="flex flex-wrap justify-center -m-4" />
          </div>
        </section>
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/2 p-4">
                <div className="inline-block px-2 py-1 font-bold mb-6 bg-orange-500 text-white">
                  Harvey's Rebrand
                </div>
                <h1 className="font-heading text-4xl font-bold mb-6 max-w-sm tracking-widest uppercase">
                  Why now?
                </h1>
                <p className="text-gray-500 max-w-md">
                  Harvey’s has expanded its offerings and portfolio in recent
                  years and needs to communicate alignment of organizational
                  structure. The old identities were pieced together over many
                  years with different collaborators and lacked a unifying
                  concept.
                </p>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <div className="flex flex-wrap -m-4"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
