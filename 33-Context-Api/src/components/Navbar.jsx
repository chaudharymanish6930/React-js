import React from 'react'
import Nav from './nav'

const Navbar = (props) => {
  // (children, theme)
  // console.log(props.children)

  return (
    <div className='nav'>
        <h2>Sheryians</h2>
        {props.children[0]}
        <Nav theme={props.theme}/>
    </div>
  )
}

export default Navbar