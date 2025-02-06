import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';  // Ajusta la ruta según tu estructura de archivos

const UserProfile = () => {
    const { store, actions } = useContext(Context);  // Accede al store y las acciones desde el contexto

    // Obtén los datos del usuario desde el store
    const user = store.user;

    // Dispara la acción para obtener los datos del usuario al montar el componente
    useEffect(() => {
        actions.getUserData();  // Llama a la acción que obtiene los datos del usuario
    }, []);

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (!user) {return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      );
    }
    // Muestra los datos del usuario si todo está correcto
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h2 className="card-title mb-4">👤 Perfil de Usuario</h2>
                  {user ? (
                    <>
                      <p className="fw-bold">📝 Nombre: <span className="text-primary">{user.name}</span></p>
                      <p className="fw-bold">📧 Correo: <span className="text-muted">{user.email}</span></p>
                    </>
                  ) : (
                    <p className="text-danger">No se encontró información del usuario.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default UserProfile;