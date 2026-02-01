import db from "../../models/index.js"
const {User} = db;
import TokenUtil from "../../utils/token.utils.js";


class VerifyEmailService{

    async verifyEmail(token){
        const decode =  TokenUtil.verifyEmailToken(token);
        if(!decode){
            throw new Error("invalid token")
        }
        const user = await User.findByPk(decode.id);
        user.isEmailVerified = true;
        await user.save();
    }   
}

export default new VerifyEmailService();