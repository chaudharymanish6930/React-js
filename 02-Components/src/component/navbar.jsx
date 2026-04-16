import React from 'react'
import './Card.css'

const navbar = () => {
  return (
    <div >
        <div className="card">
      <img src="https://picsum.photos/300/200" alt="card" />

      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-text">
          This is a simple React card component using CSS styling.
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
    </div>
  )
}

export default navbar