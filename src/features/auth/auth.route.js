import { Router } from "express";
import * as authController from "./auth.controller.js";

const router = Router();

router.post("/super-admin/login", authController.superAdminLogin);
router.post("/signup", authController.signup);
router.post("/login", authController.login);

export default router;
