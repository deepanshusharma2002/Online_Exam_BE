/*
  Warnings:

  - You are about to drop the column `fatal` on the `student_exam_answers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_exam" ADD COLUMN     "fatal" INTEGER;

-- AlterTable
ALTER TABLE "student_exam_answers" DROP COLUMN "fatal";
