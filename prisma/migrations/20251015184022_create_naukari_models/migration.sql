/*
  Warnings:

  - Made the column `seo_title` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seo_keywords` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seo_published_date` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seo_description` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seo_category` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seo_section` on table `naukari` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `naukari` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "naukari" ALTER COLUMN "seo_title" SET NOT NULL,
ALTER COLUMN "seo_keywords" SET NOT NULL,
ALTER COLUMN "seo_published_date" SET NOT NULL,
ALTER COLUMN "seo_description" SET NOT NULL,
ALTER COLUMN "seo_category" SET NOT NULL,
ALTER COLUMN "seo_section" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;

-- CreateTable
CREATE TABLE "important_ques_ans" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "naukari_id" INTEGER NOT NULL,

    CONSTRAINT "important_ques_ans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "useful_link_sections" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "naukari_id" INTEGER NOT NULL,

    CONSTRAINT "useful_link_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "useful_links" (
    "id" SERIAL NOT NULL,
    "display_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "section_id" INTEGER NOT NULL,

    CONSTRAINT "useful_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discover_more_links" (
    "id" SERIAL NOT NULL,
    "display_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "naukari_id" INTEGER NOT NULL,

    CONSTRAINT "discover_more_links_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "important_ques_ans" ADD CONSTRAINT "important_ques_ans_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useful_link_sections" ADD CONSTRAINT "useful_link_sections_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useful_links" ADD CONSTRAINT "useful_links_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "useful_link_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discover_more_links" ADD CONSTRAINT "discover_more_links_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE RESTRICT ON UPDATE CASCADE;
