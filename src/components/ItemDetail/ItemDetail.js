import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export default function ItemDetail({ data }) {
  const { title, price, size, Image, stockMax } = data;
  return (
    <div className="CardItemDetail">
      <h2>{title}</h2>
      <img className="imgItem" src={`/${Image}`} />
      <p>precio : $ {price}</p>
      <p>talle : {size}</p>
      <ItemCount className="Counter" stockMax={stockMax}></ItemCount>
      <button>
        <Link to={"/Cart"}>COMPRAR</Link>
      </button>
    </div>
  );
}
