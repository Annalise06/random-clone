import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import Country from "../Home/Country";
import Abt from "./Section1";
import Questions from "../Home/Questions";
import Sectiontwo from "./Sectiontwo";
import Sectionthree from "./Sectionthree";
import Footer from "../../../components/Common/Footer";


const About = () => {
  return (
    <div>
      <div>
        <div className="bg-black/20">
          <HomeNav />
          <NavBottom />
        </div>
        <Hero />
        <Abt/>
        <Country/>
        <Questions/>
        <Sectiontwo/>
        <Sectionthree/>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
