import React, { useState } from "react";

export default function AppointmentForm({ onSubmit }) {
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ doctor, patient, start, end });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Cita</h3>
      <input type="text" placeholder="Doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
      <input type="text" placeholder="Paciente" value={patient} onChange={(e) => setPatient(e.target.value)} />
      <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
      <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
      <button type="submit">Guardar Cita</button>
    </form>
  );
}
