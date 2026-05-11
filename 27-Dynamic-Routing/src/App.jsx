import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about';
import Contact from './pages/contact'
import {Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App