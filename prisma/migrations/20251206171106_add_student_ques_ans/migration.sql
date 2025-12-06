/*
  Warnings:

  - You are about to drop the column `caste` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "caste",
ADD COLUMN     "class" TEXT;
