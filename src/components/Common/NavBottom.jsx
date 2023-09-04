import React, { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

import Logo from "./Logo";

const NavBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <nav className="border-b border-gray-600 border-opacity-40 bg-[#ff5050  md:py-5 py-7 md:px-10 px-5">
        <div
          className={`fixed top-0 right-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out bg-black bg-opacity-50 h-full w-full z-10`}
          onClick={toggleMenu}
        ></div>
        <div className="flex justify-between">
          <div className="flex gap-36">
            <Logo />
            <div className="hidden md:block">
              <ul className="flex gap-10 mt-2 text-white font-semibold">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/public/about">About</a>
                </li>
                <li>
                  <a href="/">Admissions</a>
                </li>
                <li>
                  <a href="/public/visa">Visa</a>
                </li>{" "}
                <li>
                  <a href="/public/contact">Contact</a>
                </li>{" "}
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex">
            <button className="text-white font-semibold bg-transparent hover:bg-roman-red hover:border-noneh hover:transition hover:ease-in-out hover:duration-1000 ease-out duration-1000 uppercase text-sm border border-gray-500 px-10 py-3">
              Book Appointment
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <GiHamburgerMenu className="mt-2" size={22} />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <nav
          className={`fixed top-0 right-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full "
          } transition-transform duration-[3000s] ease-in-out bg-white w-full h-full z-20`}
        >
          <div className="">
            <div className="flex justify-end p-3">
              <button className="text-black text-2xl" onClick={toggleMenu}>
                <MdCancel size={30} className="" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6 pt-6">
              <li>
                <a href="/" className="text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="/public/about" className="text-black">
                  About
                </a>
              </li>
              <li>
                <a href="/public/admissions" className="text-black">
                  Admissioms
                </a>
              </li>
              <li>
                <a href="/public/visa" className="text-black">
                  Visa
                </a>
              </li>
              <li>
                <a href="/public/contact" className="text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="/public/frequently-asked-questions" className="text-black">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBottom;
