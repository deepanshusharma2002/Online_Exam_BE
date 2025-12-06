-- CreateTable
CREATE TABLE "contact_us" (
    "contact_us_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contact_us_pkey" PRIMARY KEY ("contact_us_id")
);
