import axios from 'axios'
import React, { useEffect, useState } from "react"
import FoodList from '../components/FoodList'

const Home = () => {
  const [ foodz, setFoodz ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/food')
    .then((res) => {
      setFoodz(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return <div>
    <h1>Home</h1>
    <FoodList data={foodz} />
  </div>
}
export default Home
