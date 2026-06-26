import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "featureFlagSystem",
  });
  console.warn("Ready state:", mongoose.connection.readyState);
  console.warn(`Mongoose connected: ${mongoose.connection.host}`, {
    name: mongoose.connection.name,
    port: mongoose.connection.port,
    host: mongoose.connection.host,
  });
};
