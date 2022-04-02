var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
   res.send([
      { id: 1, name: "Eelaa", rating: 1.2, genres: "About mother in law" },
      { id: 1, name: "Love is Blind", rating: 1.1, genres: "Romantic" },
   ]);
});
router.post("/", (req, res, next) => {
   let body = req.body;
   console.log(body);
   res.send({});
});

module.exports = router;
