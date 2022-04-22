import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebaseConfig";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      navigate("/error");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div>
      <ItemDetail data={product} key={id} />
    </div>
  );
};

export default Detail;
