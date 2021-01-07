import React, { useState } from "react"
import style from "../MurtajaCard.module.css";    
    
const UserSearch = (props) => {
    const [searchZ, setsearchZ] = useState("");
    const [searchZError, setsearchZError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { searchZ };
    };
    
    const handlesearchZ = (e) => {
        setsearchZ(e.target.value);
        if(searchZ !== "zombie") {
            setsearchZError("Not this one!");
        }
        else{
            setsearchZError("Correct");
        }
    }
    
    return(
        <form onSubmit={createUser}>
            <div className={style.searchZ}>
                <label htmlFor="searchZ">What is the Correct Word?</label>
                <input onChange={ handlesearchZ } type="text" name="searchZ" />
                {
                    searchZError ?
                    <p style={{color:'red'}}>{ searchZError }</p> :
                    ""
                }
            </div>
        </form>
    )
};
export default UserSearch;