
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {

  const navigate = useNavigate();

  const handlePruebaYa = () => {
    navigate("/login");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">Precio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Funcionalidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tecnologia</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ubicacion
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Madrid</a></li>
              </ul>
            </li>
          </ul>
          { localStorage.getItem("token") ? <button onClick={() => navigate("/doctors")} className="btn-green">Agendar Cita</button> : 
            <button onClick={handlePruebaYa} className="btn-green">Prueba ya</button>
          }
        </div>
      </div>
    </nav>
  );
};
