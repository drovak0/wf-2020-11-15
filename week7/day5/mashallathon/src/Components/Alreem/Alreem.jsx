import style from "./Alreem.module.css"
import Component1 from "./MyComponents/Component1"
import Component2 from "./MyComponents/Component2"
import Component3 from "./MyComponents/Component3"

function Alreem() {
    return (
        <div className={style.container}>
        <h1>ALREEM</h1>
        <Component1 />
        <Component2 />
        <Component3 />
        </div>
    )
}

export default Alreem