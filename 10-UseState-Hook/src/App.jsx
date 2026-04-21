import React, { useState } from 'react'

const App = () => {
  
  // const [num, setNum] = useState("sarthak")
  const [num, setNum] = useState(20)
  const [userName, setuserName] = useState("Manish")
  const [userArray, setUserArray] = useState([10,20,30])
  function ChangeNum(){
    // setNum(30);
    setNum(num+1);
    setuserName("Aman")
    setUserArray([40,50,60]);
  }

  return (
    <div>
      <h1>Value of num is '{num}' <br /> name {userName}  <br />A~rray {userArray}</h1>
      <button onClick={ChangeNum}>click</button>
    </div>
  )
}

export default App