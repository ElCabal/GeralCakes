import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className=" px-10 flex justify-between items-center h-20 bg-white text-black relative shadow-md">
      <Link to="/" className="w-20">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="container_icons md:hidden flex">
        {" "}
        <div className="mr-8   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
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
    </nav>
  );
};

export default Navbar;
