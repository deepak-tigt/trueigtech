import CreateCategoryService from "../service/game/createCategory.service.js";
import GetAllCategoryService from "../service/game/getAllCategory.service.js";

class GameCategoryController {
    async createCategory(req,res,next){
        try{
            const category = await CreateCategoryService.createCategory(req.body);
            res.status(201).json({message:"game category created successfully",category})
        }
        catch(error){
            next(error)
        }
    }

    async getAllCategory(req,res,next){
        try{
            const categories = await GetAllCategoryService.getAllCategory();
            res.status(200).json({
                count:categories.length,
                categories
            })
        }
        catch(error){
            next(error)
        }
    }
}


export default new GameCategoryController();