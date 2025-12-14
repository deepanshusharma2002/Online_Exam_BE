/*
  Warnings:

  - Added the required column `exam_schedule_id` to the `student_ques_ans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student_ques_ans" ADD COLUMN     "exam_schedule_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "student_ques_ans" ADD CONSTRAINT "student_ques_ans_exam_schedule_id_fkey" FOREIGN KEY ("exam_schedule_id") REFERENCES "exam_schedule"("exam_schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;
