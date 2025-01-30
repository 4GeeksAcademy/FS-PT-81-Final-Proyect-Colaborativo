import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../../styles/doctorCard.css";

const doctors = [
    {
        id: 1,
        name: "Look&Chic",
        especialidad: "Peluqueria",
        descripcion: "Especialistas en cuidarte",
    },
    {
        id: 2,
        name: "AutoBrillante",
        especialidad: "Lavado de coches",
        descripcion: "Especialistas en dar cera y pulir cera",
    },
    {
        id: 3,
        name: "Nail Art Studio",
        especialidad: "Uñas",
        descripcion: "Especialistas en uñas",
    },
    {
        id: 4,
        name: "Relajarte Spa",
        especialidad: "Masajes",
        descripcion: "Especialistas en masajes y relajacion",
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