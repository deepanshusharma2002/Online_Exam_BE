-- CreateTable
CREATE TABLE "plan_interested" (
    "plan_interested_id" SERIAL NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plan_interested_pkey" PRIMARY KEY ("plan_interested_id")
);
