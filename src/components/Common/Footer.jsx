import React from "react";
import item1 from "../../images/site-footer-visa-img-1-1.jpg";
import item2 from "../../images/site-footer-visa-img-1-2.jpg";
import item3 from "../../images/site-footer-visa-img-1-3.jpg";
import item4 from "../../images/site-footer-icon-comment.png";
import item5 from "../../images/site-footer-map-1.png";
import item6 from "../../images/footer-widget-gallery-img-2.jpg"
import item7 from "../../images/footer-widget-gallery-img-3.jpg";
import item8 from "../../images/footer-widget-gallery-img-4.jpg";
import item9 from "../../images/footer-widget-gallery-img-6.jpg";
import item10 from "../../images/gallery-1-1.jpg";
import item11 from "../../images/gallery-1-3.jpg";
import item12 from "../../images/gallery-1-5.jpg";
import Logo from "./Logo";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import "../../pages/CSS/SectionAbt.css";


const Footer = () => {
  return (
    <div>
      <div className="bg-black/70 lg:h-full pt-10">
        <div className="py-10">
          <div
            className="md:flex justify-between md:mx-56 px-5 md:px- border-b border-gray-700 pb-5 bg-no-repeat bg-opacity-80 shake-animationJO bg-bluev-900"
            style={{
              backgroundImage: `url(${item5})`,
              backgroundSize: "80%",
              animationName: "shake-animation",
            }}
          >
            <div className="md:flex gap-5 ">
              <div className="flex justify-center text-center md:text-left">
                <img className="w-8 h-8 rounded-full" src={item1} alt="item1" />
                <img className="w-8 h-8 rounded-full" src={item2} alt="item2" />
                <img className="w-8 h-8 rounded-full" src={item3} alt="item3" />
              </div>

              <div>
                <p className="font-semibold text-sm mt-2 text-center py-1 md:py-0">
                  Approved Traveler Visa Applications.{" "}
                  <br className="lg:hidden flex" />
                  <span className="underline text-white">
                    Get Your Visa
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-1">
              <div>
                <img src={item4} alt="" />
              </div>
              <div className="text-xs">
                <p>Have a question?</p>
                <p>
                  Free{" "}
                  <span className="text-white font-semibold">
                    +92 (8800) 9850
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex gap-10 mt-20 mx-3 lg:mx-56">
            <div className="md:w-1/4 p-2">
              <div>
                <Logo />
              </div>
              <p className="text-xs mt-5">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt.
              </p>
              <div class="flex gap-4 text-white mt-5">
                <a
                  className="border border-roman-red rounded-full p-1.5"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook />
                </a>
                <a
                  className="border border-roman-red rounded-full p-1.5"
                  href="https://www.twitter.com/"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  className="border border-roman-red rounded-full p-1.5"
                  href="https://www.pinterest.com/"
                >
                  <FaPinterest />
                </a>
                <a
                  className="border border-roman-red rounded-full p-1.5"
                  href="https://www.pinterest.com/"
                >
                  <FaInstagram
                    size={17}
                    className="bg-white text-gray-600 rounded-full p-0.5"
                  />
                </a>
              </div>
            </div>
            <div className="md:pt-5 pt-10 text-xs">
              <h2 className="text-sm text-white font-semibold">Explore</h2>
              <p className="py-3">About</p>
              <p>News & Media</p>
              <p className="py-3">Projects</p>
              <p>Contact</p>
            </div>
            <div className="md:pt-5 pt-10 text-xs">
              <h2 className="text-sm text-white font-semibold">Visa</h2>
              <p className="py-3">Work Visa</p>
              <p>Student Visa</p>
              <p className="py-3">Family Visa</p>
              <p>Travel Visa</p>
            </div>
            <div className="md:pt-0 pt-10">
              <h2 className="text-sm font-semibold text-white pt-5">Gallery</h2>
              <div className="grid grid-cols-3 mt-4 gap-2">
                <img className="w-14 h-14" src={item6} alt="" />
                <img className="w-14 h-14" src={item7} alt="" />
                <img className="w-14 h-14" src={item8} alt="" />
                <img className="w-14 h-14" src={item11} alt="" />
                <img className="w-14 h-14" src={item9} alt="" />
                <img className="w-14 h-14" src={item12} alt="" />
              </div>
            </div>
            <div className="md:pt-0 pt-10">
              <h2 className="text-sm font-semibold text-white pt-5">Contact</h2>
              <p className="text-xs flex pt-4 gap-2 text-roman-red">
                <FaEnvelope className="mt-1" />{" "}
                <span className="text-gray-500">needhelp@company.com</span>
              </p>
              <p className="text-xs flex pt-4 gap-2 text-roman-red">
                <FaMapMarkerAlt className="mt-1" />{" "}
                <span className="text-gray-500">
                  30 Commercial Road Fratton, Australia
                </span>
              </p>
              <p className="text-xs flex pt-4 gap-2 text-roman-red">
                <MdAccessTimeFilled className="mt-1" />{" "}
                <span className="text-gray-500">
                  Mon – Sat: 8:00 am to 6:00 pm <br /> Sunday: Closed
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black text-center py-5 mt-5">
          © All Copyright 2023 by Treck WordPress
        </div>
      </div>
    </div>
  );
};

export default Footer;
