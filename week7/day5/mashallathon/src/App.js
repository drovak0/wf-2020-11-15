import './App.css';
import Abdullah from "./Components/Abdullah/Abdullah";
import Alreem from './Components/Alreem/Alreem.jsx';
import Chris from './Components/Chris/Chris.jsx';
import Demo from './Components/Demo/Demo.jsx';
import Mohammed from './Components/Mohammed/Mohammed.jsx';
import Monica from './Components/Monica/Monica.jsx';
import Murtaja from './Components/Murtaja/Murtaja.jsx';
import Mutab from './Components/Mutab/Mutab.jsx';
import Susie from "./Components/Susie/Susie";
import Bushra from "./Components/Bushra/Bushra";

function App() {
  return (
    <div className="flex">
      <Chris />
      <Monica />
      <Alreem />
      <Mohammed />
      <Mutab />
      <Murtaja />
      <Demo />
      <Abdullah  />
      <Susie />
      <Bushra />
    </div>
  )
}

export default App;
