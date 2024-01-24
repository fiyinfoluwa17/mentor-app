import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import './Navman.css'
const NavBar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="allall navbar-brand text-light" href="#">Blogr</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Overview</a></li>
            <li><a className="dropdown-item" href="#">Pricing</a></li>
            <li><a className="dropdown-item" href="#">Marketplace</a></li>
            <li><a className="dropdown-item" href="#">Features</a></li>
            <li><a className="dropdown-item" href="#">Integrations</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Team</a></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">Careers</a></li>
            
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Connect
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Contact</a></li>
            <li><a className="dropdown-item" href="#">Newsletter</a></li>
            <li><a className="dropdown-item" href="#">Linkedin</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="user">
    <a href="/login" className="login">Login</a>

    <a href="/signup" className="signup"> Sign Up</a>

    </div>

  </div>
</nav>





    </>
  )
}

export default NavBar;