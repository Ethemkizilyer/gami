import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
    const handleClick = (page:string) => {
      setActive(page);
    };

  return (
    // <nav className="flex border-b border-gray-200 text-center items-center justify-between px-4 py-3 bg-gray-800">
    //   <div className="flex items-center">
    //     <img src="/logo.png" alt="logo" />
    //   </div>

    //   <div className="flex items-center">
    //     <button
    //       className={`mx-2 py-2 flex-1 px-4 text-white font-medium ${
    //         active === "home" ? "border-b-2 border-white" : ""
    //       }`}
    //       onClick={() => handleClick("home")}
    //     >
    //       Home
    //     </button>
    //     <button
    //       className={`mx-2 py-2 px-4 text-white font-medium ${
    //         active === "what" ? "border-b-2 border-white" : ""
    //       }`}
    //       onClick={() => handleClick("what")}
    //     >
    //       What We Do
    //     </button>
    //     <button
    //       className={`mx-2 py-2 px-4 text-white font-medium ${
    //         active === "GAMI" ? "border-b-2 border-white" : ""
    //       }`}
    //       onClick={() => handleClick("GAMI")}
    //     >
    //       GAMI Statistics
    //     </button>
    //     <button
    //       className={`mx-2 py-2 px-4 text-white font-medium ${
    //         active === "contact" ? "border-b-2 border-white" : ""
    //       }`}
    //       onClick={() => handleClick("contact")}
    //     >
    //       Contact Us
    //     </button>
    //   </div>

    //   <div className="flex items-center">
    //     <button className="px-4 py-2 text-white font-medium bg-orange-500">
    //       Buy GAMI
    //     </button>
    //   </div>
    // </nav>
    <ul className="flex border-b border-gray-200 text-center">
      <li className="flex-1">
        <a
          className="relative block border-t border-l border-r border-gray-200 bg-white p-4 text-sm font-medium"
          href="#"
        >
          <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white" />
          Settings
        </a>
      </li>
      <li className="flex-1">
        <a className="block p-4 text-sm font-medium text-gray-500" href="#">
          Messages
        </a>
      </li>
      <li className="flex-1">
        <a className="block p-4 text-sm font-medium text-gray-500" href="#">
          {" "}
          Archive{" "}
        </a>
      </li>
      <li className="flex-1">
        <a className="block p-4 text-sm font-medium text-gray-500" href="#">
          Notifications
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
