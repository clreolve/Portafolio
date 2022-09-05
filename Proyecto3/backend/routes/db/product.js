var express = require("express");
var router = express.Router();
// sequalize import
const Sequelize = require("sequelize");
const Producto = require("../../models").product;

const auth = require("../../middleware/auth");
const { decoded_jwt } = require("../../modulos/utitlitys");

const { db, write_detail, read, read_detail } = require("./firedb");

// /api/producto/productos
router.get("/productos", function (req, res, next) {
  Producto.findAll()
    .then((p) => {
      res.status(201).json(p);
    })
    .catch((error) => res.status(400).send(error));
});

// CRUD de Productos ------------------------------------------------------
// /api/producto/

/**
 * obtener producto por id
 */
router.get("/:idproducto", async function (req, res, next) {
  try {
    p = await Producto.findOne({
      where: {
        idproduct: parseInt(req.params.idproducto),
      }
    });

    detail = await read_detail(p.idproduct)
    res.json({'data':p, 'detail':detail})
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * Crear Producto
 * /api/producto/crear
 * pasar un header para autenticar
 * {iduser,name,infouri,category,price}
 */
router.post("/", auth, async function (req, res, next) {
  const token = req.headers["token"] || req.query.token || req.body.token;
  try {
    info = await decoded_jwt(token);
    data = req.body;
    data.iduser = info.iduser;
    data.infouri = data.iduser;

    const producto = await new Producto(data);
    save_data = await producto.save();

    // detalles en la base de datos
    detail = req.body.detail;
    detail = await write_detail(save_data.idproduct, detail);

    res.json({
      data: save_data,
      detail: detail,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: err });
  }
});

// actualizar producto
router.put("/:idproduct", auth, async function (req, res, next) {
  try {
    const token = req.headers["token"] || req.query.token || req.body.token;
    info = await decoded_jwt(token);

    let update_info = await Producto.update(req.body, {
      where:{
        idproduct : parseInt(req.params.idproduct),
        iduser: info.iduser,
      }
    });
    
    if(update_info){
      res.json({message:'informacion actualizada'});
    }else{
      res.status(400).send({ 'message': 'no pudimos actualizar la información' });
    }
  } catch (err) {
    res.status(400).send({ 'message': 'no pudimos actualizar la información' });
  }
});

router.delete("/:idproduct", auth, async function (req, res, next) {
  try {
    const token = req.headers["token"] || req.query.token || req.body.token;
    info = await decoded_jwt(token);

    Producto.destroy({
      where:{
        idproduct : parseInt(req.params.idproduct),
        iduser: info.iduser,
      }
    });

    res.send({ 'message': 'elemento borrado' });

  } catch (err) {
    res.status(404).send({ 'message': 'elemento no encontrado' });
  }
});

// productos al azar
router.get("/random/:cantidad", function (req, res, next) {
  Producto.findAll({
    order: Sequelize.literal("rand()"),
    limit: parseInt(req.params.cantidad),
  })
    .then((p) => {
      res.status(201).json(p);
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
