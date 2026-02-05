import CreateGameService from "../service/game/createGame.service.js"
import GetAllGameService from "../service/game/getAllGame.service.js"
import GetAllGamebyCategoryService from "../service/game/getAllGamebyCategory.service.js"

class GameController{

    async createGame(req,res,next){
        try{
            const game = await CreateGameService.createGame(req.body);
            res.status(201).json({message:"game is created successfully !",game})
        }
        catch(error){
            next(error)
        }
    }

    async getAllGames(req,res,next){
        try{
            const games = await GetAllGameService.getAllGame();
            res.status(200).json({count:games.length,games})
        }
        catch(error){
            next(error)
        }
    }

    async getAllGameByCategory(req,res,next){
        try{
            const games = await GetAllGamebyCategoryService.getAllGameByCategory(req.params.id)
            res.status(200).json({count:games.length,games})
        }
        catch(error){
            next(error)
        }
    }
}

export default new GameController();