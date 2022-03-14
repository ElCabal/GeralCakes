import React from "react";

import "react-animated-slider/build/horizontal.css";
import Carousel from "../components/Carousel";

import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <div className=" pt-20 text-2xl bg-white flex flex-col  gap-8 text-center">
      <Welcome />

      <Carousel />
    </div>
  );
};

export default Landing;
