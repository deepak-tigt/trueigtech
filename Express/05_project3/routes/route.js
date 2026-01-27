const express = require("express")
const router = express.Router()


// middlewares 
// auth will check the login
// route for auth 
const auth = function (req,res,next){
    console.log("currently in the auth middleware");

    // adding a dummy user 
req.user = {userId:1,role:"admin"};

if(req.user){
    // if a valid user is there in req, then proceed to next miiddleware
    next();
}
else{
    // if not a valid user 
    res.json({
        success:false,
        message:"not a valid user"
    })
}


    next() 
}

// route for student 
const isStudent = function(req,res,next){
    console.log("currently in  student middleware");
    if(req.user.role==="student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied, this route is only for student"
        })
    }
}

// route for admin
const isAdmin = function(req,res,next){
    console.log("currently in Admin middleware");
    if(req.user.role === "admin"){
        next()
    }
    else{
        res.json({
            success:false,
            message:"Access denied , this route is only for the admin"
        })
    }
    
}




// routes 
router.get('/student',auth,isStudent,(req,res)=>{
    console.log("I am inside the student route");
    res.send("Student specific page ")
})


router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("I am inside the admin route");
    res.send("Admin speciic route")
    
})

module.exports = router