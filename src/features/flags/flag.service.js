import * as flagRepository from "./flag.repository.js";
import { AppError } from "../../shared/errors/AppError.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const getFlags = (organizationId) =>
  flagRepository.findByOrg(organizationId);

export const checkFlagStatus = async (key, orgId) => {
  const flag = await flagRepository.findFlagByKey(key, orgId);
  console.log("flag", flag);
  if (!flag) {
    throw new AppError("Feature flag not found", HTTP_STATUS.NOT_FOUND);
  }

  return { key: flag.key, enabled: flag.enabled };
};

export const createFlag = async ({ key, enabled, organizationId }) => {
  if (!key || !key.trim()) {
    throw new AppError("Feature key is required", HTTP_STATUS.BAD_REQUEST);
  }

  return flagRepository.create({
    key: key.toLowerCase().trim(),
    enabled: enabled ?? false,
    organizationId,
  });
};

export const updateFlag = async ({ id, organizationId, data }) => {
  const flag = await flagRepository.update(id, organizationId, data);

  if (!flag) {
    throw new AppError("Flag not found", HTTP_STATUS.NOT_FOUND);
  }

  return flag;
};

export const deleteFlag = async ({ id, organizationId }) => {
  const flag = await flagRepository.remove(id, organizationId);

  if (!flag) {
    throw new AppError("Flag not found", HTTP_STATUS.NOT_FOUND);
  }

  return flag;
};
