import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Pages from './pages/Pages'
import { Link } from 'react-router-dom'
import './Navigate.css'

const Navigate = () => {
  return (
    <div>
        <nav className='navbars'>
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"pages"}>pages</Link>
        </nav>
    </div>
  )
}

export default Navigate