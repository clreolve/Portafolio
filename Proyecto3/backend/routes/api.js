var express = require('express');
var router = express.Router();

var productRouter = require('./db/product');
var userRouter = require('./db/user');
var categoryRouter = require('./db/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('documentation', { title: 'Express' });
});

router.use('/producto', productRouter);
router.use('/usuario', userRouter);
router.use('/categoria', categoryRouter);

module.exports = router;