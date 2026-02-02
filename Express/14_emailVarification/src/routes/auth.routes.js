import { Router } from "express";
import AuthController from "../controller/auth.controller.js";
import validateAjv from "../middleware/validateAjv.js";
import userSchema from "../schema/userSchema.js";

 const router = Router();

router.post("/user/register",validateAjv(userSchema),AuthController.register);
router.post("/user/login",validateAjv(userSchema),AuthController.login)
router.get("/user/verifyEmail/:token",AuthController.verifyEmail)

router.post("/user/forgetPassword",validateAjv(userSchema),AuthController.forgetPassword)
router.post("/user/resetPassword",validateAjv(userSchema),AuthController.resetPassword)

router.get("/user/",AuthController.getAllUsers)

export default router;