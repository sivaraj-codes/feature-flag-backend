import { User } from "./user.model.js";

export const findAll = () => User.find();

export const findByEmail = (email) => User.findOne({ email });

export const create = (userData) => User.create(userData);
