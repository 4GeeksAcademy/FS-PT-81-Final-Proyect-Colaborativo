import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const FormularioEmpresas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    compañia: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actions.register(formData)) {
      navigate("/doctors");
    }
    console.log("User registered:", formData);
  };

  return (
    <form className="custom-register-form" onSubmit={handleSubmit}>
      <h1 className="justify-content-center">Registro</h1>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="compañia">Empresa</label>
        <input
          type="text"
          id="compañia"
          name="compañia"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Contraseña <span className="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="custom-register-button">
        Registrarme
      </button>
      <p className="form-footer">
        ¿Ya tienes cuenta? <a href="/login">Accede aquí</a>
      </p>
    </form>
  );
};
