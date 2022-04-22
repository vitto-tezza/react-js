import { Divider, MenuItem } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";
import ModalBuy from "../components/modalBuy/modalBuy";
import db from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

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
    <Divider>
      {CartProducts.map((CartProduct) => {
        return (
          <MenuItem key={CartProduct.id}>
            <div className="CardItem">
              <h2>{CartProduct.title}</h2>
              <img className="imgItem" src={`./${CartProduct.Image}`} />
              <p>precio : $ {CartProduct.price}</p>
              <button onClick={() => deleteProduct(CartProduct)}>
                eliminar
              </button>
            </div>
          </MenuItem>
        );
      })}
      <div>
        <h3>total: ${totalPrice}</h3>
      </div>
      <button onClick={() => setOpenModal(true)}>Completar Compra</button>
      <ModalBuy handleClose={() => setOpenModal(false)} open={openModal}>
        {successOrder ? (
          <div>
            <h3>Orden generada correctamente</h3>
            <p>Su numero de orden es: {successOrder}</p>
          </div>
        ) : (
          <>
            <h2>FORM USUARIO</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="number"
                name="phone"
                placeholder="Telefono"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                type="mail"
                name="email"
                placeholder="mail"
                onChange={handleChange}
                value={formData.email}
              />

              <button type="submit">Enviar</button>
            </form>
          </>
        )}
      </ModalBuy>
    </Divider>
  );
};

export default Cart;
