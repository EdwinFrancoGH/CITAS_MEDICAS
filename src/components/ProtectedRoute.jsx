import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = true; // temporal, cambiar cuando conectes al backend
  return loggedIn ? children : <Navigate to="/" />;
}
