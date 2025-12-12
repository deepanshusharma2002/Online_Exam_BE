/*
  Warnings:

  - Added the required column `class` to the `exam_schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `exam_schedule` table without a default value. This is not possible if the table is not empty.
  - Made the column `exam_time_min` on table `exam_schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exam_schedule" ADD COLUMN     "class" INTEGER NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL,
ALTER COLUMN "exam_time_min" SET NOT NULL;
