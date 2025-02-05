import React, { useState, useEffect } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import "../../styles/calendar.css";

export const Calendars = () => {
  const [uri, setUri] = useState('');
  const [appointmentData, setAppointmentData] = useState(null);
  const [userId, setUserId] = useState(null);

  console.log("Valor de uri recibido:", uri);
  console.log("Valor de userId recibido:", userId);

  useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("Usuario no autenticado. Por favor, inicia sesión.");
    }
  }, []);

  // Función para validar datos
  const validateData = (uri, userId) => {
      if (!uri) {
          console.error("La URI no está definida. Verifica que se está pasando correctamente.");
          return false;
      }
      if (!userId) {
          console.error("El userId no está definido. Verifica que el usuario está autenticado.");
          return false;
      }
      return true;
  };

  useEffect(() => {
      if (!validateData(uri, userId)) return;

      const options = {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
          },
      };

      fetch(uri, options)
          .then((response) => {
              if (!response.ok) throw new Error("Error al obtener datos de Calendly");
              return response.json();
          })
          .then((data) => {
              if (!data.resource || !data.resource.start_time) {
                  throw new Error("Datos no encontrados en la respuesta de Calendly");
              }

              const filteredData = {
                  start_time: data.resource.start_time,
                  user_id: userId,
              };

              console.log("Datos filtrados de Calendly:", filteredData);
              setAppointmentData(filteredData);
          })
          .catch((err) => console.error("Error obteniendo datos de Calendly:", err));
  }, [uri, userId]);

  useEffect(() => {
      if (!appointmentData || !appointmentData.start_time || !appointmentData.user_id) {
          console.error("Los datos de la cita no están completos:", appointmentData);
          return;
      }

      // Formatear los datos para enviar al backend
      const formattedData = {
          fecha: appointmentData.start_time,
          user_id: appointmentData.user_id, // Cambiamos "users" a "user_id" para coincidir con el modelo
      };

      console.log("Datos a enviar al backend:", formattedData);

      // Enviar datos al backend
      fetch(`${process.env.BACKEND_URL}/api/citas`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
      })
          .then((res) => {
              if (!res.ok) throw new Error("Error en la respuesta del backend");
              return res.json();
          })
          .then((data) => console.log("Respuesta del backend:", data))
          .catch((err) => console.error("Error enviando datos al backend:", err));
  }, [appointmentData]);

  
  // UseCalendlyEventListener
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => setUri(e?.data?.payload?.event?.uri || ''),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  return (
    <>
      <h1>Calendario y Citas</h1>
      {/* InlineWidget Calendly */}
      <div>
        <InlineWidget url="https://calendly.com/blacknereus/30min" />
        
      </div>

     </>
  );
};

