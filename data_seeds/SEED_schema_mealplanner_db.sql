DROP DATABASE IF EXISTS mealplanner_db;

CREATE DATABASE mealplanner_db;

USE mealplanner_db;

CREATE TABLE meals (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    meal_name VARCHAR(45) NOT NULL,
    category VARCHAR(45) NULL,
    sub_category VARCHAR(45) NULL,
    avg_price DECIMAL(10, 2) NULL
);

INSERT INTO meals (meal_name, category)
VALUES ("Chipotle Bowls", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Chicken Fajita Crunchwrap", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Beef and Bean Burritos", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Spaghetti", "Italian");

INSERT INTO meals (meal_name, category)
VALUES ("Pesto Ravioli", "Italian");

INSERT INTO meals (meal_name, category)
VALUES ("Fried Rice", "Asian");

INSERT INTO meals (meal_name, category)
VALUES ("Stir-Fry", "Asian");

INSERT INTO meals (meal_name)
VALUES ("Salad");

INSERT INTO meals (meal_name, category)
VALUES ("Fish and Veggies", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Pasta Fagioli", "Italian");

INSERT INTO meals (meal_name, category)
VALUES ("Chicken Noodle Soup", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Jumbalaya", "Cajun");

INSERT INTO meals (meal_name, category)
VALUES ("Tacos", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Taco Soup", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Chicken Bake", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Ham and Veggies", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Enchiladas", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Burgers and Fries", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Sweet Potato Hash", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Shepherd's Pie", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Pesto Chicken Sandwiches", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Greek Pita Sandwiches", "Mediterranean");

INSERT INTO meals (meal_name, category)
VALUES ("Acorn Squash", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Lasagna", "Italian");

INSERT INTO meals (meal_name, category)
VALUES ("Baked Lemon Salmon", "Seafood");

INSERT INTO meals (meal_name, category)
VALUES ("Lemon Herb Chicken", "Traditional");

INSERT INTO meals (meal_name, category)
VALUES ("Chicken Parmigiana", "Italian");

INSERT INTO meals (meal_name, category)
VALUES ("Turkey Taco Cups", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Nachos", "Mexican");

INSERT INTO meals (meal_name, category)
VALUES ("Sheet Pan Breakfast Bake", "Traditional");