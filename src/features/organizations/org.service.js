import * as orgRepository from "./org.repository.js";
import { AppError } from "../../shared/errors/AppError.js";
import { HTTP_STATUS } from "../../constants/responseConstants.js";

export const getOrganizations = () => orgRepository.findAll();

export const getPublicOrganizations = () => orgRepository.findAllPublic();

export const createOrganization = async ({
  name,
  createdBy,
  isActive,
  establishedYear,
}) => {
  return orgRepository.create({
    name: name.trim(),
    createdBy,
    isActive,
    establishedYear,
  });
};
