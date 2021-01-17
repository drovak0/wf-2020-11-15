import axios from "axios"
import React, { useState } from "react"

export default () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault()
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  )
}
