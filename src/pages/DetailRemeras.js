import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mockRemeras from "../components/mockRemeras";
import "./Detail.css";

const DetailRemeras = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      const remerasFilter = mockRemeras.filter((remera) => id == remera.id);
      return resolve(remerasFilter[0]);
    });
  };

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <ItemDetail data={product} key={id} />
    </div>
  );
};

export default DetailRemeras;
