const express = require("express")

// app using the express and it is initialized it is basically a handler funtion
const app = express();

// it handle get request on this path and response 
app.get('/',(req,res)=>{
    return res.send("hello from home page ")
})
 
app.get('/about',(req,res)=>{
    // pass the age in the query in http://localhost:8000/about?name=deepak&age=21
    return res.send(`hello from about page hey ${req.query.name}  and age is ${req.query.age}`)
})

// creating the server in express here 
app.listen(8000,()=> console.log("server started ")
);