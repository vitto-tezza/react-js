import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const mockProductos = [
    {
      id: 1,
      title: "Remera",
      Image: "remera1.jpg",
      size: "M",
      price: 2500,
    },
    {
      id: 2,
      title: "Remera",
      Image: "remera2.jpg",
      size: "L",
      price: 2800,
    },
    {
      id: 3,
      title: "Remera",
      Image: "remera3.jpg",
      size: "S",
      price: 1800,
    },
    {
      id: 4,
      title: "Remera",
      Image: "remera4.jpg",
      size: "XL",
      price: 3000,
    },
  ];

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
