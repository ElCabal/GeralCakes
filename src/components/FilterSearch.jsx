import React from "react";
import { NavLink } from "react-router-dom";
import ButtonCategorys from "./buttons/ButtonCategorys";

const FilterSearch = () => {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar"
        class="input input-bordered w-full max-w-md"
      ></input>
      <div className="pt-10 flex flex-row gap-8  justify-center ">
        <NavLink to="todos">
          <ButtonCategorys>
            <span>TODOS</span>
          </ButtonCategorys>
        </NavLink>
        <NavLink to="tortas">
          <ButtonCategorys>
            <span>TORTAS</span>
          </ButtonCategorys>
        </NavLink>
        <NavLink to="cupcakes">
          <ButtonCategorys>
            <span>CUPCAKES</span>
          </ButtonCategorys>
        </NavLink>
      </div>
    </div>
  );
};

export default FilterSearch;
