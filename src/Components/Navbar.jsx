import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
      <img className='h-img' src="https://as1.ftcdn.net/v2/jpg/01/57/21/50/1000_F_157215014_cQxq9g3LACTg0rWxo3ZQW4tEfn6f4llW.jpg" alt="" />
      <ul>
        <li>
        <NavLink className='NavLink' to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink className='NavLink' to={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink className='NavLink' to={'/project'}>Project</NavLink>
        </li>
        <li>
          <NavLink className='NavLink' to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
