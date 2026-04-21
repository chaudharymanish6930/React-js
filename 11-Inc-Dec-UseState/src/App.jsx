import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)
  function incre(){
    setNum(num+1);
  }
  function decr(){
    setNum(num-1);
  }
  function jump(){
    setNum(num+5);
  }
  function ReverseJUMP(){
    setNum(num-5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incre}>Increasing</button>
      <button onClick={decr}>Decreasing</button>
      <button onClick={jump}>JUMP by 5</button>
      <button onClick={ReverseJUMP}>ReverseJUMP by 5</button>
    </div>
  )
}

export default App