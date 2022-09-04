var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

// sequalize import
const Sequelize = require('sequelize');
const Producto = require('../../models').product; 

// '/api/producto/'
router.get('/', function(req, res, next) {
    Producto.findAll()
    .then(p => {
        res.status(201).json(p);
    })
    .catch(error => res.status(400).send(error));
}).post('/', function(req, res, next){
    console.log(req.body);
    res.json('soy un post');
})

router.get('/random/:cantidad', function(req, res, next) {
    Producto.findAll({
        order: Sequelize.literal('rand()'), 
        limit: parseInt(req.params.cantidad),
    })
    .then(p => {
        res.status(201).json(p);
    })
    .catch(error => res.status(400).send(error));
});

router.get('/:idproducto', function(req, res, next) {
    Producto.findOne({
        where: {
            idproduct : parseInt(req.params.idproducto)
        }
    })
    .then(p => {
        res.json(p)
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;