import { Divider, MenuItem } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";

const Cart = (data) => {
  const { CartProducts } = useContext(CartContext);

  return (
    <Divider>
      {CartProducts.map((CartProduct) => {
        return (
          <MenuItem key={CartProduct.id}>
            <div className="CardItem">
              <h2>{CartProduct.title}</h2>
              <img className="imgItem" src={`./${CartProduct.Image}`} />
              <p>precio : $ {CartProduct.price}</p>
            </div>
          </MenuItem>
        );
      })}
    </Divider>
  );
};

export default Cart;
