import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  /*   useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 640 ? setNavActive(true) : setNavActive(false)
    );
  }); */
  return (
    <nav className=" z-50 relative  w-full px-10 flex justify-between items-center h-20 bg-white text-black  shadow-md">
      <Link to="/" className="w-20">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="container_icons md:hidden flex">
        {" "}
        <MdOutlineShoppingCart className="h-6 w-6 mr-9" />
        <GoThreeBars
          onClick={() => setNavActive(!navActive)}
          className="h-6 w-6 mr-9"
        />
      </div>

      <div className="pr-8 hidden md:block">
        <Link to="/" className="mr-8">
          Inicio
        </Link>
        <Link to="/Products" className="mr-8">
          Productos
        </Link>
        <Link to="/ShopCart" className="mr-8">
          Carrito
        </Link>
      </div>
      {navActive && (
        <div className="absolute w-full flex flex-col right-0 top-20 bg-amber-600 justify-center items-center p-8 gap-10">
          <Link to="/" className="font-semibold">
            Inicio
          </Link>
          <Link to="/Products" className=" font-semibold">
            Productos
          </Link>
          <Link to="/ShopCart" className="font-semibold">
            Carrito
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
