const express = require("express")
const router = express.Router()
const {auth,isStudent,isAdmin} = require("../middleware/middleware")
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