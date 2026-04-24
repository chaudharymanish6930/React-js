import React from 'react'
import axios from 'axios';

const App = () => {

  const getData= async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response)
    // const {response} = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response)

    const data = await axios.get('https://picsum.photos/v2/list')
    console.log(data.data)
  }
  return (
    <div>
      <button onClick={getData}> Get Data</button>
    </div>
  )
}

export default App