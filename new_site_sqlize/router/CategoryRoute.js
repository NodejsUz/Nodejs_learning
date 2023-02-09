const { CategoryGetAllCtrl, CategoryGetOneCtrl } = require("../controller/CategoryCtrl");

const router = require("express").Router();

router.get("/", CategoryGetAllCtrl)
router.get("/:caregory_id", CategoryGetOneCtrl);

module.exports = router