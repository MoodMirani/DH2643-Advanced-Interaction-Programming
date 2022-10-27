import React from "react";
import { useState } from "react";
import axios from "axios";
import "./SignUp.scss";
import SignUpView from "./SignUpView";
import { useAppDispatch } from "../../hooks";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from "../../redux/UserSlice";

export default function SignUp() {
  const [inputfirstname, setInputfirstname] = useState("");
  const [inputlastname, setInputlastname] = useState("");
  const [inputemail, setInputemail] = useState("");
  const [inputpassword, setInputpassword] = useState("");
  const dispatch = useAppDispatch();

  const addUser = () =>
    axios
      .post("https://localhost:8080/api/auth/register", {
        first_name: inputfirstname,
        last_name: inputlastname,
        password: inputemail,
        email: inputpassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  const print = () => {
    console.log(inputfirstname);
    console.log(inputlastname);
    console.log(inputemail);
    console.log(inputpassword);
  };

  const storeUser = () => {
    dispatch(setFirstName(inputfirstname));
    dispatch(setLastName(inputlastname));
    dispatch(setEmail(inputemail));
    dispatch(setPassword(inputpassword));
  };

  return (
    <SignUpView
      setFirstNameCB={setInputfirstname}
      setLastNameCB={setInputlastname}
      setInputemailCB={setInputemail}
      setInputpasswordCB={setInputpassword}
      addUserCB={addUser}
    />
  );
}
