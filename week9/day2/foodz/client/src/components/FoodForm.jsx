const FoodForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
        name
        <input
          type="text"
          name="name"
          value={props.formInputs.name}
          onChange={props.handleChange}
        />
      </p>
      <p>
        category
        <input
          type="text"
          name="category"
          value={props.formInputs.category}
          onChange={props.handleChange}
        />
      </p>
      <p>
        imgUrl
        <input
          type="text"
          name="imgUrl"
          value={props.formInputs.imgUrl}
          onChange={props.handleChange}
        />
      </p>
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

export default FoodForm