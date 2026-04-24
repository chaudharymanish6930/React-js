import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([])

  const getData= async () => {
    const data = await axios.get('https://picsum.photos/v2/list')
    setData(data.data);
  }

  return (
    <div>
      <button onClick={getData}> Get Data</button>
      <div>
        {data.map((data, index)=>{
          // return <h2>hello {index}</h2>;\
          return (
            <div key={index}>
              <img src="data.download_url" alt="image" width='200' />
              <p>{data.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App