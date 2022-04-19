import React, { useState, useEffect, useContext } from "react";
import CartContext, { CartProvider } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ data, action }) {
  const [contador, setContador] = useState(0);
  const { CartProducts, addProductsToCart } = useContext(CartContext);
  const { title, price, size, Image, id } = data;

  const addToCart = (e) => {
    e.stopPropagation();
    addProductsToCart(data);
  };

  return (
    <div className="CardItem">
      <h2>{title}</h2>
      <img className="imgItem" src={`./${Image}`} />
      <button>
        <Link to={"/product/" + id}>ver producto</Link>
      </button>
      <button onClick={addToCart}>agregar al carrito</button>
    </div>
  );
}
