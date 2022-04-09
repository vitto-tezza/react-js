import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ data, action }) {
  const { title, price, size, Image, id } = data;
  return (
    <div className="CardItem">
      <h2>{title}</h2>
      <img className="imgItem" src={`./${Image}`} />
      <button>
        <Link to={"/productRemeras/" + id}>ver producto</Link>
      </button>
      <button onClick={action}>agregar al carrito</button>
    </div>
  );
}
