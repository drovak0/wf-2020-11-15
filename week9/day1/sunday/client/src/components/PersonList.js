import { Link } from "@reach/router"
import axios from "axios"
import React from "react"

export default (props) => {
  const { removeFromDom } = props

  const deletePerson = (personId) => {
    axios.delete("http://localhost:8000/api/people/" + personId).then((res) => {
      removeFromDom(personId)
    })
  }

  return (
    <div>
      {props.people.map((person, idx) => {
        return (
          <p key={idx}>
            <Link to={"/" + person._id}>
              {person.lastName}, {person.firstName}
            </Link>
            |
            <button
              onClick={(e) => {
                deletePerson(person._id)
              }}
            >
              Delete
            </button>
          </p>
        )
      })}
    </div>
  )
}
