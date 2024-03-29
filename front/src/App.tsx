// import Tracker from "./components/Tracker";

//TODO:
/*
  👉 implementar la función de compartir en redes sociales
  👉 mejorar el formulario
  👉 que los inputs de los formularios tengan una animación al hacer clic
  👉 colocar validaciones a los inputs con formik
  👉 hacer el input para cantidad de veces por completar en el dia
  👉 crear la base de datos con las categorias de los iconos
  👉 crear un boton para agregar mas iconos con categorias (solo si es necesario)
  👉 seccion para archivar habitos
  👉 tema claro y oscuro
  👉 mostrar mensaje cuando no hay habitos creados
  👉 toast para dar feedback al usuario cuando se agrega un nuevo habitos
  👉 cuando se eliga el intervalo si es diario no muestra nada si es semanal tiene que mostrar cuantas veces tiene que completarlo por semana y si es mensual tiene que mostrar cuantas veces hay que completarlo por mes
  👉 agregar la funcionalidad de elegir los dias de la semana para recordatorios y ademas elegir la hora

*/

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
  // Aquí podrías implementar la lógica para verificar si el usuario está autenticado
  // Por ejemplo, podrías revisar si hay un token de autenticación en el almacenamiento local
  const isAuthenticated = true; // Supongamos que el usuario no está autenticado

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Navigate to="/" />
        )}
      </Routes>
    </>
  );
}
