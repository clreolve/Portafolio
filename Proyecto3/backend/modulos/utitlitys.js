
var jwt = require('jsonwebtoken');

require('dotenv').config()
const KEY = process.env.ACESSTOKENKEY
const JWT_EXPIRES_IN= process.env.JWT_EXPIRES_IN

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