// RegisterPageView.tsx
import React, { FC, useState } from "react";
import "./LoginPage.scss";
import InputField from "../../components/input/InputFieldView";
import RoutingButton from "../../components/button/RoutingButtonView";
import Button from "../../components/button/ButtonView";
import Spinner from "../../components/spinner/Spinner";

interface LoginPageViewProps {
  EmailInput: string;
  PasswordInput: string;
  introText: string;
  handleEmailInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleLoginClick: () => void;
  imageURL: string;
}

const LoginPageView: FC<LoginPageViewProps> = ({
  EmailInput,
  PasswordInput,
  handleEmailInputChange,
  handlePasswordInputChange,
  introText,
  handleLoginClick,
  imageURL,
}) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButtonClick = async () => {
    setIsLoading(true);
    // Perform the login request here

    try {
      // Simulate an asynchronous API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Request completed successfully
      console.log("Login successful!");
    } catch (error) {
      // Request failed
      console.error("Login failed:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className="registerPage">
      <div className="registerContainer">
        <img src={imageURL} alt="My Image" />
        <p className="introText">{introText}</p>
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
        {isLoading ? (
          <Spinner />
        ) : (
          <Button buttonName="Login" handleClick={handleLoginButtonClick} />
        )}
        <RoutingButton buttonName="or register an account" linkUrl="/" />
      </div>
    </div>
  );
};

export default LoginPageView;
