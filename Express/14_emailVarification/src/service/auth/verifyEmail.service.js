import db from "../../models/index.js"
const {User} = db;
import TokenUtil from "../../utils/token.utils.js";
import BaseHandler from "../../utils/baseHandler.js";

export default class VerifyEmailService extends BaseHandler{

    async run(){
        const token = this.args;
        const decode =  TokenUtil.verifyEmailToken(token);
        if(!decode){
            throw new Error("invalid token")
        }
        const user = await User.findByPk(decode.id);
        user.isEmailVerified = true;
        await user.save();
    }   
}
