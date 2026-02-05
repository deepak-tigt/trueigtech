import db from "../../models/index.js"
const {GameCategory} = db;

class GetAllCategoryService{
    async getAllCategory(){
        return await GameCategory.findAll({
            order:[["createdAt","DESC"]]
        })
    }
}

export default new GetAllCategoryService();