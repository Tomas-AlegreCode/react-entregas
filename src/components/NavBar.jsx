import React from "react";
import CartWidget from "./CartWidget";
import "../App"; // Opcional: puedes usar Bootstrap en su lugar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;