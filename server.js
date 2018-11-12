// Packages/Dependencies
//==============================================================
const express = require("express");
const connection = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3000;


//==============================================================
// Fetch Meal Plan
//==============================================================
let mealPlan;
const getPlan = () => {
        connection.query(
        "SELECT meal_name, category, avg_price FROM meals ORDER BY RAND() LIMIT 7", 
        (err, res) => {
            if (err) throw err;
            mealPlan = res;
        }
    )
}

//==============================================================
// Fetch All Meals
//==============================================================
let allMeals;
const fetchAllMeals = () => {
    connection.query(
        `SELECT * FROM meals`,
        (err, res) => {
            if (err) throw err;
            allMeals = res;
        }
    )
}

//==============================================================
// Middleware
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//==============================================================
// Serve the views
//==============================================================
app.use(express.static("view"));

//==============================================================
// Routes
//==============================================================
app.get("/api/meal-plan", (req, res) => {
    getPlan();
    res.json(mealPlan);
});

app.get("/api/all-meals", (req, res) => {
    fetchAllMeals();
    res.json(allMeals);
});


//==============================================================
// Listener
//==============================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});