import express from "express"
import userRoute from "./routes/userRoute.js"
import sequelize from "./config/db.js";

const app = express();
const port = 4000;

// db.sync({force:true})
// .then(()=>{
//     console.log("db ");
//     app.listen(3000,()=>{
//         console.log("server running");
        
//     })
    
// })
app.use(express.json())
app.use("/api/v1",userRoute);


try{
    sequelize.sync({alter:true});
    console.log("connection has been esatablished");
}
catch(error){
    e
    console.error("error syncing db");
}


app.listen(port,()=>{
    console.log("server started on port no ",port);
    
})