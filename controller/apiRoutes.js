//==============================================================
// Imports
//==============================================================
const orm = require("../config/orm");
const router = require("express").Router();
//==============================================================
// Meal Plan
//==============================================================
router.get("/meals/:qty", (req, res) => {
    let mealQty = parseInt(req.params.qty);
        orm.mealPlan(mealQty, data => {
            res.json(data);
        })
});
//==============================================================
// All Meals
//==============================================================
router.get("/meals", (req, res) => {
    orm.selectAllMeals(data => {
        res.json(data);
    })
});

module.exports = router;