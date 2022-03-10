import React from "react";
import { Link } from "react-router-dom";
import bghero from "../assets/images/bghero.jpg";
import ButtonHero from "./buttons/ButtonHero";

const Welcome = () => {
  return (
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
            <ButtonHero>
              <p>DELÉITATE</p>
            </ButtonHero>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
