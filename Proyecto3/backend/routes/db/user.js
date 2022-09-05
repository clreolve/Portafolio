var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

require('dotenv').config()

const KEY = process.env.ACESSTOKENKEY
const JWT_EXPIRES_IN= process.env.JWT_EXPIRES_IN

// sequalize import
const Sequelize = require('sequelize');
const User = require('../../models').user; 

router.post('/registro', async function(req, res, next){
    try {
        let pass = req.body.password

        // encriptacion
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt)

        const data = await new User({
            username: req.body.username,
            passwordhash: hash,
            email: req.body.email,
        });

        const savedata = await data.save();
        res.status(200).json(savedata);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.post('/login', async function (req, res, next) {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            }
        })

        if (user) {
        // check user password with hashed password stored in the database
            console.log(req.body.password, user.passwordhash)
            const validPassword = await bcrypt.compare(req.body.password, user.passwordhash);

            if (!validPassword) {
                res.status(200).json({ message: "Contraseña invalida" });
            }

        } else {
            res.status(401).json({ error: "No existe el usuario" });
        }

        let token = jwt.sign({
            iduser: user.iduser,
            username: user.username,
            icon: user.icon,
            email: user.email,
          }, KEY, { expiresIn: JWT_EXPIRES_IN });
        res.json(token)
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

module.exports = router;