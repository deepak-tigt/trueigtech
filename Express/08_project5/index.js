const express = require("express")
const productRoutes = require("./routes/productRoute")
const app = express();
const pool = require('./config/db')

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

const port = 4000;
app.use('/api',productRoutes)

pool.connect(()=>{
    console.log("server running ...")
})

app.listen(port,(req,res)=>{
    console.log("server started" + port);
})