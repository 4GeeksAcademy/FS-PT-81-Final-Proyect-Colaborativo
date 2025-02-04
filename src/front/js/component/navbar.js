import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react"; // Importa useContext
import { Context } from "../store/appContext"; // Importa el contexto de tu flux
import logonavbar from "../../img/agenpro.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context); // Accede al store y actions del flux

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    navigate("/login");
  };

  // Función para manejar el registro
  const handleElegir = () => {
    navigate("/elige");
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    actions.logout(); // Llama a la acción de logout del flux
    navigate("/"); // Redirige al inicio
  };

  const handleCuenta = () => {

    navigate("/cuenta")
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-start mx-5">
        <a className="navbar-brand" href="/">
          <img src={logonavbar} alt="AGENPRO" className="logonavbar" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#consultasnavbar">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarcoso" href="#">ELEMENTO 4</a>
            </li>
          </ul>

          {/* Mostrar los botones dependiendo del estado de autenticación */}
          {!store.auth ? ( // Usa store.auth para verificar si el usuario está autenticado
            <>
              <button className="btn btn-outline-primary mx-1" onClick={handleLogin}>
                Iniciar Sesión
              </button>
              <button className="btn btn-outline-primary" onClick={handleElegir}>
                Registro
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-secondary mx-1" onClick={() => handleCuenta()}>
                Cuenta
              </button>

              <button className="btn btn-outline-danger" onClick={() => handleLogout()}>
                Cerrar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};