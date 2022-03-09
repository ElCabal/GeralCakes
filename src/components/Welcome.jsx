import React from "react";
import img1 from "../assets/images/img1.jpeg";
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
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
