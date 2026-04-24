import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  // function random(){
  //   console.log("hello world");
  // }

  // function random(){
  //   const a = Math.random();
  //   console.log(a);
  // }
  // random();

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("use effect is runnning...")
  },[num2])  // num also added here
  return (
    <div>
      <h1>Value of num is: {num}</h1>
      <h1>Value of num is: {num2}</h1>

      {/* <button onClick={()=>{
        setNum(num+1)
      }}
      onDoubleClick={()=>{
        
        setNum2(num2+10)
      }}>
        Click
      </button> */}

      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        
        setNum2(num2+10)
      }}>
        Click
      </button>
    </div>
  )
}

export default App