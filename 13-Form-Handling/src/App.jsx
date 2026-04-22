import React from 'react'

const App = () => {
  const SubmitHandler =()=>{
    console.log("Form submitted")
  }

  const SubmitHandler1 =(elem)=>{
    elem.preventDefault();
    console.log("Form submitted")
  }
  return (
    <div>
      <form onSubmit={SubmitHandler} >
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>

      <form onSubmit={(elem)=>{
        SubmitHandler1(elem)
      }} >
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App