-- AddForeignKey
ALTER TABLE "student_exam" ADD CONSTRAINT "student_exam_exam_schedule_id_fkey" FOREIGN KEY ("exam_schedule_id") REFERENCES "exam_schedule"("exam_schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;
