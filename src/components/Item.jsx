import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/Item.css";

const Item = ({ prod }) => {
  return (
    <Card
      className="iTem1"
      /*
      style={{
        display: "flex",
        justfyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        width: "18rem",
        fontSize: "12px",
        margin: "20px",
      }} */
    >
      <Card.Img
        className="iTem2"
        //style={{ height: "150px", width: "150px" }}
        variant="top"
        src={prod.img}
      />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text
          className="iTem3"
          /* style={{ display: "flex", marginLeft: "50px" }}*/
        >
          ${prod.price},00
        </Card.Text>
        <Link
          to={"/Item/" + prod.id}
          className="iTem4"
          //style={{ display: "flex", marginLeft: "40px", color: "purple" }}
          variant="primary"
        >
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
