import React from 'react'
import { useNavigate } from 'react-router-dom'

const about = () => {

  const navigateate =useNavigate()

  const buttonClicked=()=>{
    // console.log("Button Clicked");
    navigateate('/');
  }
  return (
    <div>
      <button onClick={buttonClicked} className='bg-green-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>REturn to Home page</button>
      <button onClick={()=>{
        navigateate(-1)
      }}>
        Back
      </button>
        <h1>About Page</h1>
    </div>
  )
}

export default about