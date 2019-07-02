//==============================================================
// Imports
//==============================================================
const orm = require("../controller/orm");
const router = require("express").Router();
//==============================================================
// Add New Meal
//==============================================================
router.post("/meal", (req, res) => {
    let meal = req.body;
    meal.cook_time = parseInt(meal.cook_time);
    orm.addMeal(meal, data => {
        res.redirect("/");
    });
});
//==============================================================
// Get Meal by ID
//==============================================================
router.get("/meal/:id", (req, res) => {
    let mealID = req.params.id;
    orm.selectById(mealID, data => {

    });
});
//==============================================================
// Delete Meal
//==============================================================
router.delete("/meal/:id", (req, res) => {
    let mealID = req.params.id;
    orm.deleteMeal(mealID, data => {
        console.log(data);
        res.end();
    });
});
module.exports = router;
