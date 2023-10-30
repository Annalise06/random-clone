import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
// import Country from "../Home/Country";
// import Abt from "./Section1";
// import Questions from "../Home/Questions";
// import Sectiontwo from "./Sectiontwo";
// import Sectionthree from "./Sectionthree";
// import Excellence from "../Home/Excellence";
import Footer from "../../../components/Common/Footer";
import bg from "../../../images/about-header-bg.jpg";
import Section from "./Section";
import Questions from "./Questions";

const Faq = () => {
  return (
    <div>
      {" "}
      <HomeNav />
      <div
        className="bg-whgite bg-congtain w-full md:h-[85vh] h-[75vh] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-gradient-to-b from-black via-black/70 to-transparent">
          <NavBottom />
          <Hero />
        </div>
        <Section />
        <Questions />
        {/* <Abt />
        <Excellence />
        <Country />
        <Questions />
        <Sectiontwo />
        <Sectionthree /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
