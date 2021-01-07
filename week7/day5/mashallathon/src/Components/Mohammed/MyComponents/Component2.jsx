import { useState } from 'react'

function Component2() {
const [input, setInput] = useState('')

const handleChange = (e) => {
    setInput(e.target.value)
    if(input==='no'){
        alert(' please try to swimming ')
    }
}
return (
    <div>
    <h2>Do you like swimming?</h2>
    
    <input type="text" placeholder="Yes or No " onChange={handleChange}/>
    {input === 'yes' ? alert('Great continued! ') : ''}
    </div>
    )
}

export default Component2