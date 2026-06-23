import { Organization } from "./org.model.js";

export const findAll = () => Organization.find().sort({ createdAt: -1 });

export const findAllPublic = () =>
  Organization.find().select("_id name").sort({ name: 1 });

export const create = (data) => Organization.create(data);
