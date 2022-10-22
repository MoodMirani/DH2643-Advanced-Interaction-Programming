import { Schema, model, connect } from "mongoose";

export interface User {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  //role: string;
  profile_img?: string;
  bio?: string;
}

const schema = new Schema<User>({
  first_name: { type: String, unique: false, required: false },
  last_name: { type: String, unique: false, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 8, required: true },
  //role: { type: String, default: "Basic", required: true },
  profile_img: { type: String, unique: false, required: false },
  bio: { type: String, unique: false, required: false },
});
export const UserModel = model<User>("User", schema);
//export default UserModel;
