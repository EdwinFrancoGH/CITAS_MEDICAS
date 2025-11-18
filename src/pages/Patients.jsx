import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "../styles/main.css";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    genero: "",
    antecedentes: "",
    direccion: "",
    telefono: "",
    contactoEmergencia: "",
    telefonoEmergencia: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre) return;
    setPatients([...patients, formData]);
    setFormData({
      nombre: "",
      edad: "",
      genero: "",
      antecedentes: "",
      direccion: "",
      telefono: "",
      contactoEmergencia: "",
      telefonoEmergencia: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Gestión de Pacientes</h1>
        <p>Registra y consulta la información de tus pacientes.</p>

        {/* === Formulario de Paciente === */}
        <div className="patient-form">
          <h3>Agregar Paciente</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-inline">
              <div>
                <label>Edad</label>
                <input
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Género</label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                >
                  <option value="">Seleccione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Antecedentes médicos</label>
              <textarea
                name="antecedentes"
                rows="3"
                value={formData.antecedentes}
                onChange={handleChange}
                placeholder="Ejemplo: diabetes, hipertensión, alergias..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Dirección</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-inline">
              <div>
                <label>Contacto de emergencia</label>
                <input
                  type="text"
                  name="contactoEmergencia"
                  value={formData.contactoEmergencia}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Teléfono de emergencia</label>
                <input
                  type="text"
                  name="telefonoEmergencia"
                  value={formData.telefonoEmergencia}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn-primary" type="submit">
              Guardar Paciente
            </button>
          </form>
        </div>

        {/* === Lista de pacientes === */}
        <div className="patient-list">
          <h3>Pacientes Registrados</h3>
          {patients.length === 0 ? (
            <p>No hay pacientes registrados.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Género</th>
                  <th>Teléfono</th>
                  <th>Emergencia</th>
                </tr>
              </thead>
              <tbody>
                                
                {patients.map((p, i) => (
                    <tr
                    key={i}
                    className="clickable-row"
                    onClick={() =>
                        window.location.assign(
                        `/patients/${i}`,
                        { state: { patient: p } } // esta parte no funciona directamente con assign, así que lo hacemos con navigate abajo
                        )
                    }
                    >
                    <td
                        onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({ patient: p }, "", `/patients/${i}`);
                        window.dispatchEvent(new PopStateEvent("popstate"));
                        }}
                    >
                        {p.nombre}
                    </td>
                    <td>{p.edad}</td>
                    <td>{p.genero}</td>
                    <td>{p.telefono}</td>
                    <td>{p.contactoEmergencia}</td>
                    </tr>
                ))}
</tbody>

            </table>
          )}
        </div>
      </div>
    </div>
  );
}
