import TokenUtil from "../../utils/token.utils.js";
import sendEmailService from "../mail/sendEmail.service.js";
import PasswordUtil from "../../utils/password.util.js"
import db from "../../models/index.js"
const {User} = db;


class ForgetPasswordService{
    
    async forgetPassword({email}){
        console.log(email , "debug 2")
        const user = await User.findOne({
            where : {
                email
            }
        })
        
        if(!user){
            throw new Error("user not exists with this email !")
        }
        const payload = {id:user.id,email:user.email}
        const token =  TokenUtil.generateForgetPasswordToken(payload)
        console.log(token,user.email);
        
        await sendEmailService.sendForgetPasswordEmail(user.email,token)
    }

    async resetPassword({token,newPassword,confirmNewPassword}){
        const decode = TokenUtil.verifyForgetPasswordToken(token)
        if(!decode){
            throw new Error("invalid token !")
        }
        if(newPassword!==confirmNewPassword){
            throw new Error("New Password and Confirm New Password must be same !")
        }
        const user = await User.findOne({where:{email:decode.email}})
        user.password = await PasswordUtil.hash(newPassword);
        await user.save();

    }
}

export default new ForgetPasswordService();