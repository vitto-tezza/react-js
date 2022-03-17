import React from "react";
import logo from "../../media/logo.png";
import Modal from "../../components/Modal/Modal";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="main-header">
      <div className="container-logo">
        <img src={logo} className="img-header" alt="logo" />
      </div>
      <ul className="navbar">
        <li>
          <button>HOME</button>
        </li>
        <li>
          <button>NOSOTROS</button>
        </li>
        <li>
          <button>TIENDA</button>
        </li>
        <li>
          <button>CONTACTO</button>
        </li>
      </ul>
      <div>
        <Modal />
      </div>
    </header>
  );
}

export default NavBar;
