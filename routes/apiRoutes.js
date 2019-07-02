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
        console.log(data);
        res.end();
    });
});
//==============================================================
// Post New Meal
//==============================================================
router.post("/addmeal", (req, res) => {
    let meal = req.body;
    meal.cook_time = parseInt(meal.cook_time);
    orm.addMeal(meal, data => {
        res.redirect("/");
    });
});
module.exports = router;
