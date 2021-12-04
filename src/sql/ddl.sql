-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema media_content_analyzing_systemё
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `media_content_analyzing_systemё` ;

-- -----------------------------------------------------
-- Schema media_content_analyzing_systemё
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `media_content_analyzing_systemё` DEFAULT CHARACTER SET utf8 ;
USE `media_content_analyzing_systemё` ;

-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Service`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Service` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Service` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`, `name`),
  CONSTRAINT `fk_Service_Service1`
    FOREIGN KEY (`id`)
    REFERENCES `media_content_analyzing_systemё`.`Service` (`Service_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`table1` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`category` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`category` (
  `category_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`table2`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`table2` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`table2` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`table3`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`table3` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`table3` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`DataStream`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`DataStream` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`DataStream` (
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NULL,
  `entryPoint` INT NULL,
  PRIMARY KEY (`name`),
  CONSTRAINT `fk_services_DataStream`
    FOREIGN KEY (`name`)
    REFERENCES `media_content_analyzing_systemё`.`Service` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Source` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Source` (
  `id` VARCHAR(20) NOT NULL,
  `uri` VARCHAR(255) NOT NULL,
  `api_key` INT NULL,
  PRIMARY KEY (`id`, `uri`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`BeatType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`BeatType` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`BeatType` (
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Beat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Beat` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Beat` (
  `id` VARCHAR(20) NOT NULL,
  `uri` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `uri`),
  CONSTRAINT `fk_DataStream_Beat`
    FOREIGN KEY (`id`)
    REFERENCES `media_content_analyzing_systemё`.`DataStream` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Source_Beat`
    FOREIGN KEY (`id`)
    REFERENCES `media_content_analyzing_systemё`.`Source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BeatType_Beat`
    FOREIGN KEY (`id`)
    REFERENCES `media_content_analyzing_systemё`.`BeatType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Account` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Account` (
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`login`, `role`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Report`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Report` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Report` (
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `id` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Report_DataStream_idx` (`name` ASC) VISIBLE,
  CONSTRAINT `fk_Report_DataStream`
    FOREIGN KEY (`name`)
    REFERENCES `media_content_analyzing_systemё`.`DataStream` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_content_analyzing_systemё`.`Access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_content_analyzing_systemё`.`Access` ;

CREATE TABLE IF NOT EXISTS `media_content_analyzing_systemё`.`Access` (
  `role` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role`, `name`, `id`),
  INDEX `fk_Beat_Access_idx` (`name` ASC) VISIBLE,
  CONSTRAINT `fk_Beat_Access`
    FOREIGN KEY (`name`)
    REFERENCES `media_content_analyzing_systemё`.`Beat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Account`
    FOREIGN KEY (`role`)
    REFERENCES `media_content_analyzing_systemё`.`Account` (`role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Report`
    FOREIGN KEY (`name`)
    REFERENCES `media_content_analyzing_systemё`.`Report` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_DataStream`
    FOREIGN KEY (`name`)
    REFERENCES `media_content_analyzing_systemё`.`DataStream` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
