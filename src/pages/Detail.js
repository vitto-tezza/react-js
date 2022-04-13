import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import mock from "../components/mock";
import "./Detail.css";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      const productFilter = mock.filter((product) => id == product.id);
      return resolve(productFilter[0]);
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

export default Detail;
