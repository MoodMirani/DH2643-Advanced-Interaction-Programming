import express from "express";
import { register, login } from "./Auth";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);

//Updating a user could be done here, something like
//import userAuth and updateUser from Auth,
//router.route("/updateUser").put(userAuth, updateUser)
export default router;
