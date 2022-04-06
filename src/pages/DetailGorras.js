import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mockGorras from "../components/mockGorras";
import "./Detail.css";

const DetailGorras = () => {
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

  return (
    <div>
      {products.map((product) => {
        const { id } = product;
        return <ItemDetail data={product} key={id} />;
      })}
    </div>
  );
};

export default DetailGorras;
