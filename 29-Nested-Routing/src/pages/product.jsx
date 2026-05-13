import React from 'react'
import {Link} from 'react-router-dom'

const product = () => {
  return (
    <div>
      <div >
        <Link  to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        {/* <h1>Product</h1> */}
        </div>
        <Outlet/>
    </div>
  )
}

export default product