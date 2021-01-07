import React, { useState } from 'react'
import './Abdullah.css'



function Abdullah() {
  const [name, setName] = useState("Abdullah AlThani ")
  const [about, setAbout] = useState("About me:")
  const [content, setContent] = useState(
    "Designer UI / UX, Mobile Developer, Web Developer"
  )

  return (
    <div className="Card2">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1552234816-0ea7b995a55c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Ym13JTIwbTV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className="lower-container2">
        <h3>{name}</h3>
        <h4>{about}</h4>
        <p>{content}</p>
        <button id="sparkley">More info</button>
      </div>
    </div>
  )
}

export default Abdullah