import { Link } from "@reach/router"
import axios from "axios"
import React, { useEffect, useState } from "react"

export default (props) => {
  const [person, setPerson] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props.id)
      .then((res) => setPerson(res.data))
  }, [])

  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
    </div>
  )
}
