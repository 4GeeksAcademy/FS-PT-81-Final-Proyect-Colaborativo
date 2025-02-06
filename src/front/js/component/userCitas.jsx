import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 
import "bootstrap/dist/css/bootstrap.min.css";

const UserCitas = () => {
  const { store, actions } = useContext(Context); 

  const userId = parseInt(localStorage.getItem("id"));
 
  if (!userId) {
    return    <div className="d-flex justify-content-center align-items-center vh-100 text-muted">
    Por favor, inicia sesión para ver tus citas.
  </div>
  }

  
  useEffect(() => {
    actions.getCitaById(userId); 
  }, [userId]);

  if (store.loading) {
    return        <div className="d-flex justify-content-center align-items-center vh-100 text-muted">
    Cargando citas...
  </div>
  }

 
  if (!store.selectedCita || store.selectedCita.length === 0) {
    return <div className="d-flex justify-content-center align-items-center vh-100 text-muted">
    No tienes citas pendientes.
  </div>
  }

  
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">📅 Mis Citas</h2>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <ul className="list-group">
          {store.selectedCita.map((cita) => (
            <li key={cita.id} className="list-group-item shadow-sm p-3 mb-3 rounded border border-light">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold text-primary">{cita.nombre_servicio}</h5>
                  <p className="mb-1 text-muted">
                    <i className="bi bi-calendar-check"></i> {new Date(cita.fecha).toLocaleString()}
                  </p>
                </div>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
};

export default UserCitas;