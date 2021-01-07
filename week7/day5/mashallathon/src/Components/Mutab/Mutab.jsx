import Button from "../Monica/MonComponents/Button"
import style from "./Mutab.module.css"
import Component1 from "./MyComponents/Component1"
import Component2 from "./MyComponents/Component2"
import Component3 from "./MyComponents/Component3"

function Mutab() {
  return (
    <div className={ style.main }>
    <div className={style.container}>
      <h1>Mutab Alzubair</h1>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
    </div>
  )
}

export default Mutab
