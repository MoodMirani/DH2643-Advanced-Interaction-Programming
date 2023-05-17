// RegisterPagePresenter.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setFirstName,
  setLastName,
  setBiography,
  setRegistered,
} from "../../redux/UserSlice";
import RegisterPageView from "./RegisterPageView";
import axios from "axios";

const RegisterPagePresenter = () => {
  const [FirstNameInput, setFirstNameInput] = useState("");
  const [LastNameInput, setLastNameInput] = useState("");
  const [biographyInput, setbiographyInput] = useState("");
  const dispatch = useAppDispatch();
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

  const addUser = () =>
    axios
      .post("https://localhost:8080/api/auth/register", {
        first_name: FirstNameInput,
        last_name: LastNameInput,
        password: "email2424324@example.com",
        email: "pass234234word",
        bio: biographyInput,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  const handleSubmitClick = () => {
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
      introText={introText}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handlebiographyChange={handlebiographyChange}
      handleSubmitClick={handleSubmitClick}
      imageURL={imageURL}
    />
  );
};

export default RegisterPagePresenter;
