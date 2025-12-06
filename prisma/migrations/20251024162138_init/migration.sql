-- CreateTable
CREATE TABLE "home_links" (
    "home_links_id" SERIAL NOT NULL,
    "display_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "home_links_pkey" PRIMARY KEY ("home_links_id")
);
