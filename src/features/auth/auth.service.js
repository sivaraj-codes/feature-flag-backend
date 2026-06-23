import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../users/user.model.js";
import { AppError } from "../../shared/errors/AppError.js";
import { HTTP_STATUS, MESSAGES } from "../../constants/responseConstants.js";
import {
  ALLOWED_SIGNUP_ROLES,
  USER_ROLES,
} from "../../constants/roleConstants.js";
import * as userService from "../users/user.service.js";

import { createUser } from "../users/user.service.js";

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" });

export const superAdminLogin = async ({ email, password }) => {
  if (
    email !== process.env.SUPER_ADMIN_EMAIL ||
    password !== process.env.SUPER_ADMIN_PASSWORD
  ) {
    throw new AppError(MESSAGES.INVALID_CREDENTIALS, HTTP_STATUS.UNAUTHORIZED);
  }

  const token = signToken({
    email,
    roleId: USER_ROLES.SA,
  });

  return { token, roleId: USER_ROLES.SA };
};

export const signup = async (props) => {
  return userService.createUser(props);
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  console.log("uu", user);
  if (!user) {
    throw new AppError(MESSAGES.INVALID_CREDENTIALS, HTTP_STATUS.UNAUTHORIZED);
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  console.log("uu", { isMatch, password, passwordHash: user.passwordHash });

  if (!isMatch) {
    throw new AppError(MESSAGES.INVALID_CREDENTIALS, HTTP_STATUS.UNAUTHORIZED);
  }

  const token = signToken({
    id: user._id,
    email: user.email,
    roleId: user.roleId,
    organizationId: user.organizationId,
  });

  return { token, roleId: user.roleId, organizationId: user.organizationId };
};
