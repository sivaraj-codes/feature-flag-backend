import * as orgService from "./org.service.js";
import { sendSuccess } from "../../shared/utils/handlers.js";
import { HTTP_STATUS, MESSAGES } from "../../constants/responseConstants.js";

export const getOrganizations = async (req, res) => {
  const data = await orgService.getOrganizations();
  sendSuccess({
    res,
    message: MESSAGES.ORG_LIST_FETCHED,
    data,
  });
};

export const getPublicOrganizations = async (req, res) => {
  const data = await orgService.getPublicOrganizations();
  sendSuccess({
    res,
    message: MESSAGES.ORG_LIST_FETCHED,
    data,
  });
};

export const createOrganization = async (req, res) => {
  const data = await orgService.createOrganization({
    name: req.body.name,
    createdBy: req.user.email,
  });
  sendSuccess({
    res,
    statusCode: HTTP_STATUS.CREATED,
    message: MESSAGES.ORG_CREATED,
    data,
  });
};
