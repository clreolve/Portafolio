var express = require("express");
var router = express.Router();
// sequalize import
const Sequelize = require("sequelize");
const Category = require("../../models").category;
const Product = require("../../models").product;

const auth = require("../../middleware/auth");
const { decoded_jwt } = require("../../modulos/utitlitys");

const { db, write_detail, read, read_detail } = require("./firedb");

router.get("/", async function (req, res, next) {
  try {
    const categorias = await Category.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:idcategory", async function (req, res, next) {
  try {
    const idcategory = req.params.idcategory
    
    const c = await Category.findOne({
      where: {
        idcategory: idcategory,
      },
    });
    console.log(c)
    const p = await Product.findAll({
      where: {
        category: idcategory,
      },
    });
    console.log(idcategory)
    res.json({
        'category': c,
        'data': p
    });
  } catch (error) {
    console.error(error)
    res.status(400).send(error);
  }
});

module.exports = router;
