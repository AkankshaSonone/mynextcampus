import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import Contact from "../../contact/Contact"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <div className="header-menu">
      <Head />
      <header>
        <nav className='navbar flexSB'>
          <ul className={click ? "mobile-nav" : "ul-flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'  >All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            
            <li>
              <Link to='/contact' src={Contact}>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
