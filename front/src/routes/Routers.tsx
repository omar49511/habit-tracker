import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Routers() {
  const isAuthenticated = false;
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {isAuthenticated ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Navigate to="/" />
      )}
    </Routes>
  );
}
