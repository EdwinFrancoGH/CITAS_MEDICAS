import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/main.css";

export default function Dashboard() {
  // Datos simulados
  const citasHoy = 3;
  const citasSemana = 12;
  const proximaCita = {
    hora: "10:30 AM",
    paciente: "María López",
    motivo: "Chequeo general",
    observaciones: "Revisar resultados de laboratorio y ajustar medicación.",
  };
  const agendaHoy = [
    { hora: "09:00 AM", paciente: "Carlos Pérez", motivo: "Consulta general" },
    { hora: "10:30 AM", paciente: "María López", motivo: "Chequeo general" },
    { hora: "02:00 PM", paciente: "Ana Gómez", motivo: "Revisión de laboratorio" },
  ];

  // Estado del modal
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>
          Buenos días, <span style={{ color: "#2563eb" }}>Doctor Edwin</span> 👨‍⚕️
        </h2>
        <p>Aquí el resumen de su jornada:</p>

        {/* ==== Tarjetas de resumen ==== */}
        <div className="dashboard-grid">
          <div className="card">
            <h3>Citas de Hoy</h3>
            <p className="card-number">{citasHoy}</p>
          </div>

          <div className="card">
            <h3>Citas de la Semana</h3>
            <p className="card-number">{citasSemana}</p>
          </div>

          <div className="card">
            <h3>Próxima Cita</h3>
            <p><strong>{proximaCita.hora}</strong></p>
            <p>{proximaCita.paciente}</p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {proximaCita.motivo}
            </p>
            <button
              className="btn-primary"
              onClick={() => setShowModal(true)}
            >
              Gestionar Cita
            </button>
          </div>
        </div>

        {/* ==== Agenda para hoy ==== */}
        <div className="agenda">
          <h3>Agenda para Hoy</h3>
          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Motivo</th>
              </tr>
            </thead>
            <tbody>
              {agendaHoy.map((cita, i) => (
                <tr key={i}>
                  <td>{cita.hora}</td>
                  <td>{cita.paciente}</td>
                  <td>{cita.motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ==== Modal de Gestión ==== */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Detalles de la Próxima Cita</h2>
              <p><strong>Hora:</strong> {proximaCita.hora}</p>
              <p><strong>Paciente:</strong> {proximaCita.paciente}</p>
              <p><strong>Motivo:</strong> {proximaCita.motivo}</p>
              <p><strong>Observaciones:</strong> {proximaCita.observaciones}</p>

              <div style={{ marginTop: "1rem" }}>
                <button className="btn-secondary" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
                <button className="btn-primary" style={{ marginLeft: "10px" }}>
                  Marcar como completada
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
