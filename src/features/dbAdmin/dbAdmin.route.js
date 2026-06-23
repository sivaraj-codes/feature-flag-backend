import { Router } from "express";
import { handleSeedRoles } from "./dbAdmin.controller.js";

const router = Router();

const guardSecret = (req, res, next) => {
  const { soc } = req.body;
  if (soc !== process.env.SECRET_OPERATION_CODE) {
    return sendError({
      res,
      message: "Forbidden",
      statusCode: HTTP_STATUS.FORBIDDEN,
    });
  }
  next();
};

router.post("/seed-roles", guardSecret, handleSeedRoles);

export default router;
