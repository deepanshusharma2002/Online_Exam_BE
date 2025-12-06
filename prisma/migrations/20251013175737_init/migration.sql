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
    "isResult" BOOLEAN NOT NULL DEFAULT false,
    "isAdmitCard" BOOLEAN NOT NULL DEFAULT false,
    "postDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "seo_title" TEXT,
    "seo_keywords" TEXT,
    "seo_published_date" TIMESTAMP(3),
    "seo_description" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "naukari_pkey" PRIMARY KEY ("naukari_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
