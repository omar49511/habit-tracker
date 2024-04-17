import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import CreateHabit from "./CreateHabit";
// import HabitsList from "../components/HabitsList";
import HeatMap from "../components/HeatMap";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/");
    }
  }, [navigate]);
  return (
    // haz un fetch de esta 'http://localhost:3000/api/habits'

    // y renderiza los hábitos

    // aquí puedes agregar o quitar cosas
    // no olvides agregar el botón de logout
    // y agregar el botón de agregar hábitos

    <div>
      <button
        className="bg-white py-2 px-4 rounded"
        onClick={() => supabase.auth.signOut()}
      >
        signOut
      </button>
      <CreateHabit></CreateHabit>
      <HeatMap />
    </div>
  );
}
