import React from "react";
import "../CSS/ItemDetail.css";

const ItemDetail = ({ detalle }) => {
  return (
    <div>
      <h1
        className="iTemD1"
        /*style={{
          fontSize: "15px",
          display: "flex",
          marginLeft: "500px",
          marginTop: "100px",
        }}*/
      >
        Detalle de:{detalle.name}
      </h1>
      <img
        src={detalle.img}
        alt={detalle.name}
        className="iTemD2"
        /*style={{
          display: "flex",
          justfyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "150px",
          fontSize: "12px",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "600px",
        }}*/
      />
      <p
        className="iTemD3"
        /*style={{
          fontSize: "13px",
          marginLeft: "100px",
          marginRight: "100px",
          marginBottom: "10px",
        }}*/
      >
        {detalle.description}
      </p>
      <p
        className="iTemD4"
        /*         
        style={{
          fontSize: "15px",
          display: "flex",
          marginLeft: "640px",
          marginBottom: "10px",
        }}*/
      >
        ${detalle.price},00
      </p>

      <p
        className="iTemD5"
        /*
          style={{
            fontSize: "15px",
            display: "flex",
            marginLeft: "610px",
          }}*/
      >
        Stock Disponible:{detalle.stock}
      </p>
    </div>
  );
};

export default ItemDetail;
