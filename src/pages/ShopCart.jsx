import React from "react";
import "../assets/images/img4.jpeg";
import { BiShoppingBag } from "react-icons/bi";
import CardCart from "../components/cart/CardCart";

const ShopCart = () => {
  return (
    <div className=" bg-pink-100 pt-32 px-5 pb-4 flex flex-col gap-10">
      <h2 className="text-2xl font-black text-center">Resumen del Carrito</h2>
      <div className="flex flex-col gap-8 bg-white p-4 rounded-md">
        <CardCart />
        <div className="">
          <button className=" bg-red-400 p-2 rounded-lg flex items-center gap-2">
            <BiShoppingBag className="text-2xl" />
            SEGUIR COMRPANDO
          </button>
        </div>
      </div>
      <h2 className="text-center text-2xl font-black">Total del Carrito</h2>
      <div className="Container2 bg-white p-4 rounded-md">
        <div className="Subtotal flex gap-20 p-2 items-center ">
          <span>Subtotal:</span>
          <span className="text-lime-600 text-2xl">$50000</span>
        </div>
        <hr className=" border-slate-900" />
        <div className="Envio1 flex gap-10 p-2">
          <span>Envío</span>
          <div className="ContenedorDeRadios flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <input type="radio" checked />
              <span className="text-sm">
                Recoger en Calle 100 #20-05 Barrio Villas Sexta
              </span>
            </div>
            <div className="flex gap-10 items-center">
              <input type="radio" checked />
              <span className=" text-sm text-center">Domicilio: $7000</span>
            </div>
          </div>
        </div>
        <hr className=" border-slate-900" />
        <div className="Total flex gap-28 p-2 items-center ">
          <span>Total:</span>
          <span className=" text-lime-600 text-2xl">$50000</span>
        </div>

        <button className="bg-red-400 p-2 rounded-lg">FINALIZAR COMPRA</button>
      </div>
    </div>
  );
};

export default ShopCart;
