const express = require('express')
const app = express()
const port = 3000;

// loading middleware into the app
//Inbuit middleware
 
//it parse the data and store it in req.body
app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('hello world')
})



app.listen(port,()=>{
    console.log("server is running on port "+port);
    
})