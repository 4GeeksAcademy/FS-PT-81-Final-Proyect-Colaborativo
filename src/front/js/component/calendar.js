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
  const [uri, setUri] = useState('')
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
    onEventScheduled: (e) => setUri(e.data.payload.event.uri),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });


   
    
  // evento onEventScheduled  
  //  {
  //     "event": {
  //         "uri": "https://api.calendly.com/scheduled_events/e62f560b-528a-4775-bc00-d59c76063cbd" ---> direccion para traerte con el fetch la info del evento
  //     },
  //     "invitee": {
  //         "uri": "https://api.calendly.com/scheduled_events/e62f560b-528a-4775-bc00-d59c76063cbd/invitees/0113934e-ef62-482a-84ae-7c27febb9f92"
  //     }
  // }


  /*
respuesta cuando pides info del https://api.calendly.com/scheduled_events/uri
{
    "resource": {
        "calendar_event": {
            "external_id": "u4p38pumeleerecu60034v2bqg",
            "kind": "google"
        },
        "created_at": "2025-01-31T11:01:39.216399Z",
        "end_time": "2025-02-14T18:30:00.000000Z",
        "event_guests": [],
        "event_memberships": [
            {
                "buffered_end_time": "2025-02-14T18:30:00.000000Z",
                "buffered_start_time": "2025-02-14T18:00:00.000000Z",
                "user": "https://api.calendly.com/users/1a9b9948-ca53-41b4-9275-ef74c2c19a69",
                "user_email": "ivanperezgonzalez123@gmail.com",
                "user_name": "Ivan 075"
            }
        ],
        "event_type": "https://api.calendly.com/event_types/23112707-5c76-4743-9641-d4af77ad7555",
        "invitees_counter": {
            "active": 1,
            "limit": 1,
            "total": 1
        },
        "location": {
            "additional_info": "",
            "location": "Madrid, 123",
            "type": "physical"
        },
        "meeting_notes_html": null,
        "meeting_notes_plain": null,
        "name": "Date Update",
        "start_time": "2025-02-14T18:00:00.000000Z",
        "status": "active",
        "updated_at": "2025-01-31T11:01:40.487815Z",
        "uri": "https://api.calendly.com/scheduled_events/7ba71438-cdd7-4331-9a4c-a559ce4e8ee3"
    }
}
  */
useEffect(()=>{

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.CALENDLY_TOKEN
  }
};

    fetch(uri, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[uri])


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

