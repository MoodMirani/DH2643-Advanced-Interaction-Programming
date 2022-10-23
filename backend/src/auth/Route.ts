import express from "express";
import { register, login, logout } from "./Auth";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

//Updating a user could be done here, something like
//import userAuth and updateUser from Auth,
//router.route("/updateUser").put(userAuth, updateUser)
export default router;
