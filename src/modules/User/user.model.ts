import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "name is required."],
    trim: true,
    minlength: [3, "name must be at least 3 characters long."],
    maxlength: [30, "name must be less than 30 characters long."],
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email address."],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export const UserModel = model<TUser>("User", userSchema);
