import { AppError } from "../errors/AppError.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roleId)) {
      throw new AppError(
        "Forbidden: insufficient permissions",
        HTTP_STATUS.FORBIDDEN,
      );
    }
    next();
  };
};
