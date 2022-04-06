import React from "react";
import { Link } from "react-router-dom";
import "./Tienda.css";

function TiendaPage() {
  return (
    <div className="NavBarTienda">
      <ul>
        <li>
          <Link to={"/REMERAS"}>REMERAS</Link>
        </li>
        <li>
          <Link to={"/GORRAS"}>GORRAS</Link>
        </li>
      </ul>
    </div>
  );
}

export default TiendaPage;
