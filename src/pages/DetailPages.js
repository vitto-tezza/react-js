import React from "react";
import "./Detailpages.css";

const DetailPages = () => {
  return (
    <div className="container">
      <h2 className="titulo">REMERA</h2>
      <img className="img-product" src="remera1.jpg"></img>
      <p className="txt">precio: $3200</p>
      <p className="txt">talle: XL</p>
      <p className="txt">color: blanco</p>
      <button className="btn">COMPRAR</button>
    </div>
  );
};

export default DetailPages;
