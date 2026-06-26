import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const authenticate = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new AppError("No token provided", HTTP_STATUS.UNAUTHORIZED);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new AppError(
        "Session expired, please login again",
        HTTP_STATUS.UNAUTHORIZED,
      );
    }
    throw new AppError("Invalid token", HTTP_STATUS.UNAUTHORIZED);
  }
};
