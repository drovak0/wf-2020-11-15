import React, { useState } from "react";
import style from "./Monica.module.css";
import ProfilePic from "./MonComponents/ProfilePic.jsx"
import Info from "./MonComponents/Info.jsx"
import Button from "./MonComponents/Button.jsx"
import Form from "./MonComponents/Form.jsx"

const Monica = () => {
  const[bubbles, setBubbles] =useState([
    {
      // default is array of objects
    },
  ])
    return (
      <div className={ style.main }>
          {/* COMPONENT 1 Name and picture */}
        <ProfilePic />
        {/* COMPONENT 4 Form */}
        <Form />
        {/* COMPONENT 3 Da Button */}
        <Button bubbles={bubbles} setBubbles={setBubbles} />
        {/* COMPONENT 2 Infos */}
        <Info />
      </div>
    )
}

export default Monica