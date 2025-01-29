import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => (
	<footer className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <div className="collapse navbar-collapse" id="footerContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Políticas de Privacidad </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#"> Términos y Condiciones </a>
            </li>
          </ul>
          <button className="btn-especial">Contáctanos</button>
        </div>
      </div>
    </footer>
);
