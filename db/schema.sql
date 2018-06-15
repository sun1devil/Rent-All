DROP DATABASE IF EXISTS rent_all_db;
CREATE DATABASE rent_all_db;
-- USE rent_all_db;

-- CREATE TABLE accounts
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	first_name varchar(30) NOT NULL,
-- 	last_name varchar(30) NOT NULL,
-- 	street varchar(30) NOT NULL,
-- 	city varchar(30) NOT NULL,
-- 	state varchar(2) NOT NULL,
-- 	zip int(5) NOT NULL,
-- 	balance decimal(12,2) DEFAULT NULL,
-- 	email varchar(100) NOT NULL,
-- 	phone int NOT NULL,
-- 	rating decimal(3,2) DEFAULT NULL,
-- 	account_key varchar(8) NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE transactions
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	start_date datetime NOT NULL,
-- 	end_date datetime NOT NULL,
-- 	total decimal(8,2) DEFAULT NULL,
-- 	renter_id int,
-- 	item_id int,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY(renter_id) REFERENCES accounts(id),
-- 	FOREIGN KEY(item_id) REFERENCES items(id)
-- );

-- CREATE TABLE items 
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(60) NOT NULL, 
-- 	description varchar(255) NOT NULL,
-- 	price decimal(8,2) DEFAULT NULL,
-- 	start_date datetime NOT NULL,
-- 	end_date datetime NOT NULL,
-- 	picture_link varchar(255) NOT NULL,
-- 	owner_id int,
-- 	PRIMARY KEY(id),
-- 	FOREIGN KEY(owner_id) REFERENCES accounts(id)
-- );