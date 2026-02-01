import PasswordUtil from "../../utils/password.util.js";
import db from "../../models/index.js"
const {User} = db;
import TokenUtil from "../../utils/token.utils.js"
import sendEmailService from "../mail/sendEmail.service.js"

class LoginService{
    
    async login({email,password}){
        const user = await User.findOne({where:{email}});
        if(!user) {
            throw new Error("Invalid Credentials")
        }
        const valid = await PasswordUtil.compare(password,user.password);
        if(!valid){
            throw new Error("Invalid Credentials")
        }
        const payload ={id:user.id,firstName:user.firstName,lastName:user.lastName,email:user.email}

        if(!user.isEmailVerified){
            // token is generated to send on mail 
            const token = TokenUtil.generateEmailToken(payload)
            // mail is send to the user email 
            await sendEmailService.sendVerifyEmail(user.email,token);
            throw new Error("Email Not Verified check your gmail to verify")
        }
        const authToken = TokenUtil.generateAuthToken(payload)
        return {token:authToken,
            user:{
                id:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                isEmailVerified:user.isEmailVerified,
                createdAt:user.createdAt,
                updatedAt:user.updatedAt,
            }
        }
    }
}

export default new LoginService();