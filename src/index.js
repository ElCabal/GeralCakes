import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DetailProduct from "./pages/DetailProduct";
import Products from "./pages/Products";
import ShopCart from "./pages/ShopCart";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index="/Landing" element={<Landing />} />
        <Route path="/Products" element={<Products />}>
          {/* Subruta de la sección de productos que nombramos :Category y mandaremos a llamar con un useParams en la sección de Productos*/}
          <Route path=":Category" element={<Products />} />
        </Route>
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
