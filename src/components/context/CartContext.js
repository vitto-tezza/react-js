import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductsToCart = (product) => {
    let exist = CartProducts.find(
      (CartProduct) => CartProduct.id === product.id
    );
    if (!exist) {
      setTotalPrice(totalPrice + product.price);
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  };

  const deleteProduct = (product) => {
    setCartProducts(
      CartProducts.filter((CartProduct) => CartProduct.id !== product.id)
    );
  };

  const data = {
    CartProducts,
    addProductsToCart,
    totalPrice,
    deleteProduct,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
