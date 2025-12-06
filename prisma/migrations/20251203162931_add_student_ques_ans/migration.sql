-- AlterTable
ALTER TABLE "student_exam_answers" ADD COLUMN     "fatal" INTEGER;

-- AddForeignKey
ALTER TABLE "student_exam_answers" ADD CONSTRAINT "student_exam_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "student_ques_ans"("student_ques_ans_id") ON DELETE RESTRICT ON UPDATE CASCADE;
