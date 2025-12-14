-- AddForeignKey
ALTER TABLE "student_exam" ADD CONSTRAINT "student_exam_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;
