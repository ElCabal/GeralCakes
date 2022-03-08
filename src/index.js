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
        <Route path="/DetailProduct" element={<DetailProduct />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
