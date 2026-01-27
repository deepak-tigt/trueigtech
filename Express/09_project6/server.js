const express = require("express");
require("dotenv").config();
const pool = require("./config/db")
const contactRoutes = require("./routes/constactRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();


const port =  process.env.PORT || 5000;
console.log(port); 

// middleware to parse the body or req.body
app.use(express.json());

app.use('/api/contacts',contactRoutes)
// custom middleware to handle the error 
app.use(errorHandler)



pool.connect(()=>{
    console.log("db server connected ...");
    
})
app.listen(port,()=>{
    console.log("server running on port : "+port);
    
})