import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
