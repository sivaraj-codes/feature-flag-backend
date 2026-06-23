import * as authService from "./auth.service.js";
import { sendSuccess } from "../../shared/utils/handlers.js";
import { setAuthCookie } from "../../shared/utils/cookies.js";
import { HTTP_STATUS, MESSAGES } from "../../constants/responseConstants.js";

export const superAdminLogin = async (req, res) => {
  const { token, roleId } = await authService.superAdminLogin(req.body);
  setAuthCookie(res, token);
  sendSuccess({
    res,
    message: MESSAGES.LOGIN_SUCCESS,
    data: { roleId },
  });
};

export const signup = async (req, res) => {
  const { id, roleId, organizationId } = await authService.signup(req.body);
  sendSuccess({
    res,
    statusCode: HTTP_STATUS.CREATED,
    message: MESSAGES.SIGNUP_SUCCESS,
    data: { id, roleId, organizationId },
  });
};

export const login = async (req, res) => {
  const { token, roleId, organizationId } = await authService.login(req.body);
  setAuthCookie(res, token);
  sendSuccess({
    res,
    message: MESSAGES.LOGIN_SUCCESS,
    data: { roleId, organizationId },
  });
};
