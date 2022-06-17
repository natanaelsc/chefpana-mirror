/*
  Warnings:

  - You are about to drop the column `ingredients` on the `recipes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "recipes" DROP COLUMN "ingredients";

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingrediente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingrediente_id_key" ON "Ingrediente"("id");

-- AddForeignKey
ALTER TABLE "Ingrediente" ADD CONSTRAINT "Ingrediente_id_fkey" FOREIGN KEY ("id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
