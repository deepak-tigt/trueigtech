import dotenv from "dotenv"
dotenv.config()
import express from "express"
import authRoutes from "./src/routes/auth.routes.js"
import errorHandler from "./src/middleware/errorHandler.js"
import administrationRoutes from "./src/routes/administration.routes.js"
import gameCategoryRoutes from "./src/routes/gameCategory.routes.js"
import gameRoutes from "./src/routes/game.routes.js"
import transactionMiddleware from "./src/middleware/contextMiddleware.js"
const app = express()

const PORT=process.env.PORT || 8000;

app.use(express.json())
// app.use(transactionMiddleware)

app.use('/api/v1',authRoutes);
app.use('/api/v1/',administrationRoutes);
app.use("/api/v1",gameCategoryRoutes)
app.use("/api/v1",gameRoutes)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})