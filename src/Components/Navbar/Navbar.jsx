import React from "react";
import logoImg from "../../assents/img/logO-imgg-removebg-preview.png";
import "./styles.css";

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>
            SEAP - Secretaria de Estado <br></br> de Administração Penitenciária
          </h1>
        </div>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
