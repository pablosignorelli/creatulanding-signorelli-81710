import CartWidge from "./CartWidge";
import "../CSS/Narvbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <a className="nav">
        <img src="./logo.jpg" alt="logo" className="logo" />
      </a>
      <a className="nav">Productos</a>
      <a className="nav">Novedades</a>
      <a className="nav">Promoción</a>
      <CartWidge />
    </nav>
  );
};

export default Navbar;
