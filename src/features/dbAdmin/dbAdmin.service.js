import { USER_ROLES } from "../../constants/roleConstants.js";
import { Role } from "../roles/role.model.js";

const roles = [
  { _id: USER_ROLES.SA, name: "Super Admin" },
  { _id: USER_ROLES.OA, name: "Org Admin" },
  { _id: USER_ROLES.EU, name: "End User" },
];

export const seedRoles = async () => {
  const count = await Role.countDocuments();
  if (count > 0) return "Roles already seeded";
  await Role.insertMany(roles, { ordered: false });
  return "Roles seeded successfully";
};
