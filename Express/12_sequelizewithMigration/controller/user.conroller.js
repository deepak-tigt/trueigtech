    const RegisterService = require('../service/user/register.service')
    const LoginService = require("../service/user/login.service")

    class UserController{
        
        async register(req,res,next){
            try{
                const user = await RegisterService.register(req.body)
                res.status(201).json(user)
            }
            catch(error){
                next(error)
            }
        }

        async login (req,res,next){
            try{
                const result = await LoginService.login(req.body)
                console.log(result);
                res.status(200).json({result})
            }
            catch(error){
                next(error)
            }
        }

    }

    module.exports = new UserController();