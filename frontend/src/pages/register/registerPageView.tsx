import React, { FC, useEffect, useState } from "react";
import "./RegisterPage.scss";
import InputField from "../../components/input/InputFieldView";
import RoutingButton from "../../components/button/RoutingButtonView";
import Button from "../../components/button/ButtonView";
import Spinner from "../../components/spinner/Spinner";

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
  onRegisterClick: () => void;
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
  onRegisterClick,
  imageURL,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationTimer, setConfirmationTimer] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (showConfirmation) {
      const timer = window.setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
      setConfirmationTimer(timer);
    }

    return () => {
      if (confirmationTimer) {
        window.clearTimeout(confirmationTimer);
      }
    };
  }, [showConfirmation]);

  const handleRegisterClick = async () => {
    setIsLoading(true);
    // Perform the registration request here

    try {
      // Simulate an asynchronous API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Request completed successfully
      console.log("Registration successful!");

      // Show the confirmation message
      setShowConfirmation(true);
    } catch (error) {
      // Request failed
      console.error("Registration failed:", error);
    }

    setIsLoading(false);
  };
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
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button buttonName="Register" handleClick={onRegisterClick} />
            <RoutingButton
              buttonName="or log in to an existing account"
              linkUrl="/login"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterPageView;