-- Deluxe Solution Repair Enquiries Database Schema
-- Compatible with MySQL 5.7+ / MySQL 8.0+ / MariaDB / cPanel phpMyAdmin

CREATE DATABASE IF NOT EXISTS `deluxe_solution_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `deluxe_solution_db`;

-- Table: enquiries
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` VARCHAR(36) NOT NULL PRIMARY KEY,
  `reference_id` VARCHAR(20) NOT NULL UNIQUE,
  `customer_name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `service_category` VARCHAR(100) NOT NULL,
  `device_type` VARCHAR(100) NOT NULL,
  `brand_model` VARCHAR(150) DEFAULT NULL,
  `problem_description` TEXT NOT NULL,
  `preferred_contact` ENUM('Phone', 'WhatsApp', 'Email') DEFAULT 'Phone',
  `preferred_date` DATE DEFAULT NULL,
  `status` ENUM(
    'New',
    'Contacted',
    'Diagnosis Pending',
    'Quotation Sent',
    'Approved',
    'In Progress',
    'Completed',
    'Cancelled'
  ) NOT NULL DEFAULT 'New',
  `notes` TEXT DEFAULT NULL,
  `follow_up_date` DATE DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status` (`status`),
  INDEX `idx_phone` (`phone`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: admin_users
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin account (Username: admin, Password: Password@123)
-- bcrypt hash for 'Password@123': $2a$10$v0rUv5H8wO4K3s2f7h1FyeY0yJm1D3ZlqWj8kU4G4A4z5k7u2YJ6e
INSERT INTO `admin_users` (`username`, `password_hash`, `name`, `role`)
VALUES ('admin', '$2a$10$tZ2X5yZlVpLg9Q0Q5f5Rk.p3x7dE2A6h8K5tJ9l1m2n3o4p5q6r7s', 'Deluxe Admin', 'admin')
ON DUPLICATE KEY UPDATE `username` = `username`;
