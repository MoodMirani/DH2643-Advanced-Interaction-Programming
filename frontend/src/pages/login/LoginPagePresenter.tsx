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
    "https://thumbs.dreamstime.com/b/inre-av-baren-kaf%C3%A9t-eller-st%C3%A5ngen-97547382.jpg";
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

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButtonClick = async () => {
    setIsLoading(true);
    // Perform the login request here

    try {
      // Simulate an asynchronous API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Request completed successfully
    } catch (error) {
      // Request failed
      console.error("Login failed:", error);
    }
  };

  const loginUser = () => {
    setIsLoading(true);
    axios
      .post("https://localhost:8080/api/auth/login", {
        email: EmailInput,
        password: PasswordInput,
      })
      .then(function (response) {
        console.log(response);
        console.log("Here", response.data.user._id);
        // Todo: Add response to redux state
        localStorage.setItem("userID", response.data.user._id);
        console.log("Login successful!");
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

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
      isLoading={isLoading}
    />
  );
};

export default LoginPagePresenter;
