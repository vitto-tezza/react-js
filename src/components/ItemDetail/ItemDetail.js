import React, { useState, useEffect, useContext } from "react";
import CartContext, { CartProvider } from "../context/CartContext";
import "./ItemDetail.css";

export default function ItemDetail({ data, action }) {
  const { title, price, size, Image, stockMax } = data;
  const [contador, setContador] = useState(0);
  const { CartProducts, addProductsToCart } = useContext(CartContext);

  const addToCart = (e) => {
    e.stopPropagation();
    addProductsToCart(data);
  };

  return (
    <div className="CardItemDetail">
      <h2>{title}</h2>
      <img className="imgItem" src={`/${Image}`} />
      <p>precio : $ {price}</p>
      <p>talle : {size}</p>
      <button onClick={addToCart}>agregar al carrito</button>
    </div>
  );
}
