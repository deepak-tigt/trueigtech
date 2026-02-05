import { Router } from "express";
import AdministrationController from "../controller/administration.controller.js";
import AuthMiddleware from "../middleware/auth.js"
import CheckPermission from "../middleware/permissionCheck.js";
import administrationController from "../controller/administration.controller.js";

const router = Router();

// adding staf
router.post("/administration/registerStaff",AuthMiddleware,CheckPermission("staff_management","create"),administrationController.addStaff)
// staff login
router.post("/administration/login",AdministrationController.loginStaff)

export default router;