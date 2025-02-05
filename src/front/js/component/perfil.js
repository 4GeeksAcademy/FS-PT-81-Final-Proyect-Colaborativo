import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
 const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: store.user?.name || ""
  });

   useEffect(() => {
    actions.getUserData();
  },[])

  // useEffect(() => {
  //   setUserData((store.user?.name) || "")
  // },[store.user])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    actions.editarPerfil(userData);
    navigate("/cuenta");
  };

  console.log(store.user);
  return (
    <div className="container mt-5">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>

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


        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};
