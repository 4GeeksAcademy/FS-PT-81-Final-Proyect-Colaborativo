import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; // Importa tu contexto

const UserCitas = () => {
  const { store, actions } = useContext(Context); // Accede al store y las acciones

  // Obtener el ID del usuario desde el localStorage
  const userId = parseInt(localStorage.getItem("id"));
  // Si no hay un ID de usuario, mostrar un mensaje
  if (!userId) {
    return <div>Por favor, inicia sesión para ver tus citas.</div>;
  }

  // Obtener las citas del usuario al cargar el componente
  useEffect(() => {
    actions.getCitaById(userId); // Llama a la acción para obtener las citas
  }, [userId]);

  // Si está cargando, muestra un mensaje
  if (store.loading) {
    return <div>Cargando citas...</div>;
  }

  // Si no hay citas, muestra un mensaje
  if (!store.selectedCita || store.selectedCita.length === 0) {
    return <div>No tienes citas pendientes.</div>;
  }

  // Mostrar las citas
  return (
    <div className="user-citas">
      <h2>Mis Citas</h2>
      <ul>
        {store.selectedCita.map((cita) => (
          <li key={cita.id} className="cita-item">
            <div>
              <strong>Servicio:</strong> {cita.nombre_servicio}
            </div>
            <div>
              <strong>Fecha:</strong> {new Date(cita.fecha).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCitas;