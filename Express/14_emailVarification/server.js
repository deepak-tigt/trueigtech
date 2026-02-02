import dotenv from "dotenv"
dotenv.config()
import express from "express"
import authRoutes from "./src/routes/auth.routes.js"
import errorHandler from "./src/middleware/errorHandler.js"
const app = express()

const PORT=process.env.PORT || 8000;

app.use(express.json())

app.use('/api/v1',authRoutes);
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})