import React from 'react'
export default function Navbar() {
  return (
    <nav>
      <h1> Furnishop</h1>
      <div>
        <ul>
          <a to='/'>Home</a>
          <a to='/about'>About</a>
          <a to='/contact'>Contact</a>
          <a to='/cart'><i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart</a>
          <a to='/login'>Login</a>
        </ul>
      </div>

    </nav>
  )
}
