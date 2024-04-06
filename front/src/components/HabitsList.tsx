import { useState, useEffect } from "react";
import HeatMap from "./HeatMap";

interface Habit {
  id: number;
  name: string;
  description: string;
  color: string;
  // Agrega otros campos de hábito según sea necesario
}

function HabitsList() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await fetch("http://localhost:3000/api/habits");
        if (!response.ok) {
          throw new Error("Ocurrió un error al obtener los hábitos");
        }
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHabits();
  }, []);

  return (
    <div>
      <h2>Lista de Hábitos</h2>
      <ul>
        {habits.map((habit, index) => (
          <div key={index}>
            <HeatMap color={habit.color} />
            <p>{habit.color}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HabitsList;
