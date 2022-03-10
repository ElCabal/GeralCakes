import { Outlet } from "react-router-dom";
import "../src/style/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Context from "./hooks/Context";
import Cakes from "./assets/data/Cakes";
import { useState } from "react";

function App() {
  const [Filter, setFilter] = useState(Cakes);
  console.table(Filter);
  return (
    <Context.Provider value={{ Filter, setFilter }}>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
