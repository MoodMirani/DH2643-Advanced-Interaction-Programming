// import { Schema, model } from "mongoose";
// //import { PatchSchema, PatchModel, Patch } from "./Patch";

// export interface PubVisit {
//   pub: string;
//   drink: string;
//   patch: string;
// }

// export const PubVisitSchema = new Schema<PubVisit>({
//   pub: { type: String, unique: false, required: true },
//   drink: { type: String, unique: false, required: false },
//   patch: { type: String, unique: false, required: false },
// });
// export const PubVisitModel = model<PubVisit>("PubVisit", PubVisitSchema);

//import { Schema, model } from "mongoose";
//import { PatchSchema, PatchModel, Patch } from "./Patch";
//import { UserModel, UserSchema } from "./User";

// export interface PubVisit {
//   pub: string;
//   drink: string;
//   patch: string;
//   user: { required: true; type: Schema.Types.ObjectId; ref: "User" };
// }

// const schema = new Schema<PubVisit>({
//   pub: { type: String, unique: false, required: true },
//   drink: { type: String, unique: false, required: false },
//   patch: { type: String, unique: false, required: false },
//   user: [String],
// });
// export const PubVisitModel = model<PubVisit>("PubVisit", schema);
