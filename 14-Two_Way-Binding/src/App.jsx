import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, settitle] = useState("Manish")
  const SubmitHandler1 =(elem)=>{
    elem.preventDefault();
    console.log("Form submitted", title)

    settitle("")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        SubmitHandler1(elem)
      }} >
        <input 
        type="text"  
        value={title}
        placeholder='Enter Your Name' 
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App