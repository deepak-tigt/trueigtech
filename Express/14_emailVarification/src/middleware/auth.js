import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
 
  try{
    const token = req.headers.authorization.split(" ")[1];    
    if (!token) {
    return res.status(401).json({ error: "token Unauthorized" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "token unauthorized" });
  }
  }
  catch(error){
    console.log("===========> token error :",error);
    res.status(404).json({error:"token not found ! "})
    
  }

  
};

export default verifyToken;
