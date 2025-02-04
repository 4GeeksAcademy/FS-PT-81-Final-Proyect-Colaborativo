import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const BotonElegir = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    if (actions.register(formData)) navigate("/")
    console.log("User registered:", formData);
  };

  
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-4 mb-3 mb-sm-0 d-flex justify-content-center">
        <div className="card">
          <div className="card-body" onClick={() => navigate("/registro")}>
            <img className="" src="https://img.freepik.com/fotos-premium/hombre-guapo-sonriendo-usando-telefono-movil-aislado-gente-sonriendo-mirando-anuncio-telefono-celular-persona-gafas-sonriendo-usando-telefono-inteligente-fondo-aislado_550253-1918.jpg" />
            <h5 className="card-title">Cliente</h5>
            <p className="card-text">Agenda fácilmente servicios con empresas registradas, gestiona tus reservas y recibe notificaciones. Accede a tu historial de citas y obtén toda la información necesaria para una experiencia personalizada.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body" onClick={() => navigate("/registroempresas")}>
            <img classNameName="" src="https://img.freepik.com/foto-gratis/hombre-negocios-que-usa-telefono-movil-frente-computadora-portatil-taza-cafe-mesa_23-2148096500.jpg" />  
            <h5 className="card-title">Empresa</h5>
            <p className="card-text">Accede a herramientas avanzadas para gestionar citas, administrar horarios y optimizar la operación de tu negocio. Controla reservas, comunícate con clientes y obtén métricas clave para mejorar tu servicio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

