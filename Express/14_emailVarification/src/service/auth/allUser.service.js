import { Op, where } from "sequelize";
import db from "../../models/index.js";
const { User } = db;

class AllUserService {
  async getAllUser(page, size,column,order,search) {
    page = parseInt(page);
    size = parseInt(size);

    let pageNum = 1;
    if (page > 0) {
      pageNum = page;
    }

    let pageSize = 5;
    if (size > 0 && size <= 15) {
      pageSize = size;
    }
    const users = await User.findAndCountAll({
      limit: pageSize,
      offset: (pageNum - 1) * pageSize,
      order:[[column,order]],
      where:{[Op.or]:[
        {firstName:{[Op.iLike]:`%${search}%`}},
        {lastName:{[Op.iLike]:`%${search}%`}},
        {email:{[Op.iLike]:`%${search}%`}}
      ]}
    });
    if (users.count === 0) {
      throw new Error("NO users found !");
    }
    return {
        users:users.rows,
        totalPages:Math.ceil(users.count/pageSize)
    };
  }
}

export default new AllUserService();
