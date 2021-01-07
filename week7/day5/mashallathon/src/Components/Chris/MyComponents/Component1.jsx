import style from './Component1.module.css'

function Component1() {
  return (
    <div>
      <h2>Waed!</h2>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F06%2FOne-Punch-Man-feature.jpg&f=1&nofb=1"
        alt="Profile"
        className={ style.profile }
      />
      <p><b>Education</b>: School</p>
      <p><b>Work Experience</b>: Here and there</p>
      <p><b>Favorite language</b>: TypeScript</p>
      <p><b>Hobbies</b>: Drones, Coding, Nature</p>
      <p><b>Unique</b>: I have 16 uncle and aunts on 1 side of the family.</p>
    </div>
  )
}

export default Component1