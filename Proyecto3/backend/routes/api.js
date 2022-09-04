var express = require('express');
var router = express.Router();

var productRouter = require('./db/product')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('documentation', { title: 'Express' });
});

router.use('/producto', productRouter);



module.exports = router;