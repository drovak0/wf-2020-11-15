import style from "../Monica.module.css"

const ProfilePic = () => {
    return (
        <div>
            <h1>MONICA IS HERE</h1>
        <img
          className={style.profilePic}
          src="https://paintingvalley.com/drawings/short-hair-girl-drawing-36.jpg"
          alt="monica"
        />
        </div>)
}

export default ProfilePic