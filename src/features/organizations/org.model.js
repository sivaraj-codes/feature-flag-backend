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
    isActive: {
      type: Boolean,
      required: [true, "Organization status is required"],
    },
    establishedYear: {
      type: Number,
      required: [true, "Established year is required"],
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
