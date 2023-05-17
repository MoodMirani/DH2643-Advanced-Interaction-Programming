// RegisterPageView.tsx
import React, { FC } from "react";
import "./LoginPage.scss";
import InputField from "../../components/input/InputFieldView";
import Button from "../../components/button/ButtonView";

interface LoginPageViewProps {
  EmailInput: string;
  PasswordInput: string;
  introText: string;
  handleEmailInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmitClick: () => void;
  imageURL: string;
}

const LoginPageView: FC<LoginPageViewProps> = ({
  EmailInput,
  PasswordInput,
  handleEmailInputChange,
  handlePasswordInputChange,
  introText,
  handleSubmitClick,
  imageURL,
}) => {
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
        <div className="submitButton" onClick={handleSubmitClick}>
          Login
        </div>
        <div className="submitButton">
          <Button buttonName="or register an account" linkUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default LoginPageView;
