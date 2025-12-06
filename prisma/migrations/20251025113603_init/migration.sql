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
