var express = require("express");
const mvController = require("../Controller/movieController");

var router = express.Router();

router.post("/create", mvController.create);
router.get("/find", mvController.find);
router.put("/update/:id", mvController.update);
router.delete("/delete/:id", mvController.delete);

module.exports = router;
