import style from "../MurtajaCard.module.css";

const PersonalInfo = () => {
    return (
        <div className={style.PersonalInfo}>
            <h4>Information</h4>
            <p><span>Education:</span> Bachelor's in Police academy - Officer</p>
            <p><span>Work Experince:</span> Police officer in Raccon City, I can Kill 50 zombies in 2 minutes</p>
            <p><span>Favorite Programming Language:</span> JavaScript, Python</p>
            <p><span>Hobbies:</span> Killing Zombies, Playing games that Killing zombies, Drive Fast to kill zombies</p>
            <p><span>Somethig Unique:</span> My real Name is Murtaja, it's an unique Name lol</p>
        </div>
    )
}

export default PersonalInfo;