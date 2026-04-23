import React from 'react'

const App = () => {

  // function getData(){
  //   const response =fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  const getData= async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(response.json());
    const data= await response.json();
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}> Get Data</button>
    </div>
  )
}

export default App