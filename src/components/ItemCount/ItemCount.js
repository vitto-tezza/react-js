import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [stock, setStock] = useState(1);

  const handleClickAdd = () => {
    if (stock < props.stockMax) {
      setStock(stock + 1);
    }
  };
  const handleClickRemove = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className="Counter">
      <button className="Add" onClick={handleClickAdd}>
        +
      </button>
      <p className="Stock">{stock}</p>
      <button className="Remove" onClick={handleClickRemove}>
        -
      </button>
    </div>
  );
};

export default ItemCount;
