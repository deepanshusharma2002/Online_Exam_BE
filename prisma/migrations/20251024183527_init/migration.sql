-- AlterTable
ALTER TABLE "section_master" ADD COLUMN     "seo_description" TEXT,
ADD COLUMN     "seo_keywords" TEXT,
ADD COLUMN     "seo_published_date" TIMESTAMP(3),
ADD COLUMN     "seo_title" TEXT;
