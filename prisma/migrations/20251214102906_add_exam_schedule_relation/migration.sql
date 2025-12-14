/*
  Warnings:

  - Added the required column `exam_schedule_id` to the `student_exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student_exam" ADD COLUMN     "exam_schedule_id" INTEGER NOT NULL;
