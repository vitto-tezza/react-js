import { useState, useEffect } from "react";
import ItemRemeras from "../Item/ItemRemeras";
import mockRemeras from "../mockRemeras";
import "./ItemList.css";

const ItemListRemeras = () => {
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

  return (
    <div className="ContainerProducts">
      {products.map((product) => {
        const { id } = product;
        return <ItemRemeras data={product} key={id} />;
      })}
    </div>
  );
};

export default ItemListRemeras;
