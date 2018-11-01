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

// let recipeData;
// const callRecipeAPI = () => {
//     let API_KEY = "484238b135b3904515a67e3f7db2eca3";
//     let queryURL = `https://www.food2fork.com/api/search?key=${API_KEY}`
//     request(queryURL, (err, response, body) => {
//         if (err) throw err;
//         if (!err && response.statusCode === 200) {
//             recipeData = JSON.parse(body);
//         }
//     })
// }
// let weeklyPlanData;
// const getWeeklyPlan = () => {
//     console.log("Fetching your weekly meal plan...\n");
//         connection.query(
//         "SELECT meal_name FROM meals ORDER BY RAND() LIMIT 7", 
//         (err, res) => {
//             if (err) throw err;
//             let data = JSON.stringify(res); 
//             weeklyPlanData = data;
//         }
//     )
    
// }

//==============================================================
// Middleware
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==============================================================
// Routes
//==============================================================

app.get("/", (req, res) => {
   res.sendFile() 
});











app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});