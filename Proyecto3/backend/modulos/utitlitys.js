
var jwt = require('jsonwebtoken');

require('dotenv').config()
const KEY = process.env.ACESSTOKENKEY
const JWT_EXPIRES_IN= process.env.JWT_EXPIRES_IN

/**
 * Retorna información contenida en el JWT y null si no es valido
 * @return  {JSON} Arreglo con info del usuario {
    "iduser": iduser,
    "username": "username",
    "icon": null,
    "email": null,
    "iat": 1662316858,
    "exp": 1662403258
}
 */
async function decoded_jwt(token){
    try {
        var decoded = await jwt.verify(token, KEY);
        return decoded
      } catch(err) {
        console.error(err);
        return null
      }
}

module.exports = {
    decoded_jwt
}