// NavBarView.tsx
import React, { FC } from "react";
import "./navBar.scss";
import Button from "../button/ButtonView";

interface NavBarViewProps {
  firstName: string;
  lastName: string;
  biography: string;
  profilePicLink: string;
  handleclick: () => void;
}

const NavBarView: FC<NavBarViewProps> = ({
  firstName,
  lastName,
  biography,
  profilePicLink,
  handleclick,
}) => {
  return (
    <div>
      <div className="navBar">
        <div className="circular-image">
          <img src={profilePicLink} alt="A profile picture" />
        </div>
        <div className="nameHeader">{firstName + " " + lastName}</div>
        <div className="biography">{biography}</div>

        <div className="profileButtons">
          <Button buttonName="My Visited Pubs" linkUrl="visitedPubs" />
          <Button buttonName="Add a pubvisit" linkUrl="addPubVisit" />
        </div>
      </div>
    </div>
  );
};

export default NavBarView;
