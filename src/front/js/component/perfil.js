import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!store.user) {  // Cambiar a store.user (singular)
        await actions.getUserData();
      }
      // Actualizar estado con datos del store
      setUserData({
        email: store.user?.email || "",
        password: "",  // Dejar vacío por seguridad
        name: store.user?.name || "",
      });
      setLoading(false);
    };
    loadData();
  }, [store.user]);  // Dependencia de store.user

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!store.user?.id) {  // Verificar ID del usuario
      alert("Usuario no identificado");
      return;
    }

    // Enviar solo campos modificables (no enviar password vacío)
    const dataToSend = {
      name: userData.name,
      email: userData.email,
      ...(userData.password && { password: userData.password }) // Enviar password solo si se modifica
    };

    const success = await actions.editarPerfil(store.user.id, dataToSend);
    
    if (success) {
      alert("Perfil actualizado");
      // Limpiar password después de éxito
      setUserData(prev => ({ ...prev, password: "" }));
    } else {
      alert("Error al actualizar");
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mt-5">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Nueva Contraseña (dejar vacío para no cambiar)</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};