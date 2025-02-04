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
				<h1 className="jumbotron_h1">BIENVENIDO A CLINICA CENTRO</h1>
			</div>
			<hr className="lineas"></hr>
			<h1 className="title">Nuestras especialidades</h1>
			<hr className="lineas"></hr>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="data:image/png;base64,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" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">MEDICINA GENERAL.</p>
								<hr />
								<p>La medicina de familia es una especialidad médica dedicada a la atención integral de personas y familias, abordando aspectos físicos, emocionales y sociales en todas las etapas de la vida.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://media.istockphoto.com/id/914933448/es/vector/estilo-plano-coraz%C3%B3n-icono-vector-de-san-valent%C3%ADn-amor-s%C3%ADmbolo-aislado-en-ilustraci%C3%B3n-de.jpg?s=612x612&w=0&k=20&c=j6mb6AQ0x8J7ix6HESUF_nbVhXLVMX2PrJlTBlLxvqo=" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">CARDIOLOGIA.</p>
								<hr />
								<p>La cardiología se especializa en el cuidado del corazón y el sistema circulatorio, tratando sus enfermedades y promoviendo su salud.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://us.123rf.com/450wm/surfupvector/surfupvector1809/surfupvector180900499/109986117-icono-de-l%C3%ADnea-de-ri%C3%B1%C3%B3n-renal-tratamiento-di%C3%A1lisis-concepto-de-cuerpo-humano-la-ilustraci%C3%B3n.jpg?ver=6" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">NEFROLOGIA.</p>
								<hr />
								<p>La nefrología se especializa en el diagnóstico y tratamiento de las enfermedades renales, cuidando la función y salud de los riñones.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center card_container">
						<div className="card">
							<img src="https://static.vecteezy.com/system/resources/previews/021/533/657/non_2x/eye-black-glyph-ui-icon-part-of-human-body-organ-of-perception-visual-system-user-interface-design-silhouette-symbol-on-white-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg" className="card-img-top" alt="DRACLARAFUENTES" />
							<div className="card-body">
								<p className="card-text">OFTALMOLOGIA.</p>
								<hr />
								<p>La oftalmología se encarga del estudio, diagnóstico y tratamiento de las enfermedades y trastornos de los ojos y la visión.</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="d-flex justify-content-center align-items-center my-4">
						<button className="btn-custom" onClick={handleAgendarCita}>
							Agendar cita
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
