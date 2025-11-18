import React from "react";

export default function AppointmentList({ appointments }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Paciente</th>
          <th>Inicio</th>
          <th>Fin</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((a, i) => (
          <tr key={i}>
            <td>{a.doctor}</td>
            <td>{a.patient}</td>
            <td>{a.start}</td>
            <td>{a.end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
