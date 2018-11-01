// Packages/Dependencies
//==============================================================
const express = require("express");
const mysql = require("mysql");
const app = express();
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

const makeConnection = () => {
    connection.connect(err => {
        if (err) throw err;
        console.log("\nConnected @ " + connection.threadId);
    });
}


//==============================================================
// Middleware
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==============================================================
// Routes
//==============================================================













app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});