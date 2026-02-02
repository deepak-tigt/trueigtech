import RegisterService from "../service/auth/register.service.js"
import LoginService from "../service/auth/login.service.js"
import verifyEmailService from "../service/auth/verifyEmail.service.js";
import forgetPasswordService from "../service/auth/forgetPassword.service.js";

class AuthController {
    async register(req,res,next){
        try{
            const {user} =  await RegisterService.register(req.body);
            res.status(201).json({user:user,message:"verify your email"})
        }
        catch(err){
            next(err);
        }
    }

    async login(req,res,next){
        try{
            const {token,user} = await LoginService.login(req.body);
            res.status(200).json({token,user})
        }
        catch(err){
            next(err);
        }
    }

    async verifyEmail(req,res,next){
        try{
            await verifyEmailService.verifyEmail(req.params.token)
            res.status(200).json({message:"Email verfied"})
        }
        catch(err){
            next(err)
        }
    }

    async forgetPassword(req,res,next){
        const {email} = req.body;
        console.log(email , "debug 1");
        
        try{
            await forgetPasswordService.forgetPassword({email});
            res.status(200).json({message:"To forget password check your email"})
        }
        catch(err){
            next(err)
        }
    }

    async resetPassword(req,res,next){
        try{
            const {token,newPassword,confirmNewPassword} = req.body;
            await forgetPasswordService.resetPassword({token,newPassword,confirmNewPassword});
            res.status(200).json({message:"your password has been updated ! "})
        }
        catch(err){
            next(err);
        }
    }
}

export default new AuthController();