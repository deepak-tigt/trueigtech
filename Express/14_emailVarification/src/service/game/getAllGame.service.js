import db from "../../models/index.js";
import BaseHandler from "../../utils/baseHandler.js";
const { Games, GameCategory } = db;

export default class GetAllGamesService extends BaseHandler {
  async run() {
    console.log("this.args =============>",this.args);
    let {page,size,column,order} = this.args;
    page = parseInt(page);
    size = parseInt(size);

    let pageNum = 1;
    if (page > 0) {
      pageNum = page;
    }

    let sizeNum = 5;
    if (size > 0 && size <= 15) {
      sizeNum = size;
    }

    const games = Games.findAll({
      include: { model: GameCategory, 
        as: "category",
        attributes:["name"]
    },
      limit: sizeNum,
      offset: (pageNum - 1) * sizeNum,
      order: [[column, order]],
    });
    return games;
  }
}

