import React, { useState } from "react"
import MessageDisplay from "./Components/MessageDisplay"
import MessageForm from "./Components/MessageForm"

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messagezzzzzzzzz")

  return (
    <>
      <MessageForm setMessage={setCurrentMsg} message={ currentMsg }/>        
      <MessageDisplay message={currentMsg} />        
    </>
  )
}

export default App
