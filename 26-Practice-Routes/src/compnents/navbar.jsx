import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav>
            <a href="/">home</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact </a>
        </nav>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default navbar