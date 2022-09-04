const jwt = require("jsonwebtoken");

require("dotenv").config();

const KEY = process.env.ACESSTOKENKEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const verifyToken = (req, res, next) => {
  const token = req.headers["token"] || req.query.token || req.body.token;

  if (!token) {
    return res.status(403).send("Token requerido para autentificacion");
  }
  try {
    const decoded = jwt.verify(token, KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token Invalido");
  }
  return next();
};

module.exports = verifyToken;
