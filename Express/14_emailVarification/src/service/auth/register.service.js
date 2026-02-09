import db from "../../models/index.js"
const {User} = db;
import PasswordUtil from "../../utils/password.util.js"
import TokenUtil from "../../utils/token.utils.js"
import sendEmailService from "../mail/sendEmail.service.js"
import BaseHandler from "../../utils/baseHandler.js"

export default class RegisterService extends BaseHandler {

    async run(){
        const {firstName,lastName,email,password} = this.args
        const {transaction} = this.context
        console.log("===============> this.context ===========>",this.context);
        
        const alreadyExists = await User.findOne({where:{email},transaction})
        if(alreadyExists){
            throw new Error("Email already registerd !")
        }
        const hashPassword = await PasswordUtil.hash(password);
        // user created and stored in the user 
        const user = await User.create({firstName,lastName,email,password:hashPassword},{transaction})

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

