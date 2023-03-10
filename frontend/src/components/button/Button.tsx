import React from "react";
import "./Button.scss";

interface ButtonProps {
    buttonName: string;
    handleClick?: () => void;
  }

const Button = ({buttonName, handleClick}: ButtonProps) => {

    return(
        <div className="buttonContainer" onClick={handleClick}>
            <div className="buttonName">
                {buttonName}
            </div>
        </div>
    )

}

export default Button;
   