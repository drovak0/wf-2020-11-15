import React from "react"

export default (props) => {
  return (
    <div>
      {props.people.map((person, idx) => {
        return (
          <p key={idx}>
            {person.firstName} {person.lastName} {person._id}
          </p>
        )
      })}
    </div>
  )
}
