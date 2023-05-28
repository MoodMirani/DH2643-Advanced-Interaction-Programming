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
  isLoading: boolean;
}

const LoginPageView: FC<LoginPageViewProps> = ({
  EmailInput,
  PasswordInput,
  handleEmailInputChange,
  handlePasswordInputChange,
  introText,
  handleLoginClick,
  imageURL,
  isLoading,
}) => {
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <img src={imageURL} alt="My Image" />
        <p className="loginIntroText">{introText}</p>
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
          <Button buttonName="Login" handleClick={handleLoginClick} />
        )}
        <RoutingButton buttonName="or register an account" linkUrl="/" />
      </div>
    </div>
  );
};

export default LoginPageView;
