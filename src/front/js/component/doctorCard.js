import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../../styles/doctorCard.css";

const doctors = [
    {
        id: 1,
        name: "Dr. Ivan Herrera",
        especialidad: "Cardiología",
        title: "Médico Cirujano",
        descripcion: "Especialista en Cardiología",
    },
    {
        id: 2,
        name: "Dr. Maria Gómez",
        especialidad: "Dermatología",
        title: "Médico Dermatólogo",
        descripcion: "Especialista en Dermatología",
    },
    {
        id: 3,
        name: "Dr. José Pérez",
        especialidad: "Neurología",
        title: "Médico Neurólogo",
        descripcion: "Especialista en Neurología",
    },
    {
        id: 4,
        name: "Dr. Laura Martínez",
        especialidad: "Pediatría",
        title: "Médico Pediatra",
        descripcion: "Especialista en Pediatría",
    },
];

export const DoctorCards = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleCardClick = (doctorId) => {
      setSelectedDoctor(doctorId === selectedDoctor ? null : doctorId); // Cambia la selección
  };

  return (
      <div className="container">
          <div className="row">
              {doctors.map((doctor) => (
                  <div key={doctor.id} className="col-md-3 mb-4">
                      <div
                          className={`card ${selectedDoctor === doctor.id ? "selected" : ""}`}
                          onClick={() => handleCardClick(doctor.id)}
                      >
                          <div className="card-body">
                              <h5 className="card-title">{doctor.name}</h5>
                              <p className="card-text">{doctor.title}</p>
                              <p className="card-text">{doctor.especialidad}</p>
                              <Link to={`/calendar/${doctor.id}`} className="btn btn-primary">
                                  AGENDAR CITA
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};