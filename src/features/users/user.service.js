import { HTTP_STATUS, MESSAGES } from "../../constants/responseConstants.js";
import { ALLOWED_SIGNUP_ROLES } from "../../constants/roleConstants.js";
import { AppError } from "../../shared/errors/AppError.js";
import { User } from "./user.model.js";
import * as userRepository from "./user.repository.js";
import bcrypt from "bcryptjs";

export const getUsers = () => userRepository.findAll();

export const createUser = async ({
  name,
  email,
  password,
  organizationId,
  roleId,
}) => {
  if (!ALLOWED_SIGNUP_ROLES.includes(roleId)) {
    throw new AppError("Invalid role for signup", HTTP_STATUS.BAD_REQUEST);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const userData = {
    name,
    email,
    passwordHash,
    roleId,
    organizationId,
  };
  const user = await userRepository.create(userData);

  return {
    id: user._id,
    roleId: user.roleId,
    organizationId: user.organizationId,
  };
};
