import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './compnents/navbar'

const App = () => {
  return (
    <div>
      {/* <h1>Full the content</h1>  common for all the webpages    */}
      <h2>
        <h3>This is Common for all Pages</h3>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <br/>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </h2>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App  