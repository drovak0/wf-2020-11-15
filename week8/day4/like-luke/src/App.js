import { Router } from "@reach/router";
import { useState } from 'react';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  // [x] store state of the form - to remain consistent accross multiple routes
  const [data, setData] = useState({
    select: 'ability',
    id: 0
  })
  // [x] install reach router
  // [ ] make component to show form
  // [ ] make component to display data
  return (
    <div>
      <h1>App</h1>
      <Form formInputs={data} updateFormInputs={setData} />

      <Router>
        <Display path="/:category/:id" />
      </Router>

    </div>
  )
}

export default App;
