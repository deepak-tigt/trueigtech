const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuthMiddleware = (req, res, next) => {
  // // check request is authorized or not
  // const authorization = req.headers.authorization
  // if(!authorization){
  //     return res.status(401).json({error:"token not found"})
  // }
  // extract the jwt token from the requst headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    // verify the jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user info to requst object
    // we can give any name to the user here
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "invalid token" });
  }
};

// funtion to generate jwt token
const generateToken = (userData) => {
  // generate a new jwt token
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 300 });
};

module.exports = {
  jwtAuthMiddleware,
  generateToken,
};
