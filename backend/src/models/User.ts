import { Date, Schema, model } from "mongoose";

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_img: string;
  bio: string;
  pub_visits: [IPubVisit];
}

export const userSchema = new Schema<IUser>({
  first_name: { type: String, unique: false, required: false },
  last_name: { type: String, unique: false, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 8, required: true },
  profile_img: { type: String, unique: false, required: false },
  bio: { type: String, unique: false, required: false },
  pub_visits: [],
});
export const User = model<IUser>("User", userSchema);

export interface IPubVisit {
  pubName: String;
  visitDate: string;
  review: string;
  comment: String;
}
const PubVisitSchema = new Schema<IPubVisit>({
  pubName: { type: String, unique: false, required: true },
  visitDate: { type: String, unique: false, required: false },
  review: { type: String, unique: false, required: false },
  comment: { type: String, unique: false, required: false },
});
export const PubVisit = model<IPubVisit>("PubVisit", PubVisitSchema);
