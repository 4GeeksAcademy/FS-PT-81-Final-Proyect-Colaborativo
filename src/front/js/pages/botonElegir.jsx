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
    <div class="row d-flex justify-content-center">
      <div class="col-sm-4 mb-3 mb-sm-0 d-flex justify-content-center">
        <div class="card" onClick={handleSignedUpCliente}>
          <div class="card-body">
            <img src="https://img.freepik.com/fotos-premium/hombre-guapo-sonriendo-usando-telefono-movil-aislado-gente-sonriendo-mirando-anuncio-telefono-celular-persona-gafas-sonriendo-usando-telefono-inteligente-fondo-aislado_550253-1918.jpg" />
            <h5 className="card-title"><strong>Cliente</strong></h5>
            <p className="card-text">
              El perfil de cliente permite agendar servicios fácilmente con empresas registradas. Con una interfaz intuitiva, los usuarios pueden explorar proveedores, reservar, gestionar citas y recibir notificaciones para una experiencia ágil y personalizada.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mb-3 mb-sm-0 d-flex justify-content-center">
        <div class="card" onClick={handleSignedUpEmpresa}>
          <div class="card-body">
            <img src="https://img.freepik.com/fotos-premium/hombre-guapo-sonriendo-usando-telefono-movil-aislado-gente-sonriendo-mirando-anuncio-telefono-celular-persona-gafas-sonriendo-usando-telefono-inteligente-fondo-aislado_550253-1918.jpg" alt="Cliente" />
            <h5 className="card-title"><strong>Empresa</strong></h5>
            <p className="card-text">
              El perfil de empresa permite gestionar servicios, citas y clientes de manera eficiente. Con una plataforma intuitiva, las empresas pueden organizar su disponibilidad, administrar reservas, comunicarse con clientes y recibir notificaciones en tiempo real, optimizando así la gestión y el crecimiento del negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};