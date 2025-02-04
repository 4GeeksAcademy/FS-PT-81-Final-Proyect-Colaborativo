import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../../styles/doctorCard.css";

const doctors = [
    {
        id: 1,
        name: "Look&Chic",
        especialidad: "Peluqueria",
        descripcion: "Especialistas en cuidarte",
        image: "https://cdn.pixabay.com/photo/2019/03/08/20/17/beauty-salon-4043096_640.jpg"
    },
    {
        id: 2,
        name: "AutoBrillante",
        especialidad: "Lavado de coches",
        descripcion: "Especialistas en dar cera y pulir cera",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Nail Art Studio",
        especialidad: "Uñas",
        descripcion: "Especialistas en uñas",
        image: "https://547fdc8a.delivery.rocketcdn.me/wp-content/uploads/2021/08/27-1-677x400.jpg"

    },
    {
        id: 4,
        name: "Relajarte Spa",
        especialidad: "Masajes",
        descripcion: "Especialistas en masajes y relajacion",
        image: "https://sanicur.es/wp-content/uploads/2024/05/male-physiotherapist.jpg"

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
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="card-img-top" // Estilo de la imagen en la parte superior de la tarjeta
                            />
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