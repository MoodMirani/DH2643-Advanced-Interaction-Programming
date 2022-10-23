import { Schema, model } from "mongoose";
//import { PubVisitSchema } from "./PubVisit";

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  //role: string;
  profile_img: string;
  bio: string;

  pub_visits: [IPubVisit];
}

export const userSchema = new Schema<IUser>({
  first_name: { type: String, unique: false, required: false },
  last_name: { type: String, unique: false, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 8, required: true },
  //role: { type: String, default: "Basic", required: true },
  profile_img: { type: String, unique: false, required: false },
  bio: { type: String, unique: false, required: false },
  pub_visits: [],
});
export const User = model<IUser>("User", userSchema);

export interface IPubVisit {
  pub: string;
  drink: string;
  patch: string;
}
const PubVisitSchema = new Schema<IPubVisit>({
  pub: { type: String, unique: false, required: true },
  drink: { type: String, unique: false, required: false },
  patch: { type: String, unique: false, required: false },
});
export const PubVisit = model<IPubVisit>("PubVisit", PubVisitSchema);

//export default UserModel;
