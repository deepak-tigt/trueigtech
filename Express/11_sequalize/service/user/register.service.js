
import User from "../../models/userModel.js"
import bcrypt from "bcrypt"

const createUser = async (userData)=>{
    const {firstName,lastName,email,password} = userData;
    const existingUser = await User.findOne({where : {email}})

    if(existingUser){
        const err = new Error("user already exist with this email !")
        err.statusCode = 409;
        throw err;
    }
    const hashedpassword = await bcrypt.hash(password,10)
    const user = await User.create({firstName,lastName,email,password:hashedpassword})
    
    return user;
    // {
    //     id:user.id,
    //     firstName:user.firstName,
    //     lastName:user.lastName,
    //     email:user.email
    // }
}


export {
    createUser
}