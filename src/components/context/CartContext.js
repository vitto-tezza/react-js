import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([]);

  const addProductsToCart = (product) => {
    console.log("producto a agregar: ", product);
    setCartProducts((CartProducts) => [...CartProducts, product]);
  };

  const data = {
    CartProducts,
    addProductsToCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
