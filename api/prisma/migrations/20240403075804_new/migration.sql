/*
  Warnings:

  - Added the required column `completionsPerDay` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streakGoal` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StreakGoal" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "DaysOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "completionsPerDay" INTEGER NOT NULL,
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "streakFrequency" INTEGER,
ADD COLUMN     "streakGoal" "StreakGoal" NOT NULL;

-- CreateTable
CREATE TABLE "Reminder" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "daysOfWeek" "DaysOfWeek"[],
    "timeOfDay" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reminder_habitId_key" ON "Reminder"("habitId");

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
