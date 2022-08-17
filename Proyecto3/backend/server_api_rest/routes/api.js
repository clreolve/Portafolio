var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "API" });
});

let usuario = {
  nombre: "",
  apellido: "",
};

router.get("/usuario", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.json(usuario);
});

module.exports = router;
