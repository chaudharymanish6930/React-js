import React from 'react'

const App = () => {
  localStorage.clear();
  sessionStorage.clear();

  localStorage.setItem("name","Manish")
  localStorage.setItem("age",'228')

  console.log(localStorage.getItem('name'),localStorage.getItem('age'));
  // we can store the values in the seprated variables

  localStorage.removeItem('age');
  localStorage.removeItem('name')

  const user={
    userName:"Rohit",
    age:19,
    city:"Greater Noida"
  }
  localStorage.setItem('user',user) // it set but in [object Object] form
  // local storage store the only string form 
  localStorage.setItem('user2',JSON.stringify(user)) 

  const user1=localStorage.getItem('user2')
  console.log(typeof user1)  // string

  const user3=JSON.parse(localStorage.getItem('user2'))
  console.log(user3)
  return (
    <div>
      App
    </div>
  )
}

export default App