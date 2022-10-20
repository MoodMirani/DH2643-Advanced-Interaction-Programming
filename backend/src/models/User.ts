import { Schema, model, connect } from "mongoose";

export interface User {
  username: string;
  email: string;
  password: string;
  role: string;
  favoriteDrinks?: [string];
  avatar?: string;
}

const schema = new Schema<User>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 8, required: true },
  role: { type: String, default: "Basic", required: true },
  favoriteDrinks: { type: [String], unique: false, required: false },
  avatar: { type: String, unique: false, required: false },
});
export const UserModel = model<User>("User", schema);
//export default UserModel;
