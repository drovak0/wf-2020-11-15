import React, { Component } from "react"
import styles from "./LightSwitch.module.css"

class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "On",
    }
  }

  componentDidMount(){
    console.log('Component mounted successfully!')
  }

  render() {
    const flip = () => {
      if (this.state.position === "On") {
        this.setState({ position: "Off" })
      } else {
        this.setState({ position: "On" })
      }
    }

    return (
      <fieldset>
        <p>The light is currently {this.state.position}</p>
        <button onClick={flip} className={styles.btn}>
          Flip Switch
        </button>
      </fieldset>
    )
  }
}

export default LightSwitch
