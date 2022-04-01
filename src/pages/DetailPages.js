import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mockProductos from "../components/mockProductos";
import "./DetailPages.css";

const DetailPages = () => {
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
    <div>
      {products.map((product) => {
        const { id } = product;
        return <ItemDetail data={product} key={id} />;
      })}
    </div>
  );
};

export default DetailPages;
