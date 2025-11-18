import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/main.css";

export default function Doctors() {
  // Datos simulados
  const initialDoctors = [
    { id: 1, nombre: "Dr. Edwin Pérez", email: "edwin@example.com", dui: "12345678-9", acreditacion: "ACD-001", especialidad: "Cardiología", horarios: ["09:00-12:00", "14:00-17:00"] },
    { id: 2, nombre: "Dra. Ana Gómez", email: "ana@example.com", dui: "98765432-1", acreditacion: "ACD-002", especialidad: "Pediatría", horarios: ["08:00-12:00", "13:00-16:00"] },
    { id: 3, nombre: "Dr. Carlos López", email: "carlos@example.com", dui: "11223344-5", acreditacion: "ACD-003", especialidad: "Dermatología", horarios: ["10:00-13:00", "15:00-18:00"] },
  ];

  const [doctors, setDoctors] = useState(initialDoctors);
  const [search, setSearch] = useState("");
  const [modalDoctor, setModalDoctor] = useState(null);

  // Filtrado
  const filteredDoctors = doctors.filter(
    d =>
      d.nombre.toLowerCase().includes(search.toLowerCase()) ||
      d.especialidad.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Gestión de Doctores</h1>
        <p>Lista y configuración de los doctores del sistema.</p>

        {/* Filtro de búsqueda */}
        <input
          type="text"
          placeholder="Buscar por nombre o especialidad..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />

        {/* Tabla de doctores */}
        <div className="doctor-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>DUI</th>
                <th>N° Acreditación</th>
                <th>Especialidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map(d => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.nombre}</td>
                  <td>{d.email}</td>
                  <td>{d.dui}</td>
                  <td>{d.acreditacion}</td>
                  <td>{d.especialidad}</td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => setModalDoctor(d)}
                    >
                      Gestionar Horarios
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal para gestionar horarios */}
        {modalDoctor && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Horarios de {modalDoctor.nombre}</h2>
              <ul>
                {modalDoctor.horarios.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <button
                className="btn-secondary"
                onClick={() => setModalDoctor(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
