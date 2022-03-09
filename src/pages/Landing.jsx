import React from "react";

import "react-animated-slider/build/horizontal.css";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <div className="  text-2xl bg-white flex flex-col  gap-4 text-center">
      <Welcome />
      <h1 className="font-bold uppercase border-t-2">Nuestros Productos</h1>
      <Carousel />

      {/* <Hero /> */}
    </div>
  );
};

export default Landing;
