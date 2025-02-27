import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../screens/login/Login";
import Home from "../screens/home/Home";

// Authentication check function
const isAuthenticated = () => !!localStorage.getItem("token");

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route for Login */}
      <Route
        path="/"
        element={isAuthenticated() ? <Navigate to="/home" /> : <Login />}
      />

      {/* Private Route for Home */}
      <Route
        path="/home"
        element={isAuthenticated() ? <Home /> : <Navigate to="/" />}
      />

      {/* Redirect to Login by Default */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
