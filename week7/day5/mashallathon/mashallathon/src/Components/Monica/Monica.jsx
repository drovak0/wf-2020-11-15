import React from "react";
import style from "./Monica.module.css";

const Monica = () => {
    return (
      <div className={ style.main }>
          {/* COMPONENT 1 Name and picture */}
        <h1>MONICA IS HERE</h1>
        <img
          className={style.profilePic}
          src="https://paintingvalley.com/drawings/short-hair-girl-drawing-36.jpg"
          alt="monica"
        />
        {/* COMPONENT 2 Infos */}
        <div className={style.part2}>
            <p><span>Education:</span> Bachelor's in Business Admin - Accounting</p>
            <p><span>Favorite Language:</span> Python, C#</p>
            <p><span>Hobbies:</span> Cooking, Eating, Kickboxing, Powerlifting, Coding, Anime</p>
        </div>
        {/* COMPONENT 3 Da Button */}
        <button className={style.btn}>Click Me!</button>
      </div>
    )
}

export default Monica