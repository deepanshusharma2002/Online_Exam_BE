-- CreateTable
CREATE TABLE "student_exam" (
    "exam_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "total_q" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "student_exam_pkey" PRIMARY KEY ("exam_id")
);

-- CreateTable
CREATE TABLE "student_exam_answers" (
    "id" SERIAL NOT NULL,
    "exam_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "selected" TEXT,
    "is_correct" BOOLEAN,

    CONSTRAINT "student_exam_answers_pkey" PRIMARY KEY ("id")
);
