import AddStaffService from "../service/administration/addStaff.service.js";
import LoginStaffService from "../service/administration/loginStaff.service.js"


class AdministrationController{
    
    async addStaff(req,res,next) {
        try{
            const creatorId = req.user.id; // taking out the id from the 
            const result = await AddStaffService.addStaff(creatorId,req.body);
            res.status(201).json({staff:result,message:"staff created sucessfully !"})
        }
        catch(error){
            next(error);
        }
    }

    async loginStaff(req,res,next) {
        try {
        // console.log("Request body:", req.body);
        const result = await LoginStaffService.login(req.body)
        res.status(200).json(result)
        } 
        catch (error) {
        next(error)
        }
    }

    
}


export default new AdministrationController();