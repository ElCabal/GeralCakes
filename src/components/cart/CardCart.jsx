import React from "react";
import { HiOutlineX } from "react-icons/hi";
const CardCart = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-md px-2  py-4 relative ">
      <span className="absolute rounded-full bg-red-800 text-white -top-2 -left-2">
        <HiOutlineX />
      </span>
      <img src="/images/img4.jpeg" alt="" className="w-20 rounded-md" />
      <div className="text-center flex">
        <p className=" text-red-700 text-sm">
          Torta de Naranja-Arequipe-2/3 Porciones
        </p>
        <div className="flex flex-col gap-2 ">
          <p className=" text-lg">$50000</p>

          <div className="contadores flex  items-center">
            <button className="btn btn-xs">-</button>
            <span className=" bg-white rounded-md p-4 flex items-center ">
              1
            </span>
            <button className="btn btn-xs">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
