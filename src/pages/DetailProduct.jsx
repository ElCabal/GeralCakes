import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cakes from "../assets/data/Cakes";
import Context from "../hooks/Context/DataContext";
const DetailProduct = () => {
  let [count, setCount] = useState(1);
  let [totalItem, setTotalItem] = useState(21000);
  let [valueOption, setValueOption] = useState("6-8 Porciones");
  const { id } = useParams();
  /* const id = identify.id; */

  const { cart, setCart } = useContext(Context);
  const result = Cakes.filter((item) => item.id === parseInt(id));
  console.log(result);
  const navigate = useNavigate();
  function saveElementCart() {
    let oldCart = cart;
    oldCart.push({
      product: result,
      price: totalItem * count,
      quantity: count,
      portion: valueOption,
    });

    setCart(oldCart);
    navigate("/ShopCart");
  }
  function saberValorPorcion(valueOption) {
    setValueOption(valueOption);
    if (valueOption === "6-8 Porciones") {
      setTotalItem(21000);
    } else if (valueOption === "12-15 Porciones") {
      setTotalItem(37000);
    } else if (valueOption === "25 Porciones") {
      setTotalItem(50000);
    }
  }

  return (
    <div className="pt-32 pb-10 px-10 bg-pink-100 flex flex-col gap-4 md:flex-col-2 md:flex-none md:flex-col-2">
      <div>
        <h2 className="text-2xl font-semibold ">{result[0].name}</h2>
        <img src={result[0].image} alt="" />
        <p>{result[0].description}</p>
      </div>

      <div className="flex flex-col gap-8 p-10 bg-white rounded-md">
        <div>
          <h3>Porciones</h3>
          <select
            onChange={(valueSelect) => {
              saberValorPorcion(valueSelect.target.value);
            }}
            class="select select-bordered select-sm w-full max-w-xs "
          >
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
      <p className=" text-green-500 text-3xl font-medium pt-4">
        ${totalItem * count}
      </p>
      <div className=" flex flex-col gap-4 items-center">
        <div className="contadores flex gap-2">
          <button
            onClick={() => {
              if (count != 1) {
                setCount(count - 1);
              }
            }}
            className="p-2 bg-red-300 rounded-md font-black text-2xl"
          >
            -
          </button>
          <span className=" bg-white rounded-md p-4 flex items-center ">
            {count}
          </span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="p-2 bg-red-300 rounded-md text-2xl font-black"
          >
            +
          </button>
        </div>

        <button
          onClick={() => saveElementCart()}
          className=" bg-red-300 rounded-md p-4"
        >
          AGREGAR AL CARRITO
        </button>
      </div>
      <div></div>
      <button className=" bg-red-300 rounded-md p-4">SEGUIR COMPRANDO</button>
    </div>
  );
};

export default DetailProduct;
