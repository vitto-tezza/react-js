import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

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
    <div className="Container">
      {loading ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="success" />
        </Stack>
      ) : (
        <>
          {products.map((product) => (
            <div className="ContainerProducts">
              <Item data={product} key={product.id} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemList;
