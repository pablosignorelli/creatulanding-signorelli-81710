//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Narvbar";
import Navbar from "./components/Narvbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="cont">
        <Navbar />
        <ItemListContainer saludos="Bienvenido a la tienda!!" />
      </div>
    </>
  );
}

export default App;
