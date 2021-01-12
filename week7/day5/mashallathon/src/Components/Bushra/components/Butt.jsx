import style from "../Bushra.module.css";

function Component3() {
    const handleClick = (e) => {
    alert('Thanks for your time.')
    }

    return (
        
    <div>
        <div className={style.clickk}>
        <button onClick={ handleClick }>click here!</button></div>
    </div>
    )
}  
export default Component3 