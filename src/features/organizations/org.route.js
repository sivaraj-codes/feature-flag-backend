import { Router } from "express";
import * as orgController from "./org.controller.js";
import { authenticate } from "../../shared/middlewares/authenticate.js";
import { authorize } from "../../shared/middlewares/authorize.js";
import { USER_ROLES } from "../../constants/roleConstants.js";

const router = Router();

router.get("/public", orgController.getPublicOrganizations);

router.get(
  "/",
  authenticate,
  authorize([USER_ROLES.SA]),
  orgController.getOrganizations,
);
router.post(
  "/",
  authenticate,
  authorize([USER_ROLES.SA]),
  orgController.createOrganization,
);

export default router;
