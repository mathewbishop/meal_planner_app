//==============================================================
// Imports
//==============================================================
const orm = require("../config/orm");
const router = require("express").Router();

//==============================================================
// Meal Plan
//==============================================================
router.post("/api/meal-plan", (req, res) => {
    let mealQty = req.body.sliderValue;
        orm.mealPlan(mealQty, data => {
            res.json(data);
        })
});

//==============================================================
// All Meals
//==============================================================
router.get("/api/all-meals", (req, res) => {
    orm.selectAllMeals(data => {
        res.json(data);
    })
});

module.exports = router;