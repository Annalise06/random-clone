import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const HomeNav = () => {
  return (
    <div className="">
      <div class="hidden lg:block py-1 bg-black pl-10">
        <div class="flex justify-between">
          <div class="">
            <ul class="flex gap-10 text-xs font-semibold text-gray-500 mt-2">
              <li className="flex gap-0.5">
                <div class="icon icon-svg">
                  <FaMapMarkerAlt className="mt-1 text-roman-red" />
                </div>
                <div class="mt-0.5">
                  <p className="">
                    {" "}
                    Doyen Academy, Enugu Abakiliki Rd, Phase IIv 400104
                    Enugu, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <div class="icon icon-svg">
                  <FaEnvelope className="mt-1 text-roman-red" />
                </div>
                <div class="mt-0.5">
                  <p>
                    <a href="mailto:Info@company.com">
                      {" "}
                      romaniaconsultancy@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <div class="icon icon-svg">
                  <MdAccessTimeFilled className="mt-1 text-roman-red" />
                </div>
                <div class="mt-0.5">
                  <p>Mon - Fri 8.00 am - 4.00 pm</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex gap-20 pr-10">
            <ul class="flex gap-10 mt-1.5 text-sm ">
              <li>
                <a class="" href="/romania/frequently-asked-questions">
                  Faq’s
                </a>
              </li>
              <li>/</li>
              <li>
                <a class="" href="/romania/contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* <div class="flex bg-roman-red pr-10">
              <div>
                <img
                  decoding="async"
                  src="https://bracketweb.com/treckwp/wp-content/uploads/2023/04/main-header-two-social-shape.png"
                  alt="alt"
                  title="main-header-two-social-shape"
                />
              </div>
              <h4 class="mr-7 mt-2 text-white">Follow us:</h4>
              <div class="flex gap-2 text-white mt-3">
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com/">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.pinterest.com/">
                  <FaPinterest />
                </a>
                <a href="https://www.pinterest.com/">
                  <FaInstagram
                    size={18}
                    className="bg-white text-gray-600 rounded-full p-0.5"
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
