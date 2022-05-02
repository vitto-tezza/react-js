import React from "react";
import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";
import ModalBuy from "../components/modalBuy/modalBuy";
import db from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import "./Cart.css";

const Cart = (data) => {
  const { CartProducts, deleteProduct, totalPrice } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({
    buyer: formData,
    items: CartProducts.map((CartProduct) => {
      return {
        id: CartProduct.id,
        title: CartProduct.title,
        price: CartProduct.price,
      };
    }),
    total: totalPrice,
  });

  const [successOrder, setSuccessOrder] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrder = { ...order, buyer: formData };
    setOrder({ ...order, buyer: formData });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, prevOrder);
    setSuccessOrder(orderDoc.id);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="Cart">
      {CartProducts.map((CartProduct) => {
        return (
          <div className="ContainerCart" key={CartProduct.id}>
            <div className="CartItem">
              <img className="imgItemCart" src={`./${CartProduct.image}`} />
              <div id="CartInfo">
                <h2>{CartProduct.title}</h2>
                <p>precio : $ {CartProduct.price}</p>
                <button
                  className="BtnCartDelete"
                  onClick={() => deleteProduct(CartProduct)}
                >
                  eliminar
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="Price">
        <h3>total: ${totalPrice}</h3>
      </div>
      <button className="BtnCart" onClick={() => setOpenModal(true)}>
        Completar Compra
      </button>
      <ModalBuy handleClose={() => setOpenModal(false)} open={openModal}>
        {successOrder ? (
          <div>
            <h3>Orden generada correctamente</h3>
            <p>Su numero de orden es: {successOrder}</p>
          </div>
        ) : (
          <div className="form">
            <h2 className="titleForm">INGRESE SUS DATOS</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="lockers"
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                className="lockers"
                type="number"
                name="phone"
                placeholder="Telefono"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                className="lockers"
                type="mail"
                name="email"
                placeholder="mail"
                onChange={handleChange}
                value={formData.email}
              />

              <button className="BtnForm" type="submit">
                Enviar
              </button>
            </form>
          </div>
        )}
      </ModalBuy>
    </div>
  );
};

export default Cart;
