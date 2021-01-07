import style from "./Chris.module.css"
import Component1 from "./MyComponents/Component1"
import Component2 from "./MyComponents/Component2"
import Component3 from "./MyComponents/Component3"

function Chris() {
  return (
    <div className={style.container}>
      <h1>Cbaut</h1>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  )
}

export default Chris
