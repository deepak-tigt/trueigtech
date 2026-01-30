const { Utils } = require("sequelize");
const db = require("../../models/index");
const { User } = db;
const tokenUtil = require("../../utils/token.utils")
const passwordUtil = require("../../utils/password.utils");

class RegisterService {
  async register({ firstName, lastName, email, password }) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("user already exists !");
    }
    const hashPassword = await passwordUtil.hash(password);
    password = hashPassword;
    const user = await User.create({ firstName, lastName, email, password });
    const payload = { firstName, lastName, email };
    const token = tokenUtil.generateToken(payload);
    console.log(token);

    return { user, token };
  }
}

module.exports = new RegisterService();
