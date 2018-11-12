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

