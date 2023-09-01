import React from "react";
import NavTop from "../../../components/Common/NavTop";
import NavBottom from "../../../components/Common/NavBottom";
import Hero from "../../../components/Common/Hero";
import Card from "./HeroCard";

const Herox = () => {
  return (
    <div
      className="relative bg-center lg:pb-56  bg-no-repeat"
      style={{
        backgroundImage: "url(./slider.jpg)",
      }}
    >
      <div className="bg-black/60b relative bg-gradient-to-b from-black via-black/70 to-transparent h-screen"></div>

      <div className="absolute top-0 w-full">
        <NavTop />
        <NavBottom />
        <Hero />
        <Card />
      </div>
    </div>
  );
};

export default Herox;
