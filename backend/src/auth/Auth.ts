import express from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const jwtSecret = process.env.JWT_SECRET;

export async function register(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction //Should we not call next somewhere below?
) {
  const { first_name, last_name, email, password } = req.body;
  if (password.length < 8) {
    return res
      .status(400)
      .send({ message: "Less that 8 characters in password." });
  }
  bcrypt.hash(password, 9).then(async (hash) => {
    try {
      await User.create({
        first_name,
        last_name,
        email,
        password: hash,
      }).then((user) => {
        const maxAge = 4 * 50 * 50;
        const token = jwt.sign({ id: user._id, email }, jwtSecret, {
          expiresIn: maxAge,
        });
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 2000 }); //We need https!
        res.status(201).send({ message: "User created.", user });
      });
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
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Password or email missing." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(401)
        .json({ message: "Unable to login.", error: "No user found." });
    } else {
      //Here, compare the given hashed password with the hashed password in DB.
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const maxAge = 4 * 50 * 50;
          const token = jwt.sign({ id: user._id, email }, jwtSecret, {
            expiresIn: maxAge,
          });
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 2000,
          });
          res.status(200).json({ message: "Logged in.", user });
        } else {
          res.status(401).json({ message: "Login failed." });
        }
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error logging in.", error: error.message });
  }
}

export function logout(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
}

//Middleware for authenticating a user.
export function userAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction //Should we not call next somewhere below?
) {
  const token = req.cookies.jwt;
  if (token) {
    /**In jsonwebtoken.verify, the callback (3rd param) is called with the decoded payload
     * if the signature is valid, if not, it will be called with the error.
     */
    jwt.verify(token, jwtSecret, (err: any, decodedToken: string) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized." });
      } else {
        next();
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Unauthorized, token unavailable." });
  }
}
