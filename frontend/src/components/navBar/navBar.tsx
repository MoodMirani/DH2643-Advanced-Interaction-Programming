import React from "react";
import "./navBar.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import Button from "../button/Button";

export default function NavBar() {
  const firstName = useAppSelector((state) => state.user.FirstName);
  const lastName = useAppSelector((state) => state.user.LastName);
  const biography = useAppSelector((state) => state.user.biography);
  const profilePicLink =
    "https://t4.ftcdn.net/jpg/05/12/20/15/360_F_512201553_ulIyOQmnFbKG3q4fwpoxLnF0r9VLGeWK.jpg";

  const handleclick = () => {};

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
        </div>
      </div>
    </div>
  );
}
