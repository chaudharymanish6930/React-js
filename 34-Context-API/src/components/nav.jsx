import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const nav = (props) => {
  const data2=useContext(ThemeDataContext)
  return (
    <div className='nav2'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>{data2}</h2>

        {/* {props.theme} */}
        <h2>{props.theme}</h2>
    </div>
  )
}

export default nav