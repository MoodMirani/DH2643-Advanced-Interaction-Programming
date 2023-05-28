// NavBarView.tsx
import React, { FC } from "react";
import "./navBar.scss";
import RoutingButton from "../button/RoutingButtonView";
import Button from "../button/ButtonView";

interface NavBarViewProps {
  firstName: string;
  lastName: string;
  biography: string;
  profilePicLink: string;
  handleLogoutClick: () => void;
}

const NavBarView: FC<NavBarViewProps> = ({
  firstName,
  lastName,
  biography,
  profilePicLink,
  handleLogoutClick,
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
          <RoutingButton buttonName="My Visited Pubs" linkUrl="/visitedPubs" />
          <RoutingButton buttonName="Add a pubvisit" linkUrl="/addPubVisit" />
          <Button buttonName="Log out" handleClick={handleLogoutClick} />
        </div>
      </div>
    </div>
  );
};

export default NavBarView;
