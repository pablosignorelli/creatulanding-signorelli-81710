import "../CSS/ItemListContainer.css";

const ItemListContainer = (props) => {
  const { saludos } = props;
  return (
    <div className="mensaje">
      <h1>{props.saludos}</h1>
    </div>
  );
};

export default ItemListContainer;
