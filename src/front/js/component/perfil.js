import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: store.user?.name || ""
  });

  useEffect(() => {
    actions.getUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.editarPerfil(userData);
    navigate("/cuenta");
  };

  const handleDeleteUser = async () => {
    const userId = store.user.id;
    try {
      const response = await actions.deleteUser(userId);
      console.log("Respuesta de la API en handleDeleteUser:", response);
      if (response.ok) {
        await actions.logout();
        navigate("/");
      } else {
        console.error("No se pudo eliminar el usuario:", response);
      }
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Editar Perfil</h2>
              <h3 className="text-center mb-4">Bienvenido, {store.user?.name || "Usuario"}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu nombre"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Actualizar Perfil
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-lg" onClick={handleDeleteUser}>
                    Eliminar cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};