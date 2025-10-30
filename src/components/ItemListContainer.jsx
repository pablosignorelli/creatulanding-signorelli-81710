import { useEffect, useState } from "react";
import { getProductos } from "../Mock/AsyncService";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    console.log(getProductos());
    getProductos()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  console.log(data, "estado");

  return (
    <div style={{ backgroundColor: "white" }}>
      <h1 className="text-success">{props.saludo}</h1>
      {/*data.map((prod) => (
        <p key={prod.id}>{prod.name}</p>
      ))*/}

      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
