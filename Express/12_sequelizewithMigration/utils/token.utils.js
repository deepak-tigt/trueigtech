const jwt = require('jsonwebtoken')
const { Model } = require('sequelize')
require("dotenv").config()

class generateToken{
    static async generateToken(payload){
        return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:300})
    }
}

module.exports = generateToken;