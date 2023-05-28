// LoginPagePresenter.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setRegistered } from "../../redux/UserSlice";
import LoginPageView from "./LoginPageView";
import axios from "axios";

const LoginPagePresenter = () => {
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const dispatch = useAppDispatch();
  const imageURL =
    "https://static.vecteezy.com/system/resources/previews/009/248/892/non_2x/bar-or-pub-at-evening-with-alcohol-drinks-bottles-bartender-table-interior-and-chairs-in-indoor-room-in-flat-cartoon-illustration-vector.jpg";

  // onChange
  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInput(event.target.value);
  };

  const loginUser = () =>
    axios
      .post("https://localhost:8080/api/auth/login", {
        email: "uniktmail@unikt.se",
        password: "passwordunique",
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        console.log(response.data.user._id);
        // Todo: Add response to redux state
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.user._id);
      })
      .catch((error) => {
        console.log(error);
      });

  const handleLoginClick = () => {
    dispatch(setRegistered(true));
    loginUser();
  };

  const introText =
    "Welcome back to our pub visit logging application! It's great to see you again. If you're ready to reminisce about past pub adventures, discover new favorites, or share your experiences, please log in to your existing account. Happy logging!";
  return (
    <LoginPageView
      EmailInput={EmailInput}
      PasswordInput={PasswordInput}
      introText={introText}
      handleEmailInputChange={handleEmailInputChange}
      handlePasswordInputChange={handlePasswordInputChange}
      handleLoginClick={handleLoginClick}
      imageURL={imageURL}
    />
  );
};

export default LoginPagePresenter;
