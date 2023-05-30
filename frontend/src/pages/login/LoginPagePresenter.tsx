// LoginPagePresenter.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setFirstName,
  setLastName,
  setBiography,
  setRegistered,
} from "../../redux/UserSlice";
import LoginPageView from "./LoginPageView";
import axios from "axios";
import { updatePubVisits } from "../../redux/PubSlice";
import { useNavigate } from "react-router-dom";

const LoginPagePresenter = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageURL =
    "https://thumbs.dreamstime.com/b/inre-av-baren-kaf%C3%A9t-eller-st%C3%A5ngen-97547382.jpg";
  // onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);

  const loginUser = () => {
    setIsLoading(true);
    axios
      .post("https://localhost:8080/api/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        dispatch(setFirstName(response.data.user.first_name));
        dispatch(setLastName(response.data.user.last_name));
        dispatch(setBiography(response.data.user.bio));
        dispatch(updatePubVisits(response.data.user.pub_visits));
        localStorage.setItem("userID", response.data.user._id);
        dispatch(setRegistered(true));
      })
      .catch(function (error) {
        console.log(error);
        navigate("/login");
        alert("Login failed, please try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoginClick = () => {
    loginUser();
  };

  const introText =
    "Welcome back to our pub visit logging application! It's great to see you again. If you're ready to reminisce about past pub adventures, discover new favorites, or share your experiences, please log in to your existing account. Happy logging!";
  return (
    <LoginPageView
      values={values}
      handleChange={handleChange}
      introText={introText}
      handleLoginClick={handleLoginClick}
      imageURL={imageURL}
      isLoading={isLoading}
    />
  );
};

export default LoginPagePresenter;
