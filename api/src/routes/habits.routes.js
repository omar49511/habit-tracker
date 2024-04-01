import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/habits", async (req, res) => {
  const habits = await prisma.habit.findMany();
  res.json(habits);
});

router.post("/habits", async (req, res) => {
  const habit = await prisma.habit.create({
    data: {
      name: req.body.name,
      description: req.body.description,
    },
  });
  res.json(habit);
});

export default router;
