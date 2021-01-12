import React from "react";

import Info from "./components/Info.jsx";
import style from "./Bushra.module.css";
import Butt from "./components/Butt.jsx";
import Comp from "./components/Comp.jsx"


const Bushra = () => {

    return (
      <div className={ style.main }>
        <Info />
        <Comp />
        <Butt />
        
      </div>
    )
}

export default Bushra;