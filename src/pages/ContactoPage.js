import React from "react";
import "./Contacto.css";

const ContactoPage = () => {
  return (
    <form>
      <input type="text" value="nombre"></input>
      <br></br>
      <input type="text" value="mail"></input>
      <br></br>
      <br></br>
      <textarea type="text" value="mensaje"></textarea>
      <br></br>
      <button>ENVIAR</button>
    </form>
  );
};

export default ContactoPage;
