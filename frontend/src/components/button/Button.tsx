import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonName: string;
  handleClick?: () => void;
  linkUrl: string;
}

const Button = ({ buttonName, handleClick, linkUrl }: ButtonProps) => {
  return (
    <Link to={linkUrl} className="buttonContainer" onClick={handleClick}>
      {buttonName}
    </Link>
  );
};

export default Button;
