// NavBarPresenter.tsx
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import NavBarView from "./NavBarView";

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
  const profilePicLink =
    "https://t4.ftcdn.net/jpg/05/12/20/15/360_F_512201553_ulIyOQmnFbKG3q4fwpoxLnF0r9VLGeWK.jpg";

  const handleclick = () => {};

  return (
    <NavBarView
      firstName={firstName}
      lastName={lastName}
      biography={biography}
      profilePicLink={profilePicLink}
      handleclick={handleclick}
    />
  );
};

export default NavBar;
