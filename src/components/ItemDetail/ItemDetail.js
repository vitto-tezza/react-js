import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ data }) {
  const { title, price, size, Image, stockMax } = data;
  return (
    <div className="CardItemDetail">
      <h2>{title}</h2>
      <img className="imgItem" src={`/${Image}`} />
      <p>precio : $ {price}</p>
      <p>talle : {size}</p>
      <ItemCount className="Counter" stockMax={stockMax}></ItemCount>
      <button>comprar</button>
    </div>
  );
}
