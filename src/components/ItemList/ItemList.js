import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [filtered, setFiltered] = [];

  const getProductos = async () => {
    const itemsCollection = collection(db, "productos");
    const productosSnapshot = await getDocs(itemsCollection);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("product:", product);
      return product;
    });
    return productList;
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
