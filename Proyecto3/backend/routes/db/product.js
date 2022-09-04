var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

// sequalize import
const Sequelize = require('sequelize');
const Producto = require('../../models').product; 

router.get('/', function(req, res, next) {
    Producto.findAll()
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