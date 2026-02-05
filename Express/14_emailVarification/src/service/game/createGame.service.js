import db from "../../models/index.js"
const {Games, GameCategory} = db;


class CreateGameService{
    
    async createGame(data){
        // chek for the category
        const category = await GameCategory.findByPk(data.categoryId)
        if(!category || !category.status){
            throw new Error("Invalid or inactive category")
        }
        const existingGame = await Games.findOne({where:{name:data.name}})
        if(existingGame){
            throw new Error("game already exist !")
        }
        const game = await Games.create({
            name:data.name,
            categoryId:data.categoryId,
            status:data.status,
        })

        return game;
    }
}

export default new CreateGameService();