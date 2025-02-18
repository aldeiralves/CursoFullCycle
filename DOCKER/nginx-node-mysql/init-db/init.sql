CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS `nodedb`.`people`
(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

/*
USE nodedb;

INSERT INTO people (nome) values ('Aldeir');
INSERT INTO people (nome) values ('Joao');
INSERT INTO people (nome) values ('Leticia');
INSERT INTO people (nome) values ('Rafael');
INSERT INTO people (nome) values ('Lucas');
INSERT INTO people (nome) values ('Pedro');
INSERT INTO people (nome) values ('Larissa');
*/