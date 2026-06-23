import express from "express";
import cors from "cors";
import userRoutes from "./features/users/user.route.js";
import dbAdminRoutes from "./features/dbAdmin/dbAdmin.route.js";
import authRoutes from "./features/auth/auth.route.js";
import orgRoutes from "./features/organizations/org.route.js";
import featFlagRoutes from "./features/flags/flag.route.js";

import { errorHandler } from "./shared/middlewares/errorHandler.js";
import { AppError } from "./shared/errors/AppError.js";
import { HTTP_STATUS } from "./constants/responseConstants.js";
import cookieParser from "cookie-parser";

const app = express();

// ── Middleware ──────
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.use((req, res, next) => {
//   //logs the req
//   console.log("Content-Type:", req.headers["content-type"]);
//   console.log("Body:", req.body);
//   next();
// });

// ── Health check ──────
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.get("/", (req, res) => {
  res.send("Welcome API Home");
});

// ── Feature routes ──────
app.use("/api/v1/db-admin", dbAdminRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/organizations", orgRoutes);
app.use("/api/v1/flags", featFlagRoutes);

// ── 404 handler (after all routes) ──────
app.use((req, res, next) => {
  next(new AppError(`Cannot ${req.method} ${req.path}`, HTTP_STATUS.NOT_FOUND));
});

// ── Global error handler (must be last) ──────
app.use(errorHandler);

export default app;
