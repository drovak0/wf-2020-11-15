import style from './Component1.module.css'

function Component1() {
  return (
    <div>
      <h2>Hello there </h2>
      <img
        src="https://cnet3.cbsistatic.com/img/J6WsvoDsr_5GZUfX6uYkbgRnl4U=/2019/03/04/3055d4ad-ad09-4924-9132-eb790c0633af/jonsnowonthronegot.jpg"
        alt="Profile"
        className={ style.profile }
      />
      <p><b>I am an engineer</b></p>
      <p><b>Favorite language</b>: PHP</p>
      <p><b>Birthday</b>: 5 of May </p>
    </div>
  )
}

export default Component1
