import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DoctorCards } from "./doctorCard";
import "../../styles/calendar.css";

export const Calendars = () => {
  // Estado para manejar la fecha y hora seleccionadas
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [events, setEvents] = useState([]);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  // Función para manejar el clic en una fecha
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  // Función para confirmar la cita
  const handleConfirmAppointment = () => {
    if (selectedDate) {
      const fullDate = `${selectedDate} ${selectedHour}:${selectedMinute}`;
      // Agregar evento al calendario
      setEvents([
        ...events,
        { id: `${selectedDate} ${selectedHour}:${selectedMinute}`, title: "Cita con el Doctor", date: fullDate }
      ]);
      setAppointmentConfirmed(true);
      alert(`Cita confirmada para: ${fullDate}`);
    } else {
      alert("Por favor, selecciona una fecha.");
    }
  };

  // Función para cancelar una cita
  const handleCancelAppointment = () => {
    // Eliminar la cita seleccionada del estado 'events'
    setEvents(events.filter(event => event.date !== `${selectedDate} ${selectedHour}:${selectedMinute}`));
    // Resetear valores para que el usuario pueda seleccionar otra fecha
    setSelectedDate(null);
    setSelectedHour("12");
    setSelectedMinute("00");
    setAppointmentConfirmed(false);
    alert("Cita cancelada.");
  };

  // Función para eliminar un evento del calendario
  const handleEventClick = (info) => {
    const eventId = info.event.id; // Obtener ID del evento
    const eventDate = info.event.startStr; // Obtener fecha del evento

    // Confirmación antes de eliminar
    if (window.confirm(`¿Seguro que quieres cancelar la cita para el ${eventDate}?`)) {
      // Eliminar evento de la lista
      setEvents(events.filter(event => event.id !== eventId));
      alert(`Cita para el ${eventDate} ha sido cancelada.`);
    }
  };

  return (
    <div className="container">
      <div className="doctor-calendar-wrapper">
        {/* Cartas de Doctor */}
        <div className="doctor-section">
          <DoctorCards />
        </div>

        {/* Calendario */}
        <div className="calendar-section">
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]} // Los plugins necesarios
              initialView="dayGridMonth" // Vista inicial de calendario
              events={events} // Pasa tus eventos
              headerToolbar={{
                left: "prev", // Botones de navegación
                center: "title", // Título con mes y año
                right: "next"
              }}
              dateClick={handleDateClick} // Clic en un día
              eventClick={handleEventClick} // Clic sobre un evento (para eliminar)
              height="auto"
              color="black"
            />

            {/* Mostrar la fecha seleccionada y los selectores de hora */}
            {selectedDate && !appointmentConfirmed && (
              <div className="appointment-details">
                <h3>Cita para: {selectedDate}</h3>
                <div className="time-selector">
                  <select
                    value={selectedHour}
                    onChange={(e) => setSelectedHour(e.target.value)}
                  >
                    {[...Array(24).keys()].map((h) => (
                      <option key={h} value={h < 10 ? `0${h}` : h}>
                        {h < 10 ? `0${h}` : h}
                      </option>
                    ))}
                  </select>
                  <span>:</span>
                  <select
                    value={selectedMinute}
                    onChange={(e) => setSelectedMinute(e.target.value)}
                  >
                    {[...Array(60).keys()].map((m) => (
                      <option key={m} value={m < 10 ? `0${m}` : m}>
                        {m < 10 ? `0${m}` : m}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="button-submit" onClick={handleConfirmAppointment}>
                  Confirmar Cita
                </button>
                {/* Botón para cancelar la cita */}
                <button className="button-cancel" onClick={handleCancelAppointment}>
                  Cancelar Cita
                </button>
              </div>
            )}

            {/* Mensaje de confirmación de cita */}
            {appointmentConfirmed && (
              <div className="confirmation-message">
                <p>¡Tu cita ha sido confirmada!</p>
                <button className="button-submit" onClick={handleCancelAppointment}>
                  Cancelar Cita
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendars;