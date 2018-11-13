const mysql = require("mysql");

//==============================================================
// Database connection 
//==============================================================
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL) 
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "dev",
        password: "dev237",
        database: "mealplanner_db"
    });
}
     


module.exports = connection;