
import sequelize from "../config/db.js";

import {DataTypes} from "sequelize"
// import sequelize from "../config/db";


const User = sequelize.define(
    //modelname same as the table
    'User',
    {
        // model attributes or similar to columns of the table 
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING,
            // last name can be null
        },
        email: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    },
    {
        // other model options 
        modelName:'User', // we need to choose the model name 
    }
);

console.log(User === sequelize.models.User); // true


export default User