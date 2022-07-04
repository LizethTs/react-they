import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="nav-brand">They</h1>
      <ul className="nav-menu-items">
        <li className="nav-menu-item" href="javascript:void(0)">
          Inicio
        </li>
        <li className="nav-menu-item" href="javascript:void(0)"> Nosotros</li>
        <li className="nav-menu-item" href="javascript:void(0)"> Explorar</li>
        <li className="nav-menu-item"href="javascript:void(0)"> Contacto</li>
        <CartWidget />
      </ul>
      
    </nav>
  );
}

export default NavBar;
