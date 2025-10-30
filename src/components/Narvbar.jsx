import CartWidge from "./CartWidge";
import "../CSS/Narvbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink className="nav" to="/">
        <img src="../logo.png" alt="logo" className="logo" />
      </NavLink>

      <NavLink className="a-nav" to="/category/oferta">
        Oferta
      </NavLink>
      <NavLink className="nav" to="/category/recomendacion">
        Recomendación
      </NavLink>

      <NavLink className="nav" to="/category/premiun">
        Premiun
      </NavLink>
      <CartWidge />
    </nav>
  );
};

export default Navbar;
