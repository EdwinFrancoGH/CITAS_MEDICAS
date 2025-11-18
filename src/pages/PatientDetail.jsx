import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/main.css";

export default function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { patient } = location.state || {};

  if (!patient) {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Paciente no encontrado</h2>
          <button className="btn-primary" onClick={() => navigate("/patients")}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Ficha del Paciente</h1>

        <div className="patient-detail-card">
          <h2>{patient.nombre}</h2>
          <p><strong>Edad:</strong> {patient.edad}</p>
          <p><strong>Género:</strong> {patient.genero}</p>
          <p><strong>Dirección:</strong> {patient.direccion}</p>
          <p><strong>Teléfono:</strong> {patient.telefono}</p>

          <h3>Antecedentes Médicos</h3>
          <p>{patient.antecedentes || "Sin antecedentes registrados."}</p>

          <h3>Contacto de Emergencia</h3>
          <p>
            <strong>Nombre:</strong> {patient.contactoEmergencia || "N/A"}<br />
            <strong>Teléfono:</strong> {patient.telefonoEmergencia || "N/A"}
          </p>

          <button className="btn-secondary" onClick={() => navigate("/patients")}>
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
}
