
import Sequelize from "sequelize";

// connecting sequelize with db 
const sequelize = new Sequelize("sequelizedb","postgres","root",{host:"localhost",dialect:"postgres",port:5433});

// testing connection


export default sequelize;