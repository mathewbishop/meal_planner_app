// Packages/Dependencies
//==============================================================
const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const request = require("request");
const PORT = process.env.PORT || 3000;

//==============================================================
// Database connection 
//==============================================================
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "penguin237",
    database: "mealplanner_db"
});

//==============================================================
// Fetch Meal Plan
//==============================================================
let mealPlan;
const getPlan = () => {
        connection.query(
        "SELECT meal_name FROM meals ORDER BY RAND() LIMIT 7", 
        (err, res) => {
            if (err) throw err;
            let data = res;
            JSON.stringify(data); 
            mealPlan = data;
        }
    )
}

//==============================================================
// Fetch All Meals
//==============================================================
const fetchAllMeals = () => {
    connection.query(
        `SELECT * FROM meals`,
        (err, res) => {
            if (err) throw err;
            
        }
    )
}

//==============================================================
// Middleware
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));

//==============================================================
// Routes
//==============================================================
app.get("/weeklymealplan", (req, res) => {
    getPlan();
    res.json(mealPlan);
});



//==============================================================
// Listener
//==============================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});