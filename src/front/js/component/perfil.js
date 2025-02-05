import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState({
    name: store.user?.name || ""
  });

  const navigate = useNavigate();

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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Editar Perfil</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
