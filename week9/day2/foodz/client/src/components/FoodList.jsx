import FoodSingle from '../components/FoodSingle'

const FoodList = (props) => {

  return (
    <div>
      {props.data.length > 0 &&
        props.data.map((food) => <FoodSingle key={food._id} food={food}/>)}
    </div>
  )
}

export default FoodList
