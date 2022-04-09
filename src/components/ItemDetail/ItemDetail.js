import React from "react";
import "./ItemDetail.css";

export default function ItemDetail({ data, action }) {
  const { title, price, size, Image, stockMax } = data;
  return (
    <div className="CardItemDetail">
      <h2>{title}</h2>
      <img className="imgItem" src={`/${Image}`} />
      <p>precio : $ {price}</p>
      <p>talle : {size}</p>
      <button onClick={action}>agregar al carrito</button>
    </div>
  );
}
