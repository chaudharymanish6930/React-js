import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState('');
  const [arr, setarr] = useState([]);

  const submit=(e)=>{
    e.preventDefault();
    console.log(first);
    console.log(second)

    const copy=[...arr];
    copy.push({first, second})

    setarr(copy)

    setfirst('')
    setsecond("")
  }


  const deleteNote = (idx) => {
    const copyTask = [...arr];

    copyTask.splice(idx, 1)

    setarr(copyTask)
  }


  return (
    <div>
      <form 
      onSubmit={(e)=>{
        submit(e)
      }}>
      <h1>Add Notes</h1>
      <input type="text" 
      placeholder='likhoo'
      onChange={(e)=>{
        setfirst(e.target.value);
        // console.log(e.target.value)
      }}
       />

      <input type="text"
      placeholder='dubara llikho'
      onChange={(e)=>{
        setsecond(e.target.value);
        // console.log(e.target.value)
      }}
       />
      
      <button
      className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>
        Add note
      </button>

      </form>

      {arr.map(function (elem, idx) {
            return <div >
              <div>
                <h3 >{elem.first}</h3>
                <p >{elem.second}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} >Delete</button>
            </div>
          })}

      </div>
  )
}

export default App