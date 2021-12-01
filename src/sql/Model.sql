-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema omds
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `omds` ;

-- -----------------------------------------------------
-- Schema omds
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `omds` DEFAULT CHARACTER SET utf8 ;
USE `omds` ;

-- -----------------------------------------------------
-- Table `omds`.`Type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`Type` ;

CREATE TABLE IF NOT EXISTS `omds`.`Type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`User` ;

CREATE TABLE IF NOT EXISTS `omds`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`State`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`State` ;

CREATE TABLE IF NOT EXISTS `omds`.`State` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`Category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`Category` ;

CREATE TABLE IF NOT EXISTS `omds`.`Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Category` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Category_Category1_idx` (`Category` ASC) VISIBLE,
  CONSTRAINT `fk_Category_Category1`
    FOREIGN KEY (`Category`)
    REFERENCES `omds`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`MetaDataKey`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`MetaDataKey` ;

CREATE TABLE IF NOT EXISTS `omds`.`MetaDataKey` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NULL,
  `description` VARCHAR(511) NULL,
  `MetaDataKey` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_MetaDataKey_MetaDataKey1_idx` (`MetaDataKey` ASC) VISIBLE,
  CONSTRAINT `fk_MetaDataKey_MetaDataKey1`
    FOREIGN KEY (`MetaDataKey`)
    REFERENCES `omds`.`MetaDataKey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`ActionType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`ActionType` ;

CREATE TABLE IF NOT EXISTS `omds`.`ActionType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`AvailableFor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`AvailableFor` ;

CREATE TABLE IF NOT EXISTS `omds`.`AvailableFor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Type` INT NOT NULL,
  `MetaDataKey` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_AvailableFor_Type_idx` (`Type` ASC) VISIBLE,
  INDEX `fk_AvailableFor_MetaDataKey1_idx` (`MetaDataKey` ASC) VISIBLE,
  CONSTRAINT `fk_AvailableFor_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `omds`.`Type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AvailableFor_MetaDataKey1`
    FOREIGN KEY (`MetaDataKey`)
    REFERENCES `omds`.`MetaDataKey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`Role` ;

CREATE TABLE IF NOT EXISTS `omds`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`AvailableAction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`AvailableAction` ;

CREATE TABLE IF NOT EXISTS `omds`.`AvailableAction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Role` INT NOT NULL,
  `ActionType` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_AvailableAction_Role1_idx` (`Role` ASC) VISIBLE,
  INDEX `fk_AvailableAction_ActionType1_idx` (`ActionType` ASC) VISIBLE,
  CONSTRAINT `fk_AvailableAction_Role1`
    FOREIGN KEY (`Role`)
    REFERENCES `omds`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AvailableAction_ActionType1`
    FOREIGN KEY (`ActionType`)
    REFERENCES `omds`.`ActionType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`DataSet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`DataSet` ;

CREATE TABLE IF NOT EXISTS `omds`.`DataSet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `updatedAt` DATE NULL,
  `createdAt` DATE NULL,
  `Category` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DataSet_Category1_idx` (`Category` ASC) VISIBLE,
  CONSTRAINT `fk_DataSet_Category1`
    FOREIGN KEY (`Category`)
    REFERENCES `omds`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`Grant` ;

CREATE TABLE IF NOT EXISTS `omds`.`Grant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `User` INT NOT NULL,
  `Role` INT NULL,
  `ActionType` INT NULL,
  `DataSet` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Grant_User1_idx` (`User` ASC) VISIBLE,
  INDEX `fk_Grant_Role1_idx` (`Role` ASC) VISIBLE,
  INDEX `fk_Grant_ActionType1_idx` (`ActionType` ASC) VISIBLE,
  INDEX `fk_Grant_DataSet1_idx` (`DataSet` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_User1`
    FOREIGN KEY (`User`)
    REFERENCES `omds`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role`)
    REFERENCES `omds`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_ActionType1`
    FOREIGN KEY (`ActionType`)
    REFERENCES `omds`.`ActionType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_DataSet1`
    FOREIGN KEY (`DataSet`)
    REFERENCES `omds`.`DataSet` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`Action`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`Action` ;

CREATE TABLE IF NOT EXISTS `omds`.`Action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `at` DATE NULL,
  `State` INT NOT NULL,
  `ActionType` INT NOT NULL,
  `Grant` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Action_State1_idx` (`State` ASC) VISIBLE,
  INDEX `fk_Action_ActionType1_idx` (`ActionType` ASC) VISIBLE,
  INDEX `fk_Action_Grant1_idx` (`Grant` ASC) VISIBLE,
  CONSTRAINT `fk_Action_State1`
    FOREIGN KEY (`State`)
    REFERENCES `omds`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_ActionType1`
    FOREIGN KEY (`ActionType`)
    REFERENCES `omds`.`ActionType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_Grant1`
    FOREIGN KEY (`Grant`)
    REFERENCES `omds`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`DataFile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`DataFile` ;

CREATE TABLE IF NOT EXISTS `omds`.`DataFile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `updatedAt` DATE NULL,
  `createdAt` DATE NULL,
  `DataSet` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DataFile_DataSet1_idx` (`DataSet` ASC) VISIBLE,
  CONSTRAINT `fk_DataFile_DataSet1`
    FOREIGN KEY (`DataSet`)
    REFERENCES `omds`.`DataSet` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `omds`.`MetaDataValue`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `omds`.`MetaDataValue` ;

CREATE TABLE IF NOT EXISTS `omds`.`MetaDataValue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(255) NULL,
  `MetaDataKey` INT NOT NULL,
  `DataSet` INT NULL,
  `Category` INT NULL,
  `DataFile` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_MetaDataValue_MetaDataKey1_idx` (`MetaDataKey` ASC) VISIBLE,
  INDEX `fk_MetaDataValue_DataSet1_idx` (`DataSet` ASC) VISIBLE,
  INDEX `fk_MetaDataValue_Category1_idx` (`Category` ASC) VISIBLE,
  INDEX `fk_MetaDataValue_DataFile1_idx` (`DataFile` ASC) VISIBLE,
  CONSTRAINT `fk_MetaDataValue_MetaDataKey1`
    FOREIGN KEY (`MetaDataKey`)
    REFERENCES `omds`.`MetaDataKey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MetaDataValue_DataSet1`
    FOREIGN KEY (`DataSet`)
    REFERENCES `omds`.`DataSet` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MetaDataValue_Category1`
    FOREIGN KEY (`Category`)
    REFERENCES `omds`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MetaDataValue_DataFile1`
    FOREIGN KEY (`DataFile`)
    REFERENCES `omds`.`DataFile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
