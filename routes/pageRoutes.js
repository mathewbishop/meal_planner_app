const router = require("express").Router();
const orm = require("../controller/orm");

router.get("/", (req, res) => {
    orm.selectAllMeals(data => {
        res.render("index", {
            meals: data
        });
    });
});

router.get("/addmeal", (req, res) => {
    res.render("addmeal");
});

module.exports = router;
