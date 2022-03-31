import { useState, useEffect } from "react";
import Item from "../Item/Item";
import mockProductos from "../mockProductos";
import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      return resolve(mockProductos);
    });
  };

  useEffect(() => {
    getProductos().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="ContainerProducts">
      {products.map((product) => {
        const { id } = product;
        return <Item data={product} key={id} />;
      })}
    </div>
  );
};

export default ItemList;
