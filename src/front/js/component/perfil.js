import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState({
    name: ""
  });

  // useEffect(() => {
  //   const loadData = async () => {
  //     if (!store.user) {  // Cambiar a store.user (singular)
  //       await actions.getUserData();
  //     }
  //     // Actualizar estado con datos del store
  //     setUserData({
  //       email: store.user?.email || "",
  //       password: "",  // Dejar vacío por seguridad
  //       name: store.user?.name || "",
  //     });
  //     setLoading(false);
  //   };
  //   loadData();
  // }, [store.user]);  // Dependencia de store.user
  useEffect(() => {
    actions.getUserData();
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.editarPerfil(userData);
    navigate("/cuenta")
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