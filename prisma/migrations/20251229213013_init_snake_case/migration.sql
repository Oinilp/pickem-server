-- CreateTable
CREATE TABLE `Competition` (
    `id` BIGINT NOT NULL,
    `sport_alias` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `start_date` BIGINT NULL,
    `end_date` BIGINT NULL,
    `prize_pool_usd` INTEGER NULL,
    `location` VARCHAR(191) NULL,
    `organizer` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `tier` VARCHAR(191) NULL,
    `series` VARCHAR(191) NULL,
    `year` VARCHAR(191) NULL,
    `image_url` VARCHAR(191) NULL,
    `updated_at` DATETIME(3) NULL,
    `ingested_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Competition_sport_alias_status_idx`(`sport_alias`, `status`),
    INDEX `Competition_updated_at_idx`(`updated_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
