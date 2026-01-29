import {createUser} from "../service/userService.js"

const registerUser = async (req,res)=>{
    const {firstName,lastName,email,password} = req.body;
    if(!firstName || !lastName || !email || ! password){
        return res.status(400).json({message:"all feilds are required"})
    }
    try{
        const user = await createUser({firstName,lastName,email,password})
        res.status(201).json({message:"user registered successfully",user:user})
    }
    catch(err){
        console.log(err);
        return res.status(err.statusCode || 500).json({message:err.message})

    }
}

export {registerUser}