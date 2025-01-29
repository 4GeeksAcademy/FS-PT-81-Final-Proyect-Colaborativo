import React, { useState, useEffect } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DoctorCards } from "./doctorCard";
import "../../styles/calendar.css";

export const Calendars = () => {
  // Estado para manejar la fecha y hora seleccionadas
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("09");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [events, setEvents] = useState([]);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  // Definimos las franjas horarias disponibles
  const availableHours = [
    { start: 9, end: 13 },
    { start: 16, end: 20 }
  ];

  // Función para manejar el clic en una fecha
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  // Generar las horas y minutos disponibles basados en las franjas horarias
  const generateAvailableTimes = () => {
    const availableTimes = [];
    
    availableHours.forEach((slot) => {
      for (let hour = slot.start; hour < slot.end; hour++) {
        availableTimes.push(`${hour < 10 ? `0${hour}` : hour}:00`);
        availableTimes.push(`${hour < 10 ? `0${hour}` : hour}:30`);
      }
    });

    return availableTimes;
  };

  // Función para manejar la selección de hora
  const handleHourChange = (e) => {
    setSelectedHour(e.target.value.slice(0, 2)); // Aseguramos que se tome solo la parte de la hora
    setSelectedMinute(e.target.value.slice(3, 5)); // Aseguramos que se tome solo la parte de los minutos
  };

  // Función para confirmar la cita
  const handleConfirmAppointment = () => {
    if (selectedDate) {
      const fullDate = `${selectedDate} ${selectedHour}:${selectedMinute}`;
      // Agregar evento al calendario
      setEvents([
        ...events,
        { id: `${selectedDate} ${selectedHour}:${selectedMinute}`, title: "Cita con", date: fullDate }
      ]);
      setAppointmentConfirmed(true);
      alert(`Cita confirmada para: ${fullDate}`);
    } else {
      alert("Por favor, selecciona una fecha.");
    }
  };

  // Función para cancelar una cita
  const handleCancelAppointment = () => {
    setEvents(events.filter(event => event.date !== `${selectedDate} ${selectedHour}:${selectedMinute}`));
    setSelectedDate(null);
    setSelectedHour("09");
    setSelectedMinute("00");
    setAppointmentConfirmed(false);
    alert("Cita cancelada.");
  };

  // Función para eliminar un evento del calendario
  const handleEventClick = (info) => {
    const eventId = info.event.id;
    const eventDate = info.event.startStr;

    if (window.confirm(`¿Seguro que quieres cancelar la cita para el ${eventDate}?`)) {
      setEvents(events.filter(event => event.id !== eventId));
      alert(`Cita para el ${eventDate} ha sido cancelada.`);
    }
  };

  // UseCalendlyEventListener
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  return (
    <>
      <h1>Calendario y Citas</h1>
      {/* InlineWidget Calendly */}
      <div>
        <InlineWidget url="https://calendly.com/ivanperezgonzalez123/30min" />
      </div>

     </>
  );
};

