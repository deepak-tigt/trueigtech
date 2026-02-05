import db from "../../models/index.js"
const {Games , GameCategory} = db;

class GetAllGamesByCategoryService{

    async getAllGameByCategory(categoryId){
        const gamesBycategory = Games.findAll({
            where:{categoryId:categoryId,status:true},
            include:{model:GameCategory, as:"category"}
        })
        return gamesBycategory;
    }
}

export default new GetAllGamesByCategoryService();