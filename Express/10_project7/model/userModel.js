const db = require("../config/db");

// find user by email
const findUserByEmail = async (email) => {
  const result = await db.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
};

// create user
const createUser = async ({ username, email, password }) => {
  const result = await db.query(
    `INSERT INTO users (username, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, username, email`,
    [username, email, password]
  );
  return result.rows[0];
};


// get user by id
const getUserById = async (id) => {
  const result = await db.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );

  return result.rows[0]; 
};


// get all users
const getAllUsers = async () => {
  const result = await db.query(
    "SELECT * FROM users ORDER BY id DESC"
  );
  return result.rows;
};

module.exports = {
  findUserByEmail,
  createUser,
  getAllUsers,
  getUserById
};
