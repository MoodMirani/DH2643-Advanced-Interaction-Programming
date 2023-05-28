import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface RoutingButtonViewProps {
  buttonName: string;
  handleClick?: () => void;
  linkUrl: string;
}

const RoutingButtonView = ({
  buttonName,
  handleClick,
  linkUrl,
}: RoutingButtonViewProps) => {
  return (
    <Link to={linkUrl} className="buttonContainer" onClick={handleClick}>
      {buttonName}
    </Link>
  );
};

export default RoutingButtonView;
