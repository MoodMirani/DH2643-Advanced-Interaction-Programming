// RegisterPagePresenter.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setFirstName,
  setLastName,
  setBiography,
  setRegistered,
  setEmail,
} from "../../redux/UserSlice";
import { updatePubVisits } from "../../redux/PubSlice";
import RegisterPageView from "./registerPageView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  biography: "",
};

const RegisterPagePresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const imageURL =
    "https://thumbs.dreamstime.com/b/inre-av-baren-kaf%C3%A9t-eller-st%C3%A5ngen-97547382.jpg";

  // onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const addUser = () => {
    setIsLoading(true);

    axios
      .post("https://localhost:8080/api/auth/register", {
        first_name: values.firstName,
        last_name: values.lastName,
        bio: values.biography,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        localStorage.setItem("userID", response.data.user._id);
        dispatch(setFirstName(response.data.user.first_name));
        dispatch(setLastName(response.data.user.last_name));
        dispatch(setBiography(response.data.user.bio));
        dispatch(setEmail(response.data.user.email));
        dispatch(setRegistered(true));
        dispatch(updatePubVisits([]));
        navigate("/addPubVisit");
      })
      .catch(function (error) {
        console.log(error);
        alert("Registration failed, please try again");
        navigate("/register");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterClick = () => {
    addUser();
  };

  const introText =
    "Welcome to our pub visit logging application! By logging your pub visits, you can keep track of your favorite pubs and review your pub experiences. Before you start logging your pub visits we kindly ask you to fill out your profile information.";

  return (
    <RegisterPageView
      values={values}
      handleChange={handleChange}
      introText={introText}
      onRegisterClick={handleRegisterClick}
      imageURL={imageURL}
      isLoading={isLoading}
    />
  );
};

export default RegisterPagePresenter;
