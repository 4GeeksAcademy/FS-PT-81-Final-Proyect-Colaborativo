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
				<h1 className="jumbotron_h1">AGENPRO</h1>
				<h3 className="jumbotron_h3">La agenda rápida, simple y segura.</h3>
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
							<img src="https://img.freepik.com/foto-gratis/lavadora-profesional-uniforme-azul-lavado-coches-lujo-pistola-agua-tunel-lavado-al-aire-libre_496169-333.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">LAVADERO</p>
								<p>TE LAVAMOS EL COCHE</p>
								<div className="d-grid gap-2 col-12 mx-auto">
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
								<div className="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://cdn.pixabay.com/photo/2019/03/08/20/17/beauty-salon-4043096_640.jpg"
								className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">PELUQUERIA</p>
								<p>TE PINTAMOS EL PELO</p>
								<div className="d-grid gap-2 col-12 mx-auto">
									<button className="btn-especial" onClick={handleAgendarCita}>
										AGENDAR CITA
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://547fdc8a.delivery.rocketcdn.me/wp-content/uploads/2021/08/27-1-677x400.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">UÑAS</p>
								<p>TE ARRANCAMOS LAS UÑAS</p>
								<div className="d-grid gap-2 col-12 mx-auto">
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
							<h1>AGENPRO es tu agenda digital sin estrés. ¿Listo para evolucionar?</h1>
							<div className="d-grid gap-2 col-4 mx-auto">
									<button className="btn-especial">
										CONTACTANOS
									</button>
								</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
