import React from 'react'
import './index.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='Header'>
      <div className='Header__nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/Cart'>Cart</Link></li>
        </ul>
      </div>
      <div className='space'></div>
    </div>
  )
}

export default Header