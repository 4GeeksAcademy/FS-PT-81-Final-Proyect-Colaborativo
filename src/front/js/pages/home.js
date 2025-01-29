import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";




export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	const handleAgendarCita = () => 
		navigate("/doctors");
	return (
		<>
			<div className="jumbotron jumbotron_div">
				<h1 className="jumbotron_h1">BIENVENIDO A X</h1>
			</div>
			{/*
			<hr className="lineas"></hr>
			<h1 className="title">NUESTRAS ESPECIALIDADES</h1>
			<hr className="lineas"></hr>
			*/}
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/admin-ajax-2.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">LAVADERO</p>
								<p>TE LAVAMOS LA ROPA</p>
								<div class="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/male-physiotherapist.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">MASAJES</p>
								<p>TE HACEMOS MASAJES</p>
								<div class="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/doctor-diagnoses-treats-virtual-humanology.jpg"
								className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">PELUQUERIA</p>
								<p>TE PINTAMOS EL PELO</p>
								<div class="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://sanicur.es/wp-content/uploads/2024/05/female-psychologist.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">UÑAS</p>
								<p>TE ARRANCAMOS LAS UÑAS</p>
								<div class="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="d-flex flex-column justify-content-center align-items-center my-4 divdelfondo">
						<div className="d-flex flex-column justify-content-center align-items-center my-4">
							<h1>AGENDE SU CITA EN X</h1>
							<h3>De manera rápida, sencilla y segura</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
