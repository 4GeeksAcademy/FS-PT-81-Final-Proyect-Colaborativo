import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';


import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleAgendarCita = () => {
		if (!store.auth) {
			navigate("/login", { state: { from: "/doctors" } })
		} else {
			navigate("/doctors")
		}
	}

	return (
		<>
		<div className="jumbotron jumbotron_div">
			<h1 className="jumbotron_h1">AGENPRO</h1>
			<h3 className="jumbotron_h3">La agenda rápida, simple y segura.</h3>
		</div>

		<section className="services-description fade-in-down">
			<h2>¿Qué hacemos por ti?</h2>
			<h3>
				En AGENPRO, te ayudamos a gestionar tus citas de una manera rápida, simple y segura.
				Ya no tendrás que preocuparte por perder tiempo en agendar tus compromisos. Con nuestra
				agenda digital podrás organizar todas tus citas con facilidad, sin estrés, y de manera eficiente.
			</h3>
		</section>

		<div className="container-fluid m-0 p-0">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">


					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="card-img-top"

						/>
						<div className="card-body">
							<p className="card-text">LAVADERO</p>
							<p>Déjanos cuidar de tu coche con nuestro servicio de lavado profesional. Limpieza a fondo, cuidado detallado y un brillo impecable para que tu vehículo luzca como nuevo.</p>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
					<div className="card">
						<img
							src="https://sanicur.es/wp-content/uploads/2024/05/male-physiotherapist.jpg"
							className="card-img-top"

						/>
						<div className="card-body">
							<p className="card-text">MASAJES</p>
							<p>Relájate y revitaliza tu cuerpo con nuestros masajes terapéuticos. Alivio del estrés, mejora de la circulación y bienestar total en cada sesión.</p>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
					<div className="card">
						<img
							src="https://cdn.pixabay.com/photo/2019/03/08/20/17/beauty-salon-4043096_640.jpg"
							className="card-img-top"

						/>
						<div className="card-body">
							<p className="card-text">PELUQUERIA</p>
							<p>Transforma tu look con nuestros servicios de peluquería. Cortes, peinados y tintes personalizados para resaltar tu belleza. ¡Déjanos cuidar de tu estilo!</p>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
					<div className="card">
						<img
							src="https://547fdc8a.delivery.rocketcdn.me/wp-content/uploads/2021/08/27-1-677x400.jpg"
							className="card-img-top"

						/>
						<div className="card-body">
							<p className="card-text">UÑAS</p>
							<p>Embellece tus manos con nuestros servicios de manicura y pedicura. Diseños personalizados, esmaltes de alta calidad y un toque único para tus uñas.</p>

			
						</div>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center my-4">
				<div className="d-grid gap-2 col-12 col-sm-6 col-md-4 col-lg-3">
					<button className="btn-especial" onClick={handleAgendarCita}>
						AGENDAR CITA
					</button>
				</div>
			</div>

			<div id="consultasnavbar" className="divdelfondopadre">
				<div className="divizquierda p-2">
				   <h1>Un mapa de madrid simulando que es google maps</h1>
					<div className="divimgmetodospago">
						<img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg" className="imgmetodospago" />
					</div>
				</div>
				<div className="divderecha p-2">
					<h1>Contacto</h1>
					<div className="divformularioconsulta">
						 <form id="contactForm">
							<div className="form-group">
								<label htmlFor="nombre">Nombre:</label>
								<input type="text" id="nombre" name="nombre" required/>
									<div className="error" id="nombreError"></div>
							</div>

							<div className="form-group">
								<label htmlFor="telefono">Teléfono:</label>
								<input type="tel" id="telefono" name="telefono" required />
								<div className="error" id="telefonoError"></div>
							</div>


							<div className="form-group">
								<label htmlFor="email">Email:</label>
								<input type="email" id="email" name="email" required />
								<div className="error" id="emailError"></div>
							</div>

							<div className="form-group">
								<label htmlFor="consulta">Consulta:</label>
								<textarea id="consulta" name="consulta" rows="1" required></textarea>
								<div className="error" id="consultaError"></div>
							</div>

							<button className="btn btn-outline-primary">Enviar</button>
						</form>

					</div>
				</div>
			</div>
		</div>
	</>
	);
};
