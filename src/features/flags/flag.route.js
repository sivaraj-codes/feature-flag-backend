import { Router } from "express";
import * as flagController from "./flag.controller.js";
import { authenticate } from "../../shared/middlewares/authenticate.js";
import { authorize } from "../../shared/middlewares/authorize.js";
import { USER_ROLES } from "../../constants/roleConstants.js";

const router = Router();

// EU only — check all flags for their org
router.get(
  "/check",
  authenticate,
  authorize(USER_ROLES.EU),
  flagController.checkFlags,
);

// OA only — CRUD
router.get(
  "/",
  authenticate,
  authorize(USER_ROLES.OA),
  flagController.getFlags,
);

router.post(
  "/",
  authenticate,
  authorize(USER_ROLES.OA),
  flagController.createFlag,
);

router.patch(
  "/:id",
  authenticate,
  authorize(USER_ROLES.OA),
  flagController.updateFlag,
);

router.delete(
  "/:id",
  authenticate,
  authorize(USER_ROLES.OA),
  flagController.deleteFlag,
);

export default router;
