import React from 'react'
import Nav from './nav'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <h2>Sheryians</h2>
        <Nav theme={props.theme}/>
    </div>
  )
}

export default Navbar