import React, { FC, useEffect, useState } from "react";
import "./RegisterPage.scss";
import InputField from "../../components/input/InputFieldView";
import RoutingButton from "../../components/button/RoutingButtonView";
import Button from "../../components/button/ButtonView";
import Spinner from "../../components/spinner/Spinner";

interface ValueProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  biography: string;
}

interface RegisterPageViewProps {
  values: ValueProps;
  introText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegisterClick: () => void;
  imageURL: string;
  isLoading: boolean;
}

const RegisterPageView: FC<RegisterPageViewProps> = ({
  values,
  handleChange,
  introText,
  onRegisterClick,
  imageURL,
  isLoading,
}) => {
  return (
    <div className="registerPage">
      <div className="registerContainer">
        <img src={imageURL} alt="My Image" />
        <p className="registerIntroText">{introText}</p>
        <div className="doubleField">
          <InputField
            label={"First Name"}
            name="firstName"
            onChange={handleChange}
          />
          <InputField
            label={"Last Name"}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="doubleField">
          <InputField label={"Email"} name="email" onChange={handleChange} />
          <InputField
            label={"Password (at least 9 characters)"}
            name="password"
            onChange={handleChange}
          />
        </div>
        <InputField
          label={"Short presentation of yourself"}
          name="biography"
          onChange={handleChange}
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
