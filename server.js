//==============================================================
// Imports
//==============================================================
<<<<<<< HEAD
require("dotenv").config()
=======
require("dotenv").config();
>>>>>>> f43aa8106d954c12188dbcfae446a229256f38ca
const express = require("express");
const apiRoutes = require("./controller/apiRoutes");
const PORT = process.env.PORT || 3000;
const app = express();
//==============================================================
// Middleware
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("view"));
app.use(apiRoutes);
//==============================================================
// Listener
//==============================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});