const jwt = require('jsonwebtoken')
const passwordUtil = require('../../utils/password.utils')
const tokenUtil = require("../../utils/token.utils")
const db = require("../../models/index");
const { User } = db;

class LoginService {
    async login({email,password}){
        const user = await User.findOne({ where: { email } });
        if (!user) {
        throw new Error("invalid credentials");
        }
        const isMatch = await passwordUtil.compare(password,user.password);
        if(!isMatch){
            throw new Error("invalid credentials")
        }
        const payload = {
            id:user.id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
        }
        const token = tokenUtil.generateToken(payload) 
        
        return token;
    }
}


module.exports =new LoginService()