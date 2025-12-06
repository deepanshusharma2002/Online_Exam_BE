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

    CONSTRAINT "section_master_pkey" PRIMARY KEY ("section_id")
);
