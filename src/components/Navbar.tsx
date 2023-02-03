import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
    const handleClick = (page:string) => {
      setActive(page);
    };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex items-center">
        <button
          className={`mx-2 py-2 px-4 text-white font-medium ${
            active === "home" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleClick("home")}
        >
          Home
        </button>
        <button
          className={`mx-2 py-2 px-4 text-white font-medium ${
            active === "what" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleClick("what")}
        >
          What We Do
        </button>
        <button
          className={`mx-2 py-2 px-4 text-white font-medium ${
            active === "GAMI" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleClick("GAMI")}
        >
          GAMI Statistics
        </button>
        <button
          className={`mx-2 py-2 px-4 text-white font-medium ${
            active === "contact" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleClick("contact")}
        >
          Contact Us
        </button>
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 text-white font-medium bg-orange-500">
          Buy GAMI
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
