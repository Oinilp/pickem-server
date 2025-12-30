/*
  Warnings:

  - A unique constraint covering the columns `[external_id]` on the table `Competition` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `external_id` to the `Competition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `competition` ADD COLUMN `external_id` BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Competition_external_id_key` ON `Competition`(`external_id`);
