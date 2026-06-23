import mongoose from "mongoose";
import { DB_COLLECTIONS } from "../../constants/dbCollections.js";

const orgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Organization name is required"],
      trim: true,
      unique: true,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Organization = mongoose.model(
  "Organization",
  orgSchema,
  DB_COLLECTIONS.featureFlagSystem.ORGANIZATIONS,
);
