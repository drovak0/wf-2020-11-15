import { navigate } from "@reach/router"

function Form({ formInputs, updateFormInputs }) {
  const handleChangeSelect = (e) => {
    console.log(e.target.value)
    updateFormInputs({
      ...formInputs,
      select: e.target.value,
    })
  }
  const handleChangeId = (e) => {
    console.log(e.target.value)
    updateFormInputs({
      ...formInputs,
      id: e.target.value,
    })
  }

  const handleClick = (e) => {
    navigate(`/${formInputs.select}/${formInputs.id}`)
  }

  return (
    <div>
      <h2>Form</h2>
      <p>Search For</p>
      <select value={formInputs.select} onChange={handleChangeSelect}>
        <option value="pokemon">pokemon</option>
        <option value="type">type</option>
        <option value="ability">ability</option>
      </select>
      <p>ID:</p>
      <input type="number" value={formInputs.id} onChange={handleChangeId} />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Form
