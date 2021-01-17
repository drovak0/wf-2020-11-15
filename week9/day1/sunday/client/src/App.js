import { Router } from "@reach/router"
import React from "react"
import Detail from "./components/Detail"
import Main from "./Main"

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Detail path="people/:id" />
      </Router>
    </div>
  )
}
export default App
