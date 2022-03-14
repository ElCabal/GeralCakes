import { Outlet } from "react-router-dom";
import "../src/style/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Context from "./hooks/Context/DataContext";
import Cakes from "./assets/data/Cakes";
import { useState } from "react";

function App() {
  /* Utilizamos el hooks useState para guardar nuestra data en un estado */
  /* En la primera posición de nuestro useState definimos la variable que contiene la Data la cuál llamamos Filter */
  const [Filter, setFilter] = useState(Cakes);
  console.table(Filter);
  return (
    <Context.Provider value={{ Filter, setFilter }}>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </Context.Provider>
  );
}

export default App;
