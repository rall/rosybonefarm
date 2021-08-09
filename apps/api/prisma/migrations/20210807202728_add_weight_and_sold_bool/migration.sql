/*
  Warnings:

  - Added the required column `sold` to the `EggsDozen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `EggsDozen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EggsDozen" ADD COLUMN     "sold" BOOLEAN NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;
