import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import Footer from "../../../components/Common/Footer";
import Section from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Visa = () => {
  return (
    <div>
      <div>
        <div className="bg-black/20">
          <HomeNav />
          <NavBottom />
        </div>
        <Hero />
        <Section />
        <Section2/>
        <Section3/>
        <Footer />
      </div>
    </div>
  );
};

export default Visa;
