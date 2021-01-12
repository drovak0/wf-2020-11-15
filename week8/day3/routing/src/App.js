import { Link, Router } from "@reach/router"
import { useEffect, useState } from 'react'


const Home = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const int = setInterval(
      () => {
        console.log(new Date().toLocaleString())
        setIsActive(!isActive)
        console.log(`isActive: `, isActive);
      },
      1000
    )

    // change class name or something like that
    // add a class

    // remove a class

    return function clearInt() {
      clearInterval(int)
    }
  })

  return (
    <div>
      <h1 className={isActive ? 'active' : ''}>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
    </div>
  )
}
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

export default App
