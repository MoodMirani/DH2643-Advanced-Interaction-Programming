import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonName: string;
  handleClick?: () => void;
}

const ButtonView = ({ buttonName, handleClick }: ButtonProps) => {
  return (
    <div className="buttonContainer" onClick={handleClick}>
      {buttonName}
    </div>
  );
};

export default ButtonView;
