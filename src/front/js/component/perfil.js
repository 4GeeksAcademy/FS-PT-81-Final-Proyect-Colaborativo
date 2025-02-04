import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
 const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: ""
  });

  // useEffect(() => {
  //   const loadData = async () => {
  //     if (!store.user) {
  //       try {
  //         await actions.getUserData();  // Aseguramos que los datos se carguen si no están en el store
  //       } catch (error) {
  //         console.error("Error cargando datos:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       setUserData({
  //         name: store.user.name,
  //       });
  //     }
  //   };
  
  //   loadData();
  // }, [store.user, actions]);
  useEffect(() =>{
    actions.getUserData();
  },[]);

  console.log(store.user)
  console.log(store.id)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.editarPerfil(store.id, userData);
    navigate("/cuenta")
    
  };

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
            value={store.user?.name}
            onChange={handleChange}
            required
          />
        </div>


        <button className="btn btn-primary" type="submit">
          Actualizar
        </button>
      </form>
    </div>
  );
};