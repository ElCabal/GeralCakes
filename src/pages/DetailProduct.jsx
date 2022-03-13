import React, { useState } from "react";
import img1 from "../assets/images/img1.jpeg";
const DetailProduct = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="pt-32 pb-10 px-10 bg-pink-100 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold ">Torta Naranja</h2>
      <img src={img1} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo
        facere quam minus, quasi nostrum molestias delectus minima voluptatum,
        soluta quos praesentium ipsum ipsa alias quod! Quam voluptatem nulla,
        quibusdam dignissimos dicta quasi laudantium architecto possimus
        molestias.
      </p>
      <div className="flex flex-col gap-8 p-10 bg-white rounded-md">
        <div>
          <h3>Porciones</h3>
          <select class="select select-bordered select-sm w-full max-w-xs ">
            <option>6-8 Porciones</option>
            <option>12-15 Porciones </option>
            <option>25 Porciones</option>
          </select>
        </div>
        <div>
          <h3>Relleno</h3>
          <select class="select select-bordered select-sm w-full max-w-xs">
            <option>Chocolate</option>
            <option></option>
            <option></option>
          </select>
        </div>
      </div>
      <p className=" text-green-500 text-3xl font-medium pt-4">$73000</p>
      <div className=" flex flex-col gap-4 items-center">
        <div className="contadores flex gap-2">
          <button
            onClick={() => setCount(count - 1)}
            className="p-2 bg-red-300 rounded-md font-black text-2xl"
          >
            -
          </button>
          <span className=" bg-white rounded-md p-4 flex items-center ">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="p-2 bg-red-300 rounded-md text-2xl font-black"
          >
            +
          </button>
        </div>
        <button className=" bg-red-300 rounded-md p-4">
          AGREGAR AL CARRITO
        </button>
      </div>
      <div></div>
      <button className=" bg-red-300 rounded-md p-4">SEGUIR COMPRANDO</button>
    </div>
  );
};

export default DetailProduct;
