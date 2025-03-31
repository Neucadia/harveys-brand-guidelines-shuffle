import React from "react";
import PrimaryLogo from "./primaryLogo";
import Wordmark from "./wordmark";
import Monogram from "./monogram";
import StackedEgg from "./stackedEgg";
import NegativeStackedEgg from "./negativeStackedEgg";
import HorizontalLockup from "./horizontalLockup";
import NegativePrimaryOnBlack from "./negativePrimaryOnBlack";
import NegativePrimaryOnWheat from "./negativePrimaryOnWheat";
import NegativePrimaryOnOrange from "./negativePrimaryOnOrange";
import NegativeMonogram from "./negativeMonogram";
import StackedPrimarySubBrand from "./stackedPrimarySubBrand";
import HorizontalStackedSubBrand from "./horizontalStackedSubBrand";

export default function Logos() {
  return (
    <React.Fragment>
      <>
        <section className="py-20 bg-green-700 ">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
                Visuals
              </div>
            </div>
            <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Logos
            </h1>
            <p className="text-green-100 text-center max-w-xl mx-auto mb-6">
              The primary visual symbol of the Harvey's brand. Use the buttons
              to download all logos or select individual colors and logos below.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <a
                className="hidden px-6 py-3 text-center w-full sm:w-auto bg-yellow-500 text-sm font-bold hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
                href="#"
              >
                Download PNGs
              </a>
              <a
                className="px-6 py-3 hidden text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200"
                href="#"
              >
                Download SVGs
              </a>
            </div>
            <div
              className="flex flex-wrap items-stretch"
              style={{ marginBottom: "-200px" }}
            >
              {/* Primary Logo */}
              <PrimaryLogo />
              {/* Wordmark */}
              <Wordmark />
              {/* Monogram */}
              <Monogram />
            </div>
            {/* Secondary Logos */}
            <div className="flex justify-center mt-60 mb-6">
              <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
                Visuals
              </div>
            </div>
            <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Secondary logos
            </h1>
            <p className="text-green-100 text-center max-w-xl mx-auto mb-6">
              When the primary logo don't fit the use case, there are a few
              alternate lockups.
            </p>
            <div
              className="flex flex-wrap items-stretch"
              style={{ marginBottom: "-200px" }}
            >
              {/* Stacked Egg */}
              <StackedEgg />
              {/* Negative Stacked Egg */}
              <NegativeStackedEgg />
              {/* Horizontal Lockup */}
              <HorizontalLockup />
              {/* Negative Primary */}
              <NegativePrimaryOnBlack />
              {/* Negative Wheat */}
              <NegativePrimaryOnWheat />
              {/* Orange Primary */}
              <NegativePrimaryOnOrange />
              {/* Negative Monogram */}
              <NegativeMonogram />
            </div>
            {/* Sub-brand logos */}
            <div className="flex justify-center mt-60 mb-6">
              <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
                Visuals
              </div>
            </div>
            <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              SUB-BRAND LOGOS
            </h1>
            <p className="text-green-100 text-center max-w-xl mx-auto mb-20">
              All of Harvey's sub-brands have their own lockup to use for direct
              marketing.
            </p>
            <div
              className="flex flex-wrap items-stretch"
              style={{ marginBottom: "-200px" }}
            >
              {/* Stacked primary sub-brand */}
              <StackedPrimarySubBrand />
              {/* Horizontal sub-brand stacked */}
              <HorizontalStackedSubBrand />
              {/* Horizontal sub-brand */}
              <div className="w-full shadow-lg bg-white flex flex-col mb-10">
                <div className="py-20 px-8 flex-col justify-center flex-grow flex-grow flex">
                  <span className="mb-6 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_2"
                      data-name="Layer 2"
                      viewBox="0 0 469.02 122.81"
                      className="h-40"
                    >
                      <defs />
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          fill="#1A4121"
                          d="M398.07,76.88h6.02v-30.96h-6.02v30.96ZM136.88,45.92l-5.09,5.09v20.79l5.09,5.09h15.13l5-5v-4.73h-6.02v2.52l-2.08,2.08h-8.85l-2.26-2.26v-16.19l2.26-2.26h8.85l2.08,2.08v2.52h6.02v-4.73l-5-5h-15.13ZM316.11,45.92v30.96h19.82l5.31-5.31v-20.35l-5.31-5.31h-19.82ZM335.21,69.5l-2.26,2.26h-10.84v-20.7h10.84l2.26,2.26v16.19ZM170.27,45.92l-5.09,5.09v20.79l5.09,5.09h15.92l5.09-5.09v-20.79l-5.09-5.09h-15.92ZM185.27,69.5l-2.26,2.26h-9.55l-2.26-2.26v-16.19l2.26-2.26h9.55l2.26,2.26v16.19ZM464.24,58.53h-11.72l-1.46-1.46v-4.56l1.46-1.46h8.76l1.46,1.46v2.65h5.93v-4.47l-4.78-4.78h-13.98l-4.78,4.78v8.18l4.78,4.78h11.72l1.46,1.46v5.13l-1.5,1.5h-9.16l-1.46-1.46v-2.61h-5.93v4.42l4.78,4.78h14.33l4.87-4.87v-8.71l-4.78-4.78ZM414.48,76.88h22.38v-5.09h-16.37v-7.96h15.08v-5h-15.08v-7.83h16.37v-5.09h-22.38v30.96ZM285.36,45.92l-5.09,5.09v20.79l5.09,5.09h15.92l5.09-5.09v-20.79l-5.09-5.09h-15.92ZM300.36,69.5l-2.26,2.26h-9.55l-2.26-2.26v-16.19l2.26-2.26h9.55l2.26,2.26v16.19ZM215.88,65.91h-.09l-9.2-19.99h-5.57v30.96h5.79v-18.84h.09l7.08,14.51h3.72l7.12-14.51h.09v18.84h5.79v-30.96h-5.57l-9.25,19.99ZM351.18,76.88h6.02v-30.96h-6.02v30.96ZM365.38,51.01h9.25v25.88h6.02v-25.88h9.25v-5.09h-24.51v5.09ZM255.73,65.91h-.09l-9.2-19.99h-5.57v30.96h5.79v-18.84h.09l7.08,14.51h3.72l7.12-14.51h.09v18.84h5.79v-30.96h-5.57l-9.25,19.99ZM50.35,0c-15.14,0-27.29,5.39-36.12,16.02C5.05,27.07,0,43.19,0,61.4s5.05,34.33,14.23,45.39c8.83,10.63,20.98,16.02,36.12,16.02s27.29-5.39,36.12-16.02c9.18-11.05,14.23-27.17,14.23-45.39s-5.05-34.33-14.23-45.39C77.65,5.39,65.49,0,50.35,0ZM82.66,103.62c-7.84,9.44-18.71,14.23-32.31,14.23s-24.47-4.79-32.31-14.23c-8.44-10.16-13.09-25.16-13.09-42.22s4.65-32.06,13.09-42.22c7.84-9.44,18.71-14.23,32.31-14.23s24.47,4.79,32.31,14.23c8.44,10.16,13.09,25.16,13.09,42.22s-4.65,32.06-13.09,42.22ZM79.74,34.34c-2.14-2.15-4.31-4.3-6.42-6.46h-14.06v23.48c-5.69-1.91-11.86-2.56-17.81-1.63v-15.04s-.18-.09-.2-.11c-.42-.39-.89-.95-1.29-1.36-1.76-1.78-3.6-3.53-5.31-5.34h-14.06v3.93c.59,1.24,1.26,2.47,1.75,3.75l-.02,45.19-1.72,3.78v3.54c0,.05.49.47.57.55,1.91,1.96,3.85,3.91,5.82,5.82.15.14.33.31.41.5h14.02l.05-26.76s.04-.04.06-.06c.16-.1.82-.27,1.04-.34,5.35-1.68,11.15-1.35,16.7-.53h0v20.86s6.81,6.84,6.81,6.84h14.06v-3.71l-1.79-3.81.03-45.42,1.76-3.56v-3.75c-.14-.07-.28-.23-.39-.34ZM70.96,31.08l-1.76,3.58-.03,46.44c.51,1.32,1.19,2.59,1.8,3.87v.79h-9.33v-26.07c-7.92-3.14-16.75-3.63-25-1.44-1.47.39-2.9.92-4.35,1.37v26.07l-.06.06h-8.61c-.34,0-.62-.28-.62-.62,0-.09.02-.17.05-.25.55-1.25,1.19-2.47,1.66-3.75v-46.15c-.46-1.19-1.08-2.33-1.63-3.49-.06-.12-.09-.25-.09-.38v-.88h9.23l.06.06v24.4c1.52-.48,3-1.07,4.52-1.53,6.26-1.87,12.93-1.98,19.25-.29,1.89.51,3.71,1.23,5.58,1.82,0,0,0,0,0,0v-24.46h9.33v.84Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-xl text-center mb-4">
                    Horizontal sub-brand lockup
                  </h2>
                  <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
                    This will be gradually integrated with the primary sub-brand
                    logo. They will be used together in various applications to
                    build brand recognition from the start and reinforce the
                    relationship with our brand.
                  </p>
                  <div className="mb-6 w-40 self-center">
                    <label className="block mb-2 text-sm font-bold" htmlFor>
                      Select sub-brand
                    </label>
                    <select
                      className="px-6 py-3 w-full border border-gray-100 placeholder-gray-300 text-sm focus:ring focus:ring-gray-200 transition duration-200 outline-none cursor-pointer mb-6"
                      name="field-name"
                    >
                      <option>Commodities</option> <option>Seed</option>
                      <option>Feed</option> <option>Garden Center</option>
                      <option>Retail</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      className="px-6 py-3 hidden text-center w-full sm:w-auto bg-yellow-500 text-sm font-bold hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
                      href="#"
                    >
                      Download PNG
                    </a>
                    <a
                      className="px-6 py-3 hidden text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200"
                      href="#"
                    >
                      Download SVG
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap flex-row items-center -m-4">
                  <div className="w-full md:w-1/5 lg:w-1/5 p-4 mb-6 lg:mb-0 text-center">
                    <div className="inline-block mx-auto mb-6 relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-black rounded-full m-1" />
                      <span className="relative">
                        <svg
                          className="mr-3"
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45 90C37.3005 90 29.7298 88.0244 23.0121 84.2623C16.2943 80.5002 10.6542 75.0773 6.6312 68.5124C2.60823 61.9475 0.336984 54.4602 0.0347 46.7667C-0.267576 39.0731 1.40922 31.4307 4.90471 24.5704C8.4002 17.7101 13.5975 11.8615 19.9993 7.58387C26.4012 3.30627 33.7936 0.742814 41.4693 0.138719C49.1451 -0.465376 56.8475 0.910098 63.8397 4.13356C70.8319 7.35702 76.8801 12.3207 81.4058 18.5497L79.5855 19.8722C75.2861 13.9546 69.5403 9.23917 62.8977 6.17687C56.2551 3.11459 48.9378 1.80789 41.6459 2.38178C34.3539 2.95567 27.3312 5.39095 21.2494 9.45467C15.1676 13.5184 10.2302 19.0746 6.90948 25.5919C3.58876 32.1092 1.9958 39.3695 2.28297 46.6784C2.57014 53.9872 4.72782 61.1002 8.54964 67.3368C12.3715 73.5735 17.7296 78.7252 24.1114 82.2992C30.4933 85.8732 37.6855 87.75 45 87.75L45 90Z"
                            fill="#CCE0DC"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 absolute inset-0">
                        <svg
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37 0C44.6995 9.18154e-08 52.2702 1.97555 58.988 5.73768C65.7057 9.49981 71.3458 14.9227 75.3688 21.4876C79.3918 28.0525 81.663 35.5398 81.9653 43.2333C82.2676 50.9268 80.5908 58.5693 77.0953 65.4296C73.5998 72.2899 68.4025 78.1385 62.0007 82.4161C55.5988 86.6937 48.2064 89.2572 40.5307 89.8613C32.8549 90.4654 25.1526 89.0899 18.1603 85.8664C11.1681 82.643 5.11988 77.6794 0.594241 71.4503L2.41453 70.1278C6.71389 76.0454 12.4597 80.7608 19.1023 83.8231C25.7449 86.8854 33.0622 88.1921 40.3541 87.6182C47.6461 87.0443 54.6688 84.609 60.7506 80.5453C66.8324 76.4816 71.7698 70.9254 75.0905 64.4081C78.4112 57.8908 80.0042 50.6305 79.717 43.3216C79.4299 36.0128 77.2722 28.8998 73.4504 22.6632C69.6285 16.4265 64.2704 11.2748 57.8886 7.7008C51.5067 4.12677 44.3145 2.25 37 2.25V0Z"
                            fill="#006251"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/5 lg:w-1/5 p-4 mb-6 lg:mb-0 text-center">
                    <div className="inline-block mx-auto mb-6 relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-green-700 rounded-full m-1" />
                      <span className="relative">
                        <svg
                          className="mr-3"
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45 90C37.3005 90 29.7298 88.0244 23.0121 84.2623C16.2943 80.5002 10.6542 75.0773 6.6312 68.5124C2.60823 61.9475 0.336984 54.4602 0.0347 46.7667C-0.267576 39.0731 1.40922 31.4307 4.90471 24.5704C8.4002 17.7101 13.5975 11.8615 19.9993 7.58387C26.4012 3.30627 33.7936 0.742814 41.4693 0.138719C49.1451 -0.465376 56.8475 0.910098 63.8397 4.13356C70.8319 7.35702 76.8801 12.3207 81.4058 18.5497L79.5855 19.8722C75.2861 13.9546 69.5403 9.23917 62.8977 6.17687C56.2551 3.11459 48.9378 1.80789 41.6459 2.38178C34.3539 2.95567 27.3312 5.39095 21.2494 9.45467C15.1676 13.5184 10.2302 19.0746 6.90948 25.5919C3.58876 32.1092 1.9958 39.3695 2.28297 46.6784C2.57014 53.9872 4.72782 61.1002 8.54964 67.3368C12.3715 73.5735 17.7296 78.7252 24.1114 82.2992C30.4933 85.8732 37.6855 87.75 45 87.75L45 90Z"
                            fill="#CCE0DC"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 absolute inset-0">
                        <svg
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37 0C44.6995 9.18154e-08 52.2702 1.97555 58.988 5.73768C65.7057 9.49981 71.3458 14.9227 75.3688 21.4876C79.3918 28.0525 81.663 35.5398 81.9653 43.2333C82.2676 50.9268 80.5908 58.5693 77.0953 65.4296C73.5998 72.2899 68.4025 78.1385 62.0007 82.4161C55.5988 86.6937 48.2064 89.2572 40.5307 89.8613C32.8549 90.4654 25.1526 89.0899 18.1603 85.8664C11.1681 82.643 5.11988 77.6794 0.594241 71.4503L2.41453 70.1278C6.71389 76.0454 12.4597 80.7608 19.1023 83.8231C25.7449 86.8854 33.0622 88.1921 40.3541 87.6182C47.6461 87.0443 54.6688 84.609 60.7506 80.5453C66.8324 76.4816 71.7698 70.9254 75.0905 64.4081C78.4112 57.8908 80.0042 50.6305 79.717 43.3216C79.4299 36.0128 77.2722 28.8998 73.4504 22.6632C69.6285 16.4265 64.2704 11.2748 57.8886 7.7008C51.5067 4.12677 44.3145 2.25 37 2.25V0Z"
                            fill="#006251"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/5 lg:w-1/5 p-4 mb-6 lg:mb-0 text-center">
                    <div className="inline-block mx-auto mb-6 relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-orange-500 rounded-full m-1" />
                      <span className="relative">
                        <svg
                          className="mr-3"
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45 90C37.3005 90 29.7298 88.0244 23.0121 84.2623C16.2943 80.5002 10.6542 75.0773 6.6312 68.5124C2.60823 61.9475 0.336984 54.4602 0.0347 46.7667C-0.267576 39.0731 1.40922 31.4307 4.90471 24.5704C8.4002 17.7101 13.5975 11.8615 19.9993 7.58387C26.4012 3.30627 33.7936 0.742814 41.4693 0.138719C49.1451 -0.465376 56.8475 0.910098 63.8397 4.13356C70.8319 7.35702 76.8801 12.3207 81.4058 18.5497L79.5855 19.8722C75.2861 13.9546 69.5403 9.23917 62.8977 6.17687C56.2551 3.11459 48.9378 1.80789 41.6459 2.38178C34.3539 2.95567 27.3312 5.39095 21.2494 9.45467C15.1676 13.5184 10.2302 19.0746 6.90948 25.5919C3.58876 32.1092 1.9958 39.3695 2.28297 46.6784C2.57014 53.9872 4.72782 61.1002 8.54964 67.3368C12.3715 73.5735 17.7296 78.7252 24.1114 82.2992C30.4933 85.8732 37.6855 87.75 45 87.75L45 90Z"
                            fill="#CCE0DC"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 absolute inset-0">
                        <svg
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37 0C44.6995 9.18154e-08 52.2702 1.97555 58.988 5.73768C65.7057 9.49981 71.3458 14.9227 75.3688 21.4876C79.3918 28.0525 81.663 35.5398 81.9653 43.2333C82.2676 50.9268 80.5908 58.5693 77.0953 65.4296C73.5998 72.2899 68.4025 78.1385 62.0007 82.4161C55.5988 86.6937 48.2064 89.2572 40.5307 89.8613C32.8549 90.4654 25.1526 89.0899 18.1603 85.8664C11.1681 82.643 5.11988 77.6794 0.594241 71.4503L2.41453 70.1278C6.71389 76.0454 12.4597 80.7608 19.1023 83.8231C25.7449 86.8854 33.0622 88.1921 40.3541 87.6182C47.6461 87.0443 54.6688 84.609 60.7506 80.5453C66.8324 76.4816 71.7698 70.9254 75.0905 64.4081C78.4112 57.8908 80.0042 50.6305 79.717 43.3216C79.4299 36.0128 77.2722 28.8998 73.4504 22.6632C69.6285 16.4265 64.2704 11.2748 57.8886 7.7008C51.5067 4.12677 44.3145 2.25 37 2.25V0Z"
                            fill="#006251"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/5 lg:w-1/5 p-4 text-center">
                    <div className="inline-block mx-auto mb-6 relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-yellow-50 rounded-full m-1" />
                      <span className="relative">
                        <svg
                          className="mr-3"
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45 90C37.3005 90 29.7298 88.0244 23.0121 84.2623C16.2943 80.5002 10.6542 75.0773 6.6312 68.5124C2.60823 61.9475 0.336984 54.4602 0.0347 46.7667C-0.267576 39.0731 1.40922 31.4307 4.90471 24.5704C8.4002 17.7101 13.5975 11.8615 19.9993 7.58387C26.4012 3.30627 33.7936 0.742814 41.4693 0.138719C49.1451 -0.465376 56.8475 0.910098 63.8397 4.13356C70.8319 7.35702 76.8801 12.3207 81.4058 18.5497L79.5855 19.8722C75.2861 13.9546 69.5403 9.23917 62.8977 6.17687C56.2551 3.11459 48.9378 1.80789 41.6459 2.38178C34.3539 2.95567 27.3312 5.39095 21.2494 9.45467C15.1676 13.5184 10.2302 19.0746 6.90948 25.5919C3.58876 32.1092 1.9958 39.3695 2.28297 46.6784C2.57014 53.9872 4.72782 61.1002 8.54964 67.3368C12.3715 73.5735 17.7296 78.7252 24.1114 82.2992C30.4933 85.8732 37.6855 87.75 45 87.75L45 90Z"
                            fill="#CCE0DC"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 absolute inset-0">
                        <svg
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37 0C44.6995 9.18154e-08 52.2702 1.97555 58.988 5.73768C65.7057 9.49981 71.3458 14.9227 75.3688 21.4876C79.3918 28.0525 81.663 35.5398 81.9653 43.2333C82.2676 50.9268 80.5908 58.5693 77.0953 65.4296C73.5998 72.2899 68.4025 78.1385 62.0007 82.4161C55.5988 86.6937 48.2064 89.2572 40.5307 89.8613C32.8549 90.4654 25.1526 89.0899 18.1603 85.8664C11.1681 82.643 5.11988 77.6794 0.594241 71.4503L2.41453 70.1278C6.71389 76.0454 12.4597 80.7608 19.1023 83.8231C25.7449 86.8854 33.0622 88.1921 40.3541 87.6182C47.6461 87.0443 54.6688 84.609 60.7506 80.5453C66.8324 76.4816 71.7698 70.9254 75.0905 64.4081C78.4112 57.8908 80.0042 50.6305 79.717 43.3216C79.4299 36.0128 77.2722 28.8998 73.4504 22.6632C69.6285 16.4265 64.2704 11.2748 57.8886 7.7008C51.5067 4.12677 44.3145 2.25 37 2.25V0Z"
                            fill="#006251"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/5 lg:w-1/5 p-4 text-center">
                    <div className="inline-block mx-auto mb-6 relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-white rounded-full m-1" />
                      <span className="relative">
                        <svg
                          className="mr-3"
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45 90C37.3005 90 29.7298 88.0244 23.0121 84.2623C16.2943 80.5002 10.6542 75.0773 6.6312 68.5124C2.60823 61.9475 0.336984 54.4602 0.0347 46.7667C-0.267576 39.0731 1.40922 31.4307 4.90471 24.5704C8.4002 17.7101 13.5975 11.8615 19.9993 7.58387C26.4012 3.30627 33.7936 0.742814 41.4693 0.138719C49.1451 -0.465376 56.8475 0.910098 63.8397 4.13356C70.8319 7.35702 76.8801 12.3207 81.4058 18.5497L79.5855 19.8722C75.2861 13.9546 69.5403 9.23917 62.8977 6.17687C56.2551 3.11459 48.9378 1.80789 41.6459 2.38178C34.3539 2.95567 27.3312 5.39095 21.2494 9.45467C15.1676 13.5184 10.2302 19.0746 6.90948 25.5919C3.58876 32.1092 1.9958 39.3695 2.28297 46.6784C2.57014 53.9872 4.72782 61.1002 8.54964 67.3368C12.3715 73.5735 17.7296 78.7252 24.1114 82.2992C30.4933 85.8732 37.6855 87.75 45 87.75L45 90Z"
                            fill="#CCE0DC"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 absolute inset-0">
                        <svg
                          width={82}
                          height={90}
                          viewBox="0 0 82 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37 0C44.6995 9.18154e-08 52.2702 1.97555 58.988 5.73768C65.7057 9.49981 71.3458 14.9227 75.3688 21.4876C79.3918 28.0525 81.663 35.5398 81.9653 43.2333C82.2676 50.9268 80.5908 58.5693 77.0953 65.4296C73.5998 72.2899 68.4025 78.1385 62.0007 82.4161C55.5988 86.6937 48.2064 89.2572 40.5307 89.8613C32.8549 90.4654 25.1526 89.0899 18.1603 85.8664C11.1681 82.643 5.11988 77.6794 0.594241 71.4503L2.41453 70.1278C6.71389 76.0454 12.4597 80.7608 19.1023 83.8231C25.7449 86.8854 33.0622 88.1921 40.3541 87.6182C47.6461 87.0443 54.6688 84.609 60.7506 80.5453C66.8324 76.4816 71.7698 70.9254 75.0905 64.4081C78.4112 57.8908 80.0042 50.6305 79.717 43.3216C79.4299 36.0128 77.2722 28.8998 73.4504 22.6632C69.6285 16.4265 64.2704 11.2748 57.8886 7.7008C51.5067 4.12677 44.3145 2.25 37 2.25V0Z"
                            fill="#006251"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sizing and spacing */}
            <div className="flex justify-center mt-60 mb-6">
              <div className="bg-green-400 py-1 px-2 text-white font-bold inline-block">
                Visuals
              </div>
            </div>
            <h1 className="font-heading text-white text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
              Sizing and spacing
            </h1>
            <p className="text-green-100 text-center max-w-xl mx-auto mb-6">
              Guidelines for maintaining brand unity across applications
            </p>
            {/* Spacing */}
            <div className="w-full shadow-lg bg-white flex flex-col mb-10">
              <div className="py-20 px-8 flex-col justify-center flex-grow flex">
                <span className="mb-6 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 900 900"
                    className="h-80"
                    data-name="Layer 2"
                  >
                    {/* Generator: Adobe Illustrator 29.3.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 151) */}
                    <defs>
                      <clipPath id="clippath">
                        <rect
                          className="st0"
                          x={-990}
                          y={-450}
                          width={2880}
                          height={1800}
                        />
                      </clipPath>
                      <clipPath id="clippath-1">
                        <rect
                          className="st0"
                          x={-990}
                          y={-450}
                          width={2880}
                          height={1800}
                        />
                      </clipPath>
                    </defs>
                    <g className="st3">
                      <path
                        className="st4"
                        d="M446.9,287c18.3,0,34.9,3.2,49.3,9.6,14.2,6.3,26.7,15.9,37.2,28.5,22.6,27.2,35,67.3,35,113s-12.4,85.8-35,113c-10.4,12.6-22.9,22.1-37.2,28.5-14.4,6.4-31,9.6-49.3,9.6s-34.9-3.2-49.3-9.6c-14.2-6.3-26.7-15.9-37.2-28.5-22.6-27.2-35-67.3-35-113s12.4-85.8,35-113c10.4-12.6,22.9-22.1,37.2-28.5,14.4-6.4,31-9.6,49.3-9.6M446.9,273.7c-40.5,0-73.1,14.4-96.7,42.9-24.6,29.6-38.1,72.7-38.1,121.5s13.5,91.9,38.1,121.5c23.6,28.5,56.2,42.9,96.7,42.9s73.1-14.4,96.7-42.9c24.6-29.6,38.1-72.7,38.1-121.5s-13.5-91.9-38.1-121.5c-23.6-28.4-56.2-42.9-96.7-42.9"
                      />
                      <path
                        className="st4"
                        d="M526.6,376.6l-4.7,9.5v121.6c0,0,4.7,10.2,4.7,10.2v9.9h-37.6l-18.2-18.3v-55.8c-14.9-2.2-30.4-3.1-44.7,1.4-.6.2-2.4.7-2.8.9,0,0-.1,0-.2.2v71.6h-37.7c-.2-.5-.7-1-1.1-1.3-5.3-5.1-10.5-10.3-15.6-15.6-.2-.2-1.5-1.3-1.6-1.5v-9.5s4.6-10.1,4.6-10.1v-121c-1.3-3.4-3.1-6.7-4.6-10v-10.5h37.6c4.6,4.9,9.5,9.5,14.2,14.3,1.1,1.1,2.3,2.6,3.5,3.6,0,0,.5.3.5.3v40.3c15.9-2.5,32.5-.8,47.7,4.4v-62.9h37.6c5.6,5.8,11.4,11.6,17.2,17.3.3.3.7.7,1,.9v10ZM477.1,420.1c-5-1.6-9.9-3.5-14.9-4.9-16.9-4.5-34.8-4.2-51.5.8-4.1,1.2-8,2.8-12.1,4.1v-65.3l-.2-.2h-24.7v2.9c1.5,3.3,3.3,6.5,4.6,9.8v123.5c-1.3,3.5-3.1,6.9-4.6,10.4v2h24.7l.2-.2v-69.8c3.9-1.2,7.7-2.6,11.7-3.7,22.1-5.9,45.7-4.6,66.9,3.8v69.8h25v-2.1c-1.6-3.4-3.4-6.8-4.8-10.4v-124.3c0,0,4.8-9.6,4.8-9.6v-2.2h-25v65.5Z"
                      />
                    </g>
                    <path
                      className="st4"
                      d="M286.1,517.8l-9.5-4.7h-121.6c0,0-10.2,4.7-10.2,4.7h-9.9v-37.6l18.3-18.2h55.8c2.2-14.9,3.1-30.4-1.4-44.7-.2-.6-.7-2.4-.9-2.8,0,0,0-.1-.2-.2h-71.6v-37.7c.5-.2,1-.7,1.3-1.1,5.1-5.3,10.3-10.5,15.6-15.6.2-.2,1.3-1.5,1.5-1.6h9.5s10.1,4.6,10.1,4.6h121c3.4-1.3,6.7-3.1,10-4.6h10.5v37.6c-4.9,4.6-9.5,9.5-14.3,14.2-1.1,1.1-2.6,2.3-3.6,3.5,0,0-.3.5-.3.5h-40.3c2.5,15.9.8,32.5-4.4,47.7h62.9v37.6c-5.8,5.6-11.6,11.4-17.3,17.2-.3.3-.7.7-.9,1h-10ZM242.5,468.2c1.6-5,3.5-9.9,4.9-14.9,4.5-16.9,4.2-34.8-.8-51.5-1.2-4.1-2.8-8-4.1-12.1h65.3l.2-.2v-24.7h-2.9c-3.3,1.5-6.5,3.3-9.8,4.6h-123.5c-3.5-1.3-6.9-3.1-10.4-4.6h-2v24.7l.2.2h69.8c1.2,3.9,2.6,7.7,3.7,11.7,5.9,22.1,4.6,45.7-3.8,66.9h-69.8v25h2.1c3.4-1.6,6.8-3.4,10.4-4.8h124.3c0,0,9.6,4.8,9.6,4.8h2.2v-25h-65.5Z"
                    />
                    <path
                      className="st4"
                      d="M610.4,358.4l9.5,4.7h121.6c0,0,10.2-4.7,10.2-4.7h9.9v37.6l-18.3,18.2h-55.8c-2.2,14.9-3.1,30.4,1.4,44.7.2.6.7,2.4.9,2.8,0,0,0,.1.2.2h71.6v37.7c-.5.2-1,.7-1.3,1.1-5.1,5.3-10.3,10.5-15.6,15.6-.2.2-1.3,1.5-1.5,1.6h-9.5s-10.1-4.6-10.1-4.6h-121c-3.4,1.3-6.7,3.1-10,4.6h-10.5v-37.6c4.9-4.6,9.5-9.5,14.3-14.2,1.1-1.1,2.6-2.3,3.6-3.5,0,0,.3-.5.3-.5h40.3c-2.5-15.9-.8-32.5,4.4-47.7h-62.9v-37.6c5.8-5.6,11.6-11.4,17.3-17.2.3-.3.7-.7.9-1h10ZM654,407.9c-1.6,5-3.5,9.9-4.9,14.9-4.5,16.9-4.2,34.8.8,51.5,1.2,4.1,2.8,8,4.1,12.1h-65.3l-.2.2v24.7h2.9c3.3-1.5,6.5-3.3,9.8-4.6h123.5c3.5,1.3,6.9,3.1,10.4,4.6h2v-24.7l-.2-.2h-69.8c-1.2-3.9-2.6-7.7-3.7-11.7-5.9-22.1-4.6-45.7,3.8-66.9h69.8v-25h-2.1c-3.4,1.6-6.8,3.4-10.4,4.8h-124.3c0,0-9.6-4.8-9.6-4.8h-2.2v25h65.5Z"
                    />
                    <path
                      className="st4"
                      d="M526.6,126l-4.7,9.5v121.6c0,0,4.7,10.2,4.7,10.2v9.9h-37.6l-18.2-18.3v-55.8c-14.9-2.2-30.4-3.1-44.7,1.4-.6.2-2.4.7-2.8.9,0,0-.1,0-.2.2v71.6h-37.7c-.2-.5-.7-1-1.1-1.3-5.3-5.1-10.5-10.3-15.6-15.6-.2-.2-1.5-1.3-1.6-1.5v-9.5s4.6-10.1,4.6-10.1v-121c-1.3-3.4-3.1-6.7-4.6-10v-10.5h37.6c4.6,4.9,9.5,9.5,14.2,14.3,1.1,1.1,2.3,2.6,3.5,3.6,0,0,.5.3.5.3v40.3c15.9-2.5,32.5-.8,47.7,4.4v-62.9h37.6c5.6,5.8,11.4,11.6,17.2,17.3.3.3.7.7,1,.9v10ZM477.1,169.5c-5-1.6-9.9-3.5-14.9-4.9-16.9-4.5-34.8-4.2-51.5.8-4.1,1.2-8,2.8-12.1,4.1v-65.3l-.2-.2h-24.7v2.9c1.5,3.3,3.3,6.5,4.6,9.8v123.5c-1.3,3.5-3.1,6.9-4.6,10.4v2h24.7l.2-.2v-69.8c3.9-1.2,7.7-2.6,11.7-3.7,22.1-5.9,45.7-4.6,66.9,3.8v69.8h25v-2.1c-1.6-3.4-3.4-6.8-4.8-10.4v-124.3c0,0,4.8-9.6,4.8-9.6v-2.2h-25v65.5Z"
                    />
                    <path
                      className="st4"
                      d="M526.6,626.6l-4.7,9.5v121.6c0,0,4.7,10.2,4.7,10.2v9.9h-37.6l-18.2-18.3v-55.8c-14.9-2.2-30.4-3.1-44.7,1.4-.6.2-2.4.7-2.8.9,0,0-.1,0-.2.2v71.6h-37.7c-.2-.5-.7-1-1.1-1.3-5.3-5.1-10.5-10.3-15.6-15.6-.2-.2-1.5-1.3-1.6-1.5v-9.5s4.6-10.1,4.6-10.1v-121c-1.3-3.4-3.1-6.7-4.6-10v-10.5h37.6c4.6,4.9,9.5,9.5,14.2,14.3,1.1,1.1,2.3,2.6,3.5,3.6,0,0,.5.3.5.3v40.3c15.9-2.5,32.5-.8,47.7,4.4v-62.9h37.6c5.6,5.8,11.4,11.6,17.2,17.3.3.3.7.7,1,.9v10ZM477.1,670.2c-5-1.6-9.9-3.5-14.9-4.9-16.9-4.5-34.8-4.2-51.5.8-4.1,1.2-8,2.8-12.1,4.1v-65.3l-.2-.2h-24.7v2.9c1.5,3.3,3.3,6.5,4.6,9.8v123.5c-1.3,3.5-3.1,6.9-4.6,10.4v2h24.7l.2-.2v-69.8c3.9-1.2,7.7-2.6,11.7-3.7,22.1-5.9,45.7-4.6,66.9,3.8v69.8h25v-2.1c-1.6-3.4-3.4-6.8-4.8-10.4v-124.3c0,0,4.8-9.6,4.8-9.6v-2.2h-25v65.5Z"
                    />
                    <g className="st2">
                      <line
                        className="st1"
                        x1="32.1"
                        y1="97.3"
                        x2="867.9"
                        y2="97.3"
                      />
                      <line
                        className="st1"
                        x1="32.1"
                        y1="777.9"
                        x2="867.9"
                        y2="777.9"
                      />
                      <line
                        className="st1"
                        x1="134.3"
                        y1="869.4"
                        x2="134.3"
                        y2="33.6"
                      />
                      <line
                        className="st1"
                        x1="763.8"
                        y1="866.4"
                        x2="763.8"
                        y2="30.6"
                      />
                    </g>
                  </svg>
                </span>
                <h2 className="text-xl text-center mb-4">
                  Monogram clear space
                </h2>
                <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
                  On its own, the monogram should always be padded by space
                  equal to the X-height of the 'H'
                </p>
              </div>
            </div>
            {/* Sizing */}
            <div className="w-full shadow-lg bg-white flex flex-col mb-10">
              <div className="py-20 px-8 flex-col justify-center flex-grow flex">
                <span className="mb-6 flex justify-center">
                  <svg
                    width={2880}
                    height={1728}
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 500 300"
                    className="h-80"
                    data-name="Layer 2"
                  >
                    {/* Generator: Adobe Illustrator 29.3.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 151) */}
                    <defs />
                    <path
                      className="st0"
                      d="M332,154.5h-2.1l-2.9,2.4,1.2,1.5,1-.8c.2-.2.4-.4.5-.6,0,.5,0,1,0,1.5v4.5h2.3v-8.6Z"
                    />
                    <path
                      className="st0"
                      d="M334.2,162.9c.2.2.5.3.9.3s.7,0,.9-.3.3-.5.3-.8-.1-.6-.3-.8c-.2-.2-.5-.3-.9-.3s-.7,0-.9.3c-.2.2-.3.5-.3.8s.1.6.3.8Z"
                    />
                    <path
                      className="st0"
                      d="M342.9,154.9c-.5-.4-1.2-.5-2.1-.5s-1.2,0-1.6.2c-.5.1-.9.4-1.4.7l1,1.5c.6-.4,1.2-.6,1.7-.6s.5,0,.7.2c.2.1.3.3.3.5,0,.6-.6.9-1.8.9h-.5v1.7h.5c.4,0,.8,0,1.1,0,.3,0,.5.2.6.3.1.1.2.3.2.5s-.1.5-.3.7c-.2.1-.6.2-1.1.2s-.7,0-1.1-.1c-.4,0-.8-.2-1.1-.4v1.9c.5.2.9.3,1.3.4.4,0,.8,0,1.3,0,1.1,0,2-.2,2.6-.7.6-.5.9-1.1.9-1.9,0-1.2-.7-1.8-2.1-2h0c.6-.2,1.1-.5,1.4-.9.3-.4.5-.8.5-1.4s-.3-1.1-.8-1.5Z"
                    />
                    <path
                      className="st0"
                      d="M348,163l3-7.2v-1.4h-6.2v1.9h3.7l-2.9,6.6h2.4Z"
                    />
                    <path
                      className="st0"
                      d="M354.9,157.4c-.1,0-.3,0-.7,0v-1.1h3v-1.9h-4.9l-.3,4.5.8.4c.4-.1.8-.2,1.2-.2s.8,0,1.1.3c.2.2.4.4.4.8s-.1.6-.3.8c-.2.2-.6.3-1,.3s-.7,0-1.1-.2c-.4-.1-.8-.2-1.2-.4v1.9c.6.3,1.4.5,2.4.5s2-.3,2.6-.8c.6-.5.9-1.2.9-2.2s-.1-1-.3-1.4c-.2-.4-.5-.7-.9-1s-.8-.3-1.3-.3-.2,0-.4,0Z"
                    />
                    <path
                      className="st0"
                      d="M361.5,156.4h-2.3v6.6h2.3v-6.6ZM360.4,155.7c.8,0,1.2-.3,1.2-1s0-.6-.3-.8c-.2-.2-.5-.3-.9-.3s-.7,0-.9.3c-.2.2-.3.4-.3.8,0,.7.4,1,1.2,1h0Z"
                    />
                    <path
                      className="st0"
                      d="M369.6,163v-4.3c0-.8-.2-1.4-.6-1.8-.4-.4-1-.6-1.7-.6s-.8,0-1.2.2c-.3.2-.6.4-.8.7h-.1l-.3-.8h-1.7v6.6h2.3v-2.9c0-.7,0-1.3.3-1.6.2-.3.5-.5.8-.5s.5.1.6.3c.1.2.2.6.2,1v3.6h2.3Z"
                    />
                    <path
                      className="st0"
                      d="M335,192.5h-2.2v8.6h1v-3.4h1c1.1,0,1.9-.2,2.5-.7.6-.5.9-1.1.9-2,0-1.7-1.1-2.5-3.2-2.5h0ZM333.8,193.3h1.1c.8,0,1.4.1,1.7.4.4.3.6.7.6,1.3s-.2,1.1-.6,1.4c-.4.3-1,.4-1.9.4h-.9v-3.5Z"
                    />
                    <path
                      className="st0"
                      d="M342.7,197.5l2.1,3.6h1.2l-2.3-3.8c1.1-.4,1.7-1.2,1.7-2.3s-.3-1.4-.8-1.8c-.5-.4-1.3-.6-2.3-.6h-2.3v8.6h1v-3.6h1.8ZM340.9,193.3h1.3c.7,0,1.3.1,1.6.4.3.3.5.7.5,1.2s-.2,1-.5,1.3-.8.4-1.5.4h-1.4v-3.3Z"
                    />
                    <path className="st0" d="M348.3,201v-8.6h-1v8.6h1Z" />
                    <path
                      className="st0"
                      d="M357.3,192.5h-.9v4.9c0,.2,0,.7,0,1.2,0,.6,0,.9,0,1h0l-4.7-7.2h-1.1v8.6h.9v-4.9c0-.7,0-1.5,0-2.3h0l4.7,7.2h1.1v-8.6Z"
                    />
                    <path
                      className="st0"
                      d="M362.4,193.3h2.7v-.9h-6.4v.9h2.7v7.7h1v-7.7Z"
                    />
                    <path
                      className="st0"
                      d="M136.1,197.3c-.3-.4-1-.7-1.9-1-.5-.2-.9-.4-1.2-.5-.3-.2-.4-.3-.6-.5-.1-.2-.2-.4-.2-.7s.1-.7.4-.9c.3-.2.7-.3,1.2-.3s1.4.1,2.1.4l.3-.9c-.7-.3-1.5-.5-2.3-.5s-1.5.2-2,.6c-.5.4-.7.9-.7,1.6s.2,1.1.5,1.5c.3.4.9.7,1.7,1,.6.2,1,.4,1.3.5.3.2.5.3.6.5.1.2.2.4.2.7,0,.4-.2.8-.5,1.1-.3.3-.8.4-1.5.4s-.8,0-1.2-.1c-.4,0-.8-.2-1.1-.4v1c.5.3,1.3.4,2.3.4s1.7-.2,2.2-.6c.5-.4.8-1,.8-1.8s-.2-1.1-.5-1.4Z"
                    />
                    <path
                      className="st0"
                      d="M144,193.7l.4-.9c-.7-.3-1.5-.5-2.4-.5s-1.6.2-2.2.5c-.6.4-1.1.9-1.4,1.5-.3.7-.5,1.4-.5,2.3,0,1.4.3,2.5,1,3.3.7.8,1.7,1.1,2.9,1.1s1.6-.1,2.2-.3v-.9c-.8.2-1.4.3-2,.3-1,0-1.7-.3-2.2-.9-.5-.6-.8-1.5-.8-2.6s.3-1.9.8-2.6c.5-.6,1.3-.9,2.2-.9s1.3.2,1.9.5h0Z"
                    />
                    <path
                      className="st0"
                      d="M148.7,197.5l2.1,3.6h1.2l-2.3-3.8c1.1-.4,1.7-1.2,1.7-2.3s-.3-1.4-.8-1.8c-.5-.4-1.3-.6-2.3-.6h-2.3v8.6h1v-3.6h1.8ZM146.9,193.3h1.3c.7,0,1.3.1,1.6.4.3.3.5.7.5,1.2s-.2,1-.5,1.3-.8.4-1.5.4h-1.4v-3.3Z"
                    />
                    <path
                      className="st0"
                      d="M158.1,200.1h-3.8v-3.2h3.6v-.9h-3.6v-2.8h3.8v-.9h-4.8v8.6h4.8v-.9Z"
                    />
                    <path
                      className="st0"
                      d="M164.7,200.1h-3.8v-3.2h3.6v-.9h-3.6v-2.8h3.8v-.9h-4.8v8.6h4.8v-.9Z"
                    />
                    <path
                      className="st0"
                      d="M173.1,192.5h-.9v4.9c0,.2,0,.7,0,1.2,0,.6,0,.9,0,1h0l-4.7-7.2h-1.1v8.6h.9v-4.9c0-.7,0-1.5,0-2.3h0l4.7,7.2h1.1v-8.6Z"
                    />
                    <path
                      className="st0"
                      d="M139.6,154.5h-2.1l-2.9,2.4,1.2,1.5,1-.8c.2-.2.4-.4.5-.6,0,.5,0,1,0,1.5v4.5h2.3v-8.6Z"
                    />
                    <path
                      className="st0"
                      d="M146.9,155.4c-.5-.7-1.3-1.1-2.3-1.1s-1.8.4-2.3,1.1c-.5.7-.8,1.8-.8,3.4s.3,2.5.8,3.3,1.3,1.1,2.3,1.1,1.8-.4,2.3-1.1.8-1.8.8-3.3-.3-2.6-.8-3.3ZM143.9,156.7c.1-.4.3-.6.6-.6s.5.2.6.6c.1.4.2,1,.2,2s0,1.6-.2,2c-.1.4-.3.6-.6.6s-.5-.2-.6-.5c-.1-.4-.2-1-.2-2s0-1.6.2-2Z"
                    />
                    <path
                      className="st0"
                      d="M154.2,155.4c-.5-.7-1.3-1.1-2.3-1.1s-1.8.4-2.3,1.1c-.5.7-.8,1.8-.8,3.4s.3,2.5.8,3.3c.5.7,1.3,1.1,2.3,1.1s1.8-.4,2.3-1.1c.5-.7.8-1.8.8-3.3s-.3-2.6-.8-3.3ZM151.3,156.7c.1-.4.3-.6.6-.6s.5.2.6.6c.1.4.2,1,.2,2s0,1.6-.2,2c-.1.4-.3.6-.6.6s-.5-.2-.6-.5c-.1-.4-.2-1-.2-2s0-1.6.2-2Z"
                    />
                    <path
                      className="st0"
                      d="M162.2,162.2c.4-.6.7-1.5.7-2.5s-.2-1.9-.6-2.5c-.4-.6-1-.9-1.7-.9s-1.3.3-1.8,1h-.1l-.3-.8h-1.9v9.5h2.3v-2.7c0-.1,0-.4-.1-.9h.1c.3.3.5.5.8.6.3.1.6.2.9.2.7,0,1.3-.3,1.8-.9ZM160.3,158.4c.1.2.2.7.2,1.2s0,1-.2,1.3c-.1.3-.3.4-.6.4s-.6-.1-.7-.4c-.2-.3-.2-.7-.2-1.2v-.2c0-.5,0-.8.2-1.1.1-.2.4-.4.7-.4s.5.1.7.4Z"
                    />
                    <path
                      className="st0"
                      d="M163.3,163h2.6l1.1-2,1.1,2h2.6l-2.2-3.4,2.1-3.3h-2.6l-1,1.9-1-1.9h-2.6l2,3.3-2.1,3.4Z"
                    />
                    <path
                      className="st1"
                      d="M306.2,131.1l1.2,3-10-5,10-5-1.2,3h83.4l-1.2-3,10,5-10,5,1.2-3h-83.4Z"
                    />
                    <path
                      className="st0"
                      d="M297.5,98.9h2.7v5.5h5.8v-5.5h2.7v13.1h-2.7v-5.4h-5.8v5.4h-2.7v-13.1ZM316.6,98.9h2.1c0,0,.2,0,.2.2l4.8,12.6c0,.2,0,.4-.2.4h-2.2c0,0-.2,0-.2-.2l-1-2.6c0,0-.1-.2-.2-.2h-4.5c0,0-.2,0-.2.2l-1,2.6c0,0-.1.2-.2.2h-2.2c-.2,0-.3-.2-.2-.4l4.8-12.6c0,0,.1-.2.2-.2h0ZM319.2,107c.2,0,.3-.2.2-.3l-1.7-4.6h0l-1.7,4.6c0,.2,0,.3.2.3h2.9ZM338,107.7v4c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-3.4c0,0,0-.1,0-.2l-1-1.1c0,0-.1,0-.2,0h-3.9c-.1,0-.3,0-.3.3v4.5c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-12.6c0-.1.1-.3.3-.3h8.3c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v3.7c0,0,0,.1,0,.2l-1.1,1c0,0,0,.3,0,.4l1.2,1.2s0,0,0,.2h0ZM330.1,104.8h4.4c0,0,.1,0,.2,0l.5-.5c0,0,0,0,0-.2v-2.3c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-4.4c-.1,0-.3,0-.3.3v3.3c0,.1.1.3.3.3h0ZM352.5,98.9h-2c0,0-.1,0-.2,0l-3.6,9.2c0,0-.1,0-.2,0l-3.5-9.2c0,0,0,0-.2,0h-2c-.1,0-.2,0-.2.2l4.8,12.7c0,0,.1.2.2.2h1.9s0,0,0,0l4.9-12.8c0,0,0-.2-.2-.2h0ZM356.4,98.9h9.5c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-6.8c-.1,0-.3,0-.3.3v2.8c0,.1.1.3.3.3h6.2c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-6.2c-.1,0-.3,0-.3.3v2.8c0,.1.1.3.3.3h6.8c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-9.5c-.1,0-.3,0-.3-.3v-12.6c0-.1.1-.3.3-.3h0ZM373.6,106.5l-4.6-7.3c0-.2,0-.4.2-.4h2.3c0,0,.2,0,.2.1l3.2,5.2h0l3.2-5.2c0,0,.1-.1.2-.1h2.3c.2,0,.3.2.2.4l-4.6,7.3s0,0,0,.1v5c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-5s0,0,0-.1h0ZM383.1,101v-1.9c0-.1.1-.3.3-.3h2.2c.1,0,.3,0,.3.3v1.9h0l-.3,2.5c0,.1-.1.2-.3.2h-1.6c-.1,0-.2,0-.3-.2l-.3-2.5h0ZM388,109.8v-1.5c0-.1.1-.3.3-.3h2.1c.1,0,.3,0,.3.3v.7c0,0,0,.1,0,.2l.5.5s0,0,.2,0h3.9c0,0,.1,0,.2,0l.5-.5c0,0,0,0,0-.2v-2c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-5c0,0-.1,0-.2,0l-2-1.9c0,0,0,0,0-.2v-3.2c0,0,0-.1,0-.2l2-1.9c0,0,0,0,.2,0h6c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v1.5c0,.1-.1.3-.3.3h-2.1c-.1,0-.3,0-.3-.3v-.7c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-3.7c0,0-.1,0-.2,0l-.5.5c0,0,0,0,0,.2v1.7c0,0,0,.1,0,.2l.5.5c0,0,0,0,.2,0h5c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v3.5c0,0,0,.1,0,.2l-2,1.9c0,0,0,0-.2,0h-6.2c0,0-.1,0-.2,0l-2-1.9c0,0,0,0,0-.2h0Z"
                    />
                    <path
                      className="st1"
                      d="M110.2,131.1l1.2,3-10-5,10-5-1.2,3h83.4l-1.2-3,10,5-10,5,1.2-3h-83.4Z"
                    />
                    <path
                      className="st0"
                      d="M101.5,98.9h2.7v5.5h5.8v-5.5h2.7v13.1h-2.7v-5.4h-5.8v5.4h-2.7v-13.1ZM120.6,98.9h2.1c0,0,.2,0,.2.2l4.8,12.6c0,.2,0,.4-.2.4h-2.2c0,0-.2,0-.2-.2l-1-2.6c0,0-.1-.2-.2-.2h-4.5c0,0-.2,0-.2.2l-1,2.6c0,0-.1.2-.2.2h-2.2c-.2,0-.3-.2-.2-.4l4.8-12.6c0,0,.1-.2.2-.2h0ZM123.2,107c.2,0,.3-.2.2-.3l-1.7-4.6h0l-1.7,4.6c0,.2,0,.3.2.3h2.9ZM142,107.7v4c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-3.4c0,0,0-.1,0-.2l-1-1.1c0,0-.1,0-.2,0h-3.9c-.1,0-.3,0-.3.3v4.5c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-12.6c0-.1.1-.3.3-.3h8.3c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v3.7c0,0,0,.1,0,.2l-1.1,1c0,0,0,.3,0,.4l1.2,1.2s0,0,0,.2h0ZM134.1,104.8h4.4c0,0,.1,0,.2,0l.5-.5c0,0,0,0,0-.2v-2.3c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-4.4c-.1,0-.3,0-.3.3v3.3c0,.1.1.3.3.3h0ZM156.5,98.9h-2c0,0-.1,0-.2,0l-3.6,9.2c0,0-.1,0-.2,0l-3.5-9.2c0,0,0,0-.2,0h-2c-.1,0-.2,0-.2.2l4.8,12.7c0,0,.1.2.2.2h1.9s0,0,0,0l4.9-12.8c0,0,0-.2-.2-.2h0ZM160.4,98.9h9.5c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-6.8c-.1,0-.3,0-.3.3v2.8c0,.1.1.3.3.3h6.2c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-6.2c-.1,0-.3,0-.3.3v2.8c0,.1.1.3.3.3h6.8c.1,0,.3,0,.3.3v1.6c0,.1-.1.3-.3.3h-9.5c-.1,0-.3,0-.3-.3v-12.6c0-.1.1-.3.3-.3h0ZM177.6,106.5l-4.6-7.3c0-.2,0-.4.2-.4h2.3c0,0,.2,0,.2.1l3.2,5.2h0l3.2-5.2c0,0,.1-.1.2-.1h2.3c.2,0,.3.2.2.4l-4.6,7.3s0,0,0,.1v5c0,.1-.1.3-.3.3h-2.2c-.1,0-.3,0-.3-.3v-5s0,0,0-.1h0ZM187.1,101v-1.9c0-.1.1-.3.3-.3h2.2c.1,0,.3,0,.3.3v1.9h0l-.3,2.5c0,.1-.1.2-.3.2h-1.6c-.1,0-.2,0-.3-.2l-.3-2.5h0ZM192,109.8v-1.5c0-.1.1-.3.3-.3h2.1c.1,0,.3,0,.3.3v.7c0,0,0,.1,0,.2l.5.5s0,0,.2,0h3.9c0,0,.1,0,.2,0l.5-.5c0,0,0,0,0-.2v-2c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-5c0,0-.1,0-.2,0l-2-1.9c0,0,0,0,0-.2v-3.2c0,0,0-.1,0-.2l2-1.9c0,0,0,0,.2,0h6c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v1.5c0,.1-.1.3-.3.3h-2.1c-.1,0-.3,0-.3-.3v-.7c0,0,0-.1,0-.2l-.5-.5c0,0,0,0-.2,0h-3.7c0,0-.1,0-.2,0l-.5.5c0,0,0,0,0,.2v1.7c0,0,0,.1,0,.2l.5.5c0,0,0,0,.2,0h5c0,0,.1,0,.2,0l2,1.9c0,0,0,0,0,.2v3.5c0,0,0,.1,0,.2l-2,1.9c0,0,0,0-.2,0h-6.2c0,0-.1,0-.2,0l-2-1.9c0,0,0,0,0-.2h0Z"
                    />
                  </svg>
                </span>
                <h2 className="text-xl text-center mb-4">Minimum sizing</h2>
                <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
                  The wordmark should never appear smaller than 100px or
                  1.375in.
                </p>
              </div>
            </div>
            <div className="w-full shadow-lg bg-white flex flex-col mb-10">
              <div className="py-20 px-8 flex-col justify-center flex-grow flex">
                <span className="mb-6 flex justify-center">
                  <img src="https://static.shuffle.dev/uploads/files/ee/ee137d2a3df0a9e3dc5d8722b3ba155636636edc/positioning.png" />
                </span>
                <h2 className="text-xl text-center mb-4">
                  General positioning
                </h2>
                <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
                  For print or digital compositions, keep the logo at least 1/3
                  of the width of the layout and centered or along the axis'.
                </p>
              </div>
            </div>
            {/* Rotation */}
            <div className="w-full shadow-lg bg-white flex flex-col mb-10">
              <div className="py-20 px-8 flex-col justify-center flex-grow flex">
                <span className="mb-6 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={2880}
                    height={1728}
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 500 300"
                    className="h-80"
                  >
                    {/* Generator: Adobe Illustrator 29.3.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 151) */}
                    <defs />
                    <path
                      className="st0"
                      d="M238,216.8v-5.1h10.5v-11.2h-10.5v-5.1h25v5.1h-10.4v11.2h10.4v5.1h-25ZM238,180.2v-4c0-.2.1-.4.3-.4l24-9.2c.3-.1.7.1.7.4v4.2c0,.2-.1.4-.3.4l-4.9,1.9c-.2,0-.3.2-.3.4v8.6c0,.2.1.4.3.4l4.9,1.9c.2,0,.3.2.3.4v4.2c0,.4-.3.6-.7.4l-24-9.2c-.2,0-.3-.2-.3-.4h0ZM253.4,175.4c0-.3-.3-.6-.6-.4l-8.8,3.2h0c0,0,8.8,3.2,8.8,3.2.3.1.6-.1.6-.4v-5.5h0ZM254.9,139.4h7.6c.2,0,.5.2.5.5v4.1c0,.2-.2.5-.5.5h-6.5c-.1,0-.2,0-.3.1l-2.1,2c-.1.1-.1.2-.1.4v7.5c0,.2.2.5.5.5h8.6c.2,0,.5.2.5.5v4.1c0,.2-.2.5-.5.5h-24c-.2,0-.5-.2-.5-.5v-15.8c0-.1,0-.2.1-.3l3.5-3.7c0-.1.2-.1.4-.1h7.2c.1,0,.2,0,.4.1l2,2.1c.2.2.5.2.7,0l2.3-2.2c0,0,.2-.1.3-.1h0ZM249.4,154.5v-8.3c0-.1,0-.2-.1-.3l-1-1c0-.1-.2-.1-.4-.1h-4.4c-.1,0-.2,0-.4.1l-1,1c0,.1-.1.2-.1.3v8.3c0,.2.2.5.5.5h6.3c.2,0,.5-.2.5-.5h0ZM238,111.7v3.9c0,.1,0,.2.2.3l17.6,6.8c.1,0,.1.2,0,.3l-17.6,6.6c-.1,0-.2.2-.2.3v3.9c0,.2.2.4.4.3l24.2-9.1c.2,0,.3-.2.3-.4v-3.6c0,0,0-.1-.1-.2l-24.4-9.3c-.2,0-.4,0-.4.3h0ZM238,104.4v-18.1c0-.2.2-.5.5-.5h3.1c.2,0,.5.2.5.5v13c0,.2.2.5.5.5h5.4c.2,0,.5-.2.5-.5v-11.8c0-.2.2-.5.5-.5h3c.2,0,.5.2.5.5v11.8c0,.2.2.5.5.5h5.4c.2,0,.5-.2.5-.5v-13c0-.2.2-.5.5-.5h3.1c.2,0,.5.2.5.5v18.1c0,.2-.2.5-.5.5h-24c-.2,0-.5-.2-.5-.5h0ZM252.6,71.5l-13.9,8.8c-.3.2-.7,0-.7-.4v-4.4c0-.2,0-.3.2-.4l10-6.1h0c0,0-10-6.2-10-6.2-.1,0-.2-.2-.2-.4v-4.4c0-.4.4-.6.7-.4l13.9,8.8c0,0,.2,0,.2,0h9.6c.2,0,.5.2.5.5v4.1c0,.2-.2.5-.5.5h-9.6c0,0-.2,0-.2,0h0ZM242,53.3h-3.5c-.2,0-.5-.2-.5-.5v-4.1c0-.2.2-.5.5-.5h3.5l4.8.6c.2,0,.4.2.4.5v3.1c0,.2-.2.4-.4.5l-4.7.6h0ZM258.9,44h-2.9c-.2,0-.5-.2-.5-.5v-4c0-.2.2-.5.5-.5h1.4c.1,0,.2,0,.4-.1l.9-.9c0,0,.1-.2.1-.3v-7.4c0-.1,0-.2-.1-.3l-.9-1c0-.1-.2-.1-.4-.1h-3.7c-.1,0-.2,0-.4.1l-.9.9c0,.1-.1.2-.1.3v9.6c0,.1,0,.2-.1.3l-3.5,3.7c0,.1-.2.1-.4.1h-6.2c-.1,0-.2,0-.4-.1l-3.5-3.7c0-.1-.1-.2-.1-.3v-11.5c0-.1,0-.2.1-.3l3.5-3.7c0-.1.2-.1.4-.1h2.9c.2,0,.5.2.5.5v4c0,.2-.2.5-.5.5h-1.4c-.1,0-.2,0-.4.1l-.9.9c0,.1-.1.2-.1.3v7c0,.1,0,.2.1.3l.9.9c0,.1.2.1.4.1h3.2c.1,0,.2,0,.4-.1l.9-.9c0-.1.1-.2.1-.3v-9.6c0-.1,0-.2.1-.3l3.5-3.7c0-.1.2-.1.4-.1h6.6c.1,0,.2,0,.4.1l3.7,3.9c0,.1.1.2.1.3v11.8c0,.1,0,.2-.1.3l-3.5,3.7c0,.1-.2.1-.4.1h0Z"
                    />
                    <path
                      className="st0"
                      d="M153.5,251.2h5.1v10.5h11.1v-10.5h5.1v25h-5.1v-10.4h-11.1v10.4h-5.1v-25ZM190.1,251.2h4c.2,0,.4.1.4.3l9.2,24c.1.3-.1.7-.4.7h-4.2c-.2,0-.4-.1-.4-.3l-1.9-4.9c0-.2-.2-.3-.4-.3h-8.6c-.2,0-.4.1-.4.3l-1.9,4.9c0,.2-.2.3-.4.3h-4.2c-.4,0-.6-.3-.4-.7l9.2-24c0-.2.2-.3.4-.3h.1ZM194.9,266.6c.3,0,.6-.3.4-.6l-3.2-8.8h0l-3.2,8.8c-.1.3.1.6.4.6h5.6ZM230.9,268.1v7.6c0,.2-.2.5-.5.5h-4.1c-.2,0-.5-.2-.5-.5v-6.5c0-.1,0-.2-.1-.3l-2-2.1c-.1-.1-.2-.1-.4-.1h-7.5c-.2,0-.5.2-.5.5v8.6c0,.2-.2.5-.5.5h-4.1c-.2,0-.5-.2-.5-.5v-24c0-.2.2-.5.5-.5h15.8c.1,0,.2,0,.3.1l3.7,3.5c.1,0,.1.2.1.4v7.2c0,.1,0,.2-.1.4l-2.1,2c-.2.2-.2.5,0,.7l2.2,2.3c0,0,.1.2.1.3h0ZM215.8,262.6h8.3c.1,0,.2,0,.3-.1l1-1c.1,0,.1-.2.1-.4v-4.4c0-.1,0-.2-.1-.4l-1-1c-.1,0-.2-.1-.3-.1h-8.3c-.2,0-.5.2-.5.5v6.3c0,.2.2.5.5.5h0ZM258.6,251.2h-3.9c-.1,0-.2,0-.3.2l-6.8,17.6c0,.1-.2.1-.3,0l-6.6-17.6c0-.1-.2-.2-.3-.2h-3.9c-.2,0-.4.2-.3.4l9.1,24.2c0,.2.2.3.4.3h3.6c0,0,.1,0,.2-.1l9.3-24.4c0-.2,0-.4-.3-.4h0ZM265.9,251.2h18.1c.2,0,.5.2.5.5v3.1c0,.2-.2.5-.5.5h-13c-.2,0-.5.2-.5.5v5.4c0,.2.2.5.5.5h11.8c.2,0,.5.2.5.5v3c0,.2-.2.5-.5.5h-11.8c-.2,0-.5.2-.5.5v5.4c0,.2.2.5.5.5h13c.2,0,.5.2.5.5v3.1c0,.2-.2.5-.5.5h-18.1c-.2,0-.5-.2-.5-.5v-24c0-.2.2-.5.5-.5h0ZM298.8,265.8l-8.8-13.9c-.2-.3,0-.7.4-.7h4.4c.2,0,.3,0,.4.2l6.1,10h0l6.1-10c0-.1.2-.2.4-.2h4.4c.4,0,.6.4.4.7l-8.8,13.9c0,0,0,.2,0,.2v9.6c0,.2-.2.5-.5.5h-4.1c-.2,0-.5-.2-.5-.5v-9.6c0,0,0-.2,0-.2h0ZM316.9,255.2v-3.5c0-.2.2-.5.5-.5h4.1c.2,0,.5.2.5.5v3.5h0l-.6,4.8c0,.2-.2.4-.5.4h-3.1c-.2,0-.4-.2-.5-.4l-.6-4.7h0ZM326.2,272.1v-2.9c0-.2.2-.5.5-.5h4c.2,0,.5.2.5.5v1.4c0,.1,0,.2.1.4l.9.9c0,0,.2.1.3.1h7.4c.1,0,.2,0,.3-.1l1-.9c.1,0,.1-.2.1-.4v-3.7c0-.1,0-.2-.1-.4l-.9-.9c-.1,0-.2-.1-.3-.1h-9.6c-.1,0-.2,0-.3-.1l-3.7-3.5c-.1,0-.1-.2-.1-.4v-6.2c0-.1,0-.2.1-.4l3.7-3.5c.1,0,.2-.1.3-.1h11.5c.1,0,.2,0,.3.1l3.7,3.5c.1,0,.1.2.1.4v2.9c0,.2-.2.5-.5.5h-4c-.2,0-.5-.2-.5-.5v-1.4c0-.1,0-.2-.1-.4l-.9-.9c-.1,0-.2-.1-.3-.1h-7c-.1,0-.2,0-.3.1l-.9.9c-.1,0-.1.2-.1.4v3.2c0,.1,0,.2.1.4l.9.9c.1,0,.2.1.3.1h9.6c.1,0,.2,0,.3.1l3.7,3.5c.1,0,.1.2.1.4v6.6c0,.1,0,.2-.1.4l-3.9,3.7c-.1,0-.2.1-.3.1h-11.8c-.1,0-.2,0-.3-.1l-3.7-3.5c-.1,0-.1-.2-.1-.4h0Z"
                    />
                  </svg>
                </span>
                <h2 className="text-xl text-center mb-4">Rotation</h2>
                <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
                  The logo/wordmark should only ever be found at 0º and 90º
                  rotation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
