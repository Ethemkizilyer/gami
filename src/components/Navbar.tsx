import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
    const handleClick = (page:string) => {
      setActive(page);
    };

  return (
    <nav className="flex items-center justify-between border-b mx-auto h-16 w-full  px-4 py-3 h ">
      <div className="flex items-center justify-between mx-auto h-16 w-full  px-[100px] py-3 h ">
        <div className="flex items-center ">
          <a
            href="https://GAMI.com/"
            className="flex items-center mb-4 pl-4 sm:mb-0"
          >
            <svg
              width="36"
              height="46"
              viewBox="0 0 36 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9046 24.2877V28.5234C23.9046 28.9568 23.555 29.3074 23.1228 29.3074H12.8755C12.4432 29.3074 12.0936 28.9568 12.0936 28.5234V24.2877C12.0936 23.8543 11.7439 23.5037 11.3117 23.5037H7.08711C6.65485 23.5037 6.30521 23.1531 6.30521 22.7197V6.58574C6.30521 6.15234 6.65485 5.80177 7.08711 5.80177H11.3117C11.7439 5.80177 12.0936 5.4512 12.0936 5.0178V0.783971C12.0936 0.350572 12.4432 0 12.8755 0H23.1228C23.555 0 23.9046 0.350572 23.9046 0.783971V5.37222C23.9046 5.80562 23.555 6.15619 23.1228 6.15619H13.1675C12.7352 6.15619 12.3856 6.50676 12.3856 6.94016V22.3692C12.3856 22.8026 12.7352 23.1531 13.1675 23.1531H22.8288C23.2611 23.1531 23.6107 22.8026 23.6107 22.3692V18.484C23.6107 18.0506 23.2611 17.7 22.8288 17.7H18.6043C18.172 17.7 17.8224 17.3494 17.8224 16.916V12.3856C17.8224 11.9522 18.172 11.6016 18.6043 11.6016H28.9092C29.3414 11.6016 29.6911 11.9522 29.6911 12.3856V22.7178C29.6911 23.1512 29.3414 23.5018 28.9092 23.5018H24.6846C24.2524 23.5018 23.9027 23.8524 23.9027 24.2858L23.9046 24.2877Z"
                fill="#1C325B"
              />
              <path
                d="M1.8462 39.2602V44.1354H6.70857V42.8449H4.84892V40.9803H8.57975V44.2298C8.57975 45.2103 7.78056 45.9981 6.80463 45.9981H1.76359C0.785741 45.9981 0 45.2103 0 44.2298V39.1639C0 38.1834 0.785741 37.3956 1.76359 37.3956H6.80463C7.78248 37.3956 8.57975 38.2797 8.57975 39.2602H1.8462Z"
                fill="#1C325B"
              />
              <path
                d="M17.7916 37.3975C18.7695 37.3975 19.5667 38.1853 19.5667 39.1658V46H17.6955V43.2282H12.8332V46H10.987V39.1658C10.987 38.1853 11.7727 37.3975 12.7506 37.3975H17.7916ZM17.6955 41.3636V39.2602H12.8332V41.3636H17.6955Z"
                fill="#1C325B"
              />
              <path
                d="M29.7084 37.3975H31.6276V46H29.768V40.2291C28.8036 41.3771 27.7662 42.6426 26.8133 43.7656L23.8451 40.2406V46H21.9989V37.3975H23.9066L26.8152 40.8743L29.7103 37.3975H29.7084Z"
                fill="#1C325B"
              />
              <path
                d="M34.1404 37.3975H36.0001V46H34.1404V37.3975Z"
                fill="#1C325B"
              />
            </svg>
          </a>
        </div>
        <div className="flex ">
          <button
            className={`mx-2 py-2 mt-[22px]   px-4 h-12 font-medium relative ${
              active == "home"
                ? "border-t-[1px] w-[80px] rounded-t-lg border-b-white "
                : ""
            }`}
            onClick={() => handleClick("home")}
          >
            <span
              className={`absolute -left-[4px] h-[1px] w-[87px] -right-1 bottom-[2.5px] ${
                active == "home" && " bg-white h-[1px]  "
              }`}
            ></span>
            <span
              className={`absolute -left-[19.3px] bottom-[3px] ${
                active == "home" &&
                "border-r-[1px] border-r-gray-100 border-b-[1px] rounded-br-lg  rounded- w-[20px] h-[39px]"
              }`}
            ></span>
            <span
              className={`absolute -right-[23px] bottom-[3px] ${
                active == "home" &&
                "border-l-[1px] border-l-gray-100 border-r-white rounded-b-lg w-6 h-[39px]"
              }`}
            ></span>
            Home
          </button>

          <button
            className={`mx-2 py-2 mt-[22px]  px-4 h-12 text-gray-500 font-medium relative ${
              active == "what"
                ? "border-t-[1px] w-[130px] rounded-t-lg border-b-white "
                : ""
            }`}
            onClick={() => handleClick("what")}
          >
            <span
              className={`absolute -left-[6px] h-[1px] w-[140px] -right-1 bottom-[2.5px] ${
                active == "what" && " bg-white h-[1px]  "
              }`}
            ></span>
            <span
              className={`absolute -left-[19.3px] bottom-[3px] ${
                active == "what" &&
                "border-r-[1px] border-r-gray-100 border-b-[1px] rounded-br-lg  rounded- w-[20px] h-[39px]"
              }`}
            ></span>
            <span
              className={`absolute -right-[23px] bottom-[3px] ${
                active == "what" &&
                "border-l-[1px] border-l-gray-100 border-r-white-100 rounded-b-lg w-6 h-[39px]"
              }`}
            ></span>
            What We Do
          </button>
          <button
            className={`mx-2 py-2 mt-[22px]  px-4 h-12 text-gray-500 font-medium relative ${
              active == "GAMI"
                ? "border-t-[1px] w-[145px] rounded-t-lg border-b-white "
                : ""
            }`}
            onClick={() => handleClick("GAMI")}
          >
            <span
              className={`absolute -left-[9px] h-[1px] w-[160px] -right-1 bottom-[2.5px] ${
                active == "GAMI" && " bg-white h-[1px]  "
              }`}
            ></span>
            <span
              className={`absolute -left-[19.3px] bottom-[3px] ${
                active == "GAMI" &&
                "border-r-[1px] border-r-gray-100 border-b-[1px] rounded-br-lg  rounded- w-[20px] h-[39px]"
              }`}
            ></span>
            <span
              className={`absolute -right-[23px] bottom-[3px] ${
                active == "GAMI" &&
                "border-l-[1px] border-l-gray-100 border-r-white rounded-bl-lg w-6 h-[39px]"
              }`}
            ></span>
            GAMI Statistics
          </button>
          <button
            className={`mx-2 py-2 mt-[22px]  px-4 h-12 text-gray-500 font-medium relative ${
              active == "contact"
                ? "border-t-[1px] w-[120px] rounded-t-lg border-b-white "
                : ""
            }`}
            onClick={() => handleClick("contact")}
          >
            <span
              className={`absolute -left-[4px] h-[1px] w-[127.5px] -right-1 bottom-[2.5px] ${
                active == "contact" && " bg-white h-[1px]  "
              }`}
            ></span>
            <span
              className={`absolute -left-[19.3px] bottom-[3px] ${
                active == "contact" &&
                "border-r-[1px] border-r-gray-100 border-b-[1px] rounded-br-lg  rounded- w-[20px] h-[39px]"
              }`}
            ></span>
            <span
              className={`absolute -right-[23px] bottom-[3px] ${
                active == "contact" &&
                "border-l-[1px] border-l-gray-100 border-r-white rounded-b-lg w-6 h-[39px]"
              }`}
            ></span>
            Contact Us
          </button>
        </div>
        <div className="flex items-center">
          <button
            className=" text-white flex items-center font-[600] leading-[34px] w-[132px] h-[52px] px-[28px] py-[14px]  bg-[#1E293B]
rounded-[8px]"
          >
            Buy GAMI
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
