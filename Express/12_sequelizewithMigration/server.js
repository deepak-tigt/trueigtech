require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/user.routes')
const errorHandler = require('./middleware/error.middleware')
const app = express()

const port = process.env.PORT || 8000;

app.use(express.json())

app.use('/api/v1',userRoutes)

//custom error handler 
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
})