import './Navbar.css'
import NavMenu from '../components/NavMenu/NavMenu'
import Hamburger from '../components/Hamburger/Hamburger'
import { useState } from 'react'

function Navbar() {

  return (
    <nav id='navbar'>
      <div className="container">
        <h1>Logo</h1>

        <Hamburger name="Hamburger"/>
        
      </div>
    </nav>
  )
}

export default Navbar
