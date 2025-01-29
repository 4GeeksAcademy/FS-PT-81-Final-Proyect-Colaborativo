
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logonavbar from "../../img/3.png";

export const Navbar = () => {

  const navigate = useNavigate();

  const handlePruebaYa = () => {
    navigate("/login");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-start mx-5">
        <a className="navbar-brand" href="#"><img src={ logonavbar } alt="CLINICA CENTRAL" className="logonavbar" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 4</a>
            </li>
          </ul>
          {localStorage.getItem("token") ? <button onClick={() => navigate("/doctors")} className="btn btn-outline-primary botonnavbar">AGENDAR CITA</button> :
            <button onClick={handlePruebaYa} className="btn-especial">INICIAR SESION</button>
          }
        </div>
      </div>
    </nav>
  );
};
