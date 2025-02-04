import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const { actions } = useContext(Context)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Email y contraseña son requeridos.");
      return;
    }
     
    await actions.loginUser(formData); 
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Inicio de Sesión</h1>
      <div className="form-group">
        <label className="label" htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">
          Contraseña <span className="required">*</span>
        </label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Iniciar Sesión
      </button>
      <p className="footer-login">
        ¿No tienes cuenta?{" "}
        <a href="/registro" className="link">
          Regístrate aquí
        </a>
      </p>
    </form>
  );
};

export default Formulario;