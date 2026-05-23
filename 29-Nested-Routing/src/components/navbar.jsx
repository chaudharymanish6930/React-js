import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold'>RoarFits</h2>
        <div className='flex gap-5'>
            {/* <a className='text-lg font-bold' href="/">Home</a>
            <a className='text-lg font-bold' href="/about">About</a>
            <a className='text-lg font-bold' href="/contact">Contact</a>
            <a className='text-lg font-bold' href="/product">Product</a> */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default navbar