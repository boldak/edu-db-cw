-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema database
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `database` ;

-- -----------------------------------------------------
-- Schema database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `database` ;

-- -----------------------------------------------------
-- Table `database`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `database`.`projects` ;

CREATE TABLE IF NOT EXISTS `database`.`projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `database`.`users` ;

CREATE TABLE IF NOT EXISTS `database`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `activationKey` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `projectId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `projectId` (`projectId` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`projectId`)
    REFERENCES `database`.`projects` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database`.`artifacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `database`.`artifacts` ;

CREATE TABLE IF NOT EXISTS `database`.`artifacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `database`.`tasks` ;

CREATE TABLE IF NOT EXISTS `database`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `deadline` VARCHAR(255) NOT NULL,
  `projectId` INT NULL DEFAULT NULL,
  `artifactId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `projectId` (`projectId` ASC) VISIBLE,
  INDEX `artifactId` (`artifactId` ASC) VISIBLE,
  CONSTRAINT `tasks_ibfk_1`
    FOREIGN KEY (`projectId`)
    REFERENCES `database`.`projects` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `tasks_ibfk_2`
    FOREIGN KEY (`artifactId`)
    REFERENCES `database`.`artifacts` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database`.`actions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `database`.`actions` ;

CREATE TABLE IF NOT EXISTS `database`.`actions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `planedat` DATETIME NOT NULL,
  `actedat` DATETIME NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `request` VARCHAR(255) NOT NULL,
  `userId` INT NULL DEFAULT NULL,
  `taskId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `taskId` (`taskId` ASC) VISIBLE,
  CONSTRAINT `actions_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `database`.`users` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `actions_ibfk_2`
    FOREIGN KEY (`taskId`)
    REFERENCES `database`.`tasks` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `database`.`projects`
-- -----------------------------------------------------
START TRANSACTION;
USE `database`;
INSERT INTO `database`.`projects` (`id`, `name`, `description`) VALUES (DEFAULT, 'Розроблення бази даннних', 'Розробити базу данних для закладів освіти');

COMMIT;


-- -----------------------------------------------------
-- Data for table `database`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `database`;
INSERT INTO `database`.`users` (`id`, `name`, `email`, `role`, `password`, `status`, `activationKey`, `createdAt`, `updatedAt`, `projectId`) VALUES (DEFAULT, 'Иван', 'kovalevvana', 'teamlid', '1234', 'offline', '1234', '15.12', '16.12', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `database`.`artifacts`
-- -----------------------------------------------------
START TRANSACTION;
USE `database`;
INSERT INTO `database`.`artifacts` (`id`, `name`, `description`, `link`) VALUES (1, 'скрипт', 'улчшение работы', 'cript1*');

COMMIT;


-- -----------------------------------------------------
-- Data for table `database`.`tasks`
-- -----------------------------------------------------
START TRANSACTION;
USE `database`;
INSERT INTO `database`.`tasks` (`id`, `name`, `deadline`, `projectId`, `artifactId`) VALUES (1, 'Покращення працездатності', '20.12', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `database`.`actions`
-- -----------------------------------------------------
START TRANSACTION;
USE `database`;
INSERT INTO `database`.`actions` (`id`, `name`, `description`, `planedat`, `actedat`, `status`, `request`, `userId`, `taskId`) VALUES (1, 'розробка завдання', 'покращити працездатність', '20.12', '19.12', 'notdone', 'not', 1, 1);

COMMIT;

