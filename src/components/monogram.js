import React, { useState } from "react";

const Monogram = () => {
  const [fill, setFill] = useState("#2b3c1d");
  return (
    <div className="w-full bg-white shadow-lg">
      <div className="py-20 px-8 flex flex-col justify-center flex-grow">
        <span className="mb-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_2"
            data-name="Layer 2"
            viewBox="0 0 176.61 215.37"
            className="h-40"
          >
            <defs />
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                fill={fill}
                d="M88.05,8.69c23.85-.06,42.93,8.28,56.72,24.8,14.85,17.79,23.07,44.06,23.15,73.99.08,29.92-8.01,56.24-22.76,74.1-13.7,16.59-32.75,25.04-56.59,25.1-23.85.06-42.93-8.28-56.72-24.8-14.85-17.79-23.07-44.06-23.15-73.98-.08-29.92,8.01-56.24,22.76-74.1,13.71-16.59,32.75-25.04,56.59-25.1M88.03,0c-26.56.07-47.84,9.58-63.27,28.25C8.71,47.68-.08,75.97,0,107.92c.08,31.94,9.02,60.19,25.17,79.53,15.53,18.6,36.86,27.99,63.42,27.93,26.56-.07,47.84-9.57,63.27-28.25,16.05-19.42,24.84-47.72,24.75-79.66-.08-31.95-9.02-60.19-25.17-79.53C135.92,9.33,114.58-.07,88.03,0h0ZM140.43,67.27l-3.07,6.25.15,79.66,3.16,6.67.02,6.51-24.66.06-11.97-11.96-.1-36.58c-9.75-1.4-19.91-1.97-29.29,1.01-.39.12-1.55.44-1.83.61-.05.03-.1.04-.11.11l.04,46.92-24.59.06c-.14-.33-.46-.62-.72-.87-3.46-3.33-6.87-6.74-10.23-10.17-.14-.14-1.01-.87-1.03-.96v-6.21s3.01-6.63,3.01-6.63l-.17-79.25c-.88-2.24-2.05-4.39-3.09-6.57l-.02-6.9,24.66-.06c3.01,3.17,6.24,6.23,9.34,9.34.71.72,1.54,1.69,2.27,2.37.05.04.36.17.36.19l.07,26.38c10.44-1.66,21.26-.55,31.25,2.78l-.11-41.18,24.66-.06c3.7,3.79,7.52,7.55,11.28,11.31.2.2.43.47.69.6l.02,6.58ZM108.05,95.88c-3.27-1.03-6.47-2.29-9.79-3.17-11.08-2.93-22.79-2.7-33.76.6-2.67.81-5.27,1.86-7.93,2.7l-.11-42.79-.11-.11-16.19.04v1.89c1.01,2.14,2.17,4.22,3.03,6.42l.21,80.93c-.85,2.31-2.01,4.53-2.99,6.8v1.32s16.2-.04,16.2-.04l.11-.11-.12-45.72c2.54-.81,5.04-1.74,7.63-2.43,14.45-3.88,29.94-3.06,43.84,2.4l.12,45.72,16.37-.04v-1.39c-1.07-2.25-2.26-4.47-3.17-6.78l-.15-81.44,3.07-6.28v-1.47s-16.37.04-16.37.04l.11,42.89Z"
              />
            </g>
          </svg>
        </span>
        <h2 className="text-xl text-center mb-4">Monogram</h2>
        <p className="text-gray-500 max-w-xs mx-auto text-center mb-5">
          The monogram serves as a compact and highly recognizable symbol of our
          brand. We will start incorporating it on its own to act as shorthand
          and help strengthen brand recognition. At the start, it is important
          to also include the wordmark to lessen confusion.
        </p>
        <ul className="mx-auto text-left max-w-sm grid grid-cols-2 mb-4">
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Watermarks</p>
          </li>
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Apparel</p>
          </li>
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Promotional items</p>
          </li>
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Packaging</p>
          </li>
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Letterheads</p>
          </li>
          <li className="flex gap-2 items-center mb-1">
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
            <p className="text-gray-500">Presentations</p>
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="px-6 py-3 block text-center w-full sm:w-auto bg-yellow-500 text-sm font-bold hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
            href="/logos/monogram-PNGs.zip"
          >
            Download PNG
          </a>
          <a
            className="px-6 py-3 block text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200"
            href="/logos/monogram-SVGs.zip"
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
              onClick={() => setFill("#10181f")}
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
              onClick={() => setFill("#2b3c1d")}
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
              onClick={() => setFill("#C05017")}
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
              onClick={() => setFill("#D8C7A2")}
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
              onClick={() => setFill("#f6eceb")}
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

export default Monogram;
