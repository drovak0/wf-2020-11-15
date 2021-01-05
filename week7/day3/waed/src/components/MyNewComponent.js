import React, { Component } from "react"

class MyNewComponent extends Component {
  render() {
    return (
      <>
        <h1>{this.props.header}</h1>
        {this.props.children}
      </>
    )
  }
}

export default MyNewComponent
