import React from "react";
import { ReactComponent as CommoditiesBlackSVG } from "../assets/logos/secondary-stacked-commodities-black.svg";
import { ReactComponent as SeedBlackSVG } from "../assets/logos/secondary-stacked-seed-black.svg";
import { ReactComponent as FeedBlackSVG } from "../assets/logos/secondary-stacked-feed-black.svg";
import { ReactComponent as GardenCenterBlackSVG } from "../assets/logos/secondary-stacked-garden-center-black.svg";
import { ReactComponent as RetailBlackSVG } from "../assets/logos/secondary-stacked-retail-black.svg";
import { ReactComponent as CommoditiesGreenSVG } from "../assets/logos/secondary-stacked-commodities-green.svg";
import { ReactComponent as SeedGreenSVG } from "../assets/logos/secondary-stacked-seed-green.svg";
import { ReactComponent as FeedGreenSVG } from "../assets/logos/secondary-stacked-feed-green.svg";
import { ReactComponent as GardenCenterGreenSVG } from "../assets/logos/secondary-stacked-garden-center-green.svg";
import { ReactComponent as RetailGreenSVG } from "../assets/logos/secondary-stacked-retail-green.svg";
import { ReactComponent as CommoditiesOrangeSVG } from "../assets/logos/secondary-stacked-commodities-orange.svg";
import { ReactComponent as SeedOrangeSVG } from "../assets/logos/secondary-stacked-seed-orange.svg";
import { ReactComponent as FeedOrangeSVG } from "../assets/logos/secondary-stacked-feed-orange.svg";
import { ReactComponent as GardenCenterOrangeSVG } from "../assets/logos/secondary-stacked-garden-center-orange.svg";
import { ReactComponent as RetailOrangeSVG } from "../assets/logos/secondary-stacked-retail-orange.svg";
import { ReactComponent as CommoditiesWheatSVG } from "../assets/logos/secondary-stacked-commodities-wheat.svg";
import { ReactComponent as SeedWheatSVG } from "../assets/logos/secondary-stacked-seed-wheat.svg";
import { ReactComponent as FeedWheatSVG } from "../assets/logos/secondary-stacked-feed-wheat.svg";
import { ReactComponent as GardenCenterWheatSVG } from "../assets/logos/secondary-stacked-garden-center-wheat.svg";
import { ReactComponent as RetailWheatSVG } from "../assets/logos/secondary-stacked-retail-wheat.svg";
import { ReactComponent as CommoditiesWhiteSVG } from "../assets/logos/secondary-stacked-commodities-white.svg";
import { ReactComponent as SeedWhiteSVG } from "../assets/logos/secondary-stacked-seed-white.svg";
import { ReactComponent as FeedWhiteSVG } from "../assets/logos/secondary-stacked-feed-white.svg";
import { ReactComponent as GardenCenterWhiteSVG } from "../assets/logos/secondary-stacked-garden-center-white.svg";
import { ReactComponent as RetailWhiteSVG } from "../assets/logos/secondary-stacked-retail-white.svg";

const subBrandSVGs = {
  Commodities: {
    black: <CommoditiesBlackSVG />,
    green: <CommoditiesGreenSVG />,
    orange: <CommoditiesOrangeSVG />,
    wheat: <CommoditiesWheatSVG />,
    white: <CommoditiesWhiteSVG />,
  },
  Seed: {
    black: <SeedBlackSVG />,
    green: <SeedGreenSVG />,
    orange: <SeedOrangeSVG />,
    wheat: <SeedWheatSVG />,
    white: <SeedWhiteSVG />,
  },
  Feed: {
    black: <FeedBlackSVG />,
    green: <FeedGreenSVG />,
    orange: <FeedOrangeSVG />,
    wheat: <FeedWheatSVG />,
    white: <FeedWhiteSVG />,
  },
  "Garden Center": {
    black: <GardenCenterBlackSVG />,
    green: <GardenCenterGreenSVG />,
    orange: <GardenCenterOrangeSVG />,
    wheat: <GardenCenterWheatSVG />,
    white: <GardenCenterWhiteSVG />,
  },
  Retail: {
    black: <RetailBlackSVG />,
    green: <RetailGreenSVG />,
    orange: <RetailOrangeSVG />,
    wheat: <RetailWheatSVG />,
    white: <RetailWhiteSVG />,
  },
};

const HorizontalStackedSubBrand = () => {
  const [fill, setFill] = React.useState("green");
  const [subBrand, setSubBrand] = React.useState("Commodities");

  const handleSubBrandChange = (e) => {
    setSubBrand(e.target.value);
  };

  return (
    <div className="w-full shadow-lg bg-white flex flex-col mb-10">
      <div className="py-20 px-8 flex-col justify-center flex-grow flex">
        <div className="mb-6 flex justify-center mx-auto h-40 w-full">
          {
            subBrandSVGs[subBrand][
              fill === "black"
                ? "black"
                : fill === "green"
                ? "green"
                : fill === "orange"
                ? "orange"
                : fill === "wheat"
                ? "wheat"
                : fill === "wheat"
                ? "wheat"
                : fill === "white"
                ? "white"
                : "green"
            ]
          }
        </div>
        <h2 className="text-xl text-center mb-4">
          Horizontal sub-brand stacked
        </h2>
        <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
          The horizontal lockup works best in a more compact format where space
          is limited, and a horizontal lockup is more effective. Refer to this
          when the primary stacked logo cannot be used.
        </p>
        <div className="mb-6 w-40 self-center">
          <label className="block mb-2 text-sm font-bold" htmlFor>
            Select sub-brand
          </label>
          <select
            className="px-6 py-3 w-full border border-gray-100 placeholder-gray-300 text-sm focus:ring focus:ring-gray-200 transition duration-200 outline-none cursor-pointer mb-6"
            name="field-name"
            value={subBrand}
            onChange={handleSubBrandChange}
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
      <div className="flex flex-wrap flex-row items-center -m-1 md:-m-4 justify-center">
        <div className="w-1/5 p-0 md:p-4 mb-6 lg:mb-0 text-center flex justify-center">
          <div className="scale-50 md:scale-100 inline-block mx-auto mb-6 relative">
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
            <a
              onClick={() => setFill("black")}
              className="ml-2 absolute inset-0"
            >
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
            </a>
          </div>
        </div>
        <div className="w-1/5 p-0 md:p-4 mb-6 lg:mb-0 text-center flex justify-center">
          <div className="scale-50 md:scale-100 inline-block mx-auto mb-6 relative">
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
            <a
              onClick={() => setFill("green")}
              className="ml-2 absolute inset-0"
            >
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
            </a>
          </div>
        </div>
        <div className="w-1/5 p-0 md:p-4 mb-6 lg:mb-0 text-center flex justify-center">
          <div className="scale-50 md:scale-100 inline-block mx-auto mb-6 relative">
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
            <a
              onClick={() => setFill("orange")}
              className="ml-2 absolute inset-0"
            >
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
            </a>
          </div>
        </div>
        <div className="w-1/5 p-0 md:p-4 mb-6 lg:mb-0 text-center flex justify-center">
          <div className="scale-50 md:scale-100 inline-block mx-auto mb-6 relative">
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
            <a
              onClick={() => setFill("wheat")}
              className="ml-2 absolute inset-0"
            >
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
            </a>
          </div>
        </div>
        <div className="w-1/5 p-0 md:p-4 mb-6 lg:mb-0 text-center flex justify-center">
          <div className="scale-50 md:scale-100 inline-block mx-auto mb-6 relative">
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
            <a
              onClick={() => setFill("white")}
              className="ml-2 absolute inset-0"
            >
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalStackedSubBrand;
