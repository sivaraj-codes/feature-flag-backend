import mongoose from "mongoose";
import { DB_COLLECTIONS } from "../../constants/dbCollections.js";
import { USER_ROLES } from "../../constants/roleConstants.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password is Required"],
    },
    roleId: {
      type: String,
      ref: "Role",
      enum: Object.values(USER_ROLES),
      required: true,
      default: USER_ROLES.EU,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model(
  "User",
  userSchema,
  DB_COLLECTIONS.featureFlagSystem.USERS,
);
