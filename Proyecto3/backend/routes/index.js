var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //rutas
  res.render('documentation', { title: 'Express' });
});

module.exports = router;
