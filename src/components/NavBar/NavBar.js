import Modal from "../Modal/Modal";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="main-header">
      <div className="container-logo">
        <img src="/logo.png" className="img-header" alt="logo" />
      </div>
      <ul className="navbar">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/NOSOTROS"}>NOSOTROS</Link>
        </li>
        <li>
          <Link to={"/TIENDA"}>TIENDA</Link>
        </li>
        <li>
          <Link to={"/CONTACTO"}>CONTACTO</Link>
        </li>
      </ul>
      <div>
        <Modal />
      </div>
    </header>
  );
}

export default NavBar;
