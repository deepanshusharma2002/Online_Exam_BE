-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('monthly', 'quarterly', 'half_yearly', 'yearly');

-- CreateEnum
CREATE TYPE "DurationUnit" AS ENUM ('days', 'months', 'years');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "naukari" (
    "naukari_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "slug" TEXT NOT NULL,

    CONSTRAINT "naukari_pkey" PRIMARY KEY ("naukari_id")
);

-- CreateTable
CREATE TABLE "important_ques_ans" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "naukari_id" INTEGER NOT NULL,

    CONSTRAINT "important_ques_ans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_master" (
    "section_id" SERIAL NOT NULL,
    "display_name" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "seo_description" TEXT,
    "seo_keywords" TEXT,
    "seo_published_date" TIMESTAMP(3),
    "seo_title" TEXT,

    CONSTRAINT "section_master_pkey" PRIMARY KEY ("section_id")
);

-- CreateTable
CREATE TABLE "government_links" (
    "government_links_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "posts" INTEGER NOT NULL,
    "last_date" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "url" TEXT NOT NULL,

    CONSTRAINT "government_links_pkey" PRIMARY KEY ("government_links_id")
);

-- CreateTable
CREATE TABLE "home_text" (
    "home_text_id" SERIAL NOT NULL,
    "heading1" TEXT NOT NULL,
    "heading2" TEXT NOT NULL,
    "seo_title" TEXT NOT NULL,
    "seo_keywords" TEXT NOT NULL,
    "seo_published_date" TIMESTAMP(3) NOT NULL,
    "seo_description" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "home_text_pkey" PRIMARY KEY ("home_text_id")
);

-- CreateTable
CREATE TABLE "contact_us" (
    "contact_us_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contact_us_pkey" PRIMARY KEY ("contact_us_id")
);

-- CreateTable
CREATE TABLE "Student" (
    "student_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "class" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "status" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "StudentOTP" (
    "otp_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "otp_code" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudentOTP_pkey" PRIMARY KEY ("otp_id")
);

-- CreateTable
CREATE TABLE "student_ques_ans" (
    "student_ques_ans_id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "ans_option" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "exam_schedule_id" INTEGER NOT NULL,

    CONSTRAINT "student_ques_ans_pkey" PRIMARY KEY ("student_ques_ans_id")
);

-- CreateTable
CREATE TABLE "student_exam" (
    "exam_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "total_q" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "fatal" INTEGER,
    "exam_schedule_id" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "score" INTEGER,

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

-- CreateTable
CREATE TABLE "exam_schedule" (
    "exam_schedule_id" SERIAL NOT NULL,
    "exam_name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "end_time" TEXT NOT NULL,
    "total_q" INTEGER,
    "exam_time_min" INTEGER NOT NULL,
    "class" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "exam_schedule_pkey" PRIMARY KEY ("exam_schedule_id")
);

-- CreateTable
CREATE TABLE "plans" (
    "plan_id" SERIAL NOT NULL,
    "plan_code" VARCHAR(50) NOT NULL,
    "plan_name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "plan_type" "PlanType" NOT NULL,
    "is_duration_value_available" BOOLEAN NOT NULL DEFAULT false,
    "duration_value" INTEGER,
    "duration_unit" "DurationUnit",
    "price" DECIMAL(10,2) NOT NULL,
    "discount_price" DECIMAL(10,2),
    "tax_percentage" DECIMAL(5,2),
    "features" JSONB,
    "is_trial_available" BOOLEAN NOT NULL DEFAULT false,
    "trial_days" INTEGER,
    "status" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" BIGINT,
    "updated_by" BIGINT,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("plan_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "important_ques_ans" ADD CONSTRAINT "important_ques_ans_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentOTP" ADD CONSTRAINT "StudentOTP_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_ques_ans" ADD CONSTRAINT "student_ques_ans_exam_schedule_id_fkey" FOREIGN KEY ("exam_schedule_id") REFERENCES "exam_schedule"("exam_schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_exam" ADD CONSTRAINT "student_exam_exam_schedule_id_fkey" FOREIGN KEY ("exam_schedule_id") REFERENCES "exam_schedule"("exam_schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_exam" ADD CONSTRAINT "student_exam_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_exam_answers" ADD CONSTRAINT "student_exam_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "student_ques_ans"("student_ques_ans_id") ON DELETE RESTRICT ON UPDATE CASCADE;
