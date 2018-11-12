const mysql = require("mysql");

//==============================================================
// Database connection 
//==============================================================
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "dev",
    password: "dev237",
    database: "mealplanner_db"
});


module.exports = connection;