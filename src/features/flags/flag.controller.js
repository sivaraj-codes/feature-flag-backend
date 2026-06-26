import * as flagService from "./flag.service.js";
import { sendSuccess } from "../../shared/utils/handlers.js";
import { HTTP_STATUS, MESSAGES } from "../../constants/responseConstants.js";

export const getFlags = async (req, res) => {
  const data = await flagService.getFlags(req.user.organizationId);
  sendSuccess({
    res,
    message: MESSAGES.FLAG_LIST_FETCHED,
    data,
  });
};

export const checkFlagStatus = async (req, res) => {
  const { key } = req.query;
  const orgId = req.user.organizationId;

  const result = await flagService.checkFlagStatus(key, orgId);

  res.json({ success: true, data: result });
};

export const createFlag = async (req, res) => {
  const data = await flagService.createFlag({
    key: req.body.key,
    enabled: req.body.enabled,
    organizationId: req.user.organizationId,
  });
  sendSuccess({
    res,
    statusCode: HTTP_STATUS.CREATED,
    message: MESSAGES.FLAG_CREATED,
    data,
  });
};

export const updateFlag = async (req, res) => {
  const data = await flagService.updateFlag({
    id: req.params.id,
    organizationId: req.user.organizationId,
    data: req.body,
  });
  sendSuccess({
    res,
    message: MESSAGES.FLAG_UPDATED,
    data,
  });
};

export const deleteFlag = async (req, res) => {
  await flagService.deleteFlag({
    id: req.params.id,
    organizationId: req.user.organizationId,
  });
  sendSuccess({
    res,
    message: MESSAGES.FLAG_DELETED,
  });
};
