import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import "./App.css"
import CustomForm from './components/CustomForm'

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(":8000"))

  const [message, setMessage] = useState('')

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log("Is this running?")
    socket.on("send_data_to_all_other_clients", (data) => {
      console.log(data)
      console.log('yoooooo')
      setMessage(data)
    })
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true)
  }, [])

  const handleClick = (e) => {
    console.log("button clicked")
    socket.emit("event_from_client", "hello from sockets!")
  }

  return (
    <div className="App">
      {/* <h1>Socket Test</h1>
      <p>
        {message}
      </p>
      <button onClick={handleClick}>Click Me</button> */}
      <h1>Checklist && Front-end Validations</h1>
      <CustomForm />
    </div>
  )
}

export default App
