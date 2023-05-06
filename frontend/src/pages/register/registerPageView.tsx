// RegisterPageView.tsx
import React, { FC } from "react";
import "./RegisterPage.scss";
import InputField from "../../components/input/InputFieldView";

interface RegisterPageViewProps {
  FirstNameInput: string;
  LastNameInput: string;
  biographyInput: string;
  introText: string;
  handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlebiographyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClick: () => void;
  imageURL: string;
}

const RegisterPageView: FC<RegisterPageViewProps> = ({
  FirstNameInput,
  LastNameInput,
  biographyInput,
  introText,
  handleFirstNameChange,
  handleLastNameChange,
  handlebiographyChange,
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
