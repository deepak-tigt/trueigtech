const express = require('express')
const router = express.Router()


  
// define the home page 
router.get("/",(req,res)=>{
    res.send("get the home page request ")
})

router.post('/items',(req,res)=>{
    res.json({x:1,y:2,z:3})
})


module.exports = router


