import React from 'react'
import Card from './component/Card.jsx'
import Navbar from './component/navbar.jsx'

const App = () => {
  var name="Manish"
  const num=4573
  // return 
  // (<div>
  //   <h1>hi, I am {name} and Number {num}</h1>;
  //   card()
  //   </div>
  // )

  return (<div>
    <Card />
    <Navbar />
    <Card/>
    <Navbar/>
  </div>)

  // return (
  //   <div>
  //     <navbar
  //   </div>
  // )
}

export default App