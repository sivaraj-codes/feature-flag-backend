import mongoose from "mongoose";
import { DB_COLLECTIONS } from "../../constants/dbCollections.js";

const featureFlagSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Feature key is required"],
      trim: true,
      lowercase: true,
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true },
);

// key must be unique within an organization
// same key can exist in different orgs independently
featureFlagSchema.index({ key: 1, organizationId: 1 }, { unique: true });

export const FeatureFlag = mongoose.model(
  "FeatureFlag",
  featureFlagSchema,
  DB_COLLECTIONS.featureFlagSystem.FEATURE_FLAGS,
);
