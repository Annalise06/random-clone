import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import quest from "../../../images/faq-search-shape-1.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="bg-white md:pb-20 md:pt-0 py-10 md:px-40 px-5">
      <section className="bg-gradient-to-b from-white via-gray-100 to-roman-grey px-3 md:px-0 md:pb-0 pb-5 md:pt-16">
        <div className="md:flex md:justify-between md:px-10">
          <div className="md:w-[50%] md:my-28">
            <h1 className="lg:text-3xl text-2xl font-semibold text-black">Welcome Looking for Help?</h1>
            <p className="py-5">
              There are many variations of passages the majority have alteration
              in some. Nam hendrerit elit vel urna congue.
            </p>
            <div className="md:flex flex flex-col justify-center gap-5 md:gap-10">
              <div className="flex justify-cengter">
                <a href="https://wa.link/iw1qkc" className="flex gap-3 text-white bg-roman-red hover:underline hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3 font-semibold">
                  <p>Contact Now! </p><IoLogoWhatsapp className="text-green-500 bg-white rounded-full" size={25}/>
                </a>
              </div>
              <div className="text-center">
                <p className="pt-2.5 underline hover:text-gray-500 cursor-pointer">Explain to us everything you need?</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-[50%]">
            <div className="flex justify-end right-10">
              <img className="flex justify-end shake-animation" src={quest} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
