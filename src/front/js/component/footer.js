import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logonavbar from "../../img/agenpro.png";

/* Footer 2*/
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Logo y descripción */}
        <div className="footer-section">
          <img src={logonavbar} alt="AGENPRO" className="logonavbar" />
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="https://4geeks.com/es/terminos-y-condiciones" target="_blank">Terminos y condiciones</a></li>
            <li><a href="https://4geeks.com/es/politicas-de-privacidad" target="_blank">Politicas de privacidad</a></li>
            <li><a href="https://4geeksacademy.com/es/inicio" target="_blank">Visita 4Geeks Academy</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>©AGENPRO LLC 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};


/*
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
        </div>
      </div>
    </footer>
);
*/
