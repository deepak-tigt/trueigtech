import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
 
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
};

export default verifyToken;
