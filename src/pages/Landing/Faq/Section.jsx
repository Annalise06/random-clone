import React from "react";
import quest from "../../../images/faq-search-shape-1.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="bg-white md:pb-20 md:pt-0 py-10 md:px-40 px-5">
      <section className="bg-gradient-to-b from-white via-gray-100 to-slate-300 md:pt-16">
        <div className="md:flex md:justify-between md:px-10">
          <div className="w-[50%] md:my-28">
            <h1 className="lg:text-3xl text-2xl font-semibold text-black">Welcome Looking for Help?</h1>
            <p className="py-5">
              There are many variations of passages the majority have alteration
              in some. Nam hendrerit elit vel urna congue.
            </p>
            <div className="flex gap-10">
              <div>
                <button className="text-white bg-roman-red hover:underline hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3 font-semibold">
                  <Link to="/public/contact"> Contact Now!</Link>
                </button>
              </div>
              <div>
                <p className="pt-2.5">Explain us everything you need?</p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
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
