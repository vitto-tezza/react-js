import { useState, useEffect } from "react";
import ItemRemeras from "../Item/ItemRemeras";
import mockRemeras from "../mockRemeras";
import "./ItemList.css";

const ItemListRemeras = () => {
  const [contador, setContador] = useState(0);
  const [products, setProducts] = useState([]);

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      return resolve(mockRemeras);
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
        return <ItemRemeras data={product} key={id} action={addToCart} />;
      })}
    </div>
  );
};

export default ItemListRemeras;
