import db from "../../models/index.js"
const {Games , GameCategory} = db;

class GetAllGamesService{

    async getAllGame(){
        const games = Games.findAll({
            include:{model:GameCategory, as:"category"},
            order:[["createdAt","DESC"]]
        })
        return games;
    }
}

export default new GetAllGamesService();