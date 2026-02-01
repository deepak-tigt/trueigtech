import { Router } from "express";
import AuthController from "../controller/auth.controller.js";

 const router = Router();

router.post("/user/register",AuthController.register);
router.post("/user/login",AuthController.login)
router.get("/user/verifyEmail/:token",AuthController.verifyEmail)

export default router;