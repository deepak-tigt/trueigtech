import db from "../../models/index.js"
const {User} = db;
import PasswordUtil from "../../utils/password.util.js"
import TokenUtil from "../../utils/token.utils.js"
import sendEmailService from "../mail/sendEmail.service.js"

 class RegisterService{

    async register({firstName,lastName,email,password}){
        const alreadyExists = await User.findOne({where:{email}})
        if(alreadyExists){
            throw new Error("Email already registerd !")
        }
        const hashPassword = await PasswordUtil.hash(password);
        // user created and stored in the user 
        const user = await User.create({firstName,lastName,email,password:hashPassword})

        const payload ={id:user.id,firstName,lastName,email}
        // token is generated to send on mail 
        const token = TokenUtil.generateEmailToken(payload)
        // mail is send to the user email 
        await sendEmailService.sendVerifyEmail(user.email,token);

        return {
            user:{
                id:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                isEmailVerified:user.isEmailVerified,
                createdAt:user.createdAt,
                updatedAt:user.updatedAt,
            }
    }   }
}

export default new RegisterService();