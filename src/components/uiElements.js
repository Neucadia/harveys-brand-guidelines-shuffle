import React from "react";

export default function UIElements() {
  return (
    <React.Fragment>
      <>
        <section className="py-32 relative ">
          <div className="mb-10 flex lg:hidden">
            <img
              className="w-40"
              src="cronos-assets/elements/left-top-corner.svg"
              alt
            />
          </div>
          <img
            className="absolute hidden lg:block top-0 left-0"
            src="cronos-assets/elements/left-top-corner.svg"
            alt
          />
          <img
            className="absolute hidden lg:block top-0 right-0"
            src="cronos-assets/elements/right-top-corner.svg"
            alt
          />
          <img
            className="absolute hidden lg:block bottom-0 left-0"
            src="cronos-assets/elements/left-bottom-corner.svg"
            alt
          />
          <img
            className="absolute hidden lg:block bottom-0 right-0"
            src="cronos-assets/elements/right-bottom-corner.svg"
            alt
          />
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-yellow-100 px-2 py-1 font-bold">
                    UI Elements
                  </div>
                </div>
                <h2 className="font-heading text-center text-2xl font-bold mb-8 uppercase tracking-widest">
                  components
                </h2>
                <form action>
                  <label className="mb-1 text-gray-500" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="px-6 py-3 w-full border text-sm focus:ring focus:ring-gray-200 transition duration-200 outline-none mb-6 border-gray-200 placeholder-gray-400"
                    type="text"
                    name="email"
                    placeholder="E-Mail address"
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <input
                        className="custom-checkbox-1 opacity-0 absolute z-10 h-4 w-4"
                        id="terms"
                        type="checkbox"
                      />
                      <div className="bg-white text-white border border-gray-200 w-4 h-4 flex justify-center items-center rounded-sm">
                        <svg
                          className="hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M6 10l3 3l6-6"
                          />
                        </svg>
                      </div>
                    </div>
                    <label className="text-gray-600 text-sm" htmlFor="terms">
                      Checkbox
                    </label>
                  </div>
                  <button
                    className="mb-6 px-6 py-3 block text-center w-full bg-green-500 text-white text-sm font-bold hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-200"
                    type="submit"
                  >
                    Button
                  </button>
                  <button className="mb-6 px-6 py-3 block text-center w-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 focus:ring focus:ring-orange-300 transition duration-200">
                    Button
                  </button>
                  <div className="mb-6">
                    <label className="block mb-2 text-gray-500" htmlFor>
                      Label for textarea
                    </label>
                    <textarea
                      className="px-6 py-3 w-full border text-sm focus:ring focus:ring-gray-200 transition duration-200 outline-none border-gray-200 placeholder-gray-400"
                      name="field-name"
                      rows={3}
                      placeholder="Write something..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-gray-500" htmlFor>
                      Label for select
                    </label>
                    <select
                      className="px-6 py-3 w-full border border-gray-200 placeholder-gray-300 text-sm focus:ring focus:ring-gray-200 transition duration-200 outline-none cursor-pointer mb-6"
                      name="field-name"
                    >
                      <option>Option 1</option> <option>Option 2</option>
                      <option>Option 3</option> <option>Option 4</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-2">
                        <input
                          className="custom-radio-1 opacity-0 absolute z-10 h-4 w-4"
                          id="radio-1"
                          type="radio"
                        />
                        <div className="bg-white text-white border border-gray-200 w-4 h-4 flex justify-center items-center rounded-full">
                          <svg
                            className="hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <circle cx={4} cy={4} r={4} fill="#006251" />
                          </svg>
                        </div>
                      </div>
                      <label
                        className="text-gray-600 text-sm"
                        htmlFor="radio-1"
                      >
                        Radio 1
                      </label>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <input
                          className="custom-radio-1 opacity-0 absolute z-10 h-4 w-4"
                          id="radio-2"
                          type="radio"
                        />
                        <div className="bg-white text-white border border-gray-200 w-4 h-4 flex justify-center items-center rounded-full">
                          <svg
                            className="hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <circle cx={4} cy={4} r={4} fill="#006251" />
                          </svg>
                        </div>
                      </div>
                      <label
                        className="text-gray-600 text-sm"
                        htmlFor="radio-2"
                      >
                        Radio 2
                      </label>
                    </div>
                  </div>
                  <a
                    className="inline-block hover:underline text-green-500"
                    href="#"
                  >
                    Simple link
                  </a>
                </form>
              </div>
            </div>
            <div>
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-5 -px-4">
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
                  <div className="w-auto">
                    <div className="hidden lg:flex flex-row">
                      <ul className="hidden lg:flex items-center">
                        <li className="mr-6">
                          <a className="text-sm hover:text-gray-700" href="#">
                            About
                          </a>
                        </li>
                        <li className="mr-6">
                          <a className="text-sm hover:text-gray-700" href="#">
                            Company
                          </a>
                        </li>
                        <li className="mr-6">
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
                  <div className="w-auto">
                    <div className="hidden lg:flex flex-row">
                      <form>
                        <div className="flex">
                          <input
                            className="px-6 py-3 placholder-gray-400 flex-1 border border-gray-400"
                            type="text"
                            placeholder="Search"
                          />
                          <button
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 focus:ring focus:ring-orange-200 text-white text-sm font-bold transition duration-200"
                            type="submit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              style={{ width: 24, height: 24 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
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
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden fixed top-0 right-0 bottom-0 w-4/6 sm:max-w-xs z-50">
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
                              <a
                                className="text-sm hover:text-gray-700"
                                href="#"
                              >
                                About
                              </a>
                            </li>
                            <li className="mb-6">
                              <a
                                className="text-sm hover:text-gray-700"
                                href="#"
                              >
                                Company
                              </a>
                            </li>
                            <li className="mb-6">
                              <a
                                className="text-sm hover:text-gray-700"
                                href="#"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-sm hover:text-gray-700"
                                href="#"
                              >
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
            <section className="py-8">
              <div className="container px-4 mx-auto">
                <div className="p-7 pb-16 pt-12 bg-white rounded-5xl">
                  <div className="flex flex-wrap px-9 mb-8 md:mb-0">
                    <div className="w-full md:w-1/2">
                      <h2 className="mb-9 text-3xl font-heading tracking-widest uppercase font-bold">
                        Example table
                      </h2>
                    </div>
                    <div className="w-full md:w-1/2 max-w-max md:ml-auto" />
                  </div>
                  <div className="px-9 mb-4">
                    <div className="border-t border-gray-100">
                      <a
                        className="inline-block py-4 font-medium pr-20 mr-12 border-t-2 border-green-500 text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Generals
                      </a>
                      <a
                        className="inline-block py-4 font-medium pr-20 mr-12 border-t-2 border-green-500 text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Others
                      </a>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                      <table className="table-auto w-full">
                        <thead>
                          <tr>
                            <th className="flex items-center pl-9 h-20 bg-white text-left">
                              <input
                                className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                type="checkbox"
                              />
                              <a
                                className="inline-block mr-4 text-sm text-body text-opacity-40 font-semibold uppercase min-w-max"
                                href="#"
                              >
                                Invoice id
                              </a>
                              <div>
                                <svg
                                  className="my-1"
                                  width={7}
                                  height={4}
                                  viewBox="0 0 7 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.898704 3.84541C0.692525 4.05153 0.359292 4.05153 0.154634 3.84541C-0.0507836 3.6393 -0.0523052 3.30629 0.154635 3.10017L3.12787 0.154586C3.33329 -0.0515278 3.66576 -0.0515278 3.8727 0.154586L6.84594 3.10017C7.05135 3.30552 7.05135 3.6393 6.84594 3.84541C6.63976 4.05153 6.30652 4.05153 6.10187 3.84541L3.49915 1.42973L0.898704 3.84541Z"
                                    fill="#9E9FA0"
                                  />
                                </svg>
                                <svg
                                  className="my-1"
                                  width={7}
                                  height={4}
                                  viewBox="0 0 7 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.10129 0.154586C6.30747 -0.0515286 6.64071 -0.0515286 6.84537 0.154586C7.05078 0.3607 7.0523 0.693713 6.84537 0.899827L3.87213 3.84541C3.66671 4.05153 3.33424 4.05153 3.1273 3.84541L0.154064 0.899827C-0.0513545 0.694482 -0.0513545 0.3607 0.154064 0.154586C0.360242 -0.0515286 0.693476 -0.0515286 0.898133 0.154586L3.50085 2.57027L6.10129 0.154586Z"
                                    fill="#9E9FA0"
                                  />
                                </svg>
                              </div>
                            </th>
                            <th className="p-5 h-20 bg-white">
                              <div className="flex items-center justify-center">
                                <a
                                  className="inline-block mr-4 text-sm text-body text-opacity-40 font-semibold uppercase min-w-max"
                                  href="#"
                                >
                                  Date
                                </a>
                                <div>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.898704 3.84541C0.692525 4.05153 0.359292 4.05153 0.154634 3.84541C-0.0507836 3.6393 -0.0523052 3.30629 0.154635 3.10017L3.12787 0.154586C3.33329 -0.0515278 3.66576 -0.0515278 3.8727 0.154586L6.84594 3.10017C7.05135 3.30552 7.05135 3.6393 6.84594 3.84541C6.63976 4.05153 6.30652 4.05153 6.10187 3.84541L3.49915 1.42973L0.898704 3.84541Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.10129 0.154586C6.30747 -0.0515286 6.64071 -0.0515286 6.84537 0.154586C7.05078 0.3607 7.0523 0.693713 6.84537 0.899827L3.87213 3.84541C3.66671 4.05153 3.33424 4.05153 3.1273 3.84541L0.154064 0.899827C-0.0513545 0.694482 -0.0513545 0.3607 0.154064 0.154586C0.360242 -0.0515286 0.693476 -0.0515286 0.898133 0.154586L3.50085 2.57027L6.10129 0.154586Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </th>
                            <th className="p-5 h-20 bg-white">
                              <div className="flex items-center justify-center">
                                <a
                                  className="inline-block mr-4 text-sm text-body text-opacity-40 font-semibold uppercase min-w-max"
                                  href="#"
                                >
                                  E-mail
                                </a>
                                <div>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.898704 3.84541C0.692525 4.05153 0.359292 4.05153 0.154634 3.84541C-0.0507836 3.6393 -0.0523052 3.30629 0.154635 3.10017L3.12787 0.154586C3.33329 -0.0515278 3.66576 -0.0515278 3.8727 0.154586L6.84594 3.10017C7.05135 3.30552 7.05135 3.6393 6.84594 3.84541C6.63976 4.05153 6.30652 4.05153 6.10187 3.84541L3.49915 1.42973L0.898704 3.84541Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.10129 0.154586C6.30747 -0.0515286 6.64071 -0.0515286 6.84537 0.154586C7.05078 0.3607 7.0523 0.693713 6.84537 0.899827L3.87213 3.84541C3.66671 4.05153 3.33424 4.05153 3.1273 3.84541L0.154064 0.899827C-0.0513545 0.694482 -0.0513545 0.3607 0.154064 0.154586C0.360242 -0.0515286 0.693476 -0.0515286 0.898133 0.154586L3.50085 2.57027L6.10129 0.154586Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </th>
                            <th className="p-5 h-20 bg-white">
                              <div className="flex items-center justify-center">
                                <a
                                  className="inline-block mr-4 text-sm text-body text-opacity-40 font-semibold uppercase min-w-max"
                                  href="#"
                                >
                                  Status
                                </a>
                                <div>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.898704 3.84541C0.692525 4.05153 0.359292 4.05153 0.154634 3.84541C-0.0507836 3.6393 -0.0523052 3.30629 0.154635 3.10017L3.12787 0.154586C3.33329 -0.0515278 3.66576 -0.0515278 3.8727 0.154586L6.84594 3.10017C7.05135 3.30552 7.05135 3.6393 6.84594 3.84541C6.63976 4.05153 6.30652 4.05153 6.10187 3.84541L3.49915 1.42973L0.898704 3.84541Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.10129 0.154586C6.30747 -0.0515286 6.64071 -0.0515286 6.84537 0.154586C7.05078 0.3607 7.0523 0.693713 6.84537 0.899827L3.87213 3.84541C3.66671 4.05153 3.33424 4.05153 3.1273 3.84541L0.154064 0.899827C-0.0513545 0.694482 -0.0513545 0.3607 0.154064 0.154586C0.360242 -0.0515286 0.693476 -0.0515286 0.898133 0.154586L3.50085 2.57027L6.10129 0.154586Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </th>
                            <th className="p-5 h-20 bg-white">
                              <div className="flex items-center justify-center">
                                <a
                                  className="inline-block mr-4 text-sm text-body text-opacity-40 font-semibold uppercase min-w-max"
                                  href="#"
                                >
                                  Subscription
                                </a>
                                <div>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.898704 3.84541C0.692525 4.05153 0.359292 4.05153 0.154634 3.84541C-0.0507836 3.6393 -0.0523052 3.30629 0.154635 3.10017L3.12787 0.154586C3.33329 -0.0515278 3.66576 -0.0515278 3.8727 0.154586L6.84594 3.10017C7.05135 3.30552 7.05135 3.6393 6.84594 3.84541C6.63976 4.05153 6.30652 4.05153 6.10187 3.84541L3.49915 1.42973L0.898704 3.84541Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                  <svg
                                    className="my-1"
                                    width={7}
                                    height={4}
                                    viewBox="0 0 7 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.10129 0.154586C6.30747 -0.0515286 6.64071 -0.0515286 6.84537 0.154586C7.05078 0.3607 7.0523 0.693713 6.84537 0.899827L3.87213 3.84541C3.66671 4.05153 3.33424 4.05153 3.1273 3.84541L0.154064 0.899827C-0.0513545 0.694482 -0.0513545 0.3607 0.154064 0.154586C0.360242 -0.0515286 0.693476 -0.0515286 0.898133 0.154586L3.50085 2.57027L6.10129 0.154586Z"
                                      fill="#9E9FA0"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">
                              <div className="flex items-center pl-9 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                <input
                                  className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                  type="checkbox"
                                />
                                <span className="text-lg font-medium">
                                  WX90013
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg text-darkBlueGray-400">
                                  08.04.2021
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg">
                                  user@shuffle.dev
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="py-1 px-3 text-sm text-green-700 bg-green-200 font-heading font-bold uppercase">
                                  Completed
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg text-darkBlueGray-400">
                                  Monthly
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <div className="flex items-center pl-9 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                                <input
                                  className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                  type="checkbox"
                                />
                                <span className="text-lg font-medium">
                                  WX90014
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg text-darkBlueGray-400">
                                  08.04.2021
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg">
                                  matthew@shuffle.dev
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="py-1 px-3 text-sm text-green-700 bg-green-200 font-heading uppercase font-bold">
                                  Completed
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg text-darkBlueGray-400">
                                  Lifetime
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <div className="flex items-center pl-9 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                <input
                                  className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                  type="checkbox"
                                />
                                <span className="text-lg font-medium">
                                  WX90015
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg text-darkBlueGray-400">
                                  08.04.2021
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg">pat@shuffle.dev</span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="py-1 px-3 text-sm bg-orange-200 text-white font-heading uppercase font-bold">
                                  Canceled
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg text-darkBlueGray-400">
                                  Monthly
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <div className="flex items-center pl-9 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                                <input
                                  className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                  type="checkbox"
                                />
                                <span className="text-lg font-medium">
                                  WX90016
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg text-darkBlueGray-400">
                                  08.04.2021
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="text-lg">
                                  dawid@shuffle.dev
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <span className="py-1 px-3 text-sm bg-orange-200 text-white font-bold uppercase font-heading">
                                  Pending
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl">
                                <img
                                  src="uinel-assets/elements/dashboard-tables/checkmark.svg"
                                  alt
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <div className="flex items-center pl-9 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                <input
                                  className="appearance-none w-6 h-6 mr-9 bg-white border-2 border-darkbluegray-50 rounded-md"
                                  type="checkbox"
                                />
                                <span className="text-lg font-medium">
                                  WX90017
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg text-darkBlueGray-400">
                                  08.04.2021
                                </span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                <span className="text-lg">ya@shuffle.dev</span>
                              </div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100"></div>
                            </td>
                            <td className="p-0">
                              <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                                <img
                                  src="uinel-assets/elements/dashboard-tables/checkmark.svg"
                                  alt
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-10 flex lg:hidden">
            <img
              className="ml-auto w-40"
              src="cronos-assets/elements/right-bottom-corner.svg"
              alt
            />
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
