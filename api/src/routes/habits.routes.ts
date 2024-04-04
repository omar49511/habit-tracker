import { Router, Request, Response } from "express";
import { PrismaClient, Habit, StreakGoal, DaysOfWeek } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Función para validar los campos obligatorios
function validarCamposObligatorios(body: any): void {
  const camposObligatorios = [
    "name",
    "description",
    "color",
    "streakGoal",
    "completionsPerDay",
    "icon",
  ];
  for (const campo of camposObligatorios) {
    if (!body[campo]) {
      throw new Error(`El campo '${campo}' es obligatorio`);
    }
  }
}
// Función para validar el recordatorio
function validarRecordatorio(reminder: any): {
  daysOfWeek: DaysOfWeek[];
  timeOfDay: Date;
} {
  if (!reminder || !reminder.daysOfWeek || !reminder.timeOfDay) {
    throw new Error("El recordatorio es inválido");
  }
  const daysOfWeek: DaysOfWeek[] = reminder.daysOfWeek.map(
    (day: string) => day.toUpperCase() as DaysOfWeek
  );
  const timeOfDay = new Date(reminder.timeOfDay);
  return { daysOfWeek, timeOfDay };
}

// Función para crear un hábito en la base de datos
async function crearHabito(body: any, reminderData: any): Promise<Habit> {
  const habit = await prisma.habit.create({
    data: {
      name: body.name,
      description: body.description,
      color: body.color,
      streakGoal: body.streakGoal,
      streakFrequency: body.streakFrequency || null,
      completionsPerDay: body.completionsPerDay,
      icon: body.icon,
      reminders: {
        create: reminderData
          ? {
              daysOfWeek: reminderData.daysOfWeek,
              timeOfDay: reminderData.timeOfDay,
            }
          : undefined,
      },
    },
    include: {
      reminders: true,
    },
  });
  return habit;
}

router.get("/habits", async (req: Request, res: Response) => {
  try {
    const habits: Habit[] = await prisma.habit.findMany();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/habits", async (req: Request, res: Response) => {
  try {
    validarCamposObligatorios(req.body);
    const reminderData = validarRecordatorio(req.body.reminder);
    const habit = await crearHabito(req.body, reminderData);
    res.json(habit);
  } catch (error) {
    console.error("Error al crear hábito:", error);
    res.status(500).json("internal server error");
  }
});

// router.post("/habits", async (req: Request, res: Response) => {
//   try {
//     const daysOfWeek: DaysOfWeek[] = req.body.reminder.daysOfWeek.map(
//       (day: string) => day.toUpperCase() as DaysOfWeek
//     );
//     const {
//       name,
//       description,
//       color,
//       streakGoal,
//       streakFrequency,
//       completionsPerDay,
//       icon,
//       reminder,
//     }: {
//       name: string;
//       description: string;
//       streakGoal: StreakGoal;
//       streakFrequency: number;
//       completionsPerDay: number;
//       icon: string;
//       color: string;
//       reminder: {
//         daysOfWeek: string[]; // Supongamos que los días de la semana son enviados como un array de strings
//         timeOfDay: string; // Supongamos que la hora del día es enviada como un string
//       };
//     } = req.body;
//     const habit: Habit = await prisma.habit.create({
//       data: {
//         name,
//         description,
//         color,
//         streakGoal,
//         streakFrequency,
//         completionsPerDay,
//         icon,
//         reminders: {
//           // Crear el registro de recordatorio junto con el hábito
//           create: {
//             daysOfWeek: daysOfWeek,
//             timeOfDay: new Date(reminder.timeOfDay),
//           },
//         },
//       },
//       include: {
//         reminders: true, // Incluir el recordatorio en la respuesta
//       },
//     });
//     res.json(habit);
//   } catch (error) {
//     console.error("Error al crear hábito:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

export default router;
