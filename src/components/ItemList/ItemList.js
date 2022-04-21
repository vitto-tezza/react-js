import { useState, useEffect } from "react";
import Item from "../Item/Item";
import mock from "../mock";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
      return setTimeout(() => {
        resolve(mock);
      }, 2000);
    });
  };

  useEffect(() => {
    getProductos().then((data) => {
      setLoading(false);
      setProducts(data);
    });
  }, []);

  return (
    <div className="ContainerProducts">
      {loading ? (
        <h3>cargando...</h3>
      ) : (
        <>
          {products.map((product) => (
            <Item data={product} key={product.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ItemList;
