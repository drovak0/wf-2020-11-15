import { useState } from 'react'

function Component2() {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
      <h2>Athnan!</h2>
      <p>Enter secret password: </p>
      <input type="text" onChange={handleChange}/>
      {input === 'i<3coding' ? alert('Wooooooh!! ') : ''}
    </div>
  )
}

export default Component2
