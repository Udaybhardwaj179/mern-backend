/*
  Warnings:

  - A unique constraint covering the columns `[rollNo]` on the table `Register` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Register_rollNo_key" ON "public"."Register"("rollNo");
