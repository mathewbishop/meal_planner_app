const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/addmeal", (req, res) => {
    res.render("addmeal");
});

module.exports = router;
