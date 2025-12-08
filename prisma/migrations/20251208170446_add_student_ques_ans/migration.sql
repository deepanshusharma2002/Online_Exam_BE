/*
  Warnings:

  - You are about to drop the column `isAdmitCard` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `isResult` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `postDate` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_category` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_description` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_keywords` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_published_date` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_section` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_sub_section` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the column `seo_title` on the `naukari` table. All the data in the column will be lost.
  - You are about to drop the `discover_more_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `home_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `useful_link_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `useful_links` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `class` to the `naukari` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `naukari` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."discover_more_links" DROP CONSTRAINT "discover_more_links_naukari_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."useful_link_sections" DROP CONSTRAINT "useful_link_sections_naukari_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."useful_links" DROP CONSTRAINT "useful_links_section_id_fkey";

-- DropIndex
DROP INDEX "public"."naukari_slug_key";

-- AlterTable
ALTER TABLE "naukari" DROP COLUMN "isAdmitCard",
DROP COLUMN "isResult",
DROP COLUMN "postDate",
DROP COLUMN "priority",
DROP COLUMN "seo_category",
DROP COLUMN "seo_description",
DROP COLUMN "seo_keywords",
DROP COLUMN "seo_published_date",
DROP COLUMN "seo_section",
DROP COLUMN "seo_sub_section",
DROP COLUMN "seo_title",
ADD COLUMN     "class" INTEGER NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."discover_more_links";

-- DropTable
DROP TABLE "public"."home_links";

-- DropTable
DROP TABLE "public"."useful_link_sections";

-- DropTable
DROP TABLE "public"."useful_links";
