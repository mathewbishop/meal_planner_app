//==============================================================
// DEPENDENCIES & INITIALIZATION
//==============================================================
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");
const pageRoutes = require("./routes/pageRoutes");
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
app.use(express.static(path.join(__dirname, "public")));
//==============================================================
// ROUTES
//==============================================================
app.use(pageRoutes);
app.use(apiRoutes);
//==============================================================
// LISTENER
//==============================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
