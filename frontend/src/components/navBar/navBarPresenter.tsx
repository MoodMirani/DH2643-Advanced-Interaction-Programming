// NavBarPresenter.tsx
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import NavBarView from "./NavBarView";
import { useAppDispatch } from "../../hooks/hooks";
import { setRegistered } from "../../redux/UserSlice";
import axios from "axios";
interface UserState {
  user: {
    FirstName: string;
    LastName: string;
    biography: string;
  };
}

const NavBar: FC = () => {
  const firstName = useAppSelector((state: UserState) => state.user.FirstName);
  const lastName = useAppSelector((state: UserState) => state.user.LastName);
  const biography = useAppSelector((state: UserState) => state.user.biography);
  const dispatch = useAppDispatch();
  const profilePicLink =
    "https://t4.ftcdn.net/jpg/05/12/20/15/360_F_512201553_ulIyOQmnFbKG3q4fwpoxLnF0r9VLGeWK.jpg";

  const handleLogoutClick = () => {
    axios
      .get("https://localhost:8080/api/auth/logout")
      .then(() => {
        console.log("Succesfully logged out");
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(setRegistered(false));
  };

  return (
    <NavBarView
      firstName={firstName}
      lastName={lastName}
      biography={biography}
      profilePicLink={profilePicLink}
      handleLogoutClick={handleLogoutClick}
    />
  );
};

export default NavBar;
