DROP DATABASE IF EXISTS mealplanner_db;

CREATE DATABASE mealplanner_db;

USE mealplanner_db;

CREATE TABLE meals (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    meal_name VARCHAR(45) NOT NULL,
    category VARCHAR(45) NULL,
    sub_category VARCHAR(45) NULL,
    avg_price DECIMAL(6, 2) NULL
);

/* Note: For JAWSDB setup, must include:

id INT AUTO_INCREMENT NOT NULL,
createdAt TIMESTAMP NOT NULL,     (must be current_timestamp default)
PRIMARY KEY (id) */

