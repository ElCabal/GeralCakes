import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterSearch from "../components/FilterSearch";
import Card from "../components/card/Card";
/* import DataContext from "../hooks/Context/DataContext"; */
import Cakes from "../assets/data/Cakes";

const Products = () => {
  const { Category } = useParams();

  const [routeCategory, setRouteCategory] = useState();

  useEffect(() => {
    setRouteCategory(Category);
  }, [Category]);

  return (
    <div className="pt-32 px-10  bg-pink-100 text-center">
      <div>
        <FilterSearch />
        <div className="grid grid-col-1 grid-flow-row gap-4 mt-10 pb-10 justify-center sm:grid-cols-2 md:grid-cols-4">
          {Cakes.map((items) => {
            if (items.category === routeCategory || routeCategory === "todos") {
              return (
                <Card
                  name={items.name}
                  PriceMin={items.PriceMin}
                  PriceMax={items.PriceMax}
                  image={items.image}
                  id={items.id}
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
