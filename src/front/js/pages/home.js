import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";



const handleAgendarCita = () => {
	navigate("/cita");
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="jumbotron jumbotron_div">
				<h1 className="jumbotron_h1">BIENVENIDO A CLINICA CENTRAL</h1>
			</div>
			{/*
			<hr className="lineas"></hr>
			<h1 className="title">NUESTRAS ESPECIALIDADES</h1>
			<hr className="lineas"></hr>
			*/}
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/admin-ajax-2.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">MEDICINA INTEGRAL</p>
								<p>Somos un equipo de médicos que brinda atención integral, 
									garantizando el bienestar de toda la familia en cada etapa de la vida.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
						<img src="https://sanicur.es/wp-content/uploads/2024/05/male-physiotherapist.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">REHABILITACION</p>
								<p>Desarrollamos terapias en rehabilitación funcional y manejo del dolor, 
									enfocadas en recuperar la movilidad y optimizar el bienestar.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/doctor-diagnoses-treats-virtual-humanology.jpg"
							 className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">TECNOLOGIA</p>
								<p>Equipados con tecnología médica de última generación, 
									diseñados para proporcionar atención de alta calidad y precisión.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/female-psychologist.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">HUMANIDAD</p>
								<p>Consideramos la medicina como una vocación. 
									No tratamos clientes, sino personas, a quienes cuidamos como familia.</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="d-flex flex-column justify-content-center align-items-center my-4 divdelfondo">
						<div className="d-flex flex-column justify-content-center align-items-center my-4">
							<h1>AGENDE SU CITA EN CLINICA CENTRAL</h1>
							<h3>De manera rápida, sencilla y segura</h3>
						</div>
						<div class="d-grid gap-2 col-3 mx-auto">
						<button className="btn-especial" onClick={handleAgendarCita}>
						AGENDAR CITA
						</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
