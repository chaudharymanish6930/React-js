import React from 'react'
import Nav from './nav'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
  // (children, theme)
  // console.log(props.children)

  const data =useContext(ThemeDataContext)
  // console.log(data)
  return (
    <div className='nav'>
        <h2>{data}</h2>
        {props.children[0]}
        <Nav theme={props.theme}/>
    </div>
  )
}

export default Navbar