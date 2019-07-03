//==============================================================
// Imports
//==============================================================
const orm = require("../controller/orm");
const { prepareMealDataPOST } = require("../controller/methods");
const router = require("express").Router();
//==============================================================
// Add New Meal
//==============================================================
router.post("/meal", (req, res) => {
    let obj = req.body;
    let meal = prepareMealDataPOST(obj);
    if (meal === false) {
        res.render("error");
    }
    else {
        orm.addMeal(meal, data => {
            res.redirect("/");
        });
    }
    console.log(meal)
});
//==============================================================
// Get Meal by ID
//==============================================================
router.get("/meal/:id", (req, res) => {
    let mealID = req.params.id;
    orm.selectById(mealID, data => {
        res.render("recipe", {
            meal: data
        });
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
