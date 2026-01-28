const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const db = require("./config/db");
require("dotenv").config();


const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use(errorHandler);

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
