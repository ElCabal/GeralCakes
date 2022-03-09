import React from "react";
import { Link } from "react-router-dom";
import bghero from "../assets/images/bghero.jpg";

const Welcome = () => {
  return (
    /*     <div className="  mb-20 flex flex-col justify-center items-center ">
      <div className=" w-1/2">
        <h1 className="font-black"> Geral Cakes </h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos
          corrupti obcaecati, libero, recusandae, esse deserunt facilis nisi
          vero aspernatur et tempora culpa sit reprehenderit. Excepturi eum
          labore dolores atque.
        </p>
      </div>
      <div className="w-1/2">
        <img src={img1} alt="" />
      </div>
    </div> */
    <div
      className=" mt-0 hero min-h-screen "
      style={{ backgroundImage: `url(${bghero})` }}
    >
      <div className="hero-overlay bg-opacity-30 pt-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-black">Geral Cakes</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            officiis ullam pariatur ea ab, odit quas cumque soluta id molestias
            dolor quos nostrum distinctio quasi, aliquid consectetur vel. At,
            harum.
          </p>

          <Link to="/Products">
            <button class="btn glass w-60">DELEÍTATE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
