import style from "../Monica.module.css"
import React, {useState } from "react";

const Form = () => {
    const [words, setWords] = useState("")
    const wordsHandler = (e) => {
        console.log(e)
        setWords(e.target.value)
    }
    return (
        <div className={style.monForm}>
            <h4>Type Something</h4>
            <input type="text" onChange={wordsHandler}/>
            <div className={style.wordsOnScreen}>
                {words}
            </div>
        </div>
    )
}

export default Form