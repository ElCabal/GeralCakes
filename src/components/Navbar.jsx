import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../style/Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  /*   useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 640 ? setNavActive(true) : setNavActive(false)
    );
  }); */
  return (
    <nav className=" z-50 fixed w-full px-10 flex justify-between items-center h-28 bg-white text-black  shadow-md">
      <Link to="/" className="w-20 lg:ml-8 lg:w-24">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="container_icons md:hidden flex">
        {" "}
        <Link to="/ShopCart">
          <MdOutlineShoppingCart className="h-8 w-8 mr-9" />
        </Link>
        <GoThreeBars
          onClick={() => setNavActive(!navActive)}
          className="h-8 w-8 mr-9"
        />
      </div>

      <div className="pr-8 hidden md:block">
        <Link to="/" className="mr-8 text-2xl font-medium">
          Inicio
        </Link>
        <Link to="/Products/tortas" className="mr-8 text-2xl font-medium">
          Productos
        </Link>
        <Link to="/ShopCart" className="mr-8 text-2xl font-medium">
          Carrito
        </Link>
      </div>
      {navActive && (
        <div className="absolute w-full flex flex-col right-0 top-28 menuBurguer justify-center items-center p-8 gap-10">
          <Link to="/" className="font-semibold text-2xl">
            Inicio
          </Link>
          <Link to="/Products/tortas" className=" font-semibold text-2xl">
            Productos
          </Link>
          <Link to="/ShopCart" className="font-semibold text-2xl">
            Carrito
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
