import React from "react";
import Navbar from "../components/Navbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/main.css";

export default function Calendar() {
  const events = [
    {
      title: "Cita con Carlos Pérez",
      start: "2025-10-13T09:00:00",
      end: "2025-10-13T09:30:00",
    },
    {
      title: "Cita con María López",
      start: "2025-10-13T10:30:00",
      end: "2025-10-13T11:00:00",
    },
    {
      title: "Cita con Ana Gómez",
      start: "2025-10-14T14:00:00",
      end: "2025-10-14T14:30:00",
    },
    {
      title: "Control con José Martínez",
      start: "2025-10-15T08:30:00",
      end: "2025-10-15T09:00:00",
    },
  ];

  const handleEventClick = (info) => {
    alert(`📋 ${info.event.title}\n🕒 ${info.event.start.toLocaleString()}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Calendario de Citas</h1>
        <p>Visualiza tus citas médicas programadas.</p>

        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            eventClick={handleEventClick}
            height="80vh"
            locale="es"
            buttonText={{
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
            }}
          />
        </div>
      </div>
    </div>
  );
}
