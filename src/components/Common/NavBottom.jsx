import React, { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { BsArrowRightSquareFill, BsTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
// import "./Nav.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log("clicked toggle", isMenuOpen);

  return (
    <div className="">
      <nav className="border-b border-gray-600 border-opacity-30 md:px-10 md:py-10 lg:py-0 py-0 lg:px-10 pr-10">
        <div
          className={`fixed top-0 left-0 transform ${
            isMenuOpen ? "translate-x-0 left-0" : "translate-x-full left-0"
          } left-0 transition-transform duration-500 ease-in-out bg-black bg-opacity-50 h-full w-full z-10`}
          // onClick={toggleMenu}
        ></div>
        <div className="flex justify-between">
          <div className="flex lg:gap-36 md:gap-5">
            <Logo />
            <div className="hidden md:block lg:pt-7">
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
          <div className="hidden md:flex md:py-5 py-0">
            <button className="text-white font-semibold bg-transparent hover:bg-roman-red hover:border-noneh hover:transition hover:ease-in-out hover:duration-1000 ease-out duration-1000 uppercase text-sm border border-gray-500 px-10 py-3">
              <Link to="/public/contact">Book Appointment</Link>
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-roman-red" onClick={toggleMenu}>
              <GiHamburgerMenu className="lg:mt-2 mt-9" size={23} />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <nav
          className={`fixed top-0 left-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }  transition-transform duration-[5000s] ease-in-out bg-black h-full w-[80%] z-20`}
          onClick={toggleMenu}
        >
          <div className="pt-3">
            <div className="flex justify-between">
              <div className="pt-3">
                <Logo />
              </div>
              <div className="flex justify-end p-3">
                <button className="text-white text-2xl" onClick={toggleMenu}>
                  <MdCancel size={30} className="" />
                </button>
              </div>
            </div>

            <ul className="flex flex-col text-white gap-10 px-6 pt-10">
              <li>
                <a href="/" className="flex justify-between">
                  <p>Home</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="/public/about" className="flex justify-between">
                  <p>About</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="/public/admissions" className="flex justify-between">
                  <p>Admissions</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="/public/visa" className="flex justify-between">
                  <p>Visa</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="/public/contact" className="flex justify-between">
                  <p>Contact</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a
                  href="/public/frequently-asked-questions"
                  className="flex justify-between"
                >
                  <p>FAQ</p>
                  <BsArrowRightSquareFill
                    className="text-roman-red"
                    size={25}
                  />
                </a>
              </li>
            </ul>

            <div className="pt-10 px-5">
              <div className="flex text-white gap-5 ">
                <AiFillMessage
                  className="bg-roman-red p-2 rounded-full"
                  size={30}
                />
                <p>seomemail@gmail.com</p>
              </div>
              <div className="flex text-white gap-5 my-5">
                <BsTelephoneFill
                  className="bg-roman-red p-2 rounded-full"
                  size={30}
                />
                <p>some contact</p>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBottom;
