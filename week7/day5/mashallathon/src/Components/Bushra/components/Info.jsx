import style from "../Bushra.module.css";

const Info = () => {
    return (
        <div>
            <h1>Bushra</h1>
        <img
        className={style.profilePic}
        src="https://ih1.redbubble.net/image.743696605.7820/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
        alt="Profile"
        className={ style.profile }
        />
        <div className={style.Info}>
            <h4>Information</h4>
            <p><span>Education:</span>Bachelor's in Computer Science</p>
            <p><span>Favorite Language:</span> Python</p>
            <p><span>Hobbies:</span> Nature photography</p>
        </div></div>
    )
}

export default Info;