import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export const PerfilEmpresa = () => {
    return (
        <div className="container">
            <div className="">
                <ul className="mis-citas-title-empresa">
                    <li><strong>Mis citas</strong></li>
                </ul>
            </div>
            <div className="groupon-item">
                <div className="detalles-cita">
                    <h3>Empresa</h3>
                    <p>Servicio de empresa</p>
                    <div className="buttons">
                        <button className="comprar-denuevo btn btn-primary mx-1">Cómprala de nuevo</button>
                        <button className="gift btn btn-primary"> Regálalo</button>
                    </div>
                </div>
            </div>
        </div>

    )
};
