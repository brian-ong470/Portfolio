import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <ul className="nav__menu">
          <li><Link to="" >Home Page</Link></li>
          <li><Link to="/profile" >Profile</Link></li>
          <li><Link to="/projects" >Project</Link></li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
    
  )
}

export default Header
