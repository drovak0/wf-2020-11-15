import { navigate } from "@reach/router"
import axios from "axios"
import { useState } from 'react'

const Login = ({ setUser }) => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/login", inputFields)
      .then((res) => {
        console.log(res.data.user)
        setUser(res.data.user)
        navigate('/dashboard')
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    console.log("changing state")
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        email
        <input type="text" name="email" onChange={handleChange}/>
      </p>
      <p>
        password
        <input type="text" name="password" onChange={handleChange}/>
      </p>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
