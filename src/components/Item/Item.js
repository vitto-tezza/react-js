import React, { useState, useEffect, useContext } from "react";
import CartContext, { CartProvider } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ data, action }) {
  const [contador, setContador] = useState(0);
  const { CartProducts, addProductsToCart } = useContext(CartContext);
  const { title, price, size, image, id } = data;

  const addToCart = (e) => {
    e.stopPropagation();
    addProductsToCart(data);
  };

  return (
    <div className="CardItem">
      <img className="imgItem" src={`./${image}`} />
      <button className="BtnItemDetail">
        <Link to={"/product/" + id}>ver producto</Link>
      </button>
      <button className="BtnItemCarrito" onClick={addToCart}>
        agregar al carrito
      </button>
    </div>
  );
}
