var express = require('express');
var router = express.Router();

var productRouter = require('./db/product');
var userRouter = require('./db/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('documentation', { title: 'Express' });
});

router.use('/producto', productRouter);
router.use('/usuario', userRouter);

module.exports = router;