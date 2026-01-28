const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getAllUsers,
  getProfile,
} = require("../controller/userController");
const { jwtAuthMiddleware } = require("../middleware/jwt");

// signup route
router.post("/signup", signup);

// login route
router.post("/login", login);

// profile route to see own profile
router.get("/profile", jwtAuthMiddleware, getProfile);

// to gett all users
router.get("/", jwtAuthMiddleware, getAllUsers);

module.exports = router;
