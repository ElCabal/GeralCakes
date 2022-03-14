import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterSearch from "../components/FilterSearch";
import Card from "../components/card/Card";
import DataContext from "../hooks/Context/DataContext";
import Cakes from "../assets/data/Cakes";

const Products = () => {
  /*   const Contexto = useContext(DataContext);
   */ /* console.table(Contexto.Filter[0].PriceMin); */
  const { Category } = useParams();
  const [isCategory, setCategoria] = useState();

  useEffect(() => {
    setCategoria(Category);
  }, [Category]);

  return (
    <div className="pt-32 px-10  bg-pink-100 text-center">
      <div>
        <FilterSearch />
        <div className="grid grid-col-1 grid-flow-row gap-4 mt-10 pb-10 justify-center sm:grid-cols-2 md:grid-cols-4">
          {Cakes.map((Items) => {
            if (Items.category === isCategory || isCategory === "todos") {
              return (
                <Card
                  name={Items.name}
                  PriceMin={Items.PriceMin}
                  PriceMax={Items.PriceMax}
                  image={Items.image}
                  id={Items.id}
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
