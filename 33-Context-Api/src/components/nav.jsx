import React from 'react'

const nav = (props) => {
  return (
    <div className='nav2'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Services</h2>
        {/* {props.theme} */}
        <h2>{props.theme}</h2>
    </div>
  )
}

export default nav