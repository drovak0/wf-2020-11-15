import { Router } from "@reach/router"
import React from "react"
import Detail from "./views/Detail"
import Main from "./views/Main"
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Detail path="people/:id" />
        <Update path="people/:id/edit" />
      </Router>
    </div>
  )
}
export default App
