
import Sequelize from "sequelize";

// connecting sequelize with db 
const sequelize = new Sequelize("sequelizedb","postgres","root",{host:"localhost",dialect:"postgres",port:5433});

// testing connection


export default sequelize;


try {
  await sequelize.authenticate();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connection failed:", error.message);
  
}