import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error: No se encuentra la ruta seleccionada</h1>
      <Link to="/"> Vuelve al Inicio</Link>
    </div>
  );
};

export default Error;
