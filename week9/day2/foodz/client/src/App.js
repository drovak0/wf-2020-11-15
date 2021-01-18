import { Router } from '@reach/router';
import Edit from './views/Edit';
import Home from './views/Home';
import New from './views/New';

function App() {

  return (
    <div>
      <Router>
        <Home path="/"/>
        <New path="/new"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
