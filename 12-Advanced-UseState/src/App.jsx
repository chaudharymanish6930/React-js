import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  const btnClicked =()=>{
    console.log(num)
    setNum(num+5)
  }

  const [first, setfirst] = useState({Name:"Manish", age:20, section:"AIML"})
  function ChangeObject1(){
    setfirst(first.Name="Rohit");
  }
  function ChangeObject(){
    const newNum={...first};
    newNum.Name="Aman";
    newNum.age=32;
    newNum.section="IoT"
    setfirst(newNum)
  }

  const [sum, setsum] = useState([10,20,30])
  const btn=()=>{
    const newSum=[...sum]
    newSum.push(99);
    setsum(newSum)
  }

  const [fir, setfir] = useState({Name:"Manish", age:20, section:"AIML"})
  function ChangeObject2(){
    setfir(prev=>({...prev,age:60}));
  }

  const [num1, setnum1] = useState(0)
  const btnClicked1 =()=>{
    setnum1(prev => (prev+1))
    setnum1(prev => (prev+1))
    setnum1(prev => (prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <h2>{first.Name} {first.age} {first.section}</h2>
      <button onClick={btnClicked}>Clicked</button>
      <button onClick={ChangeObject}>Clicked</button>
      <h1>{sum}</h1>
      <button onClick={btn}>Clicked</button>
      <h1>{fir.Name} {fir.age} {fir.section}</h1>
      <button onClick={ChangeObject2}>Clicked</button>
      <h1>{num1}</h1>
      <button onClick={btnClicked1}>Clicked</button>
    </div>
  )
}

export default App