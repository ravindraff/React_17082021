import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-dark">
      <h1>
        <a href="dashboard.html"> <i class="fas fa-code"></i> DevConnector </a>
      </h1>
      <ul>
        <li><Link to="/">Developers</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/claculator">Calculator</Link></li>
        <li><Link to="/covid">Covid Updates</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/lifecycles">Life Cycles</Link></li>
        <li><Link to="/login">Login</Link></li>
       
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
