import { seedRoles } from "./dbAdmin.service.js";
import { sendSuccess, sendError } from "../../shared/utils/handlers.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const handleSeedRoles = async (req, res) => {
  const { operationSecret } = req.body;

  if (operationSecret !== process.env.SEED_SECRET) {
    return sendError({
      res,
      message: "Forbidden",
      statusCode: HTTP_STATUS.FORBIDDEN,
    });
  }

  const message = await seedRoles();
  sendSuccess({ res, message });
};
