import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';  // Ajusta la ruta según tu estructura de archivos
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile = () => {
    const { store, actions } = useContext(Context);  // Accede al store y las acciones desde el contexto

    // Obtén los datos del usuario desde el store
    const user = store.user;

    // Dispara la acción para obtener los datos del usuario al montar el componente
    useEffect(() => {
        actions.getUserData();  // Llama a la acción que obtiene los datos del usuario
    }, []);

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (!user) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <i className="bi bi-exclamation-circle text-warning fs-1 mb-3"></i> {/* Ícono de advertencia */}
            <h3 className="fw-bold text-dark">No hay sesión activa</h3>
            <p className="text-muted">Por favor, inicia sesión para acceder a esta página.</p>
            <a href="/login" className="btn btn-primary mt-3"> {/* Enlace para iniciar sesión */}
              Iniciar sesión
            </a>
          </div>
        </div>
      );
    }
    // Muestra los datos del usuario si todo está correcto
    return (
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg border-0 py-4 px-5">
              <div className="card-body">
                {/* TÍTULO */}
                <div className="text-center mb-2"> {/* Cambiado de mb-3 a mb-2 */}
                  <i className="bi bi-person-circle text-primary fs-1"></i>
                  <h2 className="fw-bold text-dark mt-2">Perfil de Usuario</h2>
                </div>
    
                {/* DATOS DEL USUARIO */}
                {user ? (
                  <div className="row">
                    <div className="col-12 d-flex align-items-center mb-3">
                      <i className="bi bi-person-fill text-primary fs-5 me-2"></i>
                      <span className="fw-semibold fs-5">Nombre:</span>
                      <span className="ms-2 fs-5 text-dark">{user.name}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                      <i className="bi bi-envelope-fill text-danger fs-5 me-2"></i>
                      <span className="fw-semibold fs-5">Correo:</span>
                      <span className="ms-2 fs-5 text-muted">{user.email}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-danger text-center mt-3">No se encontró información del usuario.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default UserProfile;