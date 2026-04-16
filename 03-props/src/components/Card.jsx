import React from 'react'

const Card = (props) => {
  return (
    <div >
      <div className="card">
        <img src={props.img} alt="card" />
        <h1>{props.user}{props.age}</h1>
        <h3>{props.age}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          doloremque.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card