import React from "react";

const NAV = [
  ["#story", "Story"],
  ["#logos", "Logos"],
  ["#colors", "Colors"],
  ["#type", "Type"],
  ["#photography", "Photography"],
  ["#downloads", "Downloads"],
  ["#writing", "Voice"],
  ["#developers", "Developers"],
];

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <React.Fragment>
      <>
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-5 -px-4 relative">
                <div className="w-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto mr-14">
                      <a href="/">
                        <img
                          src="/images/lockup-horizontal-green.svg"
                          alt="Harvey's"
                          className="w-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ml-auto mr-8 2xl:ml-0 2xl:mr-0 2xl:absolute 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden xl:block">
                      <ul className="flex items-center">
                        {NAV.map(([href, label], i) => (
                          <li
                            key={href}
                            className={`text-sm hover:text-gray-700${i < NAV.length - 1 ? " mr-9" : ""}`}
                          >
                            <a href={href}>{label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-auto">
                  <div className="hidden xl:block">
                    <div className="inline-block" />
                  </div>
                  <div className="xl:hidden flex items-center">
                    <button
                      aria-label="Open menu"
                      onClick={() => {
                        setOpenMenu(true);
                      }}
                    >
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
                          fill="#296533"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${
                  openMenu ? "fixed" : "hidden"
                }`}
              >
                <div
                  className="fixed inset-0 bg-gray-800 opacity-80"
                  onClick={() => setOpenMenu(false)}
                />
                <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                  <div className="flex flex-wrap h-full">
                    <div className="w-full">
                      <div className="flex items-center justify-between -m-2 mb-10">
                        <div className="w-auto p-2">
                          <a className="inline-block" href="/">
                            <img
                              src="/images/lockup-horizontal-green.svg"
                              alt="Harvey's"
                              className="w-full"
                            />
                          </a>
                        </div>
                        <div className="w-auto p-2">
                          <button aria-label="Close menu" onClick={() => setOpenMenu(false)}>
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
                          {NAV.map(([href, label], i) => (
                            <li key={href} className={i < NAV.length - 1 ? "mb-6" : ""}>
                              <a
                                className="text-sm hover:text-gray-700"
                                href={href}
                                onClick={() => setOpenMenu(false)}
                              >
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end w-full pb-8"></div>
                  </div>
                </nav>
              </div>
            </div>
        </div>
        <section className="bg-yellow-50">
          <div className="container mx-auto mt-12">
            <h2 className="text-center text-green-900 text-5xl lg:text-6xl font-bold max-w-sm lg:max-w-lg mx-auto pb-10">
              <span>Brand </span>
              <span className="text-green-500">Guidelines</span>
            </h2>
            <div className="flex flex-wrap justify-center -m-4" />
          </div>
        </section>
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/2 p-4">
                <div className="inline-block px-2 py-1 font-semibold mb-6 bg-orange-500 text-white">
                  Harvey's Rebrand
                </div>
                <h2 className="font-heading text-4xl font-bold mb-6 max-w-sm tracking-widest uppercase">
                  Why now?
                </h2>
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
