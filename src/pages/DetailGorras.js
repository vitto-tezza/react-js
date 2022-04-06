import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mockGorras from "../components/mockGorras";
import "./Detail.css";

const DetailGorras = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      const gorrasFilter = mockGorras.filter((gorra) => id == gorra.id);
      return resolve(gorrasFilter[0]);
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

export default DetailGorras;
