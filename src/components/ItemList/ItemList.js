import { useState, useEffect } from "react";
import Item from "../Item/Item";
import mock from "../mock";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [filtered, setFiltered] = [];

  /* useEffect(() => {
    setProducts([]);
    getProductos().then((products) => {
      category
        ? filterProductsByCategory(products, category)
        : setProducts(products);
    });
  }, [category]);

  const filterProductsByCategory = (array, category) => {
    return array.map((product, i) => {
      if (product.category === category) {
        return setProducts((products) => [...products, product]);
      }
    });
  };*/

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
