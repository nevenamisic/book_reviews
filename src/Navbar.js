import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <h1>Welcome To BookShelf</h1>
        <div className="links">
            <Link to ='/'>Home</Link>
            <Link to='/create'>Write New Review</Link>
        </div>
    </nav>
    
  </>
  )
}

export default Navbar