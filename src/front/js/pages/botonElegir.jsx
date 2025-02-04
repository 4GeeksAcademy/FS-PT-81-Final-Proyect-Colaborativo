import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../styles/botonElegir.css"

export const BotonElegir = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSignedUpCliente = () => {
    navigate("/registro");
  };

  const handleSignedUpEmpresa = () => {
    navigate("/registroempresas");
  };

  return (

    <div className="row d-flex justify-content-center">
      <div className="col-sm-4 mb-3 mb-sm-0 d-flex justify-content-center">
        <div className="card">
          <div className="card-body" onClick={() => navigate("/registro")}>
            <img src="https://img.freepik.com/fotos-premium/hombre-guapo-sonriendo-usando-telefono-movil-aislado-gente-sonriendo-mirando-anuncio-telefono-celular-persona-gafas-sonriendo-usando-telefono-inteligente-fondo-aislado_550253-1918.jpg" />
            <h5 className="card-title">Cliente</h5>
            <p className="card-text">El perfil de cliente permite agendar servicios fácilmente con empresas registradas. Con una interfaz intuitiva, los usuarios pueden explorar proveedores, reservar, gestionar citas y recibir notificaciones para una experiencia ágil y personalizada.</p>

    <div className="row">
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card" onClick={handleSignedUpCliente}>
          <div className="card-body">
            <img src="https://img.freepik.com/fotos-premium/hombre-guapo-sonriendo-usando-telefono-movil-aislado-gente-sonriendo-mirando-anuncio-telefono-celular-persona-gafas-sonriendo-usando-telefono-inteligente-fondo-aislado_550253-1918.jpg" alt="Cliente" />
            <h5 className="card-title">Cliente</h5>
            <p className="card-text">
              El perfil de cliente permite agendar servicios fácilmente con empresas registradas. Con una interfaz intuitiva, los usuarios pueden explorar proveedores, reservar, gestionar citas y recibir notificaciones para una experiencia ágil y personalizada.
            </p>

          </div>
        </div>
      </div>
      <div className="col-sm-4">

        <div className="card">
          <div className="card-body" onClick={() => navigate("/registroempresas")}>
            <img src="https://img.freepik.com/foto-gratis/hombre-negocios-que-usa-telefono-movil-frente-computadora-portatil-taza-cafe-mesa_23-2148096500.jpg" />
            <h5 className="card-title">Empresa</h5>
            <p className="card-text">El perfil de negocio permite gestionar citas, horarios y servicios de forma eficiente. Ofrece herramientas avanzadas para optimizar operaciones, mejorar la comunicación y analizar métricas clave.</p>

        <div className="card" onClick={handleSignedUpEmpresa}>
          <div className="card-body">
            <img src="https://img.freepik.com/foto-gratis/hombre-negocios-que-usa-telefono-movil-frente-computadora-portatil-taza-cafe-mesa_23-2148096500.jpg" alt="Empresa" />
            <h5 className="card-title">Empresa</h5>
            <p className="card-text">
              El perfil de negocio permite gestionar citas, horarios y servicios de forma eficiente. Ofrece herramientas avanzadas para optimizar operaciones, mejorar la comunicación y analizar métricas clave.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};