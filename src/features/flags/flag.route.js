import { Router } from "express";
import * as flagController from "./flag.controller.js";
import { authenticate } from "../../shared/middlewares/authenticate.js";
import { authorize } from "../../shared/middlewares/authorize.js";
import { USER_ROLES } from "../../constants/roleConstants.js";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize([USER_ROLES.OA, USER_ROLES.EU]),
  flagController.getFlags,
);

router.post(
  "/",
  authenticate,
  authorize([USER_ROLES.OA]),
  flagController.createFlag,
);

router.get(
  "/check",
  authenticate,
  authorize([USER_ROLES.EU]),
  flagController.checkFlagStatus,
);

router.patch(
  "/:id",
  authenticate,
  authorize([USER_ROLES.OA]),
  flagController.updateFlag,
);

router.delete(
  "/:id",
  authenticate,
  authorize([USER_ROLES.OA]),
  flagController.deleteFlag,
);

export default router;
