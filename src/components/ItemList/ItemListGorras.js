import { useState, useEffect } from "react";
import ItemGorras from "../Item/ItemGorras";
import mockGorras from "../mockGorras";
import "./ItemList.css";

const ItemListGorras = () => {
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
    <div className="ContainerProducts">
      {products.map((product) => {
        const { id } = product;
        return <ItemGorras data={product} key={id} />;
      })}
    </div>
  );
};

export default ItemListGorras;
