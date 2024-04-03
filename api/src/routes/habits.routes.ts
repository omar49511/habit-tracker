import { Router, Request, Response } from "express";
import { PrismaClient, Habit } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

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
    const {
      name,
      description,
      color,
    }: { name: string; description: string; color: string } = req.body;
    const habit: Habit = await prisma.habit.create({
      data: {
        name,
        description,
        color,
      },
    });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
