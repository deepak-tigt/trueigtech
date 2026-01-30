const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.stutus(401).json({error:"token unauthorized"})
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch(error){
        console.log(error);
        res.stutus(401).json({error:"token unauthorized"})
    }
}

module.exports = verifyToken 