import { Divider, MenuItem } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";

const Cart = (data) => {
  const { CartProducts, deleteProduct, totalPrice } = useContext(CartContext);

  return (
    <Divider>
      {CartProducts.map((CartProduct) => {
        return (
          <MenuItem key={CartProduct.id}>
            <div className="CardItem">
              <h2>{CartProduct.title}</h2>
              <img className="imgItem" src={`./${CartProduct.Image}`} />
              <p>precio : $ {CartProduct.price}</p>
              <button onClick={() => deleteProduct(CartProduct)}>
                eliminar
              </button>
            </div>
          </MenuItem>
        );
      })}
      <div>
        <h3>total: ${totalPrice}</h3>
      </div>
    </Divider>
  );
};

export default Cart;
