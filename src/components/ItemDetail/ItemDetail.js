import React, { useState, useEffect, useContext } from "react";
import CartContext, { CartProvider } from "../context/CartContext";
import "./ItemDetail.css";

export default function ItemDetail({ data, action }) {
  const { title, price, size, image, descripción } = data;
  const [contador, setContador] = useState(0);
  const { CartProducts, addProductsToCart } = useContext(CartContext);

  const addToCart = (e) => {
    e.stopPropagation();
    addProductsToCart(data);
  };

  return (
    <div className="CardItemDetail">
      <h2 id="PrimaryInfo">{title}</h2>
      <img className="imgItem" src={`/${image}`} />
      <p id="SecondaryInfo">precio : $ {price}</p>
      <p id="SecondaryInfo">talle : {size}</p>
      <button className="BtnDetail" onClick={addToCart}>
        agregar al carrito
      </button>
    </div>
  );
}
