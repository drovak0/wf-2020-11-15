import { Router } from '@reach/router';
import { useState } from 'react';
import './App.css';
import Dashboard from "./views/Dashboard";
import Login from './views/Login';
import Register from './views/Register';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <h1>Welcome to the app!</h1>
      {/* Good place for a header w/ links */}
      <Router>
        <Register path="/register" setUser={setUser} />
        <Login path="/login" setUser={setUser}  />
        <Dashboard path="/dashboard" user={user} />
      </Router>
      {/* footer */}
    </div>
  )
}

export default App;
