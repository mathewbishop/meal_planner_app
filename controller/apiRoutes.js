//==============================================================
// Imports
//==============================================================
const orm = require("../model/orm");
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
    orm.selectAll(data => {
        res.json(data);
    })
});
//==============================================================
// Post New Meal
//==============================================================
router.post("/meals", (req, res) => {
    orm.insertOne()
})


module.exports = router;