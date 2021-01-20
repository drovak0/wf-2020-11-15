import { useState } from 'react'

const User = ({ user }) => {
  const [userStatus, setUserStatus] = useState(user.status)
  const handleClick = (e) => {
    if (e.target.name === 'ready') {
      setUserStatus("ready")
      // axios to save it on the server
    }
    if (e.target.name === 'not ready') {
      setUserStatus("not ready")
    }
    if (e.target.name === 'scared') {
      setUserStatus("scared")
    }
  }
  return (
    <tr>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>
        <button
          name="ready"
          style={userStatus === "ready" ? { backgroundColor: "green" } : {}}
          onClick={handleClick}
        >
          ready
        </button>
        <button
          name="not ready"
          style={userStatus === "not ready" ? { backgroundColor: "red" } : {}}
          onClick={handleClick}
        >
          not ready
        </button>
        <button
          name="scared"
          style={userStatus === "scared" ? { backgroundColor: "yellow" } : {}}
          onClick={handleClick}
        >
          scared
        </button>
      </td>
    </tr>
  )
}

export default User
