/*
  Warnings:

  - Added the required column `url` to the `government_links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "government_links" ADD COLUMN     "url" TEXT NOT NULL;
