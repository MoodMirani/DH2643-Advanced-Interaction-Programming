import express from "express";
import { register } from "./Auth";

const router = express.Router();
router.route("/register").post(register);

export default router;
