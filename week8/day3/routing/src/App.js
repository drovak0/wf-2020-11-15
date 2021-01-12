import { Link, Router } from "@reach/router";
// import './App.css';

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
  </div>
)

const Dash = () => (
  <div>
    <h1>Dash</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
  </div>
)

const DetailDogComponent = (props) => {
  return <p>You are looking at the dog with id = {props.id}</p>
}

function App() {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
      <DetailDogComponent path="/dogs/:id" />
    </Router>
  )
}

export default App;
