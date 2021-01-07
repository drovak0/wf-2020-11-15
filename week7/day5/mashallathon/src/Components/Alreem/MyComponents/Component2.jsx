import style from './Component1.module.css'
import { useState } from 'react'

function Component2() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const click = (e) => {
        if(input < 1) {
            alert("no secret was entered :(")
            }
            else{
                alert("Your secret is save with me ;)")
                setInput('');
            }
    }
    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault()}>
            <div>
                <label>Tell me a secret </label> 
                <input type="text" onChange={handleChange} />
            </div>
            <button onClick={ click }>Submit</button>
        </form>
        </div>
    )
}

export default Component2