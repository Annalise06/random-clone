import React from "react";
import NavTop from "../../../components/Common/NavTop";
import NavBottom from "../../../components/Common/NavBottom";
import Hero from "../../../components/Common/Hero";
import Card from "./HeroCard";

const Herox = () => {
  return (
    <div
      className="relative lg:bg-center md:bg-cover lg:pb-24 md:pb-0 top-0 md:bg-top bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(./slider.jpg)",
      }}
    >
      <div className="bg-black/60b relative bg-gradient-to-b from-black via-black/70 to-transparent h-screen md:h-[60vh] lg:h-screen"></div>

      <div className="absolute top-0 w-full">
        {/* <NavTop /> */}
        <NavBottom />
        <Hero />
        <Card />
      </div>
    </div>
  );
};

export default Herox;
