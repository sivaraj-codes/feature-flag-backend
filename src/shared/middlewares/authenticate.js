import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const authenticate = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new AppError("No token provided", HTTP_STATUS.UNAUTHORIZED);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};
