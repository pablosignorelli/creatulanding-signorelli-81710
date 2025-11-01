//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Narvbar";
import Navbar from "./components/Narvbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludos="Bienvenido a la tienda!!" />}
          />
          <Route
            path="/category/:type"
            element={<ItemListContainer saludos="Bienvenido a la tienda!!" />}
          />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
