var express = require('express');
var router = express.Router();
// sequalize import
const Sequelize = require('sequelize');
const Producto = require('../../models').product; 

const auth = require("../../middleware/auth");
const {decoded_jwt} = require('../../modulos/utitlitys')

// '/api/producto/'
router.get('/', function(req, res, next) {
    Producto.findAll()
    .then(p => {
        res.status(201).json(p);
    })
    .catch(error => res.status(400).send(error));
})

/**
 * Crear Producto
 * /api/producto/crear
 * pasar un header para autenticar
 * {iduser,name,infouri,category,price}
 */

// productos al azar
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


router.post('/crear', auth, async function(req, res, next){
    const token = req.headers["token"] || req.query.token || req.body.token;
    try{
        info = await decoded_jwt(token);
        data = req.body;

        res.json(info)

        /* const producto = await new Producto(data);
        save_data = await producto.save();

        res.json(save_data); */
    }catch(err){
        console.error(err)
        res.status(400).send({'message':err});
    }


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