import { useState, useContext } from "react";
import db from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import "./Contacto.css";

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coments: "",
  });
  const [order, setOrder] = useState({
    buyer: formData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrder = { ...order, buyer: formData };
    setOrder({ ...order, buyer: formData });
    pushOrder(prevOrder);
    window.alert("formulario enviado");
    setFormData({ name: "", phone: "", email: "", coments: "" });
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, "comentarios");
    const orderDoc = await addDoc(orderFirebase, prevOrder);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="titleComents">DEJA TU COMENTARIO</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="comentsName"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="comentsPhone"
          type="number"
          name="phone"
          placeholder="Telefono"
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          className="comentsMail"
          type="mail"
          name="email"
          placeholder="mail"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="comentsComents"
          type="text"
          name="coments"
          placeholder="comentario"
          onChange={handleChange}
          value={formData.coments}
        />

        <button className="btnComents" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoPage;
