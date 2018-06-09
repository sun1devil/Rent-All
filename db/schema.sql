DROP DATABASE rent_all_db;
CREATE DATABASE rent_all_db;
USE rent_all_db;

CREATE TABLE accounts
(
	id int NOT NULL AUTO_INCREMENT,
	firstname varchar(30) NOT NULL,
	lastname varchar(30) NOT NULL,
	street varchar(30) NOT NULL,
	city varchar(30) NOT NULL,
	state varchar(2) NOT NULL,
	zip int(5) NOT NULL,
	balance decimal(12,2) DEFAULT NULL,
	email varchar(50) NOT NULL,
	phone varchar(10) NOT NULL,
	rating decimal(3,2) DEFAULT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE transactions
(
	id int NOT NULL AUTO_INCREMENT,
	startdate datetime NOT NULL,
	enddate datetime NOT NULL,
	total decimal(8,2) DEFAULT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE items 
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(60) NOT NULL, 
	description varchar(255) NOT NULL,
	price decimal(8,2) DEFAULT NULL,
	startdate datetime NOT NULL,
	enddate datetime NOT NULL,
	pictuelink varchar(255) NOT NULL,
	PRIMARY KEY(id)
);