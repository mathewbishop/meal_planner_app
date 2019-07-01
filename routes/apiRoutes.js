//==============================================================
// Imports
//==============================================================
const orm = require("../controller/orm");
const router = require("express").Router();
//==============================================================
// All Meals
//==============================================================
router.get("/meals", (req, res) => {
    orm.selectAll(data => {
        res.json(data);
    });
});
//==============================================================
// Post New Meal
//==============================================================
router.post("/addmeal", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;
