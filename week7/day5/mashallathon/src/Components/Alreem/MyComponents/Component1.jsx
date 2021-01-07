import style from './Component1.module.css'

function Component1() {
    return (
        <div>
        <img
            src="https://us04images.zoom.us/p/fIleZmGeT1u65e2WfOAJog/ebcd5a48-3699-427a-b80c-c9307926e201-7399?type=large"
            alt="Profile"
            className={ style.profile }
        />
        <p><b>Education</b>: Bachelor's in Computer Science </p>
        <p><b>Favorite language</b>: Python</p>
        <p><b>Hobbies</b>: Drawing, Watching Movies</p>
        </div>
    )
}

export default Component1
