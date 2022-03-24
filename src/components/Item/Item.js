import React from "react";
import "./Item.css";

export default function Item({ data }) {
  const { title, price, size, Image } = data;
  return (
    <div className="CardItem">
      <h2>{title}</h2>
      <img src={`./${Image}`} />
      <p>precio : $ {price}</p>
      <p>talle : {size}</p>
      <button>comprar</button>
    </div>
  );
}
