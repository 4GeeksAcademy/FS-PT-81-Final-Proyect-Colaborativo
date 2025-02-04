
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {

  const navigate = useNavigate();

  const handlePruebaYa = () => {
    navigate("/login");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#"><img src={ `../public/logo.png` } alt="LOGO" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">PRUEBAUNO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRUEBADOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRUEBATRES</a>
            </li>
          </ul>
          {localStorage.getItem("token") ? <button onClick={() => navigate("/doctors")} className="btn btn-outline-primary">AGENDAR CITA</button> :
            <button onClick={handlePruebaYa} className="btn btn-outline-primary">INICIAR SESIÓN</button>
          }
        </div>
      </div>
    </nav>
  );
};
