//==============================================================
// Packages/Dependencies
//==============================================================
const express = require("express");
const connection = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3000;
//==============================================================
// Fetch Meal Plan
//==============================================================
// Thank you mithunsatheesh on Stack Overflow. Scope chain probs
//==============================================================
const getPlan = (sliderVal, callback) => {
        connection.query(
        `SELECT meal_name, category, sub_category, avg_price FROM meals ORDER BY RAND() LIMIT ${sliderVal}`,
        (err, res) => {
            if (err)
                callback(err, null);
            else
                callback(null, res);
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
app.use(express.static("view"));
//==============================================================
// Routes
//==============================================================
app.post("/api/meal-plan", (req, res) => {
    let data = req.body.sliderValue;
        getPlan(data, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
            }
        });
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