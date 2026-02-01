import jwt from "jsonwebtoken"

export default class TokenUtil{

    static generateEmailToken(payload){
        return jwt.sign(payload,process.env.JWT_EMAIL_SECRET,{expiresIn:"5m"})
    }

    static verifyEmailToken(token){
        return jwt.verify(token,process.env.JWT_EMAIL_SECRET)
    }

    static generateAuthToken(payload){
        return jwt.sign(payload,process.env.JWT_AUTH_SECRET,{expiresIn:"1h"})
    }

    static verifyAuthToken(token){
        return jwt.verify(token,process.env.JWT_AUTH_SECRET)
    }
}