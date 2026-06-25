import { Router } from "express";
import * as authController from "./auth.controller.js";
import { authenticate } from "../../shared/middlewares/authenticate.js";

const router = Router();

router.post("/super-admin/login", authController.superAdminLogin);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authenticate, authController.logout);
router.get("/me", authenticate, authController.getUser);

export default router;
