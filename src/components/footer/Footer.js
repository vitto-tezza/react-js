import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a
        className="redes"
        target="blank"
        href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699"
      >
        <img className="ImgRedes" src="facebook.png" alt="facebbok" />
      </a>
      <div className="logo">
        <img className="ImgLogo" src="logo.png" alt="logo" />
      </div>
      <a
        className="redes"
        target="blank"
        href="https://www.instagram.com/starwars/?hl=es-la"
      >
        <img className="ImgRedes" src="instagram.png" alt="instagram" />
      </a>
    </footer>
  );
}

export default Footer;
