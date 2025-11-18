import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AppointmentList from "../components/AppointmentList";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Citas Médicas</h1>
        <AppointmentForm onSubmit={handleAddAppointment} />
        <AppointmentList appointments={appointments} />
      </div>
    </div>
  );
}
