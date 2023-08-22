import React, { useState } from "react";

const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out bg-black bg-opacity-50 h-full w-full z-10`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-1000 ease-in-out bg-white h-full w-64 z-20`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          
        </button>
        <nav className="pt-20 pl-6">
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-black text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-lg">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="m-auto md:hidden flex">
        <div className="fixed top-4 right-4 z-30" onClick={toggleMenu}>
          <div
            className={`w-8 h-1 bg-black mb-1 transition-transform duration-500 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black mb-1 transition-opacity duration-500 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black transition-transform duration-500 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Test;
