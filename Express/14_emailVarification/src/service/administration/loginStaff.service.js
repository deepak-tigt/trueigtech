import PasswordUtil from "../../utils/password.util.js"
import db from "../../models/index.js";
import TokenUtil from "../../utils/token.utils.js";
const { Administration, Role } = db;

class LoginStaffService {
  async login({ email, password }) {
    const staff = await Administration.findOne({
      where: { email },
      include: { model: Role, as: "role",
        attributes:['id','name','level','permissions']
      },
    });
    if (!staff) {
      throw new Error("Invalid Email !");
    }

    // check for the password is valid or not 
    const isValidPassword = await PasswordUtil.compare(password,staff.password)
    if(!isValidPassword){
        throw new Error("Invalid password !")
    }


    const payload = {
        id:staff.id,
        firstName:staff.firstName,
        lastName:staff.lastName,
        email:staff.email,
        role:staff.role,
        permissions:staff.role.permissions
        // permissions:staff.permissions 
    }
    const authToken = TokenUtil.generateAuthToken(payload);

    return{
        authToken,
        staff:{
            id:staff.id,
            firstName:staff.firstName,
            lastName:staff.lastName,
            email:staff.email,
            role:staff.role,
            permissions:staff.role.permissions,
            createdAt:staff.createdAt,
            updatedAt:staff.updatedAt
        }
    }
  }
}

export default new LoginStaffService();
