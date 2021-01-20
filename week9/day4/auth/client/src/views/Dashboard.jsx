import { navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react"
import User from "../components/User"

const Dashboard = ({ user }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    // load all the users from the db
    console.log(user)
    axios
      .get("http://localhost:8000/api/users", { withCredentials: true })
      .then((res) => {
        console.log(res.data.users)
        setUsers(res.data.users)
      })
      .catch((err) => console.log(err))
  }, [user])

  const handleClick = (e) => {
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res)
        navigate("/login")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Welcome {user && user.firstName} to the dashboard component!</h1>
      <button onClick={handleClick}>Logout</button>
      {users.length > 0 &&
        users.map((user) => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Dashboard
