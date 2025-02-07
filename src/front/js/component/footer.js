import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logonavbar from "../../img/agenpro.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-section">
          <img src={logonavbar} alt="AGENPRO" className="logonavbar" />
        </div>

      
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a className="enlacefooter" href="#">Ir arriba</a></li>
            <li><a className="enlacefooter" href="https://4geeks.com/es/terminos-y-condiciones" target="_blank">Terminos y condiciones</a></li>
            <li><a className="enlacefooter" href="https://4geeks.com/es/politicas-de-privacidad" target="_blank">Politicas de privacidad</a></li>
            <li><a className="enlacefooter" href="https://4geeksacademy.com/es/inicio" target="_blank">Visita 4Geeks Academy</a></li>
          </ul>
        </div>

      
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F4GeeksAcademyES%2F" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/4geeksacademyes/" target="_blank"><FaInstagram /></a>
            <a href="https://es.linkedin.com/school/4geeksacademyes/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/4GeeksAcademy" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>

      
      <div className="footer-copyright">
        <p>©AGENPRO LLC 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};


