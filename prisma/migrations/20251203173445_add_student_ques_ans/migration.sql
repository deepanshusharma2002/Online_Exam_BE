-- CreateTable
CREATE TABLE "exam_schedule" (
    "exam_schedule_id" SERIAL NOT NULL,
    "exam_name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "end_time" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "exam_schedule_pkey" PRIMARY KEY ("exam_schedule_id")
);
