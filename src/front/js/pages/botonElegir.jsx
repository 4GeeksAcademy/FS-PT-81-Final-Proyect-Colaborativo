import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const BotonElegir = () => {
  const {store,actions} = useContext(Context)
  const navigate = useNavigate()

  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (actions.register(formData)) navigate("/")
      console.log("User registered:", formData);
    };

    const handleSignedUp = () => {
      navigate("/");
    } 
    return (
      <form className="custom-register-form" onSubmit={handleSubmit}>
        <button type="submit" className="custom-register-button" onClick={handleSignedUp}>
          Cliente
        </button>
        <button type="submit" className="custom-register-button" onClick={handleSignedUp}>
          Empresa
        </button>
      </form>
    );
  };
  
