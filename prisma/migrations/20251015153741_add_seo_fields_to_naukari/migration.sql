/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `naukari` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "naukari" ADD COLUMN     "seo_category" TEXT,
ADD COLUMN     "seo_section" TEXT,
ADD COLUMN     "seo_sub_section" TEXT,
ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "naukari_slug_key" ON "naukari"("slug");
