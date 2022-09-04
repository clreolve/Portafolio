const Sequelize = require('sequelize');
const Producto = require('../models').product; 
async function getAllProducts(req){
    http = 201

    data = {
        id :1,
        nombre: 'reynaldo',
    }

    Producto.findAll().then(p => {
        console.log(p)
        return {data : p, status:http};
    })

    //return {data : products, status:http};
}

module.exports = {
    getAllProducts
}