var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  return res.render('documentation', {title: "Documentación"})
});

module.exports = router;
