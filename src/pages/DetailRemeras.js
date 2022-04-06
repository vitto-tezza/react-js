import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mockRemeras from "../components/mockRemeras";
import "./Detail.css";

const DetailRemeras = () => {
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
    <div>
      {products.map((product) => {
        const { id } = product;
        return <ItemDetail data={product} key={id} />;
      })}
    </div>
  );
};

export default DetailRemeras;
