import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div><strong>Clinica del Dr. Edwin</strong></div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/appointments">Citas</Link>
          <Link to="/doctors">Doctores</Link>
          <Link to="/patients">Pacientes</Link> 
          <Link to="/calendar">Calendario</Link>
        </div>
      </nav>
    </header>
  );
}
