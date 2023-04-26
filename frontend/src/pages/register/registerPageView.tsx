import React, { useState } from "react";
import "./registerPageView.scss";
import InputField from "../../components/input/InputFieldView";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setFirstName,
  setLastName,
  setBiography,
  setRegistered,
} from "../../redux/UserSlice";
// import { Button } from "../../components/Button";

const RegisterPageView = () => {
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

  const handleSubmitClick = () => {
    dispatch(setFirstName(FirstNameInput));
    dispatch(setLastName(LastNameInput));
    dispatch(setBiography(biographyInput));
    dispatch(setRegistered(true));
  };
  const introText =
    "Welcome to our pub visit logging application! By logging your pub visits, you can keep track of your favorite pubs and review your pub experiences. Before you start logging your pub visits we kindly ask you to fill out your profile information. ";

  return (
    <div className="registerPage">
      <div className="registerContainer">
        <img src={imageURL} alt="My Image" />
        <p className="introText">{introText}</p>

        <div className="userName">
          <InputField
            label={"First Name"}
            name="firstName"
            onChange={handleFirstNameChange}
          />
          <InputField
            label={"Last Name"}
            name="lastName"
            onChange={handleLastNameChange}
          />
        </div>
        <InputField
          label={"Short presentation of yourself"}
          name="biography"
          onChange={handlebiographyChange}
        />
        <div className="submitButton" onClick={handleSubmitClick}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default RegisterPageView;
