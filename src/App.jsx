import { Outlet } from "react-router-dom";
import "../src/style/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Context from "./hooks/Context/DataContext";
import Cakes from "./assets/data/Cakes";
import { useState } from "react";
import CartContext from "./hooks/Context/CartContext";

function App() {
  /* Utilizamos el hooks useState para guardar nuestra data en un estado */
  /* En la primera posición de nuestro useState definimos la variable que contiene la Data la cuál llamamos Filter */
  const [Filter, setFilter] = useState({ name: "hola" });
  const [cart, setCart] = useState([]);
  const valueCart = { cart, setCart };

  return (
    <Context.Provider value={valueCart}>
      <Navbar />
      <Outlet />
      <Footer />
    </Context.Provider>
  );
}

export default App;
