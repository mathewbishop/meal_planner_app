//==============================================================
// DEPENDENCIES & INITIALIZATION
//==============================================================
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./controller/apiRoutes");
//==============================================================
// VIEW ENGINE
//==============================================================
app.set("view engine", "pug");
app.set("views", "./views");
//==============================================================
// MIDDLEWARE
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//==============================================================
// ROUTES
//==============================================================
app.use(apiRoutes);
//==============================================================
// LISTENER
//==============================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
