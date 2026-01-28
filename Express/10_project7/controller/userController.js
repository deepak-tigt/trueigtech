const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const userModel = require("../model/userModel");
const {jwtAuthMiddleware,generateToken} = require("../middleware/jwt")

// SIGNUP 
const signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const existingUser = await userModel.findUserByEmail(email);
  if (existingUser) {
    res.status(409);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.createUser({
    username,
    email,
    password: hashedPassword,
  });
  const payload = {
    id:user.id,
    username:user.username,
    email:user.email
  }
  const token = generateToken(payload)
  console.log(token);
  

  res.status(201).json({user:user,token:token});
});



// LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password required");
  }

  // check user existance
  const user = await userModel.findUserByEmail(email);
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  //match password
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }
  // generate the token for login 
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  }
  const token = generateToken(payload)
  res.json({token});
});

// to get our own profile 
const getProfile = asyncHandler(async(req,res)=>{
  const userData = req.user;
  console.log(userData);
  const userid = userData.id;
  const user = await userModel.getUserById(userid);
  if(user){
    res.status(200).json({user})
  }
  else{
    res.status(500).json({error:"inter server error"})
  }
  
})

// to get all users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
});


module.exports = {
  signup,
  login,
  getAllUsers,
  getProfile
};
