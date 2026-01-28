const asyncHandler = require("express-async-handler")
const user = require("../model/userModel") 
const bcrypt = require("bcrypt")
// to register user 
const registerUser = asyncHandler(async (req,res)=>{    
    let {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("all fields are required")
    }
    const userByEmail = await user.userExistsByEmail(email)
    if(userByEmail){
        res.status(400);
        throw new Error("user already register")
    }
    // hash our password using the bcrypt lib
    let hashedPassword = await bcrypt.hash(password,10);
    password = hashedPassword;
    console.log("hashed password : ",hashedPassword);
    const newUser = await user.registerUser({username,email,hashedPassword})
    console.log(`user created ${newUser}`);
    if(user){
        res.status(201).json({id:newUser.id,email:newUser.email})
    }
    else{
        res.status(400);
        throw new Error("user data is not valid !")
    }
    res.json({message:"register"});
});


// login user 
const loginUser = asyncHandler(async (req,res)=>{    
    res.json({message:"login"});
});

// current user 
// it is a private method 
const currentUser = asyncHandler(async (req,res)=>{    
    res.json({message:"login"});
});



module.exports = {
    registerUser,
    loginUser,
    currentUser
}