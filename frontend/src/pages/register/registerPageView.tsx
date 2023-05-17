// RegisterPageView.tsx
import React, { FC } from "react";
import "./RegisterPage.scss";
import InputField from "../../components/input/InputFieldView";
import Button from "../../components/button/ButtonView";

interface RegisterPageViewProps {
  FirstNameInput: string;
  LastNameInput: string;
  biographyInput: string;
  EmailInput: string;
  PasswordInput: string;
  introText: string;
  handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlebiographyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmitClick: () => void;
  imageURL: string;
}

const RegisterPageView: FC<RegisterPageViewProps> = ({
  FirstNameInput,
  LastNameInput,
  biographyInput,
  EmailInput,
  PasswordInput,
  introText,
  handleFirstNameChange,
  handleLastNameChange,
  handlebiographyChange,
  handleEmailInputChange,
  handlePasswordInputChange,
  handleSubmitClick,
  imageURL,
}) => {
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
        <div className="userName">
          <InputField
            label={"Email"}
            name="email"
            onChange={handleEmailInputChange}
          />
          <InputField
            label={"Password"}
            name="password"
            onChange={handlePasswordInputChange}
          />
        </div>
        <InputField
          label={"Short presentation of yourself"}
          name="biography"
          onChange={handlebiographyChange}
        />
        <div className="submitButton" onClick={handleSubmitClick}>
          Register
        </div>
        <div className="submitButton">
          <Button
            buttonName="or log in to an existing account"
            linkUrl="/login"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPageView;
