/*
  Warnings:

  - You are about to alter the column `created_by` on the `plans` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `updated_by` on the `plans` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "plans" ALTER COLUMN "created_by" SET DATA TYPE INTEGER,
ALTER COLUMN "updated_by" SET DATA TYPE INTEGER;
