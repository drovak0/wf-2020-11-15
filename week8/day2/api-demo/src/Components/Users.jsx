import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // fetch("https://api.mocki.io/v1/b043df5a")
    //   .then((response) => response.json())
    //   .then((response) => setUsers(response))

    axios
      .get("https://api.mocki.io/v1/b043df5a")
      .then((response) => {
        console.log(response)
        setUsers(response.data)
      })
  }, [])

  return (
    <div>
      { users.length > 0 && users.map((person, index) => {
          return (
            <div key={index}>
              {person.name} from {person.city}
            </div>
          )
        })}
    </div>
  )
}
export default Users
