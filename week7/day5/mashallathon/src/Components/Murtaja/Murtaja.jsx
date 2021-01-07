import React from "react";
import style from "./MurtajaCard.module.css";
import ProfilePic from "./MkComponents/ProfilePic.jsx";
import PersonalInfo from "./MkComponents/PersonalInfo.jsx";
import BoopButton from "./MkComponents/mashallahButton.jsx";
import UserSearch from "./MkComponents/UserSearch.jsx";

const Murtaja = () => {

    return (
      <div className={ style.main }>
        <ProfilePic />
        <PersonalInfo />
        <BoopButton />
        <UserSearch />
      </div>
    )
}

export default Murtaja;