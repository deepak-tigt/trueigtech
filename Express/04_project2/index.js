const express = require("express")
const app = express()
const port = 3000


// import item ki router file 
const item = require("./routes/item")
//load into application
app.use('/api',item)

// -> /api/ -> item home page 
// -> /api/items -> item post request 
// -> /api/items/id -> put/delete request

app.listen(port,()=> console.log("server started"))