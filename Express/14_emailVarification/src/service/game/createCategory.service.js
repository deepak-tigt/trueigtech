import db from "../../models/index.js"
const {GameCategory} = db;


class CreateCategoryService{
    async createCategory(data){
        const existing = await GameCategory.findOne({
            where:{name:data.name}
        })

        if(existing){
            throw new Error("category already exits");
        }
        const category = GameCategory.create({
            name:data.name,
            description:data.description,
            status:data.status,
        })

        return category;
    }
}

export default new CreateCategoryService();