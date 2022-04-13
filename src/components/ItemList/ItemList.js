import { useState, useEffect } from "react";
import Item from "../Item/Item";
import mock from "../mock";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [contador, setContador] = useState(0);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      return resolve(mock);
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
        return <Item data={product} key={id} action={addToCart} />;
      })}
    </div>
  );
};

export default ItemList;
