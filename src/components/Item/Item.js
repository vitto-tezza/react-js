import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ data }) {
  const { title, price, size, Image } = data;
  return (
    <div className="CardItem">
      <h2>{title}</h2>
      <img className="imgItem" src={`./${Image}`} />
      <button>
        <Link to={"/product"}>ver producto</Link>
      </button>
    </div>
  );
}
