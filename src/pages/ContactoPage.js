import React from "react";
import "./Contacto.css";

const ContactoPage = () => {
  return (
    <form>
      <p>Ingrese su nombre</p>
      <input type="text"></input>
      <br></br>
      <p>Ingrese su mail</p>
      <input type="text"></input>
      <br></br>
      <br></br>
      <p>Ingrese su mensaje</p>
      <textarea type="text"></textarea>
      <br></br>
      <button>ENVIAR</button>
    </form>
  );
};

export default ContactoPage;
