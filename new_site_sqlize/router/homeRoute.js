const router = require("express").Router();
const { HomeGetCtrls } = require("../controller/homeCtrl");

router.get("/", HomeGetCtrls);

module.exports = router