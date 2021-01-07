import React, { useState } from 'react'
import './Susie.css'



function Susie() {
  const [name, setName] = useState("SARAH ALGHOFAILI")
  const [about, setAbout] = useState("About me:")
  const [content, setContent] = useState(
    "I'm fresh graduate CS, Computers have held a life-long fascination for me. What started as an interest in just using them developed into a growing desire to understand how a collection of simple ideas and components can interact to produce an entity as complex and adaptable as a computer."
  )

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170815448/84670439-woman-using-computer-icon-image-vector-illustration-design-pink-color.jpg"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{about}</h4>
        <p>{content}</p>
        <button>More info</button>
      </div>
    </div>
  )
}

export default Susie