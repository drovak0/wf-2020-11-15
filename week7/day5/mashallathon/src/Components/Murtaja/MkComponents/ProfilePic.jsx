import style from "../MurtajaCard.module.css"

const ProfilePic = () => {
    return (
        <div>
            <h1>Leon Kennedy</h1>
        <img
        className={style.profilePic}
        src="https://www.evilresource.com/images/data/full/re4/leon-s-kennedy.png"
        alt="leon"
        />
        </div>)
}

export default ProfilePic