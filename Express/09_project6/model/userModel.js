const db = require("../config/db")

// TO REGISTER A USER
const registerUser = async ({username,email,password})=>{
    const result = await db.query("INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING *",[username,email,password])
    return result.rows;
}


// TO LOGIN USER 


// check if user exists by email
const userExistsByEmail = async (email) => {
  const result = await db.query(
    "SELECT * FROM users WHERE email = $1",[email]);
  return result.rows[0];
};





module.exports = {
    registerUser,
    userExistsByEmail
}