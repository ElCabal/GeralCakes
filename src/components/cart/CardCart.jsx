import React, { useContext, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import DataContext from "../../hooks/Context/DataContext";
import Card from "../card/Card";

const CardCart = ({ product, price, quantityProp }) => {
  const [quantity, setQuantity] = useState(quantityProp);
  /* const [] */
  const { cart, setCart } = useContext(DataContext);
  function deleteCard() {
    const validate = cart.filter(
      (product1, index) => product1.product[0].id == product.id
    );
    const oldCart = cart;
    console.log(validate);
  }
  return (
    <div className="flex bg-white shadow-lg rounded-md px-2  py-4 relative ">
      <span
        onClick={() => deleteCard()}
        className="absolute rounded-full bg-red-800 text-white -top-2 -left-2"
      >
        <HiOutlineX />
      </span>
      <img src="/images/img4.jpeg" alt="" className="w-20 rounded-md" />
      <div className="text-center flex">
        <p className=" text-red-700 text-sm">{product.name}</p>
        <div className="flex flex-col gap-2 ">
          <p className=" text-lg">${price * quantity}</p>

          <div className="contadores flex  items-center">
            <button
              onClick={() => {
                if (quantity != 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className="btn btn-xs"
            >
              -
            </button>
            <span className=" bg-white rounded-md p-4 flex items-center ">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="btn btn-xs"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
