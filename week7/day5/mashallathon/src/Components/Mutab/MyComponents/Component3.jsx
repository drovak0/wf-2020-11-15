import style from "../Mutab.module.css"

function Component3() {
    const handleClick = (e) => {
      alert('0508105410')
    }
  
    return (
      <div>
        <h2>Contact me!</h2>
        <button className={style.btn} onClick={ handleClick }>Click me to Show my Phone number</button>
      </div>
    )
  }
  
  export default Component3
  