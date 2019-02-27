//==============================================================
// Imports
//==============================================================
const mysql = require("mysql");
//==============================================================
// Database connection 
//==============================================================
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL) 
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
<<<<<<< HEAD
        port: process.env.DB_PORT,
=======
        port: 3306,
>>>>>>> f43aa8106d954c12188dbcfae446a229256f38ca
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
}
     


module.exports = connection;