import express from "express"
import { registerUser } from "../controller/userController.js";

const router = express.Router();

router.post("/users/registerUser",registerUser)


export default router