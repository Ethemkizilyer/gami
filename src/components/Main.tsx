import React from "react";


function Main() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className=" lg:w-[548px] flex flex-col gap-4 items-start mx-auto justify-end ml-[80px]  text-start">
        <p className="text-[72px] md:text-6xl lg:text-[72px] font-[600] tracking-wider text-gray-300">
          Lorem Ipsum Dolor Sit Amet
        </p>
        <p className="text-x tracking-wider text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          cum ullam. Est eius adipisci sed impedit eveniet nihil.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#"
            className="transform rounded-md shadow-lg hover: border-slate-200 px-7 py-4 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            Explore GAMI
          </a>
          <a
            href="#"
            className="transform rounded-md  shadow-lg border-slate-200 px-7 py-4 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            Buy GAMI
          </a>
        </div>
      </div>
      <div className="w-1/2 h-[581px]  flex lg:items-end justify-center p-4">
        <svg
          width="387.83"
          height="487.85"
          viewBox="0 0 412 652"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_1_1392)">
            <path
              d="M269.695 259.729V304.652C269.695 309.248 265.929 312.966 261.272 312.966H150.877C146.221 312.966 142.454 309.248 142.454 304.652V259.729C142.454 255.133 138.687 251.415 134.03 251.415H88.519C83.8623 251.415 80.0956 247.697 80.0956 243.101V71.9912C80.0956 67.3948 83.8623 63.6768 88.519 63.6768H134.03C138.687 63.6768 142.454 59.9588 142.454 55.3624V10.4605C142.454 5.86406 146.221 2.14606 150.877 2.14606H261.272C265.929 2.14606 269.695 5.86406 269.695 10.4605V59.1212C269.695 63.7176 265.929 67.4356 261.272 67.4356H154.023C149.366 67.4356 145.6 71.1536 145.6 75.75V239.383C145.6 243.979 149.366 247.697 154.023 247.697H258.105C262.762 247.697 266.529 243.979 266.529 239.383V198.178C266.529 193.582 262.762 189.864 258.105 189.864H212.594C207.937 189.864 204.171 186.146 204.171 181.549V133.501C204.171 128.905 207.937 125.187 212.594 125.187H323.61C328.266 125.187 332.033 128.905 332.033 133.501V243.08C332.033 247.677 328.266 251.395 323.61 251.395H278.098C273.441 251.395 269.675 255.112 269.675 259.709L269.695 259.729Z"
              fill="#F3F4F6"
            />
            <path
              d="M32.0592 418.52V470.225H84.4418V456.538H64.4077V436.763H104.6V471.226C104.6 481.624 95.9904 489.979 85.4767 489.979H31.1693C20.6348 489.979 12.17 481.624 12.17 471.226V417.499C12.17 407.101 20.6348 398.745 31.1693 398.745H85.4767C96.0111 398.745 104.6 408.122 104.6 418.52H32.0592Z"
              fill="#F3F4F6"
            />
            <path
              d="M203.839 398.766C214.374 398.766 222.963 407.121 222.963 417.52V490H202.805V460.603H150.422V490H130.533V417.52C130.533 407.121 138.998 398.766 149.532 398.766H203.839ZM202.805 440.829V418.521H150.422V440.829H202.805Z"
              fill="#F3F4F6"
            />
            <path
              d="M332.219 398.766H352.895V490H332.861V428.796C322.471 440.972 311.295 454.393 301.03 466.303L269.054 428.919V490H249.165V398.766H269.716L301.05 435.64L332.24 398.766H332.219Z"
              fill="#F3F4F6"
            />
            <path
              d="M379.966 398.766H400V490H379.966V398.766Z"
              fill="#F3F4F6"
            />
            <path
              d="M269.175 259.709V259.918L269.195 259.939V304.652C269.195 308.966 265.659 312.466 261.272 312.466H150.877C146.491 312.466 142.954 308.966 142.954 304.652V259.729C142.954 254.851 138.957 250.915 134.03 250.915H88.519C84.1323 250.915 80.5956 247.415 80.5956 243.101V71.9912C80.5956 67.677 84.1323 64.1768 88.519 64.1768H134.03C138.957 64.1768 142.954 60.2411 142.954 55.3624V10.4605C142.954 6.14632 146.491 2.64606 150.877 2.64606H261.272C265.659 2.64606 269.195 6.14632 269.195 10.4605V59.1212C269.195 63.4354 265.659 66.9356 261.272 66.9356H154.023C149.097 66.9356 145.1 70.8714 145.1 75.75V239.383C145.1 244.261 149.097 248.197 154.023 248.197H258.105C263.032 248.197 267.029 244.261 267.029 239.383V198.178C267.029 193.299 263.032 189.364 258.105 189.364H212.594C208.207 189.364 204.671 185.864 204.671 181.549V133.501C204.671 129.187 208.207 125.687 212.594 125.687H323.61C327.996 125.687 331.533 129.187 331.533 133.501V243.08C331.533 247.394 327.996 250.895 323.61 250.895H278.098C273.171 250.895 269.175 254.83 269.175 259.709ZM32.0592 418.02H31.5592V418.52V470.225V470.725H32.0592H84.4418H84.9418V470.225V456.538V456.038H84.4418H64.9077V437.263H104.1V471.226C104.1 481.337 95.7251 489.479 85.4767 489.479H31.1693C20.9048 489.479 12.67 481.342 12.67 471.226V417.499C12.67 407.383 20.9048 399.245 31.1693 399.245H85.4767C95.543 399.245 103.824 408.076 104.093 418.02H32.0592ZM149.922 460.603V489.5H131.033V417.52C131.033 407.404 139.268 399.266 149.532 399.266H203.839C214.108 399.266 222.463 407.408 222.463 417.52V489.5H203.305V460.603V460.103H202.805H150.422H149.922V460.603ZM202.805 441.329H203.305V440.829V418.521V418.021H202.805H150.422H149.922V418.521V440.829V441.329H150.422H202.805ZM319.069 444.303C312.977 451.521 306.863 458.763 301.031 465.535L269.434 428.594L268.554 427.565V428.919V489.5H249.665V399.266H269.485L300.669 435.963L301.051 436.413L301.432 435.963L332.472 399.266H352.395V489.5H333.361V428.796V427.44L332.48 428.472C328.105 433.6 323.593 438.945 319.069 444.303ZM380.466 399.266H399.5V489.5H380.466V399.266Z"
              stroke="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1_1392"
              x="0.169983"
              y="0.146065"
              width="411.83"
              height="511.854"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_1_1392"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_1392"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_1_1392"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="7.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1_1392"
                result="effect2_dropShadow_1_1392"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1_1392"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Main;


