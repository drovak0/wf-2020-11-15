import { useState } from 'react'

const CustomForm = (props) => {
  const [formInputs, setFormInputs] = useState({
    title: '',
    checkbox: false,
  })
  const [formInputsError, setFormInputsError] = useState({
    title: '',
    checkbox: 'Checkbox is required!',
  })

  const handleChange = (e) => {
    // what field is it
    console.log('e.target.value: ', e.target.value)
    console.log('e.target.name: ', e.target.name)
    console.log('e.target.checked: ', e.target.checked)
    console.log(formInputs)
    if (e.target.name === 'title') {
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value,
      })
      if (e.target.value.length < 1) {
        setFormInputsError({
          ...formInputsError,
          title: "Title is required!"
        })
      } else if (e.target.value.length < 3) {
        setFormInputsError({
          ...formInputsError,
          title: "Title must be 3 characters or longer!"
        })
      } else {
        setFormInputsError({
          ...formInputsError,
          title: "",
        })
      }
    }
    if (e.target.name === 'checkbox') {
      setFormInputs({
        [e.target.name]: e.target.checked,
      })
      if (e.target.checked === false) {
        setFormInputsError({
          ...formInputsError,
          checkbox: "Checkbox is required!"
        })
      } else {
        setFormInputsError({
          ...formInputsError,
          checkbox: ''
        })
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios
    // then
    // catch
    // (res) => {
    //   res.data.title
    //   setFormInputsError({
    //       ...formInputsError,
    //       title: res.data.title
    //     })
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input type="text" onChange={handleChange} name='title'/>
        {formInputsError.title ? <p style={{ color: "red" }}>{formInputsError.title}</p> : ""}
      </div>
      <div>
        <label>Is the movie good?: </label>
        Yes ? <input type="checkbox" onChange={handleChange} name='checkbox' value={formInputs.checkbox}/>
        {formInputs.checkbox === false ? <p style={{ color: "red" }}>{formInputsError.checkbox}</p> : ""}
      </div>
      <input type="submit" value="Create Movie" />
    </form>
  )
}

export default CustomForm
