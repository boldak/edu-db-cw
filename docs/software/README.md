# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL скрипт

```
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema OpenDataManagementSystem
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `OpenDataManagementSystem` ;

-- -----------------------------------------------------
-- Schema OpenDataManagementSystem
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OpenDataManagementSystem` DEFAULT CHARACTER SET utf8 ;
USE `OpenDataManagementSystem` ;

-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`donate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`donate` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`donate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `card` VARCHAR(45) NULL,
  `owner` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`role` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`user` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `avatar` VARCHAR(100) NULL,
  `donate_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `donate_id`, `role_id`),
  INDEX `fk_User_Donate_idx` (`donate_id` ASC) VISIBLE,
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_ref_Donate`
    FOREIGN KEY (`donate_id`)
    REFERENCES `OpenDataManagementSystem`.`donate` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `OpenDataManagementSystem`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`category` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`dataFile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`dataFile` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`dataFile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(200) NULL,
  `file_csv` VARCHAR(45) NULL,
  `uploadDate` DATETIME NULL,
  `hasGraph` TINYINT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_dataFile_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_dataFile_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `OpenDataManagementSystem`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`fileCollection`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`fileCollection` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`fileCollection` (
  `user_id` INT NOT NULL,
  `dataFile_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `dataFile_id`),
  INDEX `fk_fileCollection_dataFile1_idx` (`dataFile_id` ASC) VISIBLE,
  CONSTRAINT `fk_fileCollection_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `OpenDataManagementSystem`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fileCollection_dataFile1`
    FOREIGN KEY (`dataFile_id`)
    REFERENCES `OpenDataManagementSystem`.`dataFile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`editForm`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`editForm` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`editForm` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `editorUserame` VARCHAR(20) NULL,
  `oldFile_csv` VARCHAR(100) NULL,
  `newFile_csv` VARCHAR(100) NULL,
  `editDate` DATETIME NULL,
  `dataFile_id` INT NOT NULL,
  `dataFile_category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `dataFile_id`, `dataFile_category_id`),
  INDEX `fk_editForm_dataFile1_idx` (`dataFile_id` ASC, `dataFile_category_id` ASC) VISIBLE,
  CONSTRAINT `fk_editForm_dataFile1`
    FOREIGN KEY (`dataFile_id` , `dataFile_category_id`)
    REFERENCES `OpenDataManagementSystem`.`dataFile` (`id` , `category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`permission` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenDataManagementSystem`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenDataManagementSystem`.`access` ;

CREATE TABLE IF NOT EXISTS `OpenDataManagementSystem`.`access` (
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`role_id`, `permission_id`),
  INDEX `fk_access_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `OpenDataManagementSystem`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `OpenDataManagementSystem`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`donate`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`donate` (`id`, `card`, `owner`) VALUES (DEFAULT, '4149 4991 3384 6467', 'Yevhenii');

COMMIT;


-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`role` (`id`, `name`) VALUES (DEFAULT, 'admin');

COMMIT;


-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`user` (`id`, `username`, `email`, `password`, `avatar`, `donate_id`, `role_id`) VALUES (DEFAULT, 'Vasia Pupkin', 'exanple@mail.com', '123', 'image.jpg', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`category`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`category` (`id`, `name`) VALUES (DEFAULT, 'others');

COMMIT;


-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`dataFile`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`dataFile` (`id`, `name`, `description`, `file_csv`, `uploadDate`, `hasGraph`, `category_id`) VALUES (DEFAULT, 'title', 'some description', 'namefile.csv', '2023-01-03 12:00:00.000', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `OpenDataManagementSystem`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `OpenDataManagementSystem`;
INSERT INTO `OpenDataManagementSystem`.`permission` (`id`, `name`) VALUES (DEFAULT, 'create');
INSERT INTO `OpenDataManagementSystem`.`permission` (`id`, `name`) VALUES (DEFAULT, 'read');

COMMIT;


```

- RESTfull сервіс для управління даними

