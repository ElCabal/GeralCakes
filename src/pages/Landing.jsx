import React from "react";

import "react-animated-slider/build/horizontal.css";
/* import Carousel from "../components/Carousel";
 */
import Welcome from "../components/Welcome";

const Landing = () => {
  return (
    <div className=" pt-20 text-2xl bg-white flex flex-col  gap-4 text-center">
      <Welcome />
      <h1 className="font-bold uppercase border-t-2">Nuestros Productos</h1>
      {/* <Carousel /> */}
    </div>
  );
};

export default Landing;
