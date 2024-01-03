import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true });

export const User = model("User", UserSchema);
