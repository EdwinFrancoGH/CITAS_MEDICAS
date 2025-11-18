import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Calendar from "./pages/Calendar";
import ProtectedRoute from "./components/ProtectedRoute";
import PatientDetail from "./pages/PatientDetail";
import Doctors from "./pages/Doctors";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/patients"element={<ProtectedRoute><Patients /></ProtectedRoute>}/>
        <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
        <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/doctors" element={<ProtectedRoute> <Doctors />
    </ProtectedRoute>
  }
/>

        <Route path="/patients/:id"element={<ProtectedRoute><PatientDetail /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
