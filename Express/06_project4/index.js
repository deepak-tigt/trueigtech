const express = require("express")
const app = express();
const route = require("./routes/route")

// mounting the routes 
app.use('/api',route)

// -> /api/student
// -> /api/admin

app.listen(5000,()=>{
    console.log("server started on 5000");
    
})

