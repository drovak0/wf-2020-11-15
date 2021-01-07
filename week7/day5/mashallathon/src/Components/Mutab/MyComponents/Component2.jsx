import { useState } from 'react'
import Button from '../../Monica/MonComponents/Button'

function Component2() {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
    
      <p><b>1 + 1 = ? </b></p>
      <input type="text" onChange={handleChange}/>
      {input === '11' ? alert('You Are the best ') : ''}
      {input === '2' ? alert('Try Again ') : ''}
    </div>
  )
}

export default Component2
