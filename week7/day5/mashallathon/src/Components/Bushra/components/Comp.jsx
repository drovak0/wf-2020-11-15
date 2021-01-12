import { useState } from 'react'
import style from "../Bushra.module.css";

function Comp() {
const [input, setInput] = useState('')

const handleChange = (e) => {
    setInput(e.target.value)
    if(input==='no'){
        alert(':(')
    }
}
return (
    <div>
        <div className={style.click}>
    <h4>Do you like photography?</h4>
    
    <input type="text" placeholder="Yes or No " onChange={handleChange}/>
    {input === 'yes' ? alert('Nice ') : ''}</div>
    </div>
    )
}

export default Comp