import { useState, useEffect } from "react";

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
      {habits.map((habit, index) => (
        <div key={index}>
          <p>{habit.color}</p>
        </div>
      ))}
    </div>
  );
}

export default HabitsList;
