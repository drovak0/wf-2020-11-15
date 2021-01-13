import axios from "axios"
import { useEffect, useState } from "react"

function Display({ category, id }) {
  const [data, setData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/${category}/${id}`)
      .then((response) => {
        setErrorMessage('')
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error)
      })
  }, [category, id])

  if (errorMessage !== '') {
    return (
      <img
        src="https:external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FSnorlax.full.2036297.jpg&f=1&nofb=1"
        style={{width: '400px'}}
      />
    )
  }

  if (category === "ability") {
    return (
      <div>
        <h2>Ability</h2>
        {category}
        {id}
      </div>
    )
  }
  if (category === "pokemon") {
    return (
      <div>
        <h2>Pokemon</h2>
        <p>name: {data.name}</p>
        <p>height: {data.height}</p>
        <p>weight: {data.weight}</p>
      </div>
    )
  }
  if (category === "type") {
    return (
      <div>
        <h2>Type</h2>
        <p>name: {data.name}</p>
        <p>generation: {data.generation.name}</p>
      </div>
    )
  }
}

export default Display
