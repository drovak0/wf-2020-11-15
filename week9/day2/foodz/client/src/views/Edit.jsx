import { navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react"
import FoodForm from "../components/FoodForm"
// const Edit = (props) => {
//   const { id } = props

const Edit = ({ id }) => {
  const [errors, setErrors] = useState([])
  const [formInputs, setFormInputs] = useState({
    name: "",
    category: "",
    imgUrl: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:8000/api/food/" + id, formInputs)
      .then((res) => {
        console.log(res.data)
        navigate("/")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors // Get the errors from err.response.data
        const errorArr = [] // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr)
      })
  }

  const handleChange = (e) => {
    console.log("e.target.name: ", e.target.name)
    console.log("e.target.value: ", e.target.value)

    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/food/" + id)
      .then((res) => {
        setFormInputs(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleClick = (e) => {
    const r = window.confirm("Are you sure you want to delete it!")
    if (r === true) {
      axios
        .delete("http://localhost:8000/api/food/" + id)
        .then((res) => {
          navigate("/")
        })
        .catch(err => console.log(err))
    } else {
      alert('ok')
    }
  }

  return (
    <div>
      <h1>Edit {id}</h1>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <FoodForm
        formInputs={formInputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText={"Save"}
      />
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}
export default Edit
