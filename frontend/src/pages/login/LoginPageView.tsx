// RegisterPageView.tsx
import React, { FC, useState } from "react";
import "./LoginPage.scss";
import InputField from "../../components/input/InputFieldView";
import RoutingButton from "../../components/button/RoutingButtonView";
import Button from "../../components/button/ButtonView";
import Spinner from "../../components/spinner/Spinner";

interface LoginPageViewProps {
  values: ValueProps;
  introText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginClick: () => void;
  imageURL: string;
  isLoading: boolean;
}

interface ValueProps {
  email: string;
  password: string;
}

const LoginPageView: FC<LoginPageViewProps> = ({
  values,
  handleChange,
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
        <InputField label={"Email"} name="email" onChange={handleChange} />
        <InputField
          label={"Password"}
          name="password"
          onChange={handleChange}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <RoutingButton
            buttonName="Login"
            linkUrl="/"
            handleClick={handleLoginClick}
          />
        )}
        <RoutingButton buttonName="or register an account" linkUrl="/" />
      </div>
    </div>
  );
};

export default LoginPageView;
