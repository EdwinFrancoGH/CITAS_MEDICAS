import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#eee", padding: "1rem" }}>
      <h3>Menú</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/appointments">Citas</Link></li>
        <li><Link to="/calendar">Calendario</Link></li>
      </ul>
    </aside>
  );
}
