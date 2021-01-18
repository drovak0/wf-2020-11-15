import { Link } from '@reach/router'

const FoodSingle = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.food.name}</p>
      <p>{props.food.category}</p>
      <img src={props.food.imgUrl} alt={props.food.name} style={{width: '150px'}}/>
      {/* <Link to={'/edit/' + props.food._id}><button>Edit</button></Link> */}
      <Link to={`/edit/${props.food._id}`}><button>Edit</button></Link>
    </div>
  )
}

export default FoodSingle