import React from "react";

import "react-animated-slider/build/horizontal.css";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <div className="  text-2xl bg-white flex flex-col  gap-4">
      <Carousel />
      <Welcome />

      {/* <Hero /> */}
    </div>
  );
};

export default Landing;
