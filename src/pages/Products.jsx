import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Buscador from "../components/Buscador";
import ButtonCategorys from "../components/buttons/ButtonCategorys";
import Card from "../components/card/Card";
import Context from "../hooks/Context";
const Products = () => {
  const Contexto = useContext(Context);
  console.table(Contexto.Filter[0].PreciMinimo);
  const { category } = useParams();
  const [isCategoria, setCategoria] = useState();
  useEffect(() => {
    setCategoria(category);
  }, [category]);
  /*  {
    nombre, PrecioMinimo, PreciMáximo, img1;
  } */
  return (
    <div className="pt-32 px-10 h-screen bg-pink-100  text-center">
      <div>
        <Buscador />
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          {Contexto.Filter.map((Items) => (
            <Card
              nombre={Items.nombre}
              PrecioMinimo={Items.PrecioMinimo}
              PrecioMaximo={Items.PrecioMaximo}
              img1={Items.img1}
            />
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Products;
