import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buscador from "../components/Buscador";
import Card from "../components/card/Card";
import Context from "../hooks/Context";
const Products = () => {
  const Contexto = useContext(Context);
  /* console.table(Contexto.Filter[0].PrecioMinimo); */
  const { Category } = useParams();
  const [isCategoria, setCategoria] = useState();

  useEffect(() => {
    setCategoria(Category);
  }, [Category]);

  return (
    <div className="pt-32 px-10  bg-pink-100  text-center ">
      <div>
        <Buscador />
        <div className="grid grid-col-1 grid-flow-row gap-4 mt-10 pb-10 justify-center">
          {Contexto.Filter.map((Items) => {
            if (Items.categoria === isCategoria || isCategoria === "todos") {
              return (
                <Card
                  nombre={Items.nombre}
                  PrecioMinimo={Items.PrecioMinimo}
                  PrecioMaximo={Items.PrecioMaximo}
                  img1={Items.imagen}
                />
              );
            } else {
              return "";
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
