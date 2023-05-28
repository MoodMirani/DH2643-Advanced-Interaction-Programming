// RegisterPagePresenter.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setFirstName,
  setLastName,
  setBiography,
  setRegistered,
} from "../../redux/UserSlice";
import RegisterPageView from "./registerPageView";
import axios from "axios";

const RegisterPagePresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [FirstNameInput, setFirstNameInput] = useState("");
  const [LastNameInput, setLastNameInput] = useState("");
  const [biographyInput, setbiographyInput] = useState("");
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");

  const imageURL =
    "https://static.vecteezy.com/system/resources/previews/009/248/892/non_2x/bar-or-pub-at-evening-with-alcohol-drinks-bottles-bartender-table-interior-and-chairs-in-indoor-room-in-flat-cartoon-illustration-vector.jpg";

  // onChange
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstNameInput(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(event.target.value);
  };

  const handlebiographyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setbiographyInput(event.target.value);
  };

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

  const addUser = () =>
    axios
      .post("https://localhost:8080/api/auth/register", {
        first_name: FirstNameInput,
        last_name: LastNameInput,
        bio: biographyInput,
        email: PasswordInput,
        password: EmailInput,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  const handleRegisterClick = () => {
    dispatch(setFirstName(FirstNameInput));
    dispatch(setLastName(LastNameInput));
    dispatch(setBiography(biographyInput));
    dispatch(setRegistered(true));
    addUser();
  };

  const introText =
    "Welcome to our pub visit logging application! By logging your pub visits, you can keep track of your favorite pubs and review your pub experiences. Before you start logging your pub visits we kindly ask you to fill out your profile information.";

  return (
    <RegisterPageView
      FirstNameInput={FirstNameInput}
      LastNameInput={LastNameInput}
      biographyInput={biographyInput}
      EmailInput={EmailInput}
      PasswordInput={PasswordInput}
      introText={introText}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handlebiographyChange={handlebiographyChange}
      handleEmailInputChange={handleEmailInputChange}
      handlePasswordInputChange={handlePasswordInputChange}
      onRegisterClick={handleRegisterClick}
      imageURL={imageURL}
    />
  );
};

export default RegisterPagePresenter;
