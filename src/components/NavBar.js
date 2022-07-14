import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="nav-brand">They</h1>
      <ul className="nav-menu-items">
        <li className="nav-menu-item">Inicio</li>
        <li className="nav-menu-item"> Nosotros</li>
        <li className="nav-menu-item"> Explorar</li>
        <li className="nav-menu-item"> Contacto</li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
