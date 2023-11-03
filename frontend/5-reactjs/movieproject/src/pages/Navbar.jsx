import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
export default function Navbar() {

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/'> Home</NavLink></li>
          <li><NavLink to='/movies'> Movies</NavLink></li>

        </ul>
      </nav>
    </div>
  )
}

//NavLink (active state) vs Link?