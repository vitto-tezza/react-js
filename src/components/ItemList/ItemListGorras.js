import { useState, useEffect } from "react";
import ItemGorras from "../Item/ItemGorras";
import mockGorras from "../mockGorras";
import "./ItemList.css";

const ItemListGorras = () => {
  const [contador, setContador] = useState(0);
  const [products, setProducts] = useState([]);

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      return resolve(mockGorras);
    });
  };

  useEffect(() => {
    getProductos().then((data) => {
      setProducts(data);
    });
  }, []);

  const addToCart = () => {
    setContador(contador + 1);
  };

  return (
    <div className="ContainerProducts">
      <h1>contador:{contador}</h1>
      {products.map((product) => {
        const { id } = product;
        return <ItemGorras data={product} key={id} action={addToCart} />;
      })}
    </div>
  );
};

export default ItemListGorras;
