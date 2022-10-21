import express from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/User";

export async function register(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction //Should we not call next somewhere below?
) {
  const { username, password, email } = req.body;
  if (password.length < 8) {
    return res
      .status(400)
      .send({ message: "Less that 8 characters in password." });
  }

  bcrypt.hash(password, 9).then(async (hash) => {
    try {
      await UserModel.create({ username, password: hash, email }).then((user) =>
        res.status(200).send({ message: "User created.", user })
      );
    } catch (error) {
      res
        .status(401)
        .send({ message: "User not created.", error: error.message });
    }
  });
}

export async function login(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Password or username missing." });
  }
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      res
        .status(401)
        .json({ message: "Unable to login.", error: "No user found." });
    } else {
      //Here, compare the given hashed password with the hashed password in DB.
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          res.status(200).json({ message: "Logged in.", user });
        } else {
          res.status(400).json({ message: "Login failed." });
        }
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error logging in.", error: error.message });
  }
}
