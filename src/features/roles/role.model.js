import mongoose from "mongoose";
import { DB_COLLECTIONS } from "../../constants/dbCollections.js";

const roleSchema = new mongoose.Schema({
  _id: {
    type: String, // "SA", "OA", "EU"
  },
  name: {
    type: String,
    required: true,
  },
});

export const Role = mongoose.model(
  "Role",
  roleSchema,
  DB_COLLECTIONS.featureFlagSystem.ROLES,
);
