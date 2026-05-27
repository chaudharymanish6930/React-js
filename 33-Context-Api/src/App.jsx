import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme]=useState('light')
  
  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is my tag</h2>
        <h3>hello</h3>
      </Navbar>
    </div>
  )
}

export default App